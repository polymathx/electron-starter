/* Initialize and Include modules */
const electron = require('./app/inc/electron.init');
const constants = require('./app/models/main.model');
const path = require('path');
const fs = require('fs');

/* Set Config Variables */
const config = constants.config;

/* Set electron variables */
app = electron.app;
win = electron.win;

/*Form Handler */
exports.handleForm = function handleForm(targetWindow, fdata) {
    console.log("this is the data from the form ->", fdata);
    targetWindow.webContents.send('form-received', JSON.stringify(fdata));
};