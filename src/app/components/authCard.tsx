"use client";

import { useState } from "react";
import Field from "./input";

const AuthCard = () => {
    // Se podría crear un user type, pero al ser solo dos valores, se harán por separado
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const setUsernameValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    }

    const setPasswordValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const handleSubmit = () => {
        console.log("Username: ", username);
        console.log("Password: ", password);
    }

    return (
        <div className="w-1/3 flex flex-col justify-center bg-white p-10 rounded-md text-neutral-800 shadw-xl">
            <div className="font-semibold text-xl mb-7">
                Login
            </div>
            <div className="flex flex-col gap-5 mb-4">
                <Field value={username} onChange={setUsernameValue} label="Email" type="email" />
                <Field value={password} onChange={setPasswordValue} label="Password" type="password" />
            </div>
            <button onClick={handleSubmit} className="bg-blue-500 text-white rounded-md p-2 mt-4 hover:bg-blue-600">
                Login
            </button>
        </div>
    )
}

export default AuthCard;    