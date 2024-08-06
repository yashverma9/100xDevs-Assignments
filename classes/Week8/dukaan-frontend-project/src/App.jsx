import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import RevenueCard from "./components/RevenueCard";
import BasicCard from "./components/BasicCard";
import SidePane from "./components/SidePane";
import Header from "./components/Header";
import Transactions from "./components/Transactions";

function App() {
    const [count, setCount] = useState(0);

    const transactions = [
        {
            orderId: "#281209",
            status: "Successful",
            transactionId: "131634495747",
            refundDate: "Today, 08:45 PM",
            orderAmount: "₹1,125.00",
        },
        {
            orderId: "#281208",
            status: "Processing",
            transactionId: "131634495747",
            refundDate: "Yesterday, 3:00 PM",
            orderAmount: "₹1,125.00",
        },
        {
            orderId: "#281207",
            status: "Successful",
            transactionId: "131634495747",
            refundDate: "12 Jul 2023, 03:00 PM",
            orderAmount: "₹1,125.00",
        },
        {
            orderId: "#281206",
            status: "Successful",
            transactionId: "131634495747",
            refundDate: "12 Jul 2023, 03:00 PM",
            orderAmount: "₹1,125.00",
        },
        {
            orderId: "#281205",
            status: "Successful",
            transactionId: "131634495747",
            refundDate: "12 Jul 2023, 03:00 PM",
            orderAmount: "₹1,125.00",
        },
        {
            orderId: "#281204",
            status: "Successful",
            transactionId: "131634495747",
            refundDate: "12 Jul 2023, 03:00 PM",
            orderAmount: "₹1,125.00",
        },
    ];

    return (
        <div className="flex bg-new-gray min-h-screen">
            <div className="basis-1/6">
                <SidePane />
            </div>
            <div className=" w-full">
                <Header />
                <div className="flex justify-between items-center w-full px-8 pt-6">
                    <div className="font-medium text-xl text-basic-black">
                        Overview
                    </div>
                    <div className="flex items-center gap-1 font-normal rounded-md text-base text-basic-gray bg-white px-3 py-1 border border-brdr-gray">
                        This Month
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="size-6"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="m19.5 8.25-7.5 7.5-7.5-7.5"
                            />
                        </svg>
                    </div>
                </div>
                <div
                    id="cards"
                    className="basis-5/6 grid grid-cols-3 grid-rows-4 gap-6 p-8 py-6"
                >
                    <div className="row-span-4">
                        <RevenueCard />
                    </div>
                    <div className="row-span-3">
                        <BasicCard
                            cardTitle={"Amount Pending"}
                            amount={"₹92,312.20"}
                        />
                    </div>
                    <div className="row-span-3">
                        <BasicCard
                            cardTitle={"Amount Processed"}
                            amount={"₹23,92,312"}
                        />
                    </div>
                </div>
                <div>
                    <Transactions transactions={transactions} />
                </div>
            </div>
        </div>
    );
}

export default App;
