from datetime import datetime
from fileinput import filename
import os
from flask import Flask, jsonify, render_template, send_file, session  
from flask import request 
from generator import convert_pdf_to_docx, generate_car_contract, generate_pdf, generate_resume_pdf
from db import create_database_if_not_exists, create_user, create_users_table, verify_user_credentials_plain
from data import resumeTemplates, resumeConfig, myDocs, myPayments, values, statementConfig, statementValues, contractSchema, contractValues 

app = Flask(__name__)  
app.secret_key = os.urandom(24)

@app.route("/")
@app.route("/index")
def home():
    return render_template("index.html")  

@app.route("/profile")
def profile():
    if session.get('user') is None:
        return render_template("error_page.html") 
    
    #Данные берутся откуда-то
    return render_template("profile.html", payments=myPayments, userDocs=myDocs) 

@app.route("/documents")
def documents():
    return render_template("documents.html", resumeTemplates = resumeTemplates )  

@app.route("/download")
def download():
    fileId = request.args.get('fileId', 'example')
    pdfLink = f'static/res/{fileId}.pdf'
    return render_template("download.html", pdfLink = pdfLink, fileId = fileId ) 

@app.route("/registration", methods=['post', 'get'])
def registration():
    print(request.method)
    return render_template("registration.html") 

@app.errorhandler(404)
def page_not_found(e):
    return render_template("error_page.html") 

@app.route('/constructor/resume/<id>' ) 
def resumeConstructor(id):
    # По id выбирается шаблон резюме
    return render_template("constructor.html", constructorConfig=resumeConfig, values=values) 

@app.route('/constructor/by-sell/', defaults={'id': '1'})
@app.route('/constructor/by-sell/<id>')
def bySellConstructor(id):
    return render_template(
        "bysell.html",
        constructorConfig=contractSchema,
        values=contractValues
    )

@app.route('/constructor/statement/', defaults={'id': '1'})
@app.route('/constructor/statement/<id>')
def statementConstructor(id):
    return render_template(
        "statement_constructor.html",
        constructorConfig=statementConfig,
        values=statementValues
    )


@app.route('/register', methods=['POST'])
def register():
    try:
        data = request.get_json()
        
        if not data:
            return jsonify({
                'success': False,
                'error': 'Нет данных для обработки'
            }), 400

        user_id = create_user(
            data['fullName'],
            data['email'],
            data.get('phone'),
            data['login'],
            data['password'],
        )

        session['user'] = {
            'id': user_id,
            'login': data['login'],
            'email': data['email'],
            'name': data['fullName'],
            'dateRegistration': datetime.now()
        }

        return jsonify({
            'success': True,
            'message': 'Регистрация прошла успешно',
        }), 200
            
    except Exception as e:
        print(e)
        app.logger.error(f'Ошибка при регистрации: {str(e)}')
        return jsonify({
            'success': False,
            'error': 'Внутренняя ошибка сервера'
        }), 500

import json
import uuid

@app.route('/generate', methods=['POST'])
def generate():
    try:
        data = request.get_json()
        if not data:
            return jsonify({'success': False, 'error': 'Нет данных для обработки'}), 400

        form_data = json.loads(data.get('data', '{}'))
        doc_type = data.get('docType', 'vacation') 

        file_id = str(uuid.uuid4())
        file_path = f'static/res/{file_id}.pdf'

        if doc_type == 'vacation':
            generate_pdf(file_path, form_data)
        elif doc_type == 'car_contract':
            generate_car_contract(file_path, form_data)
        elif doc_type == "resume":
            generate_resume_pdf(file_path, form_data)
        else:
            return jsonify({'success': False, 'error': 'Неизвестный тип документа'}), 400

        return jsonify({
            'success': True,
            'message': 'Генерация прошла успешно',
            'fileId': file_id
        }), 200

    except Exception as e:
        app.logger.error(f'Ошибка при генерации PDF: {str(e)}')
        return jsonify({'success': False, 'error': 'Внутренняя ошибка сервера'}), 500


@app.route('/login', methods=['POST'])
def login():
    try:
        data = request.get_json()
        if not data:
            return jsonify({'success': False, 'error': 'Нет данных'}), 400

        login_value = data.get('login', '').strip()
        password = data.get('password', '').strip()

        if not login_value or not password:
            return jsonify({'success': False, 'error': 'Заполните все поля'}), 400

        user = verify_user_credentials_plain(login_value, password)

        if not user:
            return jsonify({'success': False, 'error': 'Неверный логин или пароль'}), 401

        session['user'] = {
            'id': user['id'],
            'login': user['login'],
            'email': user['email'],
            'name': user['full_name'],
            'dateRegistration': user['date_registration']
        }

        return jsonify({'success': True, 'message': 'Авторизация успешна'}), 200

    except Exception as e:
        app.logger.error(f'Ошибка при авторизации: {str(e)}')
        return jsonify({'success': False, 'error': 'Внутренняя ошибка сервера'}), 500
    

from flask import send_from_directory

@app.route('/file/<file_id>', methods=['GET'])
def download_file(file_id):
    file_type = request.args.get('type', 'pdf')
    directory = os.path.join(app.root_path, 'static', 'res')
    filename = f"{file_id}.pdf"

    print(file_type)
    if file_type == 'docx':
        convert_pdf_to_docx(os.path.join(directory, filename), os.path.join(directory, "Document.docx"))
        filename = 'Document.docx'

    if not os.path.exists(os.path.join(directory, filename)):
        os.abort(404, description="File not found")

    return send_from_directory(directory, filename, as_attachment=True)




@app.route('/logout', methods=['POST'])
def logout():
    try:    
        session['user'] = None
        
        return jsonify({
            'success': True,
            'message': 'Выход прошёл успешно'
        }), 200

            
    except Exception as e:
        app.logger.error(f'Ошибка при выходе: {str(e)}')
        return jsonify({
            'success': False,
            'error': 'Внутренняя ошибка сервера'
        }), 500


if __name__ == "__main__":
    create_database_if_not_exists()
    create_users_table()
    app.run(debug=True) 