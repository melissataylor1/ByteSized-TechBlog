const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

//class method of the User model.
class User extends Model {
    checkPassword(loginPw) {
      return bcrypt.compareSync(loginPw, this.password); // Instance method to check password (user input vs database)
    }
  }
  
//model for user table in SQL library
  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [8], // Minimum length of 8 characters
        },
      },
    },
  )