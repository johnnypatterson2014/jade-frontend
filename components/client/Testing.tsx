'use client';

import { getClientContext } from '@/components/client/ClientContext'
import Image from 'next/image';
import Button from '@/components/client/Button'

const Testing = () => {
    const { isLoadingAnswer, apiResponse, getApiResponse } = getClientContext()

    const getApiResponseAction = async (e?: any) => {
        e?.preventDefault();
        getApiResponse();
        // console.log('testing');
        // alert('testing');
    }

    return (
        <>
            <div className='m-[20px]'>
                <Button>
                    <a onClick={() => getApiResponseAction()}>generate graph</a>
                </Button>

            </div>

            {isLoadingAnswer && (
                <div>Loading...</div>
            )
            }

            {!isLoadingAnswer && apiResponse && apiResponse.length > 0 && (
                <div>
                    <img src={apiResponse} width={640} alt="" />
                </div>
            )
            }
        </>
    )
}

export default Testing