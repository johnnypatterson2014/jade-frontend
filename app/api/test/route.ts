import { NextResponse, NextRequest } from 'next/server';
import { getTestResponse } from '@/components/server/fastApiProxy'

export async function GET(request: NextRequest) {

    var response = await getTestResponse();
    return response;

}