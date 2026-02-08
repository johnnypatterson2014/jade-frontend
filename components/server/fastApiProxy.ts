'use server';

import { NextResponse, NextRequest } from 'next/server';

export const getTestResponse = async () => {

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
