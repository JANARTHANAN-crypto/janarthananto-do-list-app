// JavaScript for adding new tasks
document.getElementById("add-task-btn").addEventListener("click", function() {
    // Get the value of the new task input
    const newTaskName = document.getElementById("new-task-input").value;
    
    // Check if the input is not empty
    if (newTaskName.trim() !== "") {
        // Create a new list item (li)
        const newTaskItem = document.createElement("li");
        
        // Create span for the task time (hardcoded here as an example)
        const taskTime = document.createElement("span");
        taskTime.className = "task-time";
        taskTime.innerText = "New Time"; // You can dynamically set time as needed
        
        // Create span for the task name
        const taskName = document.createElement("span");
        taskName.className = "task-name";
        taskName.innerText = newTaskName;

        // Append both spans to the list item
        newTaskItem.appendChild(taskTime);
        newTaskItem.appendChild(taskName);
        
        // Append the new task item to the task list
        document.getElementById("task-list").appendChild(newTaskItem);
        
        // Clear the input field
        document.getElementById("new-task-input").value = "";
    } else {
        alert("Please enter a task!");
    }
});

