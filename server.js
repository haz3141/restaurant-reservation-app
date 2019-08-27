const express = require('express');
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
}

// ROUTES
// Home
app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, 'index.html'));
});
// Make Reservations
app.get('/reserve', function(req, res) {
	res.sendFile(path.join(__dirname, 'reserve.html'));
});
// View Reservations
app.get('/tables', function(req, res) {
	res.sendFile(path.join(__dirname, 'tables.html'));
});
// POST Table
app.post('/api/tables', function(req, res) {
    const newTable = req.body;
    reservations.push(newTable);
});

// GET Table
app.get('/api/tables', function(req, res) {
	return res.json(reservations);
});

// LISTEN
app.listen(PORT, function() {
	console.log(`App listening on PORT ${PORT}`);
});
