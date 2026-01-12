from cProfile import label
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


statementConfig = [
    {
        "id": "personal-info",
        "title": "Личная информация",
        "fieldGroups": [
            {
                "type": "grid",
                "fields": [
                    {"id": "lastName", "label": "Фамилия", "type": "text", "placeholder": "Иванов", "required": True},
                    {"id": "name", "label": "Имя", "type": "text", "placeholder": "Иван", "required": True},
                ]
            },
            {
                "type": "grid",
                "fields": [
                    {"id": "patronymic", "label": "Отчество", "type": "text", "placeholder": "Иванович", "required": False}
                ]
            },
            {
                "type": "grid",
                "fields": [
                    {"id": "position", "label": "Должность", "type": "text", "placeholder": "Введите должность", "required": True},
                    {"id": "department", "label": "Подразделение", "type": "text", "placeholder": "Введите подразделение", "required": False}
                ]
            }
        ]
    },
    {
        "id": "vacation-info",
        "title": "Информация о отпуске",
        "fieldGroups": [
            {
                "type": "grid",
                "fields": [
                    {"id": "vacation-start", "label": "Дата начала отпуска", "type": "date", "required": True},
                    {"id": "vacation-end", "label": "Дата окончания отпуска", "type": "date", "required": True}
                ]
            },
            {
                "type": "flex",
                "fields": [
                    {"id": "vacation-type", "label": "Тип отпуска", "type": "select", "options": [
                        {"value": "annual", "text": "Ежегодный"},
                        {"value": "additional", "text": "Дополнительный"},
                        {"value": "unpaid", "text": "Без сохранения зарплаты"}
                    ], "required": True}
                ]
            }
        ]
    },
    {
        "id": "reason",
        "title": "Причина (при необходимости)",
        "fieldGroups": [
            {
                "type": "flex",
                "fields": [
                    {"id": "reason-text", "label": "Причина отпуска", "type": "textarea", "rows": 4, "required": False}
                ]
            }
        ]
    }
]

statementValues = [
    {"type": "field", "id": "lastName", "value": "Иванов"},
    {"type": "field", "id": "name", "value": "Иван"},
    {"type": "field", "id": "patronymic", "value": "Иванович"},
    {"type": "field", "id": "position", "value": "Менеджер"},
    {"type": "field", "id": "department", "value": "Продажи"},
    {"type": "field", "id": "vacation-start", "value": "2026-02-01"},
    {"type": "field", "id": "vacation-end", "value": "2026-02-14"},
    {"type": "field", "id": "vacation-type", "value": "annual"},
    {"type": "field", "id": "reason-text", "value": ""}
]

