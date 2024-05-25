"use strict";

$(document).ready(() => {
    $('#add_task').click(() => {
        const textbox = $('#task');
        const task = textbox.val();

        if (task === '') { //if nothing is entered...
            alert('Please enter a task');
            textbox.focus();
        } else {
			   let tasks = localStorage.myTasks || "";  // "" is default, gives empty string instead of error
            localStorage.myTasks = tasks.concat(task, "\n"); //puts whatever is typed in the box in storage, then concatenates each task by putting it on a new line
			     textbox.val(""); // clears textbox
            $('#task_list').val(localStorage.myTasks); //adds the data to web storage
            textbox.focus();
			
		}
    });
	
	
    $('#clear_tasks').click(() => {
        localStorage.removeItem("myTasks"); //removes myTask from local storage
        $('#task_list').val(""); // sets the task_list to a empty string
        $('#task').focus();
    });
	    // Set the task list value from localStorage outside the click events
    $('#task_list').val(localStorage.myTasks);

    // Move the focus to the task text box
    $('#task').focus();
});
