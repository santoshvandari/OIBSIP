// // task list template
// <tr>
//     <th scope="row">1</th>
//     <td>Buy groceries for next week</td>
//     <td>In progress</td>
//     <td>
//         <button type="submit" class="btn btn-danger">Delete</button>
//         <button type="submit" class="btn btn-success ms-1">Finished</button>
//     </td>
// </tr>

//Creating the Local Storage to SetData
let taskList = [];
function setData(task) {
    if(getItem(task)==false){
        // console.log(getItem(task))
        if(task){
            // console.log(task)
            taskList=getData() || [];
            taskList.push(task);
            data=JSON.stringify(taskList)
            console.log(data)
            localStorage.setItem("tasklist",JSON.stringify(taskList));
        }else{
            console.log("Task is empty");
        }
    }else{
        console.log("Task already exists");
    }
}
function getData() {
    let str = localStorage.getItem("tasklist");
    if (str != null) {
        // console.log(str)
        taskList = JSON.parse(str);
        // console.log(taskList)
        return taskList;
    }else{
        return null;
    }
}

//Reading Item
function getItem(item){
    let str = localStorage.getItem('tasklist')
    let task  = JSON.parse(str)
    // console.log(task)
    if(task!=null){
        let dataindex= task.indexOf(item)
        if(dataindex==-1){
            return false
        }else{
            return true
        }
    }else{
        return false
    }
}


// data=['santosh','helloq']
// indexdata=data.indexOf("hello")
// console.log(indexdata)

setData('test')
setData('test')
setData('santosh')
setData('bhandari')
setData('hello')
setData('tasfasf')
// getData();