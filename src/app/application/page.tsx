import Head from 'next/head'
import clientPromise from '../../lib/mongodb'
import { InferGetServerSidePropsType } from 'next'


export default async function Application() {

    let isConnected = false;

    try {
        await clientPromise
        isConnected = true

    } catch (e) {
        console.error(e)
    }
    return (
        <p>
            MongoDB
            <span className={`${isConnected ? 'text-green-600' : 'text-red-800'}`}>
                {isConnected ? ' connected' : ' not connected'}
            </span>
        </p>
    )
}