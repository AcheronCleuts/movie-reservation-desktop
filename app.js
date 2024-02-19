const { app, BrowserWindow } = require("electron");

function createWindow(){
    const win =  new BrowserWindow({
        width: 800,
        height: 800
    })
    win.loadFile("public/index.html");
};

app.whenReady().then(()=>{
    createWindow();
});
