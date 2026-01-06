const years = [
    { value: '', text: '2030' },
    { value: '2030', text: '2030' },
    { value: '2029', text: '2029' },
    { value: '2028', text: '2028' },
    { value: '2027', text: '2027' },
    { value: '2026', text: '2026' },
    { value: '2025', text: '2025' },
    { value: '2024', text: '2024' },
    { value: '2023', text: '2023' },
    { value: '2022', text: '2022' },
    { value: '2021', text: '2021' },
    { value: '2020', text: '2020' }
];

const months = [
    { value: '1', text: 'Январь' },
    { value: '2', text: 'Февраль' },
    { value: '3', text: 'Март' },
    { value: '4', text: 'Апрель' },
    { value: '5', text: 'Май' },
    { value: '6', text: 'Июнь' },
    { value: '7', text: 'Июль' },
    { value: '8', text: 'Август' },
    { value: '9', text: 'Сентябрь' },
    { value: '10', text: 'Октябрь' },
    { value: '11', text: 'Ноябрь' },
    { value: '12', text: 'Декабрь' }
];

const educationForm = {
    id: 'education',
    title: 'Образование',
    fieldGroups: [
        {
            type: 'flex',
            fields: [
                {
                    id: 'institution-name',
                    label: 'Название учебного заведения',
                    placeholder: 'Введите название учебного заведения',
                    type: 'text',
                    required: false
                }
            ]
        },
        {
            type: 'flex',
            fields: [
                {
                    id: 'faculty',
                    label: 'Факультет',
                    placeholder: 'Введите название факультета',
                    type: 'text',
                    required: false
                }
            ]
        },
        {
            type: 'flex',
            fields: [
                {
                    id: 'specialty',
                    label: 'Специальность',
                    placeholder: 'Введите название специальности',
                    type: 'text',
                    required: false
                }
            ]
        },
        {
            type: 'flex',
            fields: [
                {
                    id: 'start-year',
                    label: 'Год начала:',
                    type: 'select',
                    options: [
                        { value: '', text: '2025' },
                        { value: '2025', text: '2025' },
                        { value: '2024', text: '2024' },
                        { value: '2023', text: '2023' },
                        { value: '2022', text: '2022' },
                        { value: '2021', text: '2021' },
                        { value: '2020', text: '2020' },
                        { value: '2019', text: '2019' },
                        { value: '2018', text: '2018' },
                        { value: '2017', text: '2017' },
                        { value: '2016', text: '2016' },
                        { value: '2015', text: '2015' }
                    ],
                    required: false
                },
                {
                    id: 'end-year',
                    label: 'Год окончания:',
                    type: 'select',
                    options: [
                        { value: '', text: '2030' },
                        { value: '2030', text: '2030' },
                        { value: '2029', text: '2029' },
                        { value: '2028', text: '2028' },
                        { value: '2027', text: '2027' },
                        { value: '2026', text: '2026' },
                        { value: '2025', text: '2025' },
                        { value: '2024', text: '2024' },
                        { value: '2023', text: '2023' },
                        { value: '2022', text: '2022' },
                        { value: '2021', text: '2021' },
                        { value: '2020', text: '2020' }
                    ],
                    required: false
                },
                {
                    id: 'education-form',
                    label: 'Форма обучения:',
                    type: 'select',
                    options: [
                        { value: '', text: 'Не выбрано' },
                        { value: 'full-time', text: 'Очная' },
                        { value: 'evening', text: 'Очно-заочная (вечерняя)' },
                        { value: 'correspondence', text: 'Заочная' },
                        { value: 'distance', text: 'Дистанционная' }
                    ],
                    required: false
                }
            ]
        },
        {
            type: 'flex',
            fields: [
                {
                    id: 'education-achievements',
                    label: 'Достижения:',
                    placeholder: 'Введите достижения',
                    type: 'textarea',
                    rows: 4,
                    required: false
                }
            ]
        },
        {
            type: 'flex',
            fields: [
                {
                    id: 'education-note',
                    label: 'Не используйте посторонние символы. Ставьте на конце предыдущего достижения точку (.) или точку с запятой (;)',
                    type: 'warning-message',
                    required: false
                }
            ]
        }
    ]
};

