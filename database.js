const mongoose=require('mongoose');
const schema =mongoose.Schema({
	name:{type:String,required:true,minlength:5,maxlength:100,lowercase:true},
	genre:{type:String,required:true,minlength:5,maxlength:100,lowercase:true},
	rating:{type:Number,required:true},
	date:{type:Date,default:Date.now},
	image:{data:Buffer,contentType:String}

});
const Genre=mongoose.model('genres',schema);
exports.Genre=Genre;