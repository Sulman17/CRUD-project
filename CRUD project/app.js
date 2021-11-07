require('./models/database');
const express = require('express');
const app = express();
const path = require('path');
const exphbs = require('express-handlebars');


// const bodyparser = require('body-parser');
const employeeController = require('./routes/emplyeeroutes');


app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // To parse the incoming requests with JSON payloads

// app.use(bodyparser.urlencoded({
//         extended: true
//     }));
//     app.use(bodyparser.json());
    
app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs({ extname: 'hbs', defaultLayout: 'mainLayout', layoutsDir: __dirname + '/views/layouts/' }));
app.set('view engine', 'hbs');
    // connection with database
    
    
    // routes

    app.use('/employee', employeeController);
    
    app.listen(3000);
    
    
    
