const bodyparser = require('body-parser');
const mongoClient = require('mongodb').MongoClient;
const express = require('express');
const app = express();

var db;

mongoClient.connect('mongodb://author:Password1234@ds161497.mlab.com:61497/my_profile',(err, database) => {
	if(err){
		return console.log("Database connection failed due to:"+ err);
	}else {
		console.log("Connection to Mongodb established successfully");
		db = database;
		//app.set('view engine','html');
		
		app.listen(3000,(function(){
			console.log("Listening on port: 3000");
		}));
		
		app.use(bodyparser.urlencoded({extended:true}));
		app.use(express.static(__dirname + '/views'));
		app.post('/visitors', (req, res) =>{
			db.collection('visitors').save(req.body, (err, result) =>{
				if(err){
					return console.log('Visitor information not saved due to:'+err);
				}else{
					res.redirect('/');
					console.log(result);
				}
			});
		});
		
		app.get('/',(req,res)=> {
			res.render('index.html');
		});
		
		}
})