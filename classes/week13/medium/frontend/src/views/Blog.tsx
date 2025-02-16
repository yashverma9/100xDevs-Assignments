import Author from "../components/Author";
import BlogContent from "../components/BlogContent";
import Header from "../components/Header";
import { useBlog } from "../hooks";
import { useParams } from "react-router-dom";

export default function Blog() {
    let { id } = useParams();
    const { loading, blog } = useBlog(id || "");

    return (
        <div>
            <Header />
            <div className="grid grid-cols-10 h-screen w-full p-20 pt-0">
                {/* Left Content */}
                <div className="col-span-7 flex flex-col">
                    {loading || !blog ? (
                        <div>Loading...</div>
                    ) : (
                        <BlogContent
                            title={blog.title}
                            content={blog.content}
                            date="23rd August, 2024"
                        />
                    )}
                </div>

                {/* Right Content */}
                <div className="col-span-3">
                    {loading || !blog ? null : (
                        <Author author={blog.author.name} />
                    )}
                </div>
            </div>
        </div>
    );
}
