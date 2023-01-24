import { async } from "@firebase/util";
import { authService } from "../fbBase";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useState } from "react";

function Auth(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(true);
    const [error, setError] = useState("");
    const onChange = (event) => {
        const {
            target: { name, value },
        } = event;
        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        }
    };
    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            let data;
            if (newAccount) {
                data = await createUserWithEmailAndPassword(
                    authService,
                    email,
                    password
                );
            } else {
                data = await signInWithEmailAndPassword(
                    authService,
                    email,
                    password
                );
            }
            console.log(data);
        } catch (error) {
            console.log("error", error);
            setError(error.message.replace("Firebase: ", ""));
            alert(error);
        }
    };
    const toggleAccount = () => setNewAccount((prev) => !prev);
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={onChange}
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={onChange}
                />
                <input
                    type="submit"
                    value={newAccount ? "Create Account" : "Sign In"}
                />
            </form>
            <span onClick={toggleAccount}>
                {newAccount ? "Sign In" : "Create Account"}
            </span>
            <div>
                <button>Continue With Google</button>
                <button>Continue With Github</button>
            </div>
        </div>
    );
}

export default Auth;
