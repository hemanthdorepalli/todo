// to store the input values
let TaskList=[]
console.log(TaskList)
// function to add the task
function Savetask(){
    // debugger
    // getting input values from the user
    const Taskname=document.querySelector('#inputval').value
    console.log(Taskname)
    if(Taskname.trim()!==''){
    TaskData={
        taskid : TaskList.length+1,
        taskname:Taskname
    }
    console.log(TaskData)
    // pushing data into array
    TaskList.push(TaskData)
    // empty the input values
    document.querySelector('#inputval').value=''

    // calling the function to render ui
    RenderUi()

}    
}
// function to rendering the ui icons
function RenderUi(){
    // debugger
    document.getElementById('list').innerHTML=''
    for(let i=0;i<TaskList.length;i++){
        // creating the li items to display the tasks
        const ListItem = document.createElement('li');
        ListItem.classList.add('crud')
        
        // storing the paragraph for taskname
        const Paraele=document.createElement('p')
        Paraele.innerText=TaskList[i].taskname
        
        // appending para to list item
        ListItem.appendChild(Paraele)

        // getting the ullist
        document.getElementById('list').appendChild(ListItem)

        // creating div element
        const Divele=document.createElement('div')
        Divele.classList.add('tasks')

        
       

        // creating edit icon
        const Editicon=document.createElement('i')
        Editicon.classList.add('bi')
        Editicon.classList.add('bi-pen')

        // adding functonality to edit and del icons
        Editicon.addEventListener('click',Edittask)
        Editicon.taskid=TaskList[i].taskid

        // creating delete icon
        const Delicon=document.createElement('i')
        Delicon.classList.add('bi')
        Delicon.classList.add('bi-trash')

        Delicon.addEventListener('click',Deletetask)
        Delicon.taskid=TaskList[i].taskid

        // appending to div ele
        Divele.appendChild(Editicon)
        Divele.appendChild(Delicon)

        // appending div ele to li element
        ListItem.appendChild(Divele)
        ListItem.style.backgroundColor='yellowgreen';
        ListItem.style.marginBottom='5px';
        ListItem.style.display='flex';
        ListItem.style.justifyContent='space-around'
   }
}
// function to edit the task
function Edittask(e){

    console.log(e.target);
    const val=TaskList.find((ele)=>ele.taskid==e.target.taskid)
    console.log(val);
    document.querySelector('#inputval').value=val.taskname
    // TaskList.splice(index,1)
}
// function to delete the task
function Deletetask(e){
    // console.log(e.target);
    const index=TaskList.findIndex((ele)=>ele.taskid==e.target.taskid)
    console.log(index);
    TaskList.splice(index,1)
    RenderUi()
    
}
// function to removeall the task
function RemoveAlltask(){
    TaskList.splice(0)
    RenderUi()
}


