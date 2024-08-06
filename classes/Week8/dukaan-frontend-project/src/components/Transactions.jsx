export default function Transactions({ transactions }) {
    return (
        <div className="px-8">
            <div className="text-basic-black font-medium text-xl">
                Transactions | This Month
            </div>
            <div className="flex mt-6 gap-4">
                <div className="px-4 py-1 rounded-2xl bg-icon-gray bg-icon-gray text-search-gray font-inter font-medium text-sm">
                    Payouts (22)
                </div>
                <div className="px-4 py-1 rounded-2xl bg-icon-gray bg-light-blue text-white font-inter font-medium text-sm">
                    Refunds (6)
                </div>
            </div>
            <div id="trans-table" className="bg-white p-2 mt-6">
                <div className="flex items-center">
                    <div className="flex items-center ">
                        <div className="flex gap-2 items-center border border-brdr-gray px-4 py-2 rounded-md text-search-2-gray font-normal text-sm">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="size-4"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                                />
                            </svg>
                            Order ID or transaction ID
                        </div>
                    </div>
                    <div className="flex justify-end grow gap-4">
                        <div className="flex items-center gap-2 border border-brdr-gray rounded-md p-1 px-2 font-inter text-base font-normal text-basic-gray">
                            Sort
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
                                    d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
                                />
                            </svg>
                        </div>
                        <div className="flex gap-2 border border-brdr-gray rounded-md p-1 px-2 font-inter text-base font-normal ">
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
                                    d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="w-full mt-2">
                    <table className="table-auto w-full">
                        <thead className="bg-gray-white text-sm text-basic-gray">
                            <tr className="">
                                <th className="text-left font-medium p-3 rounded-l-md">
                                    Order ID
                                </th>
                                <th className="text-left font-medium p-3">
                                    Status
                                </th>
                                <th className="text-left font-medium p-3">
                                    Transaction ID
                                </th>
                                <th className="text-left font-medium p-3">
                                    Refund date
                                </th>
                                <th className="text-right font-medium p-3 rounded-r-md">
                                    Order amount
                                </th>
                            </tr>
                        </thead>
                        <tbody className="text-sm">
                            {transactions.map((transaction, i) => {
                                return (
                                    <tr
                                        className={
                                            i === transactions.length - 1
                                                ? ""
                                                : "border-b border-icon-gray"
                                        }
                                    >
                                        <td className="text-left font-medium p-3 text-light-blue">
                                            {transaction.orderId}
                                        </td>
                                        <td className="text-left font-normal font-inter p-3 text-basic-black">
                                            {transaction.status}
                                        </td>
                                        <td className="text-left font-normal p-3 text-basic-gray">
                                            {transaction.transactionId}
                                        </td>
                                        <td className="text-left font-normal p-3 text-basic-gray">
                                            {transaction.refundDate}
                                        </td>
                                        <td className="text-right font-normal p-3 text-basic-black">
                                            {transaction.orderAmount}
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
