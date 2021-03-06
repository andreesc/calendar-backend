const express = require('express');
require('dotenv').config();
const cors = require('cors');
const {dbConnection} = require('./database/config');

// Create Express server
const app = express();

// Database
dbConnection();

// CORS
app.use(cors());

// Public directory
app.use( express.static('public') );

// Read and body parse
app.use( express.json() );

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));

// Escuchar peticiones
app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});