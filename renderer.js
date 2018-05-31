const electron = require('electron');
if (process.platform === 'win32') {
        document.getElementsByClassName('inside')[0].setAttribute("class", "inside win32color"); 
        console.log('process is running on win32');
        require('electron-titlebar');
} else if (process.platform === 'darwin') {
        console.log('process is running on darwin')
} else {
        console.log('process is running on unsupported os!')
}
