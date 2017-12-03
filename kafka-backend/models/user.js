let Sequelize = require('sequelize');
let sequelize = require('../mysql');

let User = sequelize.define('user', {
  email: {
    type: Sequelize.STRING,
    primaryKey: true,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  isAdmin:{
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  }
});

User.sync()
  .then(() => {
    console.log("'user' table successfully created.")
  })
  .catch(() => {
    console.log("'user' table already exists or cannot be created.")
  });

module.exports = User;
