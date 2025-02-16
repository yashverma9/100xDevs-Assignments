interface AuthorProps {
    author: string;
}

export default function Author({ author }: AuthorProps) {
    return (
        <div className="flex flex-col">
            <div className="font-semibold text-gray-800 text-xl">Author</div>
            <div className="flex justify-start items-center pt-2 gap-4">
                <div className="bg-gray-200 rounded-full p-4 font-bold text-2xl">
                    {author ? author[0].toUpperCase() : null}
                </div>
                <div>
                    <div className="font-extrabold text-3xl">
                        {author
                            ? author[0].toUpperCase() + author.slice(1)
                            : null}
                    </div>
                    <div className="text-gray-500 font-medium text-xl pt-2">
                        Master of mirth, purveyor of puns, and the funniest
                        person in the kingodm
                    </div>
                </div>
            </div>
        </div>
    );
}
