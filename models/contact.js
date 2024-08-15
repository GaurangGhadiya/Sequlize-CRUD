module.exports= (sequelize, DataTypes) => {


const Contact = sequelize.define(
  'contact',
  {
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      defaultValue: '123456789',
      // allowNull defaults to true
    },
  },
  {
    tableName: 'contacts',
  },
);

return Contact

}
