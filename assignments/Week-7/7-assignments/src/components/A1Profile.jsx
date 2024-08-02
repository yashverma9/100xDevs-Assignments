export default function A1Profile() {
    return (
        <div
            style={{
                border: "1px solid gray",
                height: "100%",
                width: "100%",
                background:
                    "linear-gradient(to bottom, #3CC4D0 45%, #FEFFFE 45%)",
            }}
        >
            <img
                style={{
                    width: "150px",
                    borderRadius: "100px",
                    margin: "80px",
                    marginBottom: "10px",
                }}
                src="https://thumbs.dreamstime.com/z/portrait-young-handsome-happy-man-wearing-glasses-casual-smart-blue-clothing-yellow-color-background-square-composition-200740125.jpg"
            />
            <div style={{ marginBottom: "20px" }}>
                <p style={{ margin: "4px", fontWeight: "600" }}>
                    Yash Verma <span style={{ fontWeight: "200" }}>25</span>
                </p>
                <p style={{ margin: "1px", fontWeight: "200" }}>India</p>
            </div>
            <div
                style={{
                    display: "flex",
                    padding: "0 10px 10px 10px",
                    justifyContent: "space-between",
                    borderTop: "1px solid gray",
                }}
            >
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <p
                        style={{
                            margin: "10px 0 2px 0",
                            fontWeight: "600",
                        }}
                    >
                        80K
                    </p>
                    <p style={{ margin: "1px", fontWeight: "200" }}>Views</p>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <p style={{ margin: "10px 0 2px 0", fontWeight: "600" }}>
                        803K
                    </p>
                    <p style={{ margin: "1px", fontWeight: "200" }}>Likes</p>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <p style={{ margin: "10px 0 2px 0", fontWeight: "600" }}>
                        1.4K
                    </p>
                    <p style={{ margin: "1px", fontWeight: "200" }}>Photos</p>
                </div>
            </div>
        </div>
    );
}