const extraEducationForm = {
    id: 'extra-education',
    title: 'Дополнительное бразование',
    fieldGroups: [
        {
            type: 'flex',
            fields: [
                {
                    id: 'institution-name',
                    label: 'Название курса или тренинга',
                    placeholder: 'Введите название курса',
                    type: 'text',
                    required: true
                }
            ]
        },
        {
            type: 'flex',
            fields: [
                {
                    id: 'faculty',
                    label: 'Организация, проводившая курс или тренинг',
                    placeholder: 'Введите название учебного заведения',
                    type: 'text',
                    required: false
                }
            ]
        },
        {
            type: 'flex',
            fields: [
                {
                    id: 'end-year',
                    label: 'Год окончания:',
                    type: 'select',
                    options: years,
                    required: true
                },
                {
                    id: 'education-time',
                    label: 'Продолжительность обучения',
                    placeholder: 'Продолжительность обучения',
                    type: 'text',
                    required: false
                }
            ]
        },
        {
            type: 'flex',
            fields: [
                {
                    id: 'education-achievements',
                    label: 'Достижения:',
                    placeholder: 'Введите достижения',
                    type: 'textarea',
                    rows: 4,
                    required: false
                }
            ]
        },
        {
            type: 'flex',
            fields: [
                {
                    id: 'education-note',
                    label: 'Не используйте посторонние символы. Ставьте на конце предыдущего достижения точку (.) или точку с запятой (;)',
                    type: 'warning-message',
                    required: false
                }
            ]
        }
    ]
};

const workExpirienceForm = {
    id: 'work-experience',
    title: 'Опыт работы',
    fieldGroups: [
        {
            type: 'flex',
            fields: [
                {
                    id: 'work-period-from-month',
                    label: 'Период работы',
                    type: 'date-month-select',
                    required: false
                }
            ]
        },
        {
            type: 'flex',
            fields: [
                {
                    id: 'current-work-checkbox',
                    label: 'Работаю в настоящее время',
                    type: 'checkbox',
                    required: false
                }
            ]
        },
        {
            type: 'flex',
            fields: [
                {
                    id: 'position-held',
                    label: 'Какую должность занимали?',
                    placeholder: 'Введите должность',
                    type: 'text',
                    required: false
                }
            ]
        },
        {
            type: 'flex',
            fields: [
                {
                    id: 'organization-name',
                    label: 'Название организации',
                    placeholder: 'Введите название компании',
                    type: 'text',
                    required: false
                }
            ]
        },
        {
            type: 'flex',
            fields: [
                {
                    id: 'responsibilities',
                    label: 'Обязанности',
                    placeholder: 'Введите обязанности, которые Вы выполняли на предыдущем месте работы',
                    type: 'textarea',
                    rows: 4,
                    required: false
                }
            ]
        },
        {
            type: 'flex',
            fields: [
                {
                    id: 'responsibilities-note',
                    label: 'Не используйте посторонние символы. Ставьте на конце предыдущей обязанности точку (.) или точку с запятой (;)',
                    type: 'warning-message',
                    required: false
                }
            ]
        },
        {
            type: 'flex',
            fields: [
                {
                    id: 'achievements',
                    label: 'Достижения',
                    placeholder: 'Введите достижения, которые по Вашему мнению и компании наиболее значимы',
                    type: 'textarea',
                    rows: 4,
                    required: false
                }
            ]
        },
        {
            type: 'warning-message',
            fields: [
                {
                    id: 'achievements-note',
                    label: 'Не используйте посторонние символы. Ставьте на конце предыдущего достижения точку (.) или точку с запятой (;)',
                    type: 'warning-message',
                    required: false
                }
            ]
        }
    ]
};

