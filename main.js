const { app, BrowserWindow, Menu, ipcMain } = require("electron");
const path = require("path");

let mainWindow;

app.on("ready", () => {
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        show: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,  // Make sure to set this to false to use nodeIntegration
        }
    });

    mainWindow.maximize();

    mainWindow.once("ready-to-show", () => {
        mainWindow.show();
    });

    Menu.setApplicationMenu(null);
    mainWindow.loadFile('index.html');

    mainWindow.on("closed", () => {
        mainWindow = null;
    });

    // Handle the content update request from renderer process
    ipcMain.on('update-content', (event, contentType) => {
        event.sender.send('update-content-response', contentType);
    });
});

app.on("activate", () => {
    if (mainWindow === null) {
        mainWindow = new BrowserWindow({
            width: 1200,
            height: 800,
            webPreferences: {
                nodeIntegration: true,
            },
        });
        mainWindow.loadFile('index.html');
    }
});
