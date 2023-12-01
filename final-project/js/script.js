document.addEventListener('DOMContentLoaded', function () {
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');
  const addTaskBtn = document.getElementById('addTaskBtn');

  function removeTask(button) {}

  // Load task from local storage
  loadTasks();

  addTaskBtn.addEventListener('click', function () {
    // Get value from input field
    const newTask = taskInput.value.trim();

    // Check if the input is not empty
    if (newTask !== '') {
      // Create a new list item
      const li = document.createElement('li');
      li.textContent = newTask;

      // Create a remove button for each task item
      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'Remove';
      removeBtn.addEventListener('click', function () {
        // remove associated task item
        removeTask(li);
        // save updated list
        saveTask();
      });

      li.appendChild(removeBtn);
      // Append the new task to the list
      taskList.appendChild(li);

      // Save updated list to local storage
      saveTask();

      // Clear input field
      taskInput.value = '';
    }
  });
  function removeTask(task) {
    taskList.removeChild(task);
  }
  function saveTask() {
    // get the current task list
    const tasks = Array.from(taskList.children).map((li) => li.textContent);

    // Save tasks items to local storage
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  function loadTasks() {
    // Retrieve tasks from local storage
    const storedTasks = localStorage.getItem('tasks');

    // Check if there is stored data
    if (storedTasks) {
      const tasks = JSON.parse(storedTasks);
      tasks.forEach((element) => {
        const taskItem = document.createElement('li');
        taskItem.textContent = element;
        taskList.appendChild(taskItem);
      });
    }
  }
});
