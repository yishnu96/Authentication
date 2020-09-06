const express = require('express');
const routers = express.Router();

routers.get('/',function(req,res){
    return res.render('home.ejs');
})

routers.get('/signin',function(req,res){
    return res.render('signin');
})

routers.get('/signup',function(req,res){
    return res.render('signup');
})

routers.get('/user',function(req,res){
    return res.render('user');
})


module.exports = routers;