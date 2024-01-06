import { app, BrowserWindow, ipcMain, IpcMainEvent } from 'electron';
import * as path from 'path';
import * as edge from 'electron-edge-js';


let win;
function createWindow() {
  win = new BrowserWindow({
    width: 600,
    height: 600,
    backgroundColor: "#ffffff",
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  });

  win.loadURL(`file://${__dirname}/dist/AISIW/index.html`);

  win.webContents.openDevTools();
  win.on("closed", function () {
    win = null;
  });
}



app.on("ready", ()=> {

  // setup event
  ipcMain.on('test-chanel', (event: IpcMainEvent, data) => {
    console.log('data:', data);

    var helloWorld = edge.func(function () {
      /*
        async (input) => {
            return ".NET Welcomes " + input.ToString();
        }
    */});

    helloWorld('test-input', function (error, result) {
      if (error) throw error;
      console.log(result);
    });
  
  });

  createWindow()
});

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
