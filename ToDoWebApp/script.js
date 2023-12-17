//Creating the Local Storage to SetData
let taskList = [];
function setData(task) {
    if (getItem(task) == false) {
        if (task) {
            taskList = getData() || [];
            taskList.push(task);
            data = JSON.stringify(taskList)
            console.log(data)
            localStorage.setItem("tasklist", JSON.stringify(taskList));
        }
    } else {
        console.log("Task already exists");
    }
}
function getData() {
    let str = localStorage.getItem("tasklist");
    if (str != null) {
        taskList = JSON.parse(str);
        return taskList;
    } else {
        return null;
    }
}

//Reading Item
function getItem(item) {
    let str = localStorage.getItem('tasklist')
    let task = JSON.parse(str)
    if (task != null) {
        let dataindex = task.indexOf(item)
        if (dataindex == -1) {
            return false
        } else {
            return true
        }
    } else {
        return false
    }
}

// Writing the Code for the Project
let InputTask = document.getElementById('inputedtask');
let tasklisttable = document.getElementById('tasklist');
console.log(tasklisttable)
document.getElementById('tasksubmit').addEventListener('click', function () {
    inputedtask = InputTask.value;
    if (!inputedtask) {
        console.log("Please Enter the Task");
    } else {
        setData(inputedtask);
        console.log(inputedtask)
    }
    ListTasks();
})

// Reading the Data from the Local Storage listing the task
function ListTasks() {
    let taskList = getData();
    console.log(taskList)
    if (taskList) {
        html = '';
        counter = 1;
        for (task of taskList) {
            console.log(task)
            html += `<tr>
                 <th scope="row">${counter}</th>
                 <td>${task}</td>
                 <td>Progress</td>
                 <td>
                    <button type="submit" class="btn btn-danger" onclick='DeleteEl("${task}")'>Delete</button>
                    <button type="submit" class="btn btn-success ms-1">Finished</button>
                 </td>
             </tr>`;
            counter++;
            console.log(html)

        }
        tasklisttable.innerHTML = html;
    }
}

// Calling the ListTasks Function
ListTasks();
function DeleteEl(task){
    tasklist=getData();
    index=taskList.indexOf(task)
    console.log(index)
    let result = tasklist.filter((item,i)=>{
        if(i!=index){
            return item
        }
    })
    localStorage.setItem("tasklist", JSON.stringify(result));
    ListTasks();
}