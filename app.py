import os
from flask import Flask, jsonify, render_template, session  
from flask import request 
from data import resumeTemplates, resumeConfig, myDocs, myPayments, values;  

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
    #Готовый файл для предварительного просмотра
    pdfLink = 'static/res/example.pdf'
    return render_template("download.html", pdfLink = pdfLink, fileId = '1' ) 

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

@app.route('/generate', methods=['POST'])
def generate():
    try:
        data = request.get_json()
        
        if not data:
            return jsonify({
                'success': False,
                'error': 'Нет данных для обработки'
            }), 400
            
        # Заглушка 
        # Здесь какая-то логика

        return jsonify({
            'success': True,
            'message': 'Генерация прошла успешно',
        }), 200
        

            
    except Exception as e:
        app.logger.error(f'Ошибка при авторизации: {str(e)}')
        return jsonify({
            'success': False,
            'error': 'Внутренняя ошибка сервера'
        }), 500

@app.route('/login', methods=['POST'])
def login():
    try:
        data = request.get_json()
        
        if not data:
            return jsonify({
                'success': False,
                'error': 'Нет данных для обработки'
            }), 400
        
        login = data.get('login', '').strip()
        password = data.get('password', '').strip()
        
        session['user'] = {
            'name': 'Player',
            'id' : 1,
            'status': 'free',
            'email': 'example@gmail.com',
            'login': 'login',
            'dateRegistration' : '22.02.2002',
            'amountAttemps' : 5
        }
        
        # Заглушка 
        # Здесь какая-то логика
        if login == "admin" and password == "123":
            return jsonify({
                'success': True,
                'message': 'Авторизация успешна'
            }), 200
        else:
            return jsonify({
                'success': False,
                'error': 'Неверный логин или пароль'
            }), 401
            
    except Exception as e:
        app.logger.error(f'Ошибка при авторизации: {str(e)}')
        return jsonify({
            'success': False,
            'error': 'Внутренняя ошибка сервера'
        }), 500
    

@app.route('/file', methods=['POST', 'DELETE'])
def file():
    data = request.get_json()

    #что-то происходит

    match request.method:
        case 'POST':
            type = data.get('type', '').strip() #pdf, doc
            fileId = data.get('id', '').strip()
            print('download  '+ fileId )

        case 'DELETE':
            fileId = data.get('id', '').strip()
            print('delete '+ fileId )



    return jsonify({
            'success': True,
        }), 200



@app.route('/logout', methods=['POST'])
def logout():
    try:    

        # Заглушка 
        # Здесь какая-то логика

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
    app.run(debug=True) 