// var chalk= require('chalk')
// var getNotes = require('./notes.js')
var command = process.argv[2]

console.log(process.argv);

if (command === 'add') {
    console.log('adding notes');
}
else if (command === 'remove') {
    console.log('remove notes');
}