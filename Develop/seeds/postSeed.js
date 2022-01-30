const { Post } = require('../models');

const postData = [
  {
    title: 'Node and Express Differences',
    post_text: 'Express is built on top of node and helps you to manage your server more easily than you could with Node alone.',
    user_id: 1,
  },
  {
    title: 'Handlebars Template Engine',
    post_text: 'Handlebars is a very useful npm package that allows you to use templates in your code, making things more modular, re-usable, and maintainable.  For instance, you can set up a layout used for several pages with templates for a home page and a user dashboard.',
    user_id: 2,
  },
  {
    title: 'Handlebars = Faster?',
    post_text: 'Because Handlebars compiles templates into Javascript functions, this makes it execute faster than other template engines.',
    user_id: 3,
  },
  {
    title: 'Session tracking?',
    post_text: 'Keeps track of where users are as they move around a website.',
    user_id: 4,
  },
  {
    title: 'Middleware Functions',
    post_text: 'These are functions in ExpressJS that have access to the request and response objects.',
    user_id: 5,
  },
  {
    title: 'Inquirer...and I dont mean the Magazine.',
    post_text: 'Inquirer is an API dev tool that sends requests to servers.  you can use it to test if your routes are working.',
    user_id: 6,
  },
]

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;