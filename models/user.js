const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

//class method of the User model.
class User extends Model {
    checkPassword(loginPw) {
      return bcrypt.compareSync(loginPw, this.password); // Instance method to check password (user input vs database)
    }
  }