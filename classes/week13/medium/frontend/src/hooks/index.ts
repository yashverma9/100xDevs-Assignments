import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";

export interface Blog {
    id: string;
    title: string;
    content: string;
    published: boolean;
    author: {
        name: string;
    };
}

export const useBlog = (id: string) => {
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<Blog>();

    useEffect(() => {
        axios
            .get(`${BACKEND_URL}/api/v1/blog/byId/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("jwt")}`,
                },
            })
            .then((response) => {
                setBlog(response.data.blog);
                setLoading(false);
            });
    }, [id]);

    return {
        loading,
        blog,
    };
};

export const useBlogs = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blog[]>([]);

    useEffect(() => {
        axios
            .get(`${BACKEND_URL}/api/v1/blog/bulk`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("jwt")}`,
                },
            })
            .then((response) => {
                setBlogs(response.data.blog);
                setLoading(false);
            });
    }, []);

    return {
        loading,
        blogs,
    };
};