const resumeFormsConfig = [
    {
        id: 'general-info',
        title: 'Общая информация',
        fieldGroups: [
            {
                type: 'grid',
                fields: [
                    {
                        id: 'last-name',
                        label: 'Фамилия (обязательно)',
                        placeholder: 'Иванов',
                        type: 'text',
                        required: true
                    },
                    {
                        id: 'patronymic',
                        label: 'Отчество',
                        placeholder: 'Иванович',
                        type: 'text',
                        required: false
                    }
                ]
            },
            {
                type: 'grid',
                fields: [
                    {
                        id: 'name',
                        label: 'Имя (обязательно)',
                        placeholder: 'Иван',
                        type: 'text',
                        required: true
                    },
                    {
                        id: 'picture',
                        type: 'picture',
                        required: true
                    }
                ]
            }

        ]
    },
    {
        id: 'private-info',
        title: 'Личная информация',
        fieldGroups: [
            {
                type: 'grid',
                fields: [
                    {
                        id: 'city',
                        label: 'Город проживания (обязательно)',
                        placeholder: 'Название города',
                        type: 'text',
                        required: true
                    },
                    {
                        id: 'citizenship',
                        label: 'Гражданство (обязательно)',
                        placeholder: 'Российская Федерация',
                        type: 'text',
                        required: true
                    }
                ]
            },
            {
                type: 'grid',
                fields: [
                    {
                        id: 'removal',
                        label: 'Переезд',
                        type: 'select',
                        options: [
                            { value: '', text: 'Переезд невозможен' },
                            { value: 'possible', text: 'Переезд возможен' },
                            { value: 'unwanted', text: 'Переезд нежелателен' },
                            { value: 'desired', text: 'Переезд желателен' }
                        ],
                        required: false
                    },
                    {
                        id: 'birth-date',
                        label: 'Дата рождения',
                        placeholder: 'ДД.ММ.ГГГГ',
                        type: 'date',
                        required: false
                    },
                ]
            },
            {
                type: 'grid',
                fields: [
                    {
                        id: 'family-status',
                        label: 'Семейное положение',
                        type: 'select',
                        options: [
                            { value: '', text: 'Не указано' },
                            { value: 'single', text: 'Холост / Не замужем' },
                            { value: 'married', text: 'Женат / Замужем' },
                            { value: 'divorced', text: 'Разведен(а)' }
                        ],
                        required: false
                    },
                    {
                        id: 'gender',
                        label: 'Пол',
                        type: 'select',
                        options: [
                            { value: '', text: 'Выберите пол' },
                            { value: 'male', text: 'Мужской' },
                            { value: 'female', text: 'Женский' }
                        ],
                        required: false
                    }
                ]
            }
        ]
    },
    {
        id: 'contact-info',
        title: 'Контактная информация',
        fieldGroups: [
            {
                type: 'grid',
                fields: [
                    {
                        id: 'phone',
                        label: 'Номер телефона (обязательно)',
                        placeholder: '+7 123 456 78 90',
                        type: 'tel',
                        required: true
                    },
                    {
                        id: 'email',
                        label: 'Электронная почта (обязательно)',
                        placeholder: 'email@pochta-site.ru',
                        type: 'email',
                        required: true
                    }
                ]
            }
        ]
    },
    {
        id: 'position-info',
        title: 'Информация о должности',
        fieldGroups: [
            {
                type: 'flex',
                fields: [
                    {
                        id: 'position',
                        label: 'Должность',
                        placeholder: 'Введите должность',
                        type: 'text',
                        required: false
                    }
                ]
            },
            {
                type: 'flex',
                fields: [
                    {
                        id: 'position-note',
                        type: 'warning-message',
                        label: 'Одно резюме – одна должность. Под каждую новую позицию создавайте отдельный документ – это позволит чётко адаптировать описание вашего опыта и компетенций под требования работодателя.',
                        required: false
                    }
                ]
            },
            {
                type: 'grid',
                fields: [
                    {
                        id: 'employment-type',
                        label: 'Тип занятости',
                        type: 'select',
                        options: [
                            { value: '', text: 'Выберите тип занятости' },
                            { value: 'full', text: 'Полная' },
                            { value: 'part', text: 'Частичная' },
                            { value: 'internship', text: 'Стажировка' },
                            { value: 'seasonal', text: 'Сезонная' },
                            { value: 'project', text: 'Проектная' },
                            { value: 'volunteer', text: 'Волонтерство' },
                            { value: 'temporary', text: 'Временная' },
                            { value: 'remote', text: 'Удаленная' }
                        ],
                        required: false
                    },
                    {
                        id: 'work-schedule',
                        label: 'График работы',
                        type: 'select',
                        options: [
                            { value: '', text: 'Выберите график' },
                            { value: 'full-day', text: 'Полный день' },
                            { value: 'shift', text: 'Сменный график' },
                            { value: 'flexible', text: 'Гибкий график' },
                            { value: 'remote-work', text: 'Удаленная работа' },
                            { value: 'part-time', text: 'Неполный день' }
                        ],
                        required: false
                    }
                ]
            },
            {
                type: 'flex',
                fields: [
                    {
                        id: 'salary',
                        placeholder: 'Введите сумму',
                        label: 'Желаемая зарплата',
                        type: 'numeric',
                        required: false
                    },
                    {
                        id: 'currency',
                        label: 'Валюта',
                        type: 'select',
                        options: [
                            { value: 'rub', text: 'Рублей' },
                            { value: 'tenge', text: 'Тенге' },
                            { value: 'usd', text: 'Долларов' },
                            { value: 'eur', text: 'Евро' },
                            { value: 'uah', text: 'Гривен' }
                        ],
                        required: false
                    }
                ]
            },
            {
                type: 'flex',
                fields: [
                    {
                        id: 'salary-option',
                        label: 'По договоренности',
                        type: 'checkbox',
                        required: false
                    }
                ]
            }

        ]
    }
];


