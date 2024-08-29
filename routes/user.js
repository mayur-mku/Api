const express = require('express');
const router = express.Router();
const productController = require('../controllers/user');
const upload = require('../upload');

router.get('/:id?',(req, res, next)=>{
    console.log("getting user");
    next();
},productController.getUser)

router.post('/',upload.single('file'),(req, res, next)=>{
    console.log("creating user");
    next();
},productController.createUser)


module.exports = router;