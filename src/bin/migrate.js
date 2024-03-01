//Database migration 

var db = require('../database.js');
db.sequelize.sync();