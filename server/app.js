var express = require('express'),
//all the express methods are now attached to the app variable
	app     = express(),
	//need the http module and creating a server and passing it through the app
	server = require('http').createServer(app);

//request from client, response what we sent back (order of the request and response matters!!)
	app.get('/', function(request, response){
		//.send comes from the server
		response.send('hey i just built a server')




	})



//first argu. is the port number 
	server.listen(3000, function(){
		console.log('server is listening on port 3000')
	})I