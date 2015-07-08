// Start the crash reporter
var crashReporter = require('crash-reporter');
crashReporter.start({
    productName: 'ChatHops.io',
    companyName: 'ChatHops',
    submitUrl: 'https://chathops.io/api/crashreport',
    autoSubmit: true
});

// Start the client interface
var electron = require('app');
var browserWindow = require('browser-window');
var mainWindow = null;

// Quit when all windows are closed.
electron.on('window-all-closed', function () {
    if (process.platform != 'darwin') {
        electron.quit();
    }
});

// When everything has been initialized and it's time to render the window
electron.on('ready', function () {

    // Create the browser window.
    mainWindow = new browserWindow({
        width: 800,
        height: 600,
        frame: true
    });

    mainWindow.loadUrl(__dirname + '/app/index.html');

    // Emitted when the window is closed.
    mainWindow.on('closed', function () {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null;
    });
});