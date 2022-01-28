const { Comment } = require('../models');

const commentData = [
  {
    comment_text: "",
    post_id: 1,
    user_id: 1
  },
  {
    comment_text: "",
    post_id: 3,
    user_id: 4
  },
  {
    comment_text: "",
    post_id: 2,
    user_id: 2
  },
  {
    comment_text: "",
    post_id: 4,
    user_id: 3
  },
  {
    comment_text: "",
    post_id: 5,
    user_id: 5
  },
  {
    comment_text: " ",
    post_id: 5,
    user_id: 4
  },
  {
    comment_text: " ",
    post_id: 3,
    user_id: 4
  },
  {
    comment_text: " ",
    post_id: 2,
    user_id: 4
  },
  {
    comment_text: " ",
    post_id: 3,
    user_id: 1
  },
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;