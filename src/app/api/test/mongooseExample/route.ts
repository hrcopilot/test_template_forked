import Test from '@/lib/test.util.template.model';
import connectMongo from '../../../../lib/util.template.mongoose';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    await connectMongo();
    
    const test = await Test.create(await req.json());

    return NextResponse.json({ test });
  } catch (error) {
    console.log('--------', error);
    return NextResponse.json({ error });
  }
}