var educForms = new Map();
var extraEducForms = new Map();
var worcExpForms = new Map();

var countCreatedForms = 0;



const addEducButton = document.getElementById('addEducation');
const addExtraEducButton = document.getElementById('addExtraEducation');
const addWorkExpButton = document.getElementById('addWorkExpirience');

addEducButton.addEventListener('click', createEducationForm);
addWorkExpButton.addEventListener('click', createWorkExpForm);
addExtraEducButton.addEventListener('click', createExtraEducationForm);




function createFieldsGroup(fieldsGroupConfig) {
    const fieldsCont = document.createElement('div');
    fieldsCont.className = fieldsGroupConfig.type == 'grid' ? 'form-row-grid' : 'form-row-flex';

    fieldsGroupConfig.fields.forEach(fieldConfig => {
        const fieldElement = createFormField(fieldConfig);
        fieldsCont.appendChild(fieldElement);
    });

    return fieldsCont;
}

function createWarningMessage(message) {
    const messageCont = document.createElement('div');
    messageCont.style.display = 'flex';
    messageCont.className = 'warning-message';
    const icon = document.createElement('img');
    icon.src = 'static/images/error.svg';

    const textField = document.createElement('p');
    textField.textContent = message;
    textField.className = 'warning-message__text';

    messageCont.appendChild(icon);
    messageCont.appendChild(textField);

    return messageCont;
}

function createFieldsGroupContainer() {
    const fieldGroup = document.createElement('div');
    fieldGroup.className = 'form-group';
    return fieldGroup;
}

function createSelectField(fieldConfig, options = []) {
    let inputElement = document.createElement('select');

    if (options.length > 0) {
        fieldConfig.options.options = options;
    }

    fieldConfig.options.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option.value;
        optionElement.textContent = option.text;
        inputElement.appendChild(optionElement);
    });

    return inputElement;
}

function createTextarea() {
    let inputElement = document.createElement('textarea');
    inputElement.className = 'constructor__textarea';

    return inputElement;
}

function createInputField(type) {
    let inputElement = document.createElement('input');
    inputElement.type = type;

    return inputElement;
}

function createChekboxField() {
    let inputElement = document.createElement('input');
    inputElement.type = 'checkbox';
    inputElement.className = 'checkbox-input';
    inputElement.style.width = '20px';

    return inputElement;
}

