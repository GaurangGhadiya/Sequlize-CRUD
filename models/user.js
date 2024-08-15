module.exports= (sequelize, DataTypes) => {

    const User = sequelize.define(
      'user',
      {
        userName: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          defaultValue: 'default@gmail.com',
          // allowNull defaults to true
        },
      },
      {
        tableName: 'users',
      },
    );

    return User
}



