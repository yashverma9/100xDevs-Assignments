import { Link } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import BlogsHeader from "../components/BlogsHeader";
import Header from "../components/Header";
import { useBlogs } from "../hooks";

export default function Blogs() {
    const { loading, blogs } = useBlogs();

    return (
        <div>
            <div>
                <Header />
            </div>
            <div className="p-20 pt-5 px-80">
                <div>
                    <BlogsHeader />
                </div>
                <div className="pt-4 flex flex-col">
                    {loading ? (
                        <div>Loading ...</div>
                    ) : (
                        blogs.map((blog) => (
                            <Link to={`/blog/${blog.id}`}>
                                <BlogCard
                                    author={blog.author.name}
                                    date="Dec 3, 2023"
                                    title={blog.title}
                                    content={blog.content}
                                />
                            </Link>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}