function createFormField(fieldConfig) {

    if (fieldConfig.type == 'picture') {
        return createPhotoUploadComponent(fieldConfig.id);
    }

    const fieldGroup = createFieldsGroupContainer();
    const label = document.createElement('label');
    let inputElement;

    switch (fieldConfig.type) {
        case 'select':
            inputElement = createSelectField(fieldConfig);
            break;
        case 'date-month-select':
            inputElement = createMonthPeriodPicker(fieldConfig.id);
            inputElement.className = 'period-cont transparent-background '
            break;
        case 'textarea':
            inputElement = createTextarea();
            break;
        case 'checkbox':
            inputElement = createChekboxField();

            label.style.display = 'flex';
            label.style.marginLeft = '15px';
            label.style.fontSize = '18px';
            label.style.alignItems = 'center';
            label.style.marginBottom = '0';
            break;
        case 'warning-message':
            fieldGroup.appendChild(createWarningMessage(fieldConfig.label));
            return fieldGroup;
        case 'numeric':
            inputElement = createInputField('number');
            break;
        default:
            inputElement = createInputField(fieldConfig.type);
    }

    label.htmlFor = fieldConfig.id;
    label.textContent = fieldConfig.label;
    label.className += 'form-label';

    if (fieldConfig.required) {
        label.innerHTML += ' <span style="color:red">*</span>';
    }

    inputElement.className = inputElement.className == null ?
        'form-input' : inputElement.className + ' form-input';
    inputElement.id = fieldConfig.id;
    inputElement.name = fieldConfig.id;

    if (fieldConfig.placeholder) {
        inputElement.placeholder = fieldConfig.placeholder;
    }

    if (fieldConfig.required && fieldConfig.type !== 'checkbox') {
        inputElement.required = true;
    }

    if (fieldConfig.type === 'checkbox') {
        const cont = document.createElement('div');
        cont.style.display = 'flex';
        cont.style.height = '100%';

        cont.appendChild(inputElement);
        cont.appendChild(label);

        fieldGroup.appendChild(cont);
    } else {
        fieldGroup.appendChild(label);
        fieldGroup.appendChild(inputElement);
    }

    return fieldGroup;
}

function generateForm(formConfig) {
    const cont = document.getElementById('forms-layout');
    const form = document.createElement('form');
    form.id = formConfig.id;
    form.className = 'form-cont';

    const title = document.createElement('h2');
    title.className = 'form-title';
    title.textContent = formConfig.title;

    form.innerHTML = '';
    form.appendChild(title);

    formConfig.fieldGroups.forEach(fieldGroup => {
        const fieldElement = createFieldsGroup(fieldGroup);
        form.appendChild(fieldElement);
    });

    cont.appendChild(form);
}

document.addEventListener('DOMContentLoaded', () => {
    resumeFormsConfig.forEach(form => {
        generateForm(form);
    });
});


function createPhotoUploadComponent(inputId = 'photo-input', logoUrl = 'static/images/account_box.svg') {
    const container = document.createElement('div');
    container.className = 'photo-upload-container';

    const logo = document.createElement('img');
    logo.src = logoUrl;
    logo.alt = '';
    logo.className = 'upload__logo';
    container.appendChild(logo);

    const uploadWrapper = document.createElement('div');
    uploadWrapper.className = 'photo-upload-wrapper';
    uploadWrapper.id = 'upload-box';

    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.id = inputId;
    fileInput.className = 'photo-input';
    fileInput.name = 'photo-input';
    fileInput.accept = 'image/*';
    fileInput.capture = 'environment';

    const uploadButton = document.createElement('button');
    uploadButton.type = 'button';
    uploadButton.className = 'upload-button';
    uploadButton.id = 'upload-button';

    const plusIcon = document.createElement('span');
    plusIcon.className = 'plus-icon';
    plusIcon.textContent = '+';

    uploadButton.appendChild(plusIcon);
    uploadButton.appendChild(document.createTextNode(' Добавить фото'));

    uploadWrapper.appendChild(fileInput);
    uploadWrapper.appendChild(uploadButton);
    container.appendChild(uploadWrapper);

    const fileNameDisplay = document.createElement('div');
    fileNameDisplay.className = 'file-name-display';
    fileNameDisplay.id = 'file-name-display';
    fileNameDisplay.style.display = 'none';

    const fileInfo = document.createElement('div');
    fileInfo.className = 'file-info';

    const fileDetails = document.createElement('div');
    fileDetails.className = 'file-details';

    const fileName = document.createElement('div');
    fileName.className = 'file-name';
    fileName.id = 'displayed-file-name';
    fileName.textContent = 'Название файла';

    const fileSize = document.createElement('div');
    fileSize.className = 'file-size';
    fileSize.id = 'displayed-file-size';
    fileSize.textContent = 'Размер файла';

    const removeButton = document.createElement('button');
    removeButton.type = 'button';
    removeButton.className = 'remove-file';
    removeButton.id = 'remove-file';
    removeButton.title = 'Удалить файл';
    removeButton.textContent = '×';

    fileDetails.appendChild(fileName);
    fileDetails.appendChild(fileSize);
    fileInfo.appendChild(fileDetails);
    fileNameDisplay.appendChild(fileInfo);
    fileNameDisplay.appendChild(removeButton);
    container.appendChild(fileNameDisplay);

    addEventListeners(container, inputId);

    return container;
}

