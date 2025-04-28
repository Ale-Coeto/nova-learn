"use client";

import { useContext, useState } from "react";
import Field from "./input";
import { useRouter } from "next/navigation";
import { passwordSchema } from "../utils/schemas/passwordSchema";
import { validateUser } from "../utils/mockdb/db";
import { UserContext } from "../utils/context/userContext";
import axios from "axios";

const AuthCard = () => {
    // Se podría crear un user type, pero al ser solo dos valores, se harán por separado
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();
    const { user, setUser } = useContext(UserContext);

    const setUsernameValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    }

    const setPasswordValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const resetValues = () => {
        setUsername("");
        setPassword("");
        setError("");
    }

    const handleSubmit = () => {
        axios.post("/api/user", {
            username,
            password
        })
            .then((res) => {
                if (res.data.success) {
                    setUser(res.data.user);
                    router.push("/home");
                    resetValues();
                } else {
                    setError(res.data.message);
                }
            })
            .catch((err) => {
                console.error(err);
                setError("Usuario o contraseña incorrectos");
            });
    }


    return (
        <div className="w-1/3 flex flex-col justify-center bg-white p-10 rounded-md text-neutral-800 shadw-xl">
            <div className="font-semibold text-xl mb-7">
                Login
            </div>

            {error && (
                <div className="bg-red-300 p-1 rounded-sm text-red-900 mb-4">
                    {error}
                </div>
            )}

            <div className="flex flex-col gap-5 mb-4">
                <Field value={username} onChange={setUsernameValue} label="Usuario" type="email" />
                <Field value={password} onChange={setPasswordValue} label="Contraseña" type="password" />
            </div>

            <button onClick={handleSubmit} className="bg-blue-500 text-white rounded-md p-2 mt-4 hover:bg-blue-600">
                Login
            </button>
        </div>
    )
}

export default AuthCard;    