const { app, BrowserWindow } = require("electron");
let win;
function createWindow() {
  win = new BrowserWindow({
    width: 600,
    height: 600,
    backgroundColor: "#ffffff",
  });

  win.loadURL(`file://${__dirname}/dist/AISIW/index.html`);

  win.webContents.openDevTools();
  win.on("closed", function () {
    win = null;
  });
}

app.on("ready", createWindow);

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
