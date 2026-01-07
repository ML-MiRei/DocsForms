const years = [];
for (let i = 2026; i >= 1960; i--) {
    years.push({
        value: i,
        text: i
    });
}

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


var countCreatedForms = 0;
var dynamicForms = new Map();


function createFieldsGroup(fieldsGroupConfig, postfix = '') {
    const fieldsCont = document.createElement('div');
    fieldsCont.className = fieldsGroupConfig.type == 'grid' ? 'form-row-grid' : 'form-row-flex';

    fieldsGroupConfig.fields.forEach(fieldConfig => {
        const fieldElement = createFormField(fieldConfig, postfix);
        fieldsCont.appendChild(fieldElement);
    });

    return fieldsCont;
}

function createWarningMessage(message) {
    const messageCont = document.createElement('div');
    messageCont.style.display = 'flex';
    messageCont.className = 'warning-message';
    const icon = document.createElement('img');
    icon.src = '/static/images/error.svg';

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

    if (fieldConfig.value)
        inputElement.value = fieldConfig.value;

    return inputElement;
}

function createTextarea(fieldConfig) {
    let inputElement = document.createElement('textarea');
    inputElement.className = 'constructor__textarea';
    inputElement.required = fieldConfig.required;

    if (fieldConfig.value)
        inputElement.text = fieldConfig.value;

    return inputElement;
}

function createInputField(fieldConfig) {
    let inputElement = document.createElement('input');
    inputElement.type = fieldConfig.type;
    inputElement.required = fieldConfig.required;

    if (fieldConfig.value)
        inputElement.text = fieldConfig.value;

    return inputElement;
}

function createChekboxField(fieldConfig) {
    let inputElement = document.createElement('input');
    inputElement.type = 'checkbox';
    inputElement.className = 'checkbox-input';
    inputElement.style.width = '20px';

    if (fieldConfig.value)
        inputElement.value = fieldConfig.value;

    return inputElement;
}

function createFormField(fieldConfig, postfix = '') {

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
            inputElement = createMonthPeriodPicker(fieldConfig);
            inputElement.className = 'period-cont transparent-background '
            break;
        case 'textarea':
            inputElement = createTextarea(fieldConfig);
            break;
        case 'checkbox':
            inputElement = createChekboxField(fieldConfig);

            label.style.display = 'flex';
            label.style.marginLeft = '15px';
            label.style.fontSize = '18px';
            label.style.alignItems = 'center';
            label.style.marginBottom = '0';
            break;
        case 'warning-message':
            fieldGroup.appendChild(createWarningMessage(fieldConfig.label));
            return fieldGroup;
        case 'number':
            inputElement = createInputField(fieldConfig);
            break;
        default:
            inputElement = createInputField(fieldConfig);
    }

    label.htmlFor = fieldConfig.id + postfix;
    label.textContent = fieldConfig.label;
    label.className += 'form-label';

    if (fieldConfig.required) {
        label.innerHTML += ' <span style="color:red">*</span>';
    }

    inputElement.className = inputElement.className == null ?
        'form-input' : inputElement.className + ' form-input';
    inputElement.id = fieldConfig.id + postfix;
    inputElement.name = fieldConfig.id + postfix;

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
    const form = document.createElement('div');
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

function generateDynamicForm(formConfig) {
    const cont = document.getElementById('forms-layout');
    const form = document.createElement('div');
    form.id = formConfig.id + '-forms-cont';
    form.className = 'form-cont';

    const title = document.createElement('h2');
    title.className = 'form-title';
    title.textContent = formConfig.title;

    const addButton = document.createElement('button');
    addButton.id = 'add' + formConfig.id;
    addButton.value = formConfig.id;
    addButton.className = "modal-button reverse-btn";
    addButton.innerText = '+ Добавить';

    dynamicForms.set(formConfig.id, {
        'map': new Map(),
        'formConfig': formConfig
    });

    addButton.addEventListener('click', (ev) => {
        ev.preventDefault();
        addDynamicForm(ev.target.value);
    });


    form.innerHTML = '';
    form.appendChild(title);
    form.appendChild(addButton);

    cont.appendChild(form);
}

function createPhotoUploadComponent(inputId = 'photo-input', logoUrl = '/static/images/account_box.svg') {
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


function createMonthPeriodPicker(fieldConfig) {
    const pickerContainer = document.createElement('div');

    const startDateCont = document.createElement('div');
    startDateCont.className = 'date-select__cont';

    const startYearInputElement = document.createElement('select');
    startYearInputElement.className = 'form-input';
    startYearInputElement.id = fieldConfig.id + '-start-year';
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
    startMonthInputElement.id = fieldConfig.id + '-start-month';
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
    endYearInputElement.id = fieldConfig.id + '-end-year';
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
    endMonthInputElement.id = fieldConfig.id + '-end-month';
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

    if (fieldConfig.value) {
        startMonthInputElement = fieldConfig[0].getMonth();
        startYearInputElement = fieldConfig[0].getFullYear();
        endMonthInputElement.value = fieldConfig[1].getMonth();
        endYearInputElement.value = fieldConfig[1].getFullYear();
    }

    return pickerContainer;
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


function loadValues(values, configFields) {
    let el;
    values.forEach(item => {
        if (item.type == 'field') {
            el = document.getElementById(item.id);
            el.value = item.value;
        }
        else if (item.type == 'form') {
            var form = configFields.find(f => f.id === item.id);
            addDynamicForm(form.id);
            item.value.forEach(field => {
                el = document.getElementById(field.id + (countCreatedForms - 1));
                el.value = field.value;
            })
        }
    });
}


function addDynamicForm(formId) {
    const cont = document.getElementById(formId + '-forms-cont');
    const children = cont.children;

    const form = document.createElement('div');
    form.id = formId + countCreatedForms;
    form.className = 'form-cont';

    dynamicForms.get(formId).formConfig.fieldGroups.forEach(fieldGroup => {
        const fieldElement = createFieldsGroup(fieldGroup, countCreatedForms);
        form.appendChild(fieldElement);
    });

    form.appendChild(createDeleteButton(dynamicForms.get(formId).map, form.id));
    cont.insertBefore(form, children[children.length - 1]);

    dynamicForms.get(formId).map.set(form.id, form);
    countCreatedForms += 1;
}