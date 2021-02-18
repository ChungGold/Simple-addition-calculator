//sets up express
const express = require('express');
const app = express();

//set up body parser (npm install body-parser)
const bodyParser = require('body-parser');

//urlencoded = specifically for forms, extended = post nested objects
app.use(bodyParser.urlencoded({extended: true}));

//sets home route
app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

//listen to port 3000
app.listen(3000, function(){
    console.log('Server started');
    console.log(__dirname);
});

//handles post requests that go to root, and responds by calling function
app.post('/', function(req, res){
    //holds value of data from form
    let num1 = req.body.num1;
    let num2 = req.body.num2;
    
    //calculator function
    let result = num1 + num2;

    res.send(result);
});







