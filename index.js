var addNoteForm = document.querySelector('#addnote-form');
var notesList = document.querySelector('#note-list');
var inputField = document.querySelector('#input-field');

var createNote = function(parent,info) {
    var div = document.createElement('div');
    var button = document.createElement('button');
    var span = document.createElement('span');
    var note = document.createTextNode(info);
    span.appendChild(note);
    div.appendChild(span);
    button = createDeleteButton(button);
    div.appendChild(button);
    parent.appendChild(div);
}

var createDeleteButton = function(button) {
    button.classList.add('fas','fa-times','fa-lg','ml-3');
    button.addEventListener('click', function(event) {
        button.parentNode.remove();
    });
    return button;
}

var createNoteHandler = function(event) {
    event.preventDefault();
    createNote(notesList,inputField.value);
    inputField.value = '';
    inputField.focus();
}


addNoteForm.addEventListener('submit',createNoteHandler);


