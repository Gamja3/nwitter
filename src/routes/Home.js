import { dbService } from "fbBase";
import React, { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

function Home(props) {
    const [nweet, setNweet] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();

        await addDoc(collection(dbService, "nweets"), {
            nweet,
            createdAt: serverTimestamp(),
        });

        setNweet("");
    };
    const onChange = (event) => {
        const {
            target: { value },
        } = event;
        setNweet(value);
    };
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    value={nweet}
                    onChange={onChange}
                    type="text"
                    placeholder="What's on your mind?"
                    maxLength={120}
                />
                <input type="submit" value="nweet" />
            </form>
        </div>
    );
}

export default Home;
