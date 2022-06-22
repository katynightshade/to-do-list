function createForm() {
    const main = document.querySelector('.main');
    
    const taskForm = document.createElement('div');

    const formTitle = document.createElement('h3');
    formTitle.textContent = 'Add New Task';
    taskForm.appendChild(formTitle);

    const taskTitleLabel = document.createElement('label');
    taskTitleLabel.textContent = 'Title';
    taskTitleLabel.htmlFor = 'task-title';
    const taskTitle = document.createElement('input');
    taskTitle.type = 'text';
    taskTitle.setAttribute('id', 'taskTitle');
    taskForm.append(taskTitleLabel, taskTitle);

    const dueDateLabel = document.createElement('label');
    dueDateLabel.textContent = 'Due Date';
    dueDateLabel.htmlFor = 'due-date';
    const dueDate = document.createElement('input');
    dueDate.type = 'date';
    dueDate.setAttribute('id', 'due-date');
    taskForm.append(dueDateLabel, dueDate);

    const taskDescLabel = document.createElement('label');
    taskDescLabel.textContent = 'Description';
    taskDescLabel.htmlFor = 'description';
    const taskDescription = document.createElement('textarea');
    taskDescription.setAttribute('id', 'description');
    taskForm.append(taskDescLabel, taskDescription);

    const priorityLabel = document.createElement('label');
    priorityLabel.textContent = 'Priority';
    priorityLabel.htmlFor = 'priority';
    const priority = document.createElement('input');
    priority.type = 'range';
    priority.setAttribute('id', 'priority');
    taskForm.append(priorityLabel, priority);

    const submitBtn = document.createElement('button');
    submitBtn.type = 'button';
    submitBtn.textContent = 'Submit';
    const cancelBtn = document.createElement('button');
    cancelBtn.type = 'button';
    cancelBtn.textContent = 'Cancel';
    taskForm.append(submitBtn, cancelBtn);

    main.appendChild(taskForm);

    return {
        taskForm,
        taskTitle,
        dueDate,
        taskDescription,
        priority,
        submitBtn,
        cancelBtn,
    }
}

function createTask() {
    const main = document.querySelector('.main');

    const taskDiv = document.createElement('div');

    const checkDone = document.createElement('input');
    checkDone.type = 'checkbox';
    taskDiv.appendChild(checkDone);

    const title = document.createElement('p');
    title.textContent = createForm().taskTitle.textContent;

    const dueDate = document.createElement('p');
    dueDate.textContent = createForm().dueDate.textContent;

    const detailDiv = document.createElement('div');
    detailDiv.style.display = 'none';

    const details = document.createElement('button');
    details.type = 'button';
    details.textContent = 'Details'; 
    
    const description = document.createElement('p');
    description.textContent = createForm().taskDescription.textContent;

    const editBtn = document.createElement('button');
    editBtn.type = 'button';
    
    const deleteBtn = document.createElement('button');
    deleteBtn.type = 'button';
}