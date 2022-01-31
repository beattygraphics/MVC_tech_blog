const { Comment } = require('../models');

const commentData = [
  {
    comment_text: "The most commonly used Sequalize Datay Types for simple databases are INTEGER and STRING.",
    post_id: 1,
    user_id: 4
  },
  {
    comment_text: "Comment 2",
    post_id: 1,
    user_id: 3
  },
  {
    comment_text: "heres another comment",
    post_id: 1,
    user_id: 1
  },
  {
    comment_text: "yet another coment",
    post_id: 1,
    user_id: 2
  },
  {
    comment_text: "Blah blah blah",
    post_id: 1,
    user_id: 5
  },
  {
    comment_text: "Wow this project was hard",
    post_id: 2,
    user_id: 1
  },
  {
    comment_text: "WHY DO I FEEL LIKE IVE BEEN DOING THIS FOR DAYS",
    post_id: 2,
    user_id: 4
  },
  {
    comment_text: "OK, wait  no...ok",
    post_id: 2,
    user_id: 5
  },
  {
    comment_text: "WHAT",
    post_id: 2,
    user_id: 3
  },
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;