import { NextResponse, NextRequest } from 'next/server';
// import { NextApiRequest, NextApiResponse } from 'next'

export async function GET(request: NextRequest) {

    const url = 'http://127.0.0.1:8000';

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        const data = await response.json()
        // res.status(200).json({ data })
        return NextResponse.json(data);
    } catch (error) {
        // TODO - log error
    }

}