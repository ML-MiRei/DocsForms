import datetime


resumeTemplates = [
    {
        'id': '1',
        'imgLink' : 'static/images/resume_templates/1.svg'
    },
    {
        'id': '2',
        'imgLink' : 'static/images/resume_templates/2.svg'
    },
    {
        'id': '5',
        'imgLink' : 'static/images/resume_templates/5.svg'
    },
    {
        'id': '6',
        'imgLink' : 'static/images/resume_templates/6.svg'
    },
    {
        'id': '8',
        'imgLink' : 'static/images/resume_templates/8.svg'
    },
    {
        'id': '9',
        'imgLink' : 'static/images/resume_templates/9.svg'
    },
    {
        'id': '10',
        'imgLink' : 'static/images/resume_templates/10.svg'
    },
]

values = [
    {
        'type': 'field',
        'id': 'lastName',
        'value': 'Иванов'
    },
    {
        'type': 'field',
        'id': 'lastName',
        'value': 'Иванов'
    },
    {
        'type': 'field',
        'id': 'patronymic',
        'value': 'Иванович'
    },
    {
        'type': 'field',
        'id': 'name',
        'value': 'Иван'
    },
    # {
    #     'type': 'field',
    #     'id': 'picture',
    #     'value': 'link'
    # },
    {
        'type': 'field',
        'id': 'city',
        'value': 'Москва'
    },
    {
        'type': 'field',
        'id': 'citizenship',
        'value': 'РФ'
    },
    {
        'type': 'field',
        'id': 'removal',
        'value': 'possible'
    },
    {
        'type': 'form',
        'id': 'education',
        'value': [
            {
                "id": "institution-name",
                "value": 'РГУ Косыгина'
            },
            {
                "id": "faculty",
                "value": 'Когтевран'
            },
            {
                "id": "specialty",
                "value": 'Зельеварение'
            },
            {
                "id": "start-year",
                "value": '2020'
            },
            {
                'id': "end-year",
                "value": '2027'
            },
            {
                'id': "education-form",
                "value": 'full-time'
            },
            {
                "id": "education-achievements",
                "value": "достижения"
            }
        ]
    },
]



