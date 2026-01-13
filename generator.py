from reportlab.lib.pagesizes import A4
from reportlab.pdfgen import canvas
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
import os
from datetime import datetime

def generate_pdf(file_path, data: dict):
    start_date = datetime.strptime(data['vacation-start'], '%Y-%m-%d')
    end_date = datetime.strptime(data['vacation-end'], '%Y-%m-%d')
    
    diff = (end_date - start_date).days + 1
    
    data = {
        'to_title': 'Генеральному директору',
        'company': 'ООО "Завод"',
        'recipient_name': 'Гришиной Ульяне Вячеславовне',
        'sender_position': data.get('position'),
        'sender_name': data.get('lastName') + ' ' + data.get('name') + ' ' + data.get('patronymic'),
        'body': f'Прошу предоставить мне отпуск с {data.get("vacation-start")} года продолжительностью \n {diff} дней.',
        'signature_name': data.get('lastName'),
        'date': datetime.now().strftime('%d.%m.%Y')
    }
    font_path = os.path.join("fonts", "DejaVuSans.ttf")
    pdfmetrics.registerFont(TTFont("DejaVu", font_path))

    c = canvas.Canvas(file_path, pagesize=A4)
    width, height = A4

    y = height - 50
    c.setFont("DejaVu", 12)
    c.drawString(50, y, data['to_title'])
    y -= 18
    c.drawString(50, y, data['company'])
    y -= 18
    c.drawString(50, y, data['recipient_name'])
    y -= 18
    c.drawString(50, y, f"от {data['sender_position']} {data['sender_name']}")
    y -= 40

    c.setFont("DejaVu", 16)
    c.drawCentredString(width / 2, y, "ЗАЯВЛЕНИЕ")
    y -= 40

    c.setFont("DejaVu", 12)
    lines = data['body'].split('\n')
    for line in lines:
        c.drawString(50, y, line)
        y -= 18

    y -= 40
    c.drawString(50, y, f"{data['date']} г.")
    c.drawString(width - 200, y, f"________________ / {data['signature_name']}")

    c.save()

def generate_car_contract(file_path, data: dict):
    font_path = os.path.join("fonts", "DejaVuSans.ttf")
    pdfmetrics.registerFont(TTFont("DejaVu", font_path))
    c = canvas.Canvas(file_path, pagesize=A4)
    width, height = A4
    y = height - 50
    line_step = 18

    c.setFont("DejaVu", 12)
    c.drawCentredString(width / 2, y, "ДОГОВОР")
    y -= line_step
    c.drawCentredString(width / 2, y, "купли-продажи автомобиля")
    y -= 40

    contract_date = datetime.strptime(data['contract-date'], "%Y-%m-%d").strftime("%d.%m.%Y")
    c.drawString(50, y, f"г. {data['contract-city']}                               «___» ________ 20__ г.")
    y -= 40

    c.setFont("DejaVu", 11)
    c.drawString(50, y, f"{data['seller-fio']} ('Продавец'), от имени которого действует {data['seller-agent-fio']},")
    y -= line_step
    c.drawString(50, y, f"паспорт: серия {data['seller-pass-series']} №{data['seller-pass-number']}, выдан {data['seller-pass-issued-by']}")
    y -= line_step
    c.drawString(50, y, f"{data['seller-pass-issued-date']} года, на основании доверенности нотариусом {data['seller-poa-notary-fio']}")
    y -= line_step
    c.drawString(50, y, f"«{datetime.strptime(data['seller-poa-date'], '%Y-%m-%d').strftime('%d.%m.%Y')}» г., с одной стороны, и")
    y -= 30

    c.drawString(50, y, f"{data['buyer-fio']} ('Покупатель'), от имени которого действует {data['buyer-agent-fio']},")
    y -= line_step
    c.drawString(50, y, f"паспорт: серия {data['buyer-pass-series']} №{data['buyer-pass-number']}, выдан {data['buyer-pass-issued-by']}")
    y -= line_step
    c.drawString(50, y, f"{data['buyer-pass-issued-date']} года, на основании доверенности, удостоверенной {data['buyer-poa-notary-fio']}")
    y -= line_step
    c.drawString(50, y, f"«{datetime.strptime(data['buyer-poa-date'], '%Y-%m-%d').strftime('%d.%m.%Y')}» г., с другой стороны, заключили настоящий договор о нижеследующем:")
    y -= 40

    c.drawString(50, y, f"1. Продавец передает Покупателю автомобиль {data['car-brand']} {data['car-model']} {data['car-year']} г,")
    y -= line_step
    c.drawString(50, y, f"цвет {data['car-color']}, (VIN) {data['car-vin']}, кузов № {data['car-body-number']}, двигатель № {data['car-engine-number']}.")
    y -= 30

    c.drawString(50, y, f"2. Правоустанавливающий документ: свидетельство о регистрации ТС № {data['car-sts-number']}.")
    y -= 30

    c.drawString(50, y, f"3. Цена автомобиля составляет {data['car-price']} рублей. Оплата производится {data['payment-date']}.")
    y -= 30

    c.drawString(50, y, f"4. Настоящий договор составлен в двух экземплярах, имеющих одинаковую силу.")
    y -= 30

    c.drawString(50, y, "Подписи сторон:")
    y -= line_step
    c.drawString(50, y, f"Продавец: __________________ / {data['seller-fio']}/")
    y -= 20
    c.drawString(50, y, f"Покупатель: ________________ / {data['buyer-fio']}/")

    c.save()

