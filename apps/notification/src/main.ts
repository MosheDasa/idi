import { app, BrowserWindow, screen } from "electron";
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
        if (notificationWindow && !notificationWindow.isDestroyed()) {
          notificationWindow.reload();
        }
      }
    });
  } catch (err) {
    console.log("Error setting up file watching:", err);
  }
}

let notificationWindow: BrowserWindow | null = null;

function createWindow() {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;

  notificationWindow = new BrowserWindow({
    width: 300,
    height: 200,
    x: width - 320,
    y: height - 220,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  notificationWindow.loadFile(path.join(__dirname, "index.html"));

  // Auto-close after 5 seconds
  setTimeout(() => {
    if (notificationWindow && !notificationWindow.isDestroyed()) {
      notificationWindow.close();
    }
  }, 5000);
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  app.quit();
});
