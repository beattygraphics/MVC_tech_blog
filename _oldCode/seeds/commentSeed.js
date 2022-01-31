const { Comment } = require('../models');

const commentData = [
  {
    comment_text: "The most commonly used Sequalize Datay Types for simple databases are INTEGER and STRING.",
    post_id: 1,
    user_id: 4
  },
  {
    comment_text: "lskjdf;JSDBC;Jbsd;v jub;SFBV;w",
    post_id: 1,
    user_id: 3
  },
  {
    comment_text: ";ajksbdc;jksBDC;IJb;pijbdPV;IJbwds",
    post_id: 1,
    user_id: 1
  },
  {
    comment_text: "kjlsKDNCOKJNKKKK",
    post_id: 1,
    user_id: 2
  },
  {
    comment_text: "WHAT THE FUCK",
    post_id: 1,
    user_id: 5
  },
  {
    comment_text: "THIS SHIT SUCKS",
    post_id: 2,
    user_id: 1
  },
  {
    comment_text: "WHY DO I FVEEL LIKE IVE BEEN DOING THIS FOR DAYS",
    post_id: 2,
    user_id: 4
  },
  {
    comment_text: "OK",
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