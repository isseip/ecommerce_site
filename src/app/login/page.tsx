'use client';
import { useState } from 'react';
import axios from 'axios';
export default function Home() {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState(1);
  const [message, setMessage] = useState('');

  const sendOtp = async () => {
    try {
      await axios.post('/api/sendotp', { email });
      setStep(2);
      setMessage('OTP sent to your email');
    } catch (error) {
      setMessage('Error sending OTP');
    }
  };

  const verifyOtp = async () => {
    try {
      await axios.post('/api/verify', { email, otp });
      setMessage('OTP verified successfully');
    } catch (error) {
      setMessage('Invalid OTP or OTP expired');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        {step === 1 ? (
          <>
            <h2 className="text-2xl mb-4">Email Login</h2>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 mb-4 border rounded"
            />
            <button onClick={sendOtp} className="w-full bg-blue-500 text-white p-2 rounded">
              Send OTP
            </button>
          </>
        ) : (
          <>
            <h2 className="text-2xl mb-4">Enter OTP</h2>
            <input
              type="text"
              placeholder="OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full p-2 mb-4 border rounded"
            />
            <button onClick={verifyOtp} className="w-full bg-blue-500 text-white p-2 rounded">
              Verify OTP
            </button>
          </>
        )}
        {message && <p className="mt-4 text-red-500">{message}</p>}
      </div>
    </div>
  );
}
