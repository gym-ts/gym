
module.exports = (sequelize, DataTypes) => {
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
}