const express = require('express');
const routes = require('./controllers');
const session = require('express-session');
const sequelize = require('./config/connection'); 
const app = express();
const helpers = require('./utils/helpers');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({ helpers });
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
  sequelize.sync({force:false});
});
// declare handlebars as the view engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

