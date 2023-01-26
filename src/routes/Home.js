import React from "react";

function Home(props) {
    return (
        <div>
            <form>
                <input
                    type="text"
                    placeholder="What's on your mind?"
                    maxLength={120}
                />
                <input type="submit" value="Nweet" />
            </form>
        </div>
    );
}

export default Home;
