const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('gym', 'root', 'Yeesou.33', {
  host: 'localhost',
  dialect: 'mysql',
});


const db ={}
db.Sequelize = Sequelize;
db.sequelize = sequelize;

const User = sequelize.define('User', {
    FirstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    LastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  
    
    Email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    Password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Weight:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    Height:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
  })
// sequelize.sync()
// .then(() => {
//     console.log('Database and tables created!');
// })
// .catch((error) => {
//     console.error('Error creating database and/or tables:', error);
// });
module.exports = {
    User
}