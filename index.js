'use strict';

// hapi
const Hapi = require('hapi');

// pg
const { Client } = require('pg');
const client = new Client({
	host: 'localhost',
	port: 5432,
	database: 'postgres',
	user: 'postgres',
	password: 'Trippy21'
})

// connect db
client.connect((err) => {
	if (err) {
		console.log('connection error'); 
	} else {
		console.log('connected'); 
	}
})

// query db
client.query('select schema_name from information_schema.schemata', (err, res) => {
	if (err) throw err
	
	console.log(res)
	client.end()
})

// create a server with a host and port
const server = Hapi.server({ 
    host: 'localhost', 
    port: 8000 
})

// add a route
server.route({
    method: 'GET',
    path:'/', 
    handler: function (request, h) {

        return 'message'; 
    }
});

// Start the server
async function start() {

    try {
        await server.start();
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }

    console.log('Server running at:', server.info.uri);
};

start();