from pdf2docx import Converter

def convert_pdf_to_docx(pdf_file, docx_file):
    cv = Converter(pdf_file)
    cv.convert(docx_file, start=0, end=None)
    cv.close()


def generate_resume_pdf(file_path: str, data: dict):
    font_path = os.path.join("fonts", "DejaVuSans.ttf")
    pdfmetrics.registerFont(TTFont("DejaVu", font_path))

    c = canvas.Canvas(file_path, pagesize=A4)
    width, height = A4

    margin_x = 50
    y = height - 50
    line_step = 16

    # === HEADER ===
    c.setFont("DejaVu", 18)
    full_name = f"{data.get('lastName')} {data.get('name')} {data.get('patronymic')}"
    c.drawString(margin_x, y, full_name)

    y -= 28
    c.setFont("DejaVu", 13)
    c.drawString(margin_x, y, f"Желаемая должность: {data.get('position', '')}")

    y -= 35

    # === CONTACTS ===
    c.setFont("DejaVu", 11)
    c.drawString(margin_x, y, f"Телефон: {data.get('phone', '')}")
    y -= line_step
    c.drawString(margin_x, y, f"Email: {data.get('email', '')}")

    y -= 25

    # === PERSONAL INFO ===
    c.setFont("DejaVu", 12)
    c.drawString(margin_x, y, "Общая информация")
    y -= 20
    c.setFont("DejaVu", 11)

    info_rows = [
        ("Город", data.get("city")),
        ("Гражданство", data.get("citizenship")),
        ("Готовность к переезду", "Да" if data.get("removal") == "possible" else data.get("removal")),
        ("Дата рождения", data.get("birth-date")),
        ("Семейное положение", data.get("family-status")),
        ("Пол", data.get("gender")),
        ("Тип занятости", data.get("employment-type")),
        ("График работы", data.get("work-schedule")),
        ("Желаемая зарплата", f"{data.get('salary', '')} {data.get('currency', '')}")
    ]

    for label, value in info_rows:
        if value:
            c.drawString(margin_x, y, f"{label}: {value}")
            y -= line_step

    y -= 20

    # === EDUCATION ===
    c.setFont("DejaVu", 12)
    c.drawString(margin_x, y, "Образование")
    y -= 20
    c.setFont("DejaVu", 11)

    for edu in data.get("education", []):
        c.drawString(margin_x, y, edu.get("institution-name", ""))
        y -= line_step
        c.drawString(
            margin_x,
            y,
            f"{edu.get('faculty', '')}, {edu.get('specialty', '')}"
        )
        y -= line_step
        c.drawString(
            margin_x,
            y,
            f"{edu.get('start-year')} – {edu.get('end-year')} ({edu.get('education-form')})"
        )
        y -= line_step

        if edu.get("education-achievements"):
            c.drawString(margin_x, y, f"Достижения: {edu.get('education-achievements')}")
            y -= line_step

        y -= 10

    # === FOOTER ===
    y = 40
    c.setFont("DejaVu", 9)
    c.drawString(
        margin_x,
        y,
        f"Резюме сформировано {datetime.now().strftime('%d.%m.%Y')}"
    )

    c.save()