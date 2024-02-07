const express=require('express');
const fs = require('fs');
const routes=express.Router();
routes.use(express.urlencoded({extended:true}));
routes.use(express.static("./public"));
const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost/genre").then(()=>{
	console.log("connected");
	});
//const mongoose=require('./public/database');
const { Genre } = require('../database');
routes.get('/',(req,res)=>{
	res.render('pages/index');
});
routes.get('/insert',(req,res)=>{
	res.render('pages/insert');
});
routes.get('/update',(req,res)=>{
	res.render('pages/update');
});
routes.get('/delete',(req,res)=>{
	res.render('pages/delete');
});

routes.post('/insertcourse',(req,res)=>{
	async function insertcourse(){

		const imageBuffer = fs.readFileSync(req.body.image);

      const genre=new Genre({
      	name:req.body.movie,
      	genre:req.body.genre,
      	rating:req.body.rating,
      	image:{data:imageBuffer,contentType:'image/jpeg'}
      });
      try{
      	await genre.validate();
      	const result=await genre.save();
      	if(result){
      		res.render('pages/insert');
      	}
      	else{
      		console.log(result);
      	}
      	
      }
catch(ex){
	console.log(ex.message);
}



  }
  insertcourse();
});
routes.post('/search',(req,res)=>{
async function findgenre(){
	const genr=await Genre.find({genre:req.body.name});
	res.render('pages/display',{genr:genr});
	console.log(genr);
} 
findgenre();
});
module.exports=routes;