
const removeToDo=()=>{
  
        event.currentTarget.parentElement.parentElement.remove();
        document.getElementById("toDoText").focus();
};

const addToDo=()=>{
   
     const val= document.getElementById("toDoText").value;
     document.getElementById("toDoText").focus();
     document.getElementById("toDoText").value="";

     if(val!==''){

        document.getElementById("toDoText").style.borderColor='white';

        let li=document.createElement("li");
        li.setAttribute('contenteditable',false);

        let listText = document.createTextNode(val);
        li.setAttribute('class','list-group-item d-flex justify-content-between align-items-center');
        li.appendChild(listText);
   
       let deleteButtonSpan=document.createElement("SPAN");
       deleteButtonSpan.setAttribute('class','glyphicon glyphicon-trash');
       let deleteButton=document.createElement("button");
       deleteButton.setAttribute('class','btn btn-default btn-sm');
       deleteButton.onclick=removeToDo;
       deleteButton.appendChild(deleteButtonSpan);

       let editButtonSpan=document.createElement("SPAN");
       editButtonSpan.setAttribute('contentEditable',false);
       editButtonSpan.setAttribute('class' ,'glyphicon glyphicon-pencil');
       let editButton=document.createElement("button");
       editButton.setAttribute('class','btn btn-default btn-sm');
       editButton.onclick=editTodo;
       editButton.appendChild(editButtonSpan);
      
       let outerSpan=document.createElement("SPAN");
       outerSpan.setAttribute('class','btn-toolbar pull-right');
       outerSpan.appendChild(deleteButton);
       outerSpan.appendChild(editButton);
      
       li.appendChild(outerSpan);
   
       document.getElementById("listView").appendChild(li);
     }else{
        document.getElementById("toDoText").style.borderColor='red';
     }
    
}; 

const editTodo=()=>{
    let listId=event.currentTarget.parentElement.parentElement;
    let val=listId.innerText;
    let typingTimer;  
 
    if(listId.contentEditable===true){
       listId.focus();
     
    }
    else{
        listId.setAttribute('contenteditable',true);
        listId.focus();
    }
   
    listId.addEventListener('keyup', () => {
       clearTimeout(typingTimer);
       if(listId.innerText){
        typingTimer = setTimeout(() =>{
            listId.setAttribute('contenteditable',false);
            document.getElementById("toDoText").focus();
    
        }  , 3000);
       }

    });    



};


