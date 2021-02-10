const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
require('dotenv').config();

router.get('/', (req, res)=>{
  res.sendFile('/Users/admin/Desktop/travis-stewart/public/html/home.html');
  
  // res.send('hello');
});





module.exports = router;