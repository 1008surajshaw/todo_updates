const todoList =["dance","cook","work"];

exports.addTask = (task) =>{
   todoList.push(task)
}
exports.deleteTask = (index) =>{
    if(index>=0 && index <todoList.length){
        todoList.splice(index,1);
        return true;
    }
    return false;
}

exports.getTask =() =>{
   
    return todoList
}