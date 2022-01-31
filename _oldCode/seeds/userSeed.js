const { User } = require('../models');

const userData = [
  {
    username: "Emma",
    email: "emma@yahoo.com",
    password: "1234561!password"
  },
  {
    username: "BigBoy3",
    email: "bigboy3@gmail.com",
    password: "BB43210!"
  },
  {
    username: "FalconsFan7",
    email: "falconsFan7@hotmail.com",
    password: "FFan6789?"
  },
  {
    username: "beattygraphics",
    email: "beattygraphics@gmail.com",
    password: "321!password"
  },
  {
    username: "johnywalher",
    email: "johnw@gmail.com",
    password: "jwBlack321!"
  },
  {
    username: "brednab",
    email: "brendab@hotmail.com",
    password: "bb90s7864"   
  }
];

const seedUser = () => User.bulkCreate(userData);


module.exports = seedUser;