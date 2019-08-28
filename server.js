const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

class Table {
	constructor(id, name, email, phone) {
		this.id = id;
		this.name = name;
		this.email = email;
		this.phone = phone;
	}
}

class Restaurant {
	constructor() {
		this.reservations = [];
		this.waitlist = [];
    }
    
    addTable(newTable) {
        this.reservations.push(newTable);
    }
}

// Initialize Restaurant
const thePub = new Restaurant();

// ROUTES
app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/reserve', function(req, res) {
	res.sendFile(path.join(__dirname, 'reserve.html'));
});

app.get('/tables', function(req, res) {
	res.sendFile(path.join(__dirname, 'tables.html'));
});

app.post('/api/tables', function(req, res) {
    const newRSVP = new Table(req.body);
    thePub.addTable(newRSVP);
});


app.get('/api/tables', function(req, res) {
	return res.json(reservations);
});

// Listen
app.listen(PORT, function() {
	console.log(`App running at http://localhost:${PORT}`);
});
