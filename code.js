function add_tasks(info){
    task = document.createElement("label")
    task_checkbox = document.createElement("input")
    task_checkbox.type = "checkbox"
    task_information = document.createTextNode(info)
    delete_button = document.createElement("button")
    delete_button.style.backgroundColor = "red"
    delete_button.style.padding = "8px"
    document.body.appendChild(task_checkbox)
    document.body.appendChild(task_information)
    document.body.appendChild(delete_button)
    delete_button.addEventListener("click", ()=>{
        delete_task()
})
}

const input_information = document.getElementById("new_task")
const btn = document.getElementById("add_task");
btn.addEventListener("click", ()=>{
    add_tasks(input_information.value)
    input_information.value = ""
})


function delete_task(){
    task_checkbox.remove();
    task_information.remove();
    delete_button.remove()
}