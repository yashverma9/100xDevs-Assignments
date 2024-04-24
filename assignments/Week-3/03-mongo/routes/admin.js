const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require("../db/index");

// Admin Routes
router.post("/signup", async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    const adminExists = await Admin.findOne({ username: username });
    if (adminExists)
        return res
            .status(400)
            .json({ message: "Admin already exists with this username!" });

    const newAdmin = new Admin({
        username: username,
        password: password,
    });

    try {
        newAdmin.save();
        return res.status(200).json({ message: "Admin created successfully" });
    } catch (e) {
        console.error(`There is error: ${e}`);
        return res.status(400).json({ message: "Admin couldnot be created!" });
    }
});

router.post("/courses", adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageLink = req.body.imageLink;
    const published = req.body.published;

    const newCourse = new Course({
        title: title,
        description: description,
        price: price,
        imageLink: imageLink,
        published: published,
    });
    newCourse
        .save()
        .then((result) => {
            return res.status(200).json({
                message: "Course created successfully",
                courseId: result._id,
            });
        })
        .catch((e) => {
            console.error(`There is error: ${e}`);
            return res
                .status(400)
                .json({ message: "Course couldnot be created!" });
        });
});

router.get("/courses", adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    try {
        Course.find({}).then((courses) => {
            console.log("get courses: ", courses);
            return res.status(200).json({ courses: courses });
        });
    } catch (e) {
        return res.status(500).send(`Error retreiving courses: ${e}`);
    }
});

module.exports = router;
