'use client'

import { useSession, signIn, signOut } from "next-auth/react"
import { useEffect, useState } from "react"

export default function LoginComponent() {
    const { data: session } = useSession()

    const [serverSideSessionTest, setServerSideSessionTest] = useState()

    useEffect(() => {
        fetch('/api/test/serverSideSession')
            .then(res => res.json())
            .then(data => setServerSideSessionTest(data))
    }, [])

return <>
    {
        session
            ? <div className="flex">
                <p className="text-green-600">Signed in as {session.user?.email}</p>
                <button onClick={() => signOut()} className="border px-4">Sign out</button>
            </div>
            :
            <div className="flex">
                <p className="text-red-500">Not signed in</p>
                <button onClick={() => signIn()} className="border px-4">Sign in</button>
            </div>
    }
    <div className="border">
    <p>Server Side Session Test Fetch:</p>
    <p className="text-xs">{JSON.stringify(serverSideSessionTest)}</p>
    </div>
</>
}
