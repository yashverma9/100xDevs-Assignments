export default function BasicCard({ cardTitle, amount }) {
    return (
        <div className="bg-white rounded-lg shadow-md ">
            <div className="flex items-center gap-2 text-basic-gray p-4 pb-2 font-inter font-normal text-base">
                {cardTitle}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-5"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
                    />
                </svg>
            </div>
            <div className="flex justify-between items-center py-2 px-4">
                <div className="text-basic-black font-medium text-number-large">
                    {amount}
                </div>
                <div className="flex items-center text-light-blue font-medium text-base underline">
                    13 orders
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        class="size-5"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="m8.25 4.5 7.5 7.5-7.5 7.5"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
}
