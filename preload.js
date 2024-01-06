const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  testEvent: (title) => ipcRenderer.send("test-chanel", title),
});
