import TestClientFetchServerSideSession from '@/components/test.template.clientFetchServerSideSession';
import clientPromise from '../../lib/util.template.mongodb'
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../api/auth/[...nextauth]/route';
import TestLoginComponent from '@/components/test.component.template.login';

export default async function Test() {

    // test mongo
    let isConnected = false;
    try {
        await clientPromise
        isConnected = true
    } catch (e) {
        console.error(e)
    }

    // test getServerSession
    const session = await getServerSession(authOptions)
    
    return (
        <div className='m-4'>
        <div className='border p-2'>
            MongoDB:
            <span className={`${isConnected ? 'text-green-600' : 'text-red-800'}`}>
                {isConnected ? ' connected' : ' not connected'}
            </span>
        </div>
        <TestLoginComponent />
        <TestClientFetchServerSideSession />
        <div className="border p-2">
        <p>Test: getServerSession from page</p>
        <p className="text-xs">{JSON.stringify(session, null, 2)}</p>
    </div>
        
        </div>
    )
}