resumeConfig = [
    {
        "id": "general-info",
        "title": "Общая информация",
        "fieldGroups": [
            {
                "type": "grid",
                "fields": [
                    {
                        "id": "lastName",
                        "label": "Фамилия (обязательно)",
                        "placeholder": "Иванов",
                        "type": "text",
                        "required": True
                    },
                    {
                        "id": "patronymic",
                        "label": "Отчество",
                        "placeholder": "Иванович",
                        "type": "text",
                        "required": False
                    }
                ]
            },
            {
                "type": "grid",
                "fields": [
                    {
                        "id": "name",
                        "label": "Имя (обязательно)",
                        "placeholder": "Иван",
                        "type": "text",
                        "required": True
                    },
                    {
                        "id": "picture",
                        "type": "picture",
                        "required": True
                    }
                ]
            }
        ]
    },
    {
        "id": "private-info",
        "title": "Личная информация",
        "fieldGroups": [
            {
                "type": "grid",
                "fields": [
                    {
                        "id": "city",
                        "label": "Город проживания (обязательно)",
                        "placeholder": "Название города",
                        "type": "text",
                        "required": True
                    },
                    {
                        "id": "citizenship",
                        "label": "Гражданство (обязательно)",
                        "placeholder": "Российская Федерация",
                        "type": "text",
                        "required": True
                    }
                ]
            },
            {
                "type": "grid",
                "fields": [
                    {
                        "id": "removal",
                        "label": "Переезд",
                        "type": "select",
                        "options": [
                            {"value": "impossible", "text": "Переезд невозможен"},
                            {"value": "possible", "text": "Переезд возможен"},
                            {"value": "unwanted", "text": "Переезд нежелателен"},
                            {"value": "desired", "text": "Переезд желателен"}
                        ],
                        "required": False
                    },
                    {
                        "id": "birth-date",
                        "label": "Дата рождения",
                        "placeholder": "ДД.ММ.ГГГГ",
                        "type": "date",
                        "required": False
                    }
                ]
            },
            {
                "type": "grid",
                "fields": [
                    {
                        "id": "family-status",
                        "label": "Семейное положение",
                        "type": "select",
                        "options": [
                            {"value": "", "text": "Не указано"},
                            {"value": "single", "text": "Холост / Не замужем"},
                            {"value": "married", "text": "Женат / Замужем"},
                            {"value": "divorced", "text": "Разведен(а)"}
                        ],
                        "required": False
                    },
                    {
                        "id": "gender",
                        "label": "Пол",
                        "type": "select",
                        "options": [
                            {"value": "", "text": "Выберите пол"},
                            {"value": "male", "text": "Мужской"},
                            {"value": "female", "text": "Женский"}
                        ],
                        "required": False
                    }
                ]
            }
        ]
    },
    {
        "id": "contact-info",
        "title": "Контактная информация",
        "fieldGroups": [
            {
                "type": "grid",
                "fields": [
                    {
                        "id": "phone",
                        "label": "Номер телефона (обязательно)",
                        "placeholder": "+7 123 456 78 90",
                        "type": "tel",
                        "required": True
                    },
                    {
                        "id": "email",
                        "label": "Электронная почта (обязательно)",
                        "placeholder": "email@pochta-site.ru",
                        "type": "email",
                        "required": True
                    }
                ]
            }
        ]
    },
    {
        "id": "position-info",
        "title": "Информация о должности",
        "fieldGroups": [
            {
                "type": "flex",
                "fields": [
                    {
                        "id": "position",
                        "label": "Должность",
                        "placeholder": "Введите должность",
                        "type": "text",
                        "required": False
                    }
                ]
            },
            {
                "type": "flex",
                "fields": [
                    {
                        "id": "position-note",
                        "type": "warning-message",
                        "label": "Одно резюме – одна должность. Под каждую новую позицию создавайте отдельный документ – это позволит чётко адаптировать описание вашего опыта и компетенций под требования работодателя.",
                        "required": False
                    }
                ]
            },
            {
                "type": "grid",
                "fields": [
                    {
                        "id": "employment-type",
                        "label": "Тип занятости",
                        "type": "select",
                        "options": [
                            {"value": "", "text": "Выберите тип занятости"},
                            {"value": "full", "text": "Полная"},
                            {"value": "part", "text": "Частичная"},
                            {"value": "internship", "text": "Стажировка"},
                            {"value": "seasonal", "text": "Сезонная"},
                            {"value": "project", "text": "Проектная"},
                            {"value": "volunteer", "text": "Волонтерство"},
                            {"value": "temporary", "text": "Временная"},
                            {"value": "remote", "text": "Удаленная"}
                        ],
                        "required": False
                    },
                    {
                        "id": "work-schedule",
                        "label": "График работы",
                        "type": "select",
                        "options": [
                            {"value": "", "text": "Выберите график"},
                            {"value": "full-day", "text": "Полный день"},
                            {"value": "shift", "text": "Сменный график"},
                            {"value": "flexible", "text": "Гибкий график"},
                            {"value": "remote-work", "text": "Удаленная работа"},
                            {"value": "part-time", "text": "Неполный день"}
                        ],
                        "required": False
                    }
                ]
            },
            {
                "type": "flex",
                "fields": [
                    {
                        "id": "salary",
                        "placeholder": "Введите сумму",
                        "label": "Желаемая зарплата",
                        "type": "number",
                        "required": False
                    },
                    {
                        "id": "currency",
                        "label": "Валюта",
                        "type": "select",
                        "options": [
                            {"value": "rub", "text": "Рублей"},
                            {"value": "tenge", "text": "Тенге"},
                            {"value": "usd", "text": "Долларов"},
                            {"value": "eur", "text": "Евро"},
                            {"value": "uah", "text": "Гривен"}
                        ],
                        "required": False
                    }
                ]
            },
            {
                "type": "flex",
                "fields": [
                    {
                        "id": "salary-option",
                        "label": "По договоренности",
                        "type": "checkbox",
                        "required": False
                    }
                ]
            }
        ]
    },
    {
        "type": "dynamic",
        "id": "work-experience",
        "title": "Опыт работы",
        "fieldGroups": [
            {
                "type": "flex",
                "fields": [
                    {
                        "id": "work-period-from-month",
                        "label": "Период работы",
                        "type": "date-month-select",
                        "required": False
                    }
                ]
            },
            {
                "type": "flex",
                "fields": [
                    {
                        "id": "current-work-checkbox",
                        "label": "Работаю в настоящее время",
                        "type": "checkbox",
                        "required": False
                    }
                ]
            },
            {
                "type": "flex",
                "fields": [
                    {
                        "id": "position-held",
                        "label": "Какую должность занимали?",
                        "placeholder": "Введите должность",
                        "type": "text",
                        "required": False
                    }
                ]
            },
            {
                "type": "flex",
                "fields": [
                    {
                        "id": "organization-name",
                        "label": "Название организации",
                        "placeholder": "Введите название компании",
                        "type": "text",
                        "required": False
                    }
                ]
            },
            {
                "type": "flex",
                "fields": [
                    {
                        "id": "responsibilities",
                        "label": "Обязанности",
                        "placeholder": "Введите обязанности, которые Вы выполняли на предыдущем месте работы",
                        "type": "textarea",
                        "rows": 4,
                        "required": False
                    }
                ]
            },
            {
                "type": "flex",
                "fields": [
                    {
                        "id": "responsibilities-note",
                        "label": "Не используйте посторонние символы. Ставьте на конце предыдущей обязанности точку (.) или точку с запятой (;)",
                        "type": "warning-message",
                        "required": False
                    }
                ]
            },
            {
                "type": "flex",
                "fields": [
                    {
                        "id": "achievements",
                        "label": "Достижения",
                        "placeholder": "Введите достижения, которые по Вашему мнению и компании наиболее значимы",
                        "type": "textarea",
                        "rows": 4,
                        "required": False
                    }
                ]
            },
            {
                "type": "warning-message",
                "fields": [
                    {
                        "id": "achievements-note",
                        "label": "Не используйте посторонние символы. Ставьте на конце предыдущего достижения точку (.) или точку с запятой (;)",
                        "type": "warning-message",
                        "required": False
                    }
                ]
            }
        ]
    },
    {
        "type": "dynamic",
        "id": "education",
        "title": "Образование",
        "fieldGroups": [
            {
                "type": "flex",
                "fields": [
                    {
                        "id": "institution-name",
                        "label": "Название учебного заведения",
                        "placeholder": "Введите название учебного заведения",
                        "type": "text",
                        "required": False
                    }
                ]
            },
            {
                "type": "flex",
                "fields": [
                    {
                        "id": "faculty",
                        "label": "Факультет",
                        "placeholder": "Введите название факультета",
                        "type": "text",
                        "required": False
                    }
                ]
            },
            {
                "type": "flex",
                "fields": [
                    {
                        "id": "specialty",
                        "label": "Специальность",
                        "placeholder": "Введите название специальности",
                        "type": "text",
                        "required": False
                    }
                ]
            },
            {
                "type": "flex",
                "fields": [
                    {
                        "id": "start-year",
                        "label": "Год начала:",
                        "type": "number",
                        "placeholder": "2030",
                        "required": False
                    },
                    {
                        "id": "end-year",
                        "label": "Год окончания:",
                        "type": "number",
                         "placeholder": "2030",
                        "required": False
                    },
                    {
                        "id": "education-form",
                        "label": "Форма обучения:",
                        "type": "select",
                        "options": [
                            {"value": "", "text": "Не выбрано"},
                            {"value": "full-time", "text": "Очная"},
                            {"value": "evening", "text": "Очно-заочная (вечерняя)"},
                            {"value": "correspondence", "text": "Заочная"},
                            {"value": "distance", "text": "Дистанционная"}
                        ],
                        "required": False
                    }
                ]
            },
            {
                "type": "flex",
                "fields": [
                    {
                        "id": "education-achievements",
                        "label": "Достижения:",
                        "placeholder": "Введите достижения",
                        "type": "textarea",
                        "rows": 4,
                        "required": False
                    }
                ]
            },
            {
                "type": "flex",
                "fields": [
                    {
                        "id": "education-note",
                        "label": "Не используйте посторонние символы. Ставьте на конце предыдущего достижения точку (.) или точку с запятой (;)",
                        "type": "warning-message",
                        "required": False
                    }
                ]
            }
        ]
    },
    {
        "type": "dynamic",
        "id": "extra-education",
        "title": "Дополнительное образование",
        "fieldGroups": [
            {
                "type": "flex",
                "fields": [
                    {
                        "id": "course-name",
                        "label": "Название курса или тренинга",
                        "placeholder": "Введите название курса",
                        "type": "text",
                        "required": True
                    }
                ]
            },
            {
                "type": "flex",
                "fields": [
                    {
                        "id": "faculty",
                        "label": "Организация, проводившая курс или тренинг",
                        "placeholder": "Введите название учебного заведения",
                        "type": "text",
                        "required": False
                    }
                ]
            },
            {
                "type": "flex",
                "fields": [
                    {
                        "id": "end-year",
                        "label": "Год окончания:",
                        "placeholder": "2030",
                        "type": "number",
                        "required": True
                    },
                    {
                        "id": "education-time",
                        "label": "Продолжительность обучения",
                        "placeholder": "Продолжительность обучения",
                        "type": "text",
                        "required": False
                    }
                ]
            },
            {
                "type": "flex",
                "fields": [
                    {
                        "id": "education-achievements",
                        "label": "Достижения:",
                        "placeholder": "Введите достижения",
                        "type": "textarea",
                        "rows": 4,
                        "required": False
                    }
                ]
            },
            {
                "type": "flex",
                "fields": [
                    {
                        "id": "education-note",
                        "label": "Не используйте посторонние символы. Ставьте на конце предыдущего достижения точку (.) или точку с запятой (;)",
                        "type": "warning-message",
                        "required": False
                    }
                ]
            }
        ]
    }
]


myDocs = [
    {
        'id': '1',
        'title': 'Резюме',
        'imgLink': '/static/images/resume_templates/1.svg',
        'lastEdit': datetime.datetime.now()
    },
    {
        'id': '2',
        'title': 'Резюме',
        'imgLink': '/static/images/resume_templates/1.svg',
        'lastEdit': datetime.datetime.now()
    },
    {
        'id': '3',
        'title': 'Резюме',
        'imgLink': '/static/images/resume_templates/1.svg',
        'lastEdit': datetime.datetime.now()
    }
]

myPayments = [
    {
        'amount': '200',
        'date': datetime.datetime.now(),
        'type': 'СБП'
    },
    {
        'amount': '200',
        'date': datetime.datetime.now(),
        'type': 'СБП'
    },
    {
        'amount': '200',
        'date': datetime.datetime.now(),
        'type': 'СБП'
    },
    {
        'amount': '200',
        'date': datetime.datetime.now(),
        'type': 'СБП'
    },
]


