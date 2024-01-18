const { Router } = require("express");
const { User, Course } = require('../db/index')
const router = Router();
const userMiddleware = require("../middleware/user");

// User Routes
router.post('/signup', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
   
        await User.create({username, password});
        res.json("User created");
});

router.get('/courses', async (req, res) => {
    const response = await Course.find({});
    res.json({
        courses: response
    })
 })

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    const courseId = req.params.courseId;
    const username = req.headers.username;
    await User.updateOne(
        {username},
        {"$push":{
        purchasedCourses: courseId
    }})
    res.json("Purchase Complete!!")
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    const username = req.headers.username;
    const user = await User.findOne({username});
    const courses = await Course.find({
        _id:{
            "$in": user.purchasedCourses
        }
    })
    console.log(user.purchasedCourses)
    res.json({courses});
});

module.exports = router