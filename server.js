const express = require("express");
const path = require('path');

<<<<<<< HEAD
const PORT = process.env.PORT || 3000; 
=======
const PORT = 3000; 
>>>>>>> 937e20b4e149e3021e97e3bc064aef2dea681fa3
const app = express();



app.use(express.static('./dist/'));


app.use('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.use('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/notfound.html'));
});

app.listen(PORT, function(){
    console.log(`Server start on port ${PORT}!`);
});