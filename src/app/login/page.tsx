"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function Page() {
    const session = useSession();

    if(session.data) {
        console.log(session.data.user);
    }


    const handleOnClick = () => {
        signIn("google")
    }

    const handleOnClickSignOut = () => {
        signOut({
        });
    }

    return (
        <>
            <button onClick={handleOnClick}>SignIn with Google</button>
            <button onClick={handleOnClickSignOut}>SignOut with Google</button>
        </>)
}

