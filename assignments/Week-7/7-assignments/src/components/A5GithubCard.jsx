import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

export default function A5GithubCard() {
    const [profileData, setProfileData] = useState({});

    const username = "hkirat";

    useEffect(() => {
        axios
            .get(`https://api.github.com/users/${username}`)
            .then((res) => setProfileData(res.data))
            .catch((error) => console.error("User not found!", error));
    }, []);

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                height: "100vh",
                alignItems: "center",
                gap: "10px",
            }}
        >
            <h3>Github Profile Card</h3>
            <ProfileCard profileData={profileData} />
        </div>
    );
}

function ProfileCard({ profileData }) {
    return (
        <div style={{ border: "1px solid black", maxWidth: "1000px" }}>
            {JSON.stringify(profileData)}
        </div>
    );
}
