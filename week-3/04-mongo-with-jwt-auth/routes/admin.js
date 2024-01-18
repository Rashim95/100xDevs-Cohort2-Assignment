const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const {JWT_SECRET} = require("../config.js");
const {Admin, Course} = require('../db/index')
const jwt = require("jsonwebtoken");
const router = Router();

// Admin Routes
router.post('/signup', async(req, res) => {
    const username = req.body.username;
    const password = req.body.password;
   
        await Admin.create({username, password});
        res.json("Admin created");
    
});

router.post('/signin', async(req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    const user = await Admin.find({username,password});

if(user){
    const token = jwt.sign({username}, JWT_SECRET);
    res.json({token});
}else{
    res.status(411).json({
        msg: "Incorrect email and password"
    })
}
    

});

router.post('/courses', adminMiddleware, async (req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const imgLink = req.body.imgLink;
    const price = req.body.price;

    const newCourse = await Course.create({title, description,imgLink,price})

    res.json({
        message: 'Course created successfully', courseId: newCourse._id
    })
});

router.get('/courses', adminMiddleware, async(req, res) => {
    const response = await Course.find({});
    res.json({
        courses: response    })
});

module.exports = router;