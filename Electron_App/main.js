const electron = require('electron');
const Starling = require('starling-developer-sdk');
// Module to control application life.
const app = electron.app
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow
function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 1281, height: 800, minWidth: 1281, minHeight: 800})

  // and load the index.html of the app.
  mainWindow.loadURL(`file://${__dirname}/index.html`)

  // Open the DevTools.
  //mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

function getStarlingAccount(){
  window.staraccount = null;
  window.starBalance = null;
  const client = new Starling({
    accessToken: 'nTnCpXU98EGSgwTGiT2STq6Ns7GWh9hFlyuf7ePPrVlCiGNqxuPXhwJh0yZzpkXC',
    apiUrl: 'https://api-sandbox.starlingbank.com'
  });
  ret = client.getAccount()
    .then(({data}) =>  window.staraccount = data)
    .catch(err => alert('err'));
  client.getBalance()
  .then(({data}) =>  window.starBalance = data)
  .catch(err => console.log(err)); 

  return ret; 
}  

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
