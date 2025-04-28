"use client";
import { useContext } from "react";
import { UserContext } from "../utils/context/userContext";
import Link from "next/link";

const HomePage = () => {
    const { user } = useContext(UserContext);

    if (!user) {
        return (
            <div className="bg-slate-50 text-neutral-800 flex flex-col justify-center items-center h-screen">
                <h1>Please login</h1>
                <Link href="/">
                    <button className="bg-blue-500 mt-5 text-white px-4 py-2 rounded">
                        Go to Login
                    </button>
                </Link>
            </div>
        )
    }

    return (
        <div className="bg-slate-50 text-neutral-800 flex flex-col justify-center items-center h-screen">
            ¡Bienvenido, {user.name}! Disfruta de tu lectura.
        </div>
    )
}

export default HomePage;    