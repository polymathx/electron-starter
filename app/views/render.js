const { remote, ipcRenderer } = require('electron');
const { handleForm} = remote.require('./main');
const currentWindow = remote.getCurrentWindow();

const submitFormButton = document.querySelector('#ipcForm');
const responseParagraph = document.getElementById('response');


/* EXAMPLE FORM */
submitFormButton.addEventListener("submit", function(event){
        event.preventDefault();   // stop the form from submitting
        let args = {};
        args.firstname = document.getElementById("firstname").value;
        handleForm(currentWindow, args);
});
ipcRenderer.on('form-received', function(event, args){
    responseParagraph.innerHTML = args;
});