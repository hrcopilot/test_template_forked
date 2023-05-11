'use client'

import { useEffect, useState } from "react"

export default function TestClientFetchServerSideSession() {

    const [serverSideSessionTest, setServerSideSessionTest] = useState()

    useEffect(() => {
        fetch('/api/test/serverSideSession')
            .then(res => res.json())
            .then(data => setServerSideSessionTest(data))
    }, [])

    return <div className="border p-2">
        <p>Test: Server Side Session Fetch</p>
        <p className="text-xs">{JSON.stringify(serverSideSessionTest)}</p>
    </div>
}
