export default function CreateHeader({ handleSubmit }: any) {
    return (
        <div className="flex gap-4 px-10 py-5 w-full items-center">
            <div className="w-16">
                <img src="https://seeklogo.com/images/M/medium-logo-F0ACFCCD58-seeklogo.com.png" />
            </div>
            <div className="text-xl font-medium">Draft in Kirags</div>
            <div className="text-xl font-medium text-gray-500 pl-2">Saved</div>
            <div className="grow flex items-center justify-end gap-4">
                <div className="text-gray-100 bg-green-700 rounded-2xl px-4 py-1 mr-4 text-xl">
                    <button onClick={handleSubmit}>Publish</button>
                </div>
                <div className="text-gray-600">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="size-8"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                        />
                    </svg>
                </div>
                <div className="text-gray-400">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="size-7"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                        />
                    </svg>
                </div>
                <div className="flex items-center justify-center bg-gray-600 rounded-full h-10 w-10 text-white text-xl ">
                    h
                </div>
            </div>
        </div>
    );
}
