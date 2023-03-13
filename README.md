# ByteSized-TechBlog

![License Badge](https://img.shields.io/badge/license-MIT-brightgreen)
Model-View-Controller (MVC) Challenge: Tech Blog

## Description

This project was created using the Model, View, Controller (mvc) paradigm and is hosted on Heroku with Heroku Deployment. it can also be run locally using the files from the github repository. To do this, the Installation and Usage sections must be read. Node.js and express are used for the server and sequelize is utilized to access the mysql database called "tech_blog_db". this database stores all user, post, and comment information. The live version is hosted on Heroku, with the JAWSDB add on to store the data. the passwords are all encrypted with the bcrypt Node.js package and the HTML views are created with Handlebars.js.

## User Story

AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions

## Link to App

## Screenshot of App

## Instructions for Use

Your application’s folder structure must follow the Model-View-Controller paradigm. You’ll need to use the [express-handlebars](https://www.npmjs.com/package/express-handlebars) package to implement Handlebars.js for your Views, use the [MySQL2](https://www.npmjs.com/package/mysql2) and [Sequelize](https://www.npmjs.com/package/sequelize) packages to connect to a MySQL database for your Models, and create an Express.js API for your Controllers.

You’ll also need the [dotenv package](https://www.npmjs.com/package/dotenv) to use environment variables, the [bcrypt package](https://www.npmjs.com/package/bcrypt) to hash passwords, and the [express-session](https://www.npmjs.com/package/express-session) and [connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize) packages to add authentication.

**Note**: The [express-session](https://www.npmjs.com/package/express-session) package stores the session data on the client in a cookie. When you are idle on the site for more than a set time, the cookie will expire and you will be required to log in again to start a new session. This is the default behavior and you do not have to do anything to your application other than implement the npm package.

## License

MIT license.

## Questions

meltee@live.com

## WalkThrough Video

https://drive.google.com/file/d/1938obIzPd5dHvJ77vQdbWN1Q8zYxMnDs/view
