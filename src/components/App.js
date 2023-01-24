import AppRouter from "./Router";
import React, { useEffect, useState } from "react";
import { authService } from "../fbBase";

function App() {
    const [init, setInit] = useState(false);
    // console.log(authService.currentUser);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        authService.onAuthStateChanged((user) => {
            console.log(user);
            if (user) {
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
            setInit(true);
        });
    }, []);
    // setInterval(() => {
    //     console.log(authService.currentUser);
    // }, 5000);

    return (
        <>
            {init ? (
                <AppRouter isLoggedIn={isLoggedIn}></AppRouter>
            ) : (
                "Initializing..."
            )}

            <footer> &copy; {new Date().getFullYear()} Nwitter</footer>
        </>
    );
}

export default App;
