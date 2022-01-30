const { Comment } = require('../models');

const commentData = [
  {
    comment_text: "The most commonly used Sequalize Datay Types for simple databases are INTEGER and STRING.",
    post_id: 1,
    user_id: 4
  },
  {
    comment_text: "",
    post_id: 1,
    user_id: 3
  },
  {
    comment_text: "",
    post_id: 1,
    user_id: 1
  },
  {
    comment_text: "",
    post_id: 1,
    user_id: 2
  },
  {
    comment_text: "",
    post_id: 1,
    user_id: 5
  },
  {
    comment_text: " ",
    post_id: 2,
    user_id: 1
  },
  {
    comment_text: " ",
    post_id: 2,
    user_id: 4
  },
  {
    comment_text: " ",
    post_id: 2,
    user_id: 5
  },
  {
    comment_text: " ",
    post_id: 2,
    user_id: 3
  },
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;