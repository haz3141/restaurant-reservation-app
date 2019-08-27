
    const express = require('express');
    const fs = require('fs');
    const app = express();
    const PORT = 3000;

class Table {
    constructor(id, name, email, phone) {
        this.id = id;
        this.name =name;
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
        res.send('Home');
    });
    // Make Reservations
    app.get('/reserve', function(req, res) {
        res.send('Make Reservations');
    });
    // View Reservations
    app.get('/tables', function(req, res) {
        res.send('Tables');
    });
    // POST Table
    // GET Table

// LISTEN
app.listen(PORT, function() {
    console.log(`App listening on PORT ${PORT}`);
});