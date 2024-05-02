export function BusinessCard({ cardDetails }) {
    function redirectUrl(url) {
        window.location.href = url;
    }
    return (
        <div>
            <h2>{cardDetails.name}</h2>
            <p style={{ fontSize: "18px" }}>{cardDetails.bio}</p>
            <h2>Interests</h2>
            {cardDetails.interests.map((interest) => {
                return <p style={{ fontSize: "18px" }}>{interest}</p>;
            })}

            <div style={{ display: "flex" }}>
                <button
                    style={{
                        margin: "0 10px",
                        backgroundColor: "#0F52BA",
                        color: "white",
                        fontSize: "18px",
                    }}
                    onClick={() => redirectUrl(cardDetails.linkedin)}
                >
                    Linkedin
                </button>
                <button
                    style={{
                        margin: "0 10px",
                        backgroundColor: "#0F52BA",
                        color: "white",
                        fontSize: "18px",
                    }}
                    onClick={() => redirectUrl(cardDetails.twitter)}
                >
                    Twitter
                </button>
            </div>
        </div>
    );
}
