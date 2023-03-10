// Import libraries
const path = require('path');
const express = require('express');
// Import express-session
const session = require('express-session');
const exphbs = require('express-handlebars');
// express set up
const app = express();
const PORT = process.env.PORT || 3001;



// Internal imports
const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');\

