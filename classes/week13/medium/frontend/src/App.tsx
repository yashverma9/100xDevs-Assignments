import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Signup from "./views/Signup";
import Signin from "./views/Signin";
import Blog from "./views/Blog";
import Blogs from "./views/Blogs";
import CreateBlog from "./views/CreateBlog";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={<Navigate to="/signup" replace />}
                    />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/signin" element={<Signin />} />
                    <Route path="/blog/:id" element={<Blog />} />
                    <Route path="/blogs" element={<Blogs />} />
                    <Route path="/create" element={<CreateBlog />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
