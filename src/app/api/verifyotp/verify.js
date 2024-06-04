import { connectToDatabase } from '../../../app/lib/mongodb';
import { NextResponse } from 'next/server';

export async function POST(req) {
  const { db } = await connectToDatabase();
  const body = await req.json();
  const { email, otp } = body;

  const user = await db.collection('users').findOne({ email, otp });

  if (user && new Date(user.otpExpires) > new Date()) {
    return NextResponse.json({ message: 'OTP verified' });
  } else {
    return NextResponse.json({ message: 'Invalid OTP or OTP expired' }, { status: 400 });
  }
}
