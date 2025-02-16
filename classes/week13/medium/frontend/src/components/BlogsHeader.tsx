export default function BlogsHeader() {
    return (
        <div className="flex justify-start items-center border-b gap-8">
            <div className="py-4 text-gray-700">
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
                        d="M12 4.5v15m7.5-7.5h-15"
                    />
                </svg>
            </div>
            <div className="py-4 border-b border-black font-medium text-gray-700 text-lg">
                For you
            </div>
            <div className="py-4 text-gray-500 font-medium text-lg">
                Following
            </div>
        </div>
    );
}
