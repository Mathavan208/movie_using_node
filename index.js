const express=require('express');
const app=express();
const route=require('./routes/link');
const ejs=require('ejs');
app.set('view engine','ejs');
app.use('/',route);
app.listen(5000,()=>{console.log("listening to http://localhost:5000/")});
