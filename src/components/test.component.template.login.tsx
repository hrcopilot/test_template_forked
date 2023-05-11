'use client'

import { useSession, signIn, signOut } from "next-auth/react"

export default function TestLoginComponent() {
    const { data: session } = useSession()

    return <>
        {
            session
                ? <div className="border p-2">
                    <p>Auth: <span className="text-green-600">Signed in</span></p>
                    <p className="text-xs">as {session.user?.email} {session.expires}</p>
                    <button onClick={() => signOut()} className="border px-4">Sign out</button>
                </div>
                :
                <div className="flex border p-2">
                    <p className="text-red-500">Not signed in</p>
                    <button onClick={() => signIn()} className="border px-4">Sign in</button>
                </div>
        }
    </>
}
