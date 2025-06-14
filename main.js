const {app, BrowserWindow} = require('electron');
const path = require('path');

function createWindow () {
    const win = new BrowserWindow({
        width: 500,
        height: 500,
        resizable: true,
        webPreferences: {
            reload: path.join(__dirname, 'renderer.js'),
            nodeIntegration: true,
            contextIsolation: false
        }
    })
    
    win.loadFile('index.html');
}

app.whenReady().then(createWindow);