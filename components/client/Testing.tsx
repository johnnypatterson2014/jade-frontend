'use client';

import { getClientContext } from '@/components/client/ClientContext'

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
            <a href='#' onClick={() => getApiResponseAction()}>click me</a>

            {isLoadingAnswer && (
                <div>Loading...</div>
            )
            }

            {!isLoadingAnswer && apiResponse && apiResponse.length > 0 && (
                <div>API response is: {apiResponse}</div>
            )
            }
        </>
    )
}

export default Testing