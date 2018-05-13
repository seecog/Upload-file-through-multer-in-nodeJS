var express = require("express");
var app=express();
var multer = require('multer');
var route = express.Router();
var storage = multer.diskStorage({
	destination: function (req, file, cb) {
		console.log("nsde dest ",req)
	  cb(null, 'uploads')
	},
	filename: function (req, file, cb) {
		console.log("The fle s ",file)
	 // cb(null, file.fieldname + '-' + Date.now())
	 cb(null,file.originalname)
	}
  })
var upload = multer({storage : storage});
//bodyparser starts
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
//bodyparser end
route.post('/data',upload.single('pic'),function(req,res){
	console.log("Uploaded..")
	res.json({message:'File uploaded'})
});

app.use('/api',route);
app.listen(3000,function(){
	console.log('server starts');
});