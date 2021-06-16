
let form = document.querySelector('#form').value;

let tasks = document.querySelector('#tasks');
let taskDescription = document.querySelector('#taskDescription');
let status = document.querySelector('#status');
let  asingTo = document.querySelector('#asignTo');
let date = document.querySelector('#date');
let btn = document.querySelector('#btn');
let tasksDisplay = document.querySelector('#tasksDisplay');

  
 
// form.addEventListener('submit', validTasks)

 function validTasks (){
    if (tasks.value.length < 5) {
        alert("Task Name to be entered");
      
      }else {
                alert("continue");
            }
    };
    btn.addEventListener('click', validTasks)

 function validTasksDesc (){
    if (taskDescription.length < 9){
        alert('Task description must be 9 characters long')
        
        return false
    }else {
        alert("continue to status");
    }

    
};

 
function validStatus (){
   if (status.value == ""){
       alert('Choose one Status')
   }
};

 
function validAsign (){
   if (asingTo.value == 0 ){
       alert('Choose someone to do the Tasks')
   }
};

 
function validDate (){
   if (date.value == "" ){
       alert('Choose a date')
   
   }
};




function copy_task (){
    document.getElementById('tasks').value =
    document.getElementById('Task_1').value

    document.getElementById('tasks').value =
    document.getElementById('Task_1').value

    document.getElementById('tasks').value =
    document.getElementById('Task_1').value

    document.getElementById('tasks').value =
    document.getElementById('Task_1').value

    document.getElementById('tasks').value =
    document.getElementById('Task_1').value


}












