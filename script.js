
let currentID =3;

function addTask() {
    let task = document.getElementById("newtask");
    taskValue = task.value.trim();
    if (taskValue === "") {
        swal.fire({
            title: "error!",
            text: "Task cannot be empty",
            icon: "error"
        })
        return;
    }

    let newDate = new Date().toUTCString();


    let template = `<div class="taskcard" id="${currentID}">

                        <p class="task">
                            ${taskValue} - ${newDate}
                        </p>
                        <div class="text-end">
                            <button class="btn btn-warning " onclick="deleteTask('3')">Delete</button>
                        </div>
                    </div>`

    let parent = document.getElementById("tasklist");
    parent.innerHTML = parent.innerHTML + template;
    Swal.fire({
        title: "Good job!",
        text: "New Task created!!!",
        icon: "success"
    });
    currentID++;
    task.value="";

}


function deleteTask(id){
    let element = document.getElementById(id);
    element.remove();
    Swal.fire({
        title: "Task Removed!!!",
        text: "your task have been deleted!",
        icon: "warning"
    });

    currentID++;

    
}
let deleteAll=document.getElementById("deleteAll");
deleteAll.addEventListener("click", function(){
    let parent =document.getElementById("tasklist");
    parent.innerHTML="";

    Swal.fire({
        title: "",
        text: "all task deleted",
        icon: "warning"
    });
})