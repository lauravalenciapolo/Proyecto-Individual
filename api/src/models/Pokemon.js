const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id:{
      type:DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
      //No permite la linea de código autoincrement = true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,

    },
    life:{
      type:DataTypes.INTEGER,
      validate:{
        min: 0,
        max: 100,
      },
      defaultValue: 10,
    },
    attack:{
      type:DataTypes.INTEGER,
      validate:{
        min: 0,
        max: 100,
      },
      defaultValue: 10,
    },
    defense:{
      type:DataTypes.INTEGER,
      validate:{
        min: 0,
        max: 100,
      },
      defaultValue: 10,
    },
    speed:{
      type:DataTypes.INTEGER,
      validate:{
        min: 0,
        max: 100,
      },
      defaultValue: 10,
    },
    height:{
      type:DataTypes.INTEGER,
      defaultValue: 10,
    },
    weight:{
      type:DataTypes.INTEGER,
      defaultValue: 10,
    },
    img:{
      type: DataTypes.STRING,
      defaultValue: "https://wallpapercave.com/wp/tuWSYqf.jpg"
    }
  });
};
