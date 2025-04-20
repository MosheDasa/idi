import { app, BrowserWindow } from "electron";
import * as path from "path";
import * as fs from "fs";

// Custom file watching for development
if (process.env.NODE_ENV !== "production") {
  try {
    // Watch the main file for changes
    const mainFile = path.join(__dirname, "main.js");
    fs.watch(mainFile, (eventType) => {
      if (eventType === "change") {
        console.log("Main file changed, restarting...");
        app.relaunch();
        app.exit(0);
      }
    });

    // Watch the renderer file for changes
    const rendererFile = path.join(__dirname, "renderer.js");
    fs.watch(rendererFile, (eventType) => {
      if (eventType === "change") {
        console.log("Renderer file changed, reloading window...");
        if (mainWindow && !mainWindow.isDestroyed()) {
          mainWindow.reload();
        }
      }
    });
  } catch (err) {
    console.log("Error setting up file watching:", err);
  }
}

let mainWindow: BrowserWindow | null = null;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  mainWindow.loadFile(path.join(__dirname, "index.html"));
  mainWindow.setTitle("ברוך הבא");
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
