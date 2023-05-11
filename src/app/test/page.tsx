import clientPromise from '../../lib/util.template.mongodb'
import LoginComponent from '@/lib/component.template.login';

export default async function Test() {

    let isConnected = false;

    try {
        await clientPromise
        isConnected = true

    } catch (e) {
        console.error(e)
    }
    
    return (
        <div className='m-4'>
        <p>
            MongoDB:
            <span className={`${isConnected ? 'text-green-600' : 'text-red-800'}`}>
                {isConnected ? ' connected' : ' not connected'}
            </span>
        </p>
        <LoginComponent />
        </div>
    )
}