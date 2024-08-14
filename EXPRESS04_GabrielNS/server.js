const express=require('express');
const mysql =require('mysql2');

//const mysql = require('./mysql_config') 

const app = express();
app.listem(3000, ()=>{
    console.log("Servidor em execução");
})

const conections =mysql.createConection(My)