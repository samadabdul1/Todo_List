 const todoInput =document.querySelector('.todo-input');
 const todoButton =document.querySelector('.todo-button');
 const todoList =document.querySelector('.todo-list');
const filterOption=document.querySelector(".filter-todo")
// const tastCount=document.querySelector()



todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteCheck);
filterOption.addEventListener('click',filterTodo);



var clicks = document.getElementById('add-button');
var clickCount=document.getElementById('counter');
count=0;



function addTodo(event){
    //prevent from submission
    count++;
    event.preventDefault();
    //todo div
    const todoDiv=document.createElement("div");
    todoDiv.classList.add("todo");
    //create-li
    const  newTodo=document.createElement('li');
    newTodo.innerText=todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //check mark
    const completedButton=document.createElement('button');
    completedButton.innerHTML='<i class="fas fa-check"></i>' ;
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //check trash
    const trashButton=document.createElement('button');
    trashButton.innerHTML='<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    todoList.appendChild(todoDiv);
    //clear todoinput value
    todoInput.value="";

}

function deleteCheck(e){
    const item=e.target;
    //delete todo
    if(item.classList[0] === "trash-btn"){
        if(count==0){
            clickCount.innerText=" "+0+" ";
        }
        else{
        count--;
        clickCount.innerText=" "+count+" ";
        }
        
        const todo=item.parentElement;
        todo.classList.add("fall")
        todo.addEventListener('transitionend',function(){
            todo.remove();
        });
    }
    //check mark
    if(item.classList[0] === "complete-btn"){
        if(count==0){
            clickCount.innerText=" "+0+" ";
        }
        else{
        count--;
        clickCount.innerText=" "+count+" ";
        }
        
        const todo=item.parentElement;
        todo.classList.toggle("completed");
    }
}


function filterTodo(e){
    const todos =todoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
            case "all":
                todo.style.display='flex';
                break;
            case "completed":
                if(todo.classList.contains('completed')){
                    todo.style.display='flex';
                }
                else{
                    todo.style.display="none";
                }
                break;
            case "uncompleted":
                if(!todo.classList.contains('completed')){
                    todo.style.display='flex';
                }
                else{
                    todo.style.display="none";
                }
                break;

        }
    });



}

// function TaskCount(selectedList){
//     const incompleteTask=selectedList.
// }


clicks.addEventListener('click',function(){
    console.log(count);
    clickCount.innerText=" "+count+" ";

})