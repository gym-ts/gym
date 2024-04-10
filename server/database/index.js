const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('gym', 'root', 'Yeesou.33', {
  host: 'localhost',
  dialect: 'mysql',
});


const db ={}
db.Sequelize = Sequelize;
db.sequelize = sequelize;


module.exports.db = db;

// sequelize.sync()
//   .then(() => {
//     console.log('Database and tables created!');
//   })
//   .catch((error) => {
//     console.error('Error creating database and/or tables:', error);
//   });