function addEventListeners(container, inputId) {
    const fileInput = container.querySelector(`#${inputId}`);
    const uploadButton = container.querySelector('#upload-button');
    const fileNameDisplay = container.querySelector('#file-name-display');
    const displayedFileName = container.querySelector('#displayed-file-name');
    const displayedFileSize = container.querySelector('#displayed-file-size');
    const removeButton = container.querySelector('#remove-file');

    function formatFileSize(bytes) {
        if (bytes === 0) return '0 Б';

        const k = 1024;
        const sizes = ['Б', 'КБ', 'МБ', 'ГБ'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));

        return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
    }

    function updateFileDisplay(file) {
        if (file) {
            displayedFileName.textContent = file.name;
            displayedFileSize.textContent = formatFileSize(file.size);
            fileNameDisplay.style.display = 'flex';
            uploadButton.innerHTML = '<span class="plus-icon">✓</span> Фото выбрано';
            uploadButton.classList.add('has-file');
        } else {
            fileNameDisplay.style.display = 'none';
            uploadButton.innerHTML = '<span class="plus-icon">+</span> Добавить фото';
            uploadButton.classList.remove('has-file');
        }
    }

    uploadButton.addEventListener('click', () => {
        fileInput.click();
    });

    fileInput.addEventListener('change', (event) => {
        const file = event.target.files[0];

        if (file) {
            if (!file.type.startsWith('image/')) {
                alert('Пожалуйста, выберите файл изображения');
                fileInput.value = '';
                updateFileDisplay(null);
                return;
            }

            const maxSize = 10 * 1024 * 1024;
            if (file.size > maxSize) {
                alert('Файл слишком большой. Максимальный размер: 10 МБ');
                fileInput.value = '';
                updateFileDisplay(null);
                return;
            }

            updateFileDisplay(file);
            console.log('Выбран файл:', file.name, formatFileSize(file.size));
        } else {
            updateFileDisplay(null);
        }
    });

    removeButton.addEventListener('click', () => {
        fileInput.value = '';
        updateFileDisplay(null);
    });

    uploadButton.addEventListener('dragover', (event) => {
        event.preventDefault();
        uploadButton.style.backgroundColor = '#2d4fd6';
    });

    uploadButton.addEventListener('dragleave', (event) => {
        event.preventDefault();
        const hasFile = fileInput.files.length > 0;
        uploadButton.style.backgroundColor = hasFile ? '#28a745' : '#4a6cf7';
    });

    uploadButton.addEventListener('drop', (event) => {
        event.preventDefault();

        const hasFile = fileInput.files.length > 0;
        uploadButton.style.backgroundColor = hasFile ? '#28a745' : '#4a6cf7';

        const files = event.dataTransfer.files;
        if (files.length > 0) {
            const file = files[0];
            if (file.type.startsWith('image/')) {
                const dataTransfer = new DataTransfer();
                dataTransfer.items.add(file);
                fileInput.files = dataTransfer.files;
                fileInput.dispatchEvent(new Event('change'));
            } else {
                alert('Пожалуйста, перетащите файл изображения');
            }
        }
    });
}


