let enterButton = document.querySelector('#add');
let input = document.querySelector('#todo');
let ul = document.querySelector('ul');
let item = document.querySelector('li');

function inputLength(){
    return input.value.length;
}

function listLength(){
    return item.length;
}

function createListElement(){
    //Creates an element "li"
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(input.value)); //Makes text from input field the li text
    ul.appendChild(li);//Adds li to ul
    input.value = '';


//START STRIKETROUGH
//Because it's in the function, it only adds it for new items
function crossOut(){
    li.classList.toggle('done');
}
li.addEventListener('click',crossOut);
// END STRIKETROUGH

// START ADD DELETE BUTTON
let dBtn = document.createElement('i');
dBtn.classList.add('fas' ,'fa-trash-alt')
dBtn.appendChild(document.createTextNode(''));
li.appendChild(dBtn);
dBtn.addEventListener('click', deleteListItem);
//END ADD DELETE BUTTON

//ADD CLASS DELETE
function deleteListItem(){
    li.classList.add('delete');
}
//END CLASS DELETE
}
function addListAfterClick(){
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event){
    if (inputLength() > 0 && event.which ===13){
        createListElement();
    }
}

enterButton.addEventListener('click', addListAfterClick);
input.addEventListener('keypress', addListAfterKeypress);



