const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const withAuth = require('../utils/auth');

//Routes

router.get('/', withAuth, async (req, res) => {
  //Get posts for the user
  const userId = req.session.user_id;
  
  
  const postData = await Post.findAll({
    where:{
      user_id:userId
    }
  });

  const posts = postData.map((post)=>post.get({plain:true}));

    res.render('dashboard',{
    posts
  });

  // res.status(200).json(posts);

 
  //res.status(200).json("hello world");
  // res.render('dashboard',{
  //   posts
  // });
  //res.status(200).json(userPosts);

  //Show view with posts and option to add another post

  // User.findAll({
  //   attributes: { exclude: ['password'] }
  // })
  //   .then(userData => res.json(userData))
  //   .catch(err => {
  //     console.log(err);
  //     res.status(500).json(err);
  //   });
  //res.status(200).json({"hello":"world"})
});

router.get('/edit/:id',withAuth,async (req,res)=>{

  const postData = await Post.findByPk(req.params.id);

  const post = postData.get({plain:true});

  res.render('editPost',{
      post:post
  });

})

module.exports = router;