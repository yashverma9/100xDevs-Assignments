const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect(
    "mongodb+srv://admin:cLjxVhv9QJtclu41@cluster0.3ak084w.mongodb.net/course_app_with_jwt"
);

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username: { type: String, unique: true },
    password: String,
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: { type: String, unique: true },
    password: String,
    // We are making a reference to course db and all elements in array are supposed to be objectIds from Course model
    coursesPurchased: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title: { type: String, unique: true },
    description: String,
    price: Number,
    imageLink: String,
    published: Boolean,
});

const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);

module.exports = {
    Admin,
    User,
    Course,
};
