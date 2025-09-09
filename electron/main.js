const { app, BrowserWindow } = require("electron");
const path = require("path");
const url = require("url");

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 700,
    fullscreenable: true,
    resizable: true, // ❌ prevents resizing
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  if (process.env.NODE_ENV === "development") {
    win.loadURL("http://localhost:5173");
    win.webContents.openDevTools(); // optional: auto-open devtools
  } else {
    const indexPath = path.join(__dirname, "..", "dist", "index.html");
    win.loadURL(
      url.format({
        pathname: indexPath,
        protocol: "file:",
        slashes: true,
      })
    );
  }
}

app.whenReady().then(() => {
  createWindow();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
