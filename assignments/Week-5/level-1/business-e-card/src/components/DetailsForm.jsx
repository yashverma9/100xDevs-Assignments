export function DetailsForm({ cardDetails, setCardDetails }) {
    function handleChange(e) {
        const { name, value } = e.target;
        setCardDetails({
            ...cardDetails,
            [name]: value,
        });
    }

    function submit() {}
    return (
        <div style={{ padding: "20px 40px" }}>
            Enter your details
            <input
                type="text"
                placeholder="Name"
                value={cardDetails.name}
                name={"name"}
                onChange={handleChange}
            ></input>
            <input
                type="text"
                placeholder="Bio"
                value={cardDetails.bio}
                name={"bio"}
                onChange={handleChange}
            ></input>
            <button onClick={submit}>Submit details</button>
        </div>
    );
}
