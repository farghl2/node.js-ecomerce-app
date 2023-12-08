const express = require('express')
const dotenv = require("dotenv")
const morgan = require("morgan")
const categoriesRouter = require('./routes/categoriesRoutes')

const dbConnection = require('./config/db');

dotenv.config({path:'config.env'});

//app express
const app = express();

//middlewares
app.use(express.json());

if(process.env.NODE_ENV === 'devlopment'){
    app.use(morgan('dev'));
    console.log(`mode: ${process.env.NODE_ENV}`);
    
}

//Models




//services
app.use('/',categoriesRouter);




//db

dbConnection();


const PORT = process.PORT || 3000;
app.listen(PORT,()=>{
    console.log('the server start running');
})

