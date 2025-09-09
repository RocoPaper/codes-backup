const userInput = document.getElementById('user-input')
const addBtn = document.getElementById('add')
const tasksList = document.querySelector('.tasks-list')
const allTasks = tasksList.querySelectorAll('.tasks-list div')



// 1- addTask Func 
// 2- delTask Func 
// 1- completeTask Func 

function createElement(task) {
    const newDiv = document.createElement('div')
    const delBtn = document.createElement('button')
    const newTask = document.createElement('h4')
    
    newDiv.setAttribute('id', 'new-task')
    newDiv.setAttribute('onclick', 'completeTask(this)')
    delBtn.setAttribute('id', 'del')
    delBtn.setAttribute('onclick', 'delTask(this)')
    newTask.textContent = task
    delBtn.textContent = 'Delete'
    newDiv.append(newTask, delBtn)

    return newDiv
}

//* Add Task
function addTask() {
    const userTask = userInput.value;
    const task = createElement(userTask)
    tasksList.appendChild(task)  
    userInput.value = ''
}

addBtn.addEventListener('click', addTask)
userInput.addEventListener('keypress', (e) => {
    if(e.key === 'Enter'){
        e.preventDefault()
        addTask()
    }
})

// function completeTask(e) {
//     console.log(e)
// }

console.log(allTasks);

//* Complete Task
function completeTask(e) {
        // const target = e.currentTarget
        e.classList.toggle('checked')
}
// allTasks.forEach(task => {
//     task.addEventListener('click', (e) => {
//         const target = e.currentTarget
//         target.classList.toggle('checked')
//     })
// })


//* Delete Task
function delTask(e) {
    // console.log(e);
    // console.log(e.parentNode);
    // const parentElement = e.parentNode
    // parentElement.remove()
    if(confirm('Are you sure? ')){
        e.parentNode.remove() 
    }
       
}