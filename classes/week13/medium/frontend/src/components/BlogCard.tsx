type blogProps = {
    author: string;
    date: string;
    title: string;
    content: string;
};

export default function BlogCard({ author, date, title, content }: blogProps) {
    return (
        <div className="flex items-center w-full py-12 border-b">
            <div className="flex flex-col w-3/5 gap-2">
                <div className="flex items-center gap-2">
                    <div>
                        <img
                            src="https://img.freepik.com/free-vector/cute-panda-with-bamboo_138676-3053.jpg"
                            className="w-10 rounded-full"
                        />
                    </div>
                    <div className="font-medium">{author}</div>
                    <div className="font-medium text-gray-500">{date}</div>
                </div>
                <div className="text-2xl font-bold">{title}</div>
                <div className="text-lg">{content.slice(0, 300)}</div>
                <div className="flex pt-8 items-center gap-2">
                    <div className="bg-gray-100 p-1 px-2 rounded-xl font-medium text-gray-800">
                        Side Hustle
                    </div>
                    <div className="text-gray-600">3 min read</div>
                    <div className="grow flex justify-end gap-4">
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="size-6"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                                />
                            </svg>
                        </div>
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="size-6"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                />
                            </svg>
                        </div>
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="size-6"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-2/5 px-20 flex justify-center items-center">
                <img src="https://www.hubspot.com/hs-fs/hubfs/free-website-builder.png?width=595&height=400&name=free-website-builder.png" />
            </div>
        </div>
    );
}
