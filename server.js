// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var fs = require('fs');
global.__base = __dirname + '/';
// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8081;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/getcases', function(req, res) {
	var fileData = fs.readFileSync(__base+"data/cases.json");
    res.json({ cases: JSON.parse(fileData)});   
});

router.post('/savecase', function(req, res) {
	//console.log(req.body);
	var file = __base+"data/cases.json";
	//Open file in read mode and append new data to it and save the file.
	fs.readFile(file, 'utf8', function(err, data){

        var json = [];

        try{
            json = JSON.parse(data);
        } catch(e){
            res.json({ data: 2 });
            return;
        }
        var id = eval(json.length + 1);
        
        var newThing = {
		  "id":id,
	      "dName":req.body.dfname,
	      "dSurname":req.body.dlname,
	      "dAddress": req.body.daddress,
	      "dPostCode": req.body.dpin,
	      "dod": req.body.dfname,
	      "maritalStatus": req.body.ismarried,
	      "bCerti": req.body.bcerti,
	      "dCerti": req.body.dcerti,
	      "cPhone": req.body.phone,
	      "cName": req.body.cfname,
	      "cSurname": req.body.clname,
	      "cContact": "Phone",
	      "cContactTime": req.body.contacttime,
	      "funeralType": req.body.funeraltype
		};
        json.push(newThing);

        fs.writeFile(file, JSON.stringify(json), function (err) {
        	if (err) res.json({ data: 2 });;
        	res.json({ data: 1 });
        });
    });
});

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'DELETE, HEAD, GET, OPTIONS, POST, PUT');
    res.header('Access-Control-Allow-Headers','Content-Type, Content-Range, Content-Disposition, Content-Description');
    next();
}
app.use(allowCrossDomain);

app.use(express.static('www'));
// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);


// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Server Application is Running on Port ' + port);