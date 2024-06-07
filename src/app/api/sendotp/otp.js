import { connectToDatabase } from '../../lib/mongodb';
import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';



const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

  export async function POST(req) {
  const { db } = await connectToDatabase();
  const body = await req.json();
  const { email } = body;

  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  const otpExpires = new Date();
  otpExpires.setMinutes(otpExpires.getMinutes() + 5);

  await db.collection('users').updateOne(
    { email },
    { $set: { otp, otpExpires } },
    { upsert: true }
  );

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Your OTP Code',
    text: `Your OTP is ${otp}`,
  });

  return NextResponse.json({ message: 'OTP sent' });
}


