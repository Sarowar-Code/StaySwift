"use client";

import { signOut } from "next-auth/react";

const Logout = () => {
    return (
        <button
            className="login"
            onClick={() => {
                signOut({ callbackUrl: "http://localhost:5000/login" });
            }}
        >
            Sign Out
        </button>
    );
};

export default Logout;