contractSchema = [
  {
    "id": "contract-meta",
    "title": "Реквизиты договора",
    "fieldGroups": [
      {
        "type": "grid",
        "fields": [
          { "id": "contract-city", "label": "Город", "type": "text", "placeholder": "Москва", "required": "true" },
          { "id": "contract-date", "label": "Дата договора", "type": "date", "required": "true" }
        ]
      }
    ]
  },
  {
    "id": "seller-block",
    "title": "Данные продавца",
    "fieldGroups": [
      {
        "type": "grid",
        "fields": [
          { "id": "seller-fio", "label": "ФИО продавца (полностью)", "type": "text", "placeholder": "Иванов Иван Иванович", "required": "true" },
          { "id": "seller-agent-fio", "label": "ФИО представителя продавца", "type": "text", "placeholder": "Петров Пётр Петрович", "required": "false" }
        ]
      },
      {
        "type": "grid",
        "fields": [
          { "id": "seller-pass-series", "label": "Серия паспорта продавца", "type": "text", "placeholder": "1234", "required": "true" },
          { "id": "seller-pass-number", "label": "Номер паспорта продавца", "type": "text", "placeholder": "567890", "required": "true" }
        ]
      },
      {
        "type": "grid",
        "fields": [
          { "id": "seller-pass-issued-by", "label": "Кем выдан паспорт продавца", "type": "text", "placeholder": "ОВД района ...", "required": "true" },
          { "id": "seller-pass-issued-date", "label": "Дата выдачи паспорта продавца", "type": "date", "required": "true" }
        ]
      },
      {
        "type": "grid",
        "fields": [
          { "id": "seller-poa-notary-fio", "label": "ФИО нотариуса (доверенность продавца)", "type": "text", "placeholder": "Сидоров Сидор Сидорович", "required": "false" },
          { "id": "seller-poa-date", "label": "Дата доверенности продавца", "type": "date", "required": "false" }
        ]
      }
    ]
  },
  {
    "id": "buyer-block",
    "title": "Данные покупателя",
    "fieldGroups": [
      {
        "type": "grid",
        "fields": [
          { "id": "buyer-fio", "label": "ФИО покупателя (полностью)", "type": "text", "placeholder": "Смирнов Сергей Сергеевич", "required": "true" },
          { "id": "buyer-agent-fio", "label": "ФИО представителя покупателя", "type": "text", "placeholder": "Кузнецов Кузьма Кузьмич", "required": "false" }
        ]
      },
      {
        "type": "grid",
        "fields": [
          { "id": "buyer-pass-series", "label": "Серия паспорта покупателя", "type": "text", "placeholder": "4321", "required": "true" },
          { "id": "buyer-pass-number", "label": "Номер паспорта покупателя", "type": "text", "placeholder": "098765", "required": "true" }
        ]
      },
      {
        "type": "grid",
        "fields": [
          { "id": "buyer-pass-issued-by", "label": "Кем выдан паспорт покупателя", "type": "text", "placeholder": "ОВД района ...", "required": "true" },
          { "id": "buyer-pass-issued-date", "label": "Дата выдачи паспорта покупателя", "type": "date", "required": "true" }
        ]
      },
      {
        "type": "grid",
        "fields": [
          { "id": "buyer-poa-notary-fio", "label": "ФИО нотариуса (доверенность покупателя)", "type": "text", "placeholder": "Нотариус ...", "required": "false" },
          { "id": "buyer-poa-date", "label": "Дата доверенности покупателя", "type": "date", "required": "false" }
        ]
      }
    ]
  },
  {
    "id": "vehicle-block",
    "title": "Сведения об автомобиле",
    "fieldGroups": [
      {
        "type": "grid",
        "fields": [
          { "id": "car-brand", "label": "Марка автомобиля", "type": "text", "placeholder": "Toyota", "required": "true" },
          { "id": "car-model", "label": "Модель автомобиля", "type": "text", "placeholder": "Camry", "required": "true" }
        ]
      },
      {
        "type": "grid",
        "fields": [
          { "id": "car-year", "label": "Год выпуска", "type": "number", "placeholder": "2018", "required": "true" },
          { "id": "car-color", "label": "Цвет", "type": "text", "placeholder": "Белый", "required": "true" }
        ]
      },
      {
        "type": "grid",
        "fields": [
          { "id": "car-vin", "label": "VIN", "type": "text", "placeholder": "XXXXXXXXXXXXXXXXX", "required": "true" },
          { "id": "car-body-number", "label": "Номер кузова", "type": "text", "placeholder": "ABC1234567", "required": "false" }
        ]
      },
      {
        "type": "grid",
        "fields": [
          { "id": "car-engine-number", "label": "Номер двигателя", "type": "text", "placeholder": "ENG9876543", "required": "false" },
          { "id": "car-sts-number", "label": "Номер свидетельства о регистрации (СТС)", "type": "text", "placeholder": "77 АА 654321", "required": "true" }
        ]
      }
    ]
  },
  {
    "id": "payment-block",
    "title": "Цена и расчёт",
    "fieldGroups": [
      {
        "type": "grid",
        "fields": [
          { "id": "car-price", "label": "Цена автомобиля, руб.", "type": "number", "placeholder": "1000000", "required": "true" },
          { "id": "payment-date", "label": "Дата расчёта", "type": "date", "required": "true" }
        ]
      }
    ]
  }
]

contractValues = [
  { "type": "field", "id": "contract-city", "value": "Москва" },
  { "type": "field", "id": "contract-date", "value": "2026-01-15" },

  { "type": "field", "id": "seller-fio", "value": "Иванов Иван Иванович" },
  { "type": "field", "id": "seller-agent-fio", "value": "Петров Пётр Петрович" },
  { "type": "field", "id": "seller-pass-series", "value": "1234" },
  { "type": "field", "id": "seller-pass-number", "value": "567890" },
  { "type": "field", "id": "seller-pass-issued-by", "value": "ОВД района Центральный г. Москвы" },
  { "type": "field", "id": "seller-pass-issued-date", "value": "2015-06-10" },
  { "type": "field", "id": "seller-poa-notary-fio", "value": "Сидоров Сидор Сидорович" },
  { "type": "field", "id": "seller-poa-date", "value": "2025-12-20" },

  { "type": "field", "id": "buyer-fio", "value": "Смирнов Сергей Сергеевич" },
  { "type": "field", "id": "buyer-agent-fio", "value": "" },
  { "type": "field", "id": "buyer-pass-series", "value": "4321" },
  { "type": "field", "id": "buyer-pass-number", "value": "098765" },
  { "type": "field", "id": "buyer-pass-issued-by", "value": "ОВД района Северный г. Москвы" },
  { "type": "field", "id": "buyer-pass-issued-date", "value": "2018-03-05" },
  { "type": "field", "id": "buyer-poa-notary-fio", "value": "" },
  { "type": "field", "id": "buyer-poa-date", "value": "" },

  { "type": "field", "id": "car-brand", "value": "Toyota" },
  { "type": "field", "id": "car-model", "value": "Camry" },
  { "type": "field", "id": "car-year", "value": "2018" },
  { "type": "field", "id": "car-color", "value": "Белый" },
  { "type": "field", "id": "car-vin", "value": "JTNBF3HK003456789" },
  { "type": "field", "id": "car-body-number", "value": "" },
  { "type": "field", "id": "car-engine-number", "value": "" },
  { "type": "field", "id": "car-sts-number", "value": "" },
  { "type": "field", "id": "car-price", "value": "1000000" },
  { "type": "field", "id": "payment-date", "value": "2026-01-15" }
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


