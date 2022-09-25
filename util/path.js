const path = require('path');

// console.log(process.mainModule.filename);
// C:\Users\scs\Desktop\Nodejs-complete-guide\app.js

module.exports = path.dirname(process.mainModule.filename);
