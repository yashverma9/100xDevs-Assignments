const { Router } = require("express");
const router = Router();
const { User, Course } = require("../db");
const { userMiddleware, jwtPassword } = require("../middleware/user");
const jwt = require("jsonwebtoken");

// User Routes
router.post("/signup", (req, res) => {
    // Implement user signup logic\
    const username = req.body.username;
    const password = req.body.password;

    User.create({
        username: username,
        password: password,
    })
        .then((result) => {
            return res
                .status(200)
                .json({ message: "User created successfully" });
        })
        .catch((e) => {
            console.error(`There is error: ${e}`);
            return res
                .status(400)
                .json({ message: "User couldnot be created!" });
        });
});

router.post("/signin", async (req, res) => {
    // Implement admin signin logic
    const username = req.body.username;
    const password = req.body.password;

    if (!(await User.findOne({ username: username, password: password })))
        return res.status(400).send("User not registered!");

    try {
        const token = jwt.sign({ username: username }, jwtPassword);
        return res.status(200).json({ token: token });
    } catch (e) {
        return res.status(400).send(`Issues related to credentials: ${e}`);
    }
});

router.get("/courses", async (req, res) => {
    // Implement listing all courses logic
    const courses = await Course.find({});
    return res.status(200).json({ courses: courses });
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    console.log("courseId:", courseId, typeof courseId);
    const username = req.username;

    const user = await User.findOne({ username: username });
    const newCoursesPurchased = user.coursesPurchased;
    newCoursesPurchased.push(courseId);
    console.log("newCourses:", newCoursesPurchased);

    const updatedUser = await User.findOneAndUpdate(
        { username: username },
        { coursesPurchased: newCoursesPurchased },
        { new: true }
    );
    console.log("updatedUser:", updatedUser);
    return res.status(200).json({ message: "Course purchased successfully" });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const username = req.username;
    const user = await User.findOne({ username: username });
    const coursesPurchased = user.coursesPurchased;
    console.log("coursesPurchased:", coursesPurchased);

    const coursesDetails = await Course.find({
        _id: { $in: coursesPurchased },
    });
    res.status(200).json({ purchasedCourses: coursesDetails });
});

module.exports = router;