function createMonthPeriodPicker(id) {
    const pickerContainer = document.createElement('div');

    const startDateCont = document.createElement('div');
    startDateCont.className = 'date-select__cont';

    const startYearInputElement = document.createElement('select');
    startYearInputElement.className = 'form-input';
    startYearInputElement.id = id + '-start-year';
    years.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option.value;
        optionElement.textContent = option.text;
        if (option.disabled) {
            optionElement.disabled = true;
        }
        startYearInputElement.appendChild(optionElement);
    });

    const startMonthInputElement = document.createElement('select');
    startMonthInputElement.className = 'form-input';
    startMonthInputElement.id = id + '-start-month';
    months.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option.value;
        optionElement.textContent = option.text;
        if (option.disabled) {
            optionElement.disabled = true;
        }
        startMonthInputElement.appendChild(optionElement);
    });

    startDateCont.appendChild(startMonthInputElement);
    startDateCont.appendChild(startYearInputElement);


    const endDateCont = document.createElement('div');
    endDateCont.className = 'date-select__cont';

    const endYearInputElement = document.createElement('select');
    endYearInputElement.className = 'form-input';
    endYearInputElement.id = id + '-end-year';
    years.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option.value;
        optionElement.textContent = option.text;
        if (option.disabled) {
            optionElement.disabled = true;
        }
        endYearInputElement.appendChild(optionElement);
    });

    const endMonthInputElement = document.createElement('select');
    endMonthInputElement.className = 'form-input';
    endMonthInputElement.id = id + '-end-month';
    months.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option.value;
        optionElement.textContent = option.text;
        if (option.disabled) {
            optionElement.disabled = true;
        }
        endMonthInputElement.appendChild(optionElement);
    });

    endDateCont.appendChild(endMonthInputElement);
    endDateCont.appendChild(endYearInputElement);

    pickerContainer.appendChild(startDateCont);
    pickerContainer.appendChild(endDateCont);

    return pickerContainer;
}


function createEducationForm() {
    const cont = document.getElementById('education-forms-layout');
    const children = cont.children;

    const form = document.createElement('form');
    form.id = educationForm.id + '-' + countCreatedForms;
    form.className = 'form-cont';

    educationForm.fieldGroups.forEach(fieldGroup => {
        const fieldElement = createFieldsGroup(fieldGroup);
        form.appendChild(fieldElement);
    });

    form.appendChild(createDeleteButton(educForms, form.id));
    cont.insertBefore(form, children[children.length - 1]);

    educForms.set(form.id, form);
    countCreatedForms += 1;
}


function createExtraEducationForm() {
    const cont = document.getElementById('extra-education-forms-layout');
    const children = cont.children;

    const form = document.createElement('form');
    form.id = extraEducationForm.id + '-' + countCreatedForms;
    form.className = 'form-cont';

    extraEducationForm.fieldGroups.forEach(fieldGroup => {
        const fieldElement = createFieldsGroup(fieldGroup);
        form.appendChild(fieldElement);
    });

    form.appendChild(createDeleteButton(extraEducForms, form.id));
    cont.insertBefore(form, children[children.length - 1]);

    extraEducForms.set(form.id, form);
    countCreatedForms += 1;
}

function createWorkExpForm() {
    const cont = document.getElementById('work-exp-forms-layout');
    const children = cont.children;

    const form = document.createElement('form');
    form.id = workExpirienceForm.id + '-' + countCreatedForms;
    form.className = 'form-cont';

    workExpirienceForm.fieldGroups.forEach(fieldGroup => {
        const fieldElement = createFieldsGroup(fieldGroup);
        form.appendChild(fieldElement);
    });

    form.appendChild(createDeleteButton(worcExpForms, form.id));
    cont.insertBefore(form, children[children.length - 1]);

    worcExpForms.set(form.id, form);
    countCreatedForms += 1;
}

function createDeleteButton(map, id) {
    var deleteButton = document.createElement('button');
    deleteButton.value = id;
    deleteButton.innerText = '#  Удалить';

    deleteButton.addEventListener('click', (ev) => {
        map.get(ev.target.value).remove();
        map.delete(ev.target.value);
    });

    deleteButton.className = 'modal-button save-result__btn';

    return deleteButton;
}
