import { useState } from "react";

import "./App.css";
import { BusinessCard } from "./components/BusinessCard";
import { DetailsForm } from "./components/DetailsForm";

function App() {
    const [cardDetails, setCardDetails] = useState({
        name: "Yash Raj Films",
        bio: "A student from the films!",
        interests: ["Python", "Web3", "Web2"],
        linkedin: "https://www.linkedin.com/in/yashverma9/",
        twitter: "https://google.com",
    }); // Entering dummy values, later connect to backend

    return (
        <div style={{ display: "flex" }}>
            <BusinessCard cardDetails={cardDetails} />
            <DetailsForm
                cardDetails={cardDetails}
                setCardDetails={setCardDetails}
            />
        </div>
    );
}

export default App;
