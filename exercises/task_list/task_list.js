"use strict";

const displayTaskList = tasks => {
    // empty string
    let taskString = ""

    if (tasks) {
       //converts stored date string to date object, and combine the two arrays to make a map
        tasks = tasks.map( task => [task[0], new Date(task[1])] );

      // sorts the arrays of array by due date.
        tasks.sort( (task1, task2) => { // sort by date
            const date1 = task1[1]; // get Date object from task1
            const date2 = task2[1]; // get Date object from task2
            if (date1 < date2) { return -1; }
            else if (date1 > date2) { return 1; }
            else { return 0; }
        });

        // changes arrays to one string
        taskString = tasks.reduce( (prev, curr) => {
            return prev + curr[1].toDateString() + " - " + curr[0] + "\n";
        }, "");
    }

    $("#task_list").val(taskString);


    $("#task").focus();
};

$(document).ready( () => {

    //gets JSON string from local storage.
    const taskString = localStorage.tasks;

   //converts from JSON string to an array
    const tasks = (taskString) ? JSON.parse(taskString) : [];

    
    $("#add_task").click( () => {
        //grabs whatever was typed in the task input
        const task = $("#task").val();

       //grabs whatever was typed in the due_date input
        const dateString = $("#due_date").val();

        //turns the due date into a Date object
        const dueDate = new Date(dateString);
// if task, dateStrong and dueDate are not invalid...
        if(task && dateString && dueDate != "Invalid Date") {

            //making an array
            const newTask = [task, dateString];

           //adds newTask to the current array
            tasks.push(newTask);

           //Converts array into string to be stored in local storage
            localStorage.tasks = JSON.stringify(tasks);

            //empty out the textboxes
            $("#task").val("");
            $("#due_date").val("");

            //displays task list.
            displayTaskList(tasks);
        }
        else {
            alert("Please enter a task and valid due date.");
            //put cursor in textbox
            $("#task").select();
        }
    });
    
    //click event handler for Clear Tasks
    $("#clear_tasks").click( () => {
        
        //set length of tasks to zero
        tasks.length = 0;

        //remove tasks from local storage
        localStorage.removeItem("tasks");

         //set task list to an empty string
        $("#task_list").val("");

        //set focus to task input box 
        $("#task").focus();
    });   
    
    //call function displayTaskList and pass variable tasks
    displayTaskList(tasks);
});
