const router = require('express').Router();
const { User, Post,Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/post/:id',withAuth, async (req,res)=>{

  // sequelize-typescript
// models.products.findAll({
//   where,
//   include: [{
//     model: Comment,
//     include: [User]
//   }]
// });
  
    const postData = await Post.findByPk(req.params.id,{include:[User,{model:Comment,include:[User]}]
    
    });
    
    let post = await postData.get({plain:true});
    // postData.User
    
    console.log(post);
    res.render('singlepost', {
      post,
      loggedIn: req.session.loggedIn,
    });


  

});

router.get('/', withAuth, async (req, res) => {
  try {
    // const userData = await User.findAll({
    //   attributes: { exclude: ['password'] },
    //   order: [['username', 'ASC']],
    // });

    const postData = await Post.findAll({
      order:[['date_created','ASC']]
    });

    //const users = userData.map((post) => post.get({ plain: true }));
    const posts = postData.map((post)=>post.get({plain:true}));
    // const posts = postData;
    
    //console.log(posts);

    res.render('homepage', {
      posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
   
    res.redirect('/');
    return;
  }
  
  res.render('login');
});

router.get('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.redirect('/');
    });
    
    //return;
  }
  
  //res.render('login');
});

module.exports = router;
