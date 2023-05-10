'use client'

import { useSession, signIn, signOut } from "next-auth/react"

export default function LoginComponent() {
    const { data: session } = useSession()
    if (session) {
        return (
            <div className="flex">
                <p className="text-green-600">Signed in as {session.user?.email}</p>
                <button onClick={() => signOut()} className="border px-4">Sign out</button>
            </div>
        )
    }
    return (
        <div className="flex">
            <p className="text-red-500">Not signed in</p>
            <button onClick={() => signIn()} className="border px-4">Sign in</button>
        </div>
    )
}
