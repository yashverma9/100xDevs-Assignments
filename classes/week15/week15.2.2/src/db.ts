import mongoose, { Schema, model } from "mongoose";

// This connection string works if this app is running locally on my machine where mongo container is running on docker
// const mongoUrl: string = 'mongodb://mongo:27017/myDatabase';

// This works when this app is running within another docker container and mongo in another container.
// The name of the mongo container is used to connect with the new network we created
// Check for "MongoDb Connected in logs"

// Here we are giving an or between an env variable and hardcode because in case of running from docker-compose.yml we are providing the URL there
const mongoUrl: string =
    process.env.MONGO_URL || "mongodb://mongo_db_instance:27017/myDatabase";

// Connect to MongoDB
mongoose
    .connect(mongoUrl)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error("MongoDB connection error:", err));

// Define a User schema
interface IUser {
    name: string;
    age: number;
    email: string;
}

const UserSchema: Schema = new Schema<IUser>({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true },
});

// Create a User model
export const User = model<IUser>("User", UserSchema);
