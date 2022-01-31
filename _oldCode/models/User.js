const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

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
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
  },
  {
    hooks: {
      // beforeCreate:  async (newUserData) => {
      //   //console.log("WE ARE HERE NOW!");
      //   //const salt = await bcrypt.genSalt(10);
      //   newUserData.password =  await bcrypt.hash(newUserData.password, 10);
      //   //return newUserData;
      // },
      beforeBulkCreate:   (users) => {
        
        // const salt = await bcrypt.genSalt(10);
        // newUserData.password =  await bcrypt.hash(newUserData.password, salt);
        //console.log("WE ARE HERE NOW and users is " + users);
        users.forEach( (user) => {
          //console.log("WE ARE HERE NOW and thepassword is " + user.password);
          user.password =  bcrypt.hashSync(user.password, 10);
          //console.log('\tWE ARE HERE NOW and thepassword is ' + user.password);
        });
        return users;
      },
      beforeCreate:   (user) => {
        user.password =  bcrypt.hashSync(user.password, 10);
        return user;
      },
      beforeUpdate:   (user) => {
        user.password =  bcrypt.hashSync(user.password, 10);
        return user;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

module.exports = User;
