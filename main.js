const {app,BrowserWindow} = require('electron')
createwindow = ()=>
{
    const newapp = new BrowserWindow({
        width: 800,
        height: 800,
        resizable: false,
        webPreferences: {nodeIntegration: true},
    })
    newapp.loadFile('index.html')
}
app.whenReady().then(createwindow)