import { useState } from "react";

export default function A4ParaGenerator() {
    const [wordLength, setWordLength] = useState("");
    const [para, setPara] = useState("fff");

    function handleChange(e) {
        const value = e.target.value;
        setWordLength(value);
    }

    function genWord() {
        const chars = "abcdefghijklmnopqrstuvwxyz";
        const wordLen = Math.floor(Math.random() * 10) + 1;
        let word = "";
        for (let i = 0; i < wordLen; i++) {
            const charToPick = Math.floor(Math.random() * chars.length);
            word += chars[charToPick];
        }
        return word;
    }

    function genPara() {
        const numWords = parseInt(wordLength);
        let newPara = "";
        for (let i = 0; i < numWords; i++) {
            const newWord = genWord();
            newPara += newWord + " ";
        }
        setPara(newPara.trim());
    }
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                height: "100vh",
                alignItems: "center",
                padding: "100px",
                gap: "20px",
            }}
        >
            <div>
                <input
                    type="text"
                    placeholder="Word Count"
                    name="wordLength"
                    value={wordLength}
                    onChange={handleChange}
                ></input>
                <button onClick={genPara}>Generate</button>
            </div>
            <div>{para}</div>
        </div>
    );
}
