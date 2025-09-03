'use client';

import { useState, useEffect } from 'react';
import { useRouter} from 'next/navigation';

export default function VerifyEmail({ token }) {
  const [status, setStatus] = useState('verifying');
  const [message, setMessage] = useState('');
  const router = useRouter();
 

  useEffect(() => {
    
    
    if (!token) {
      setStatus('error');
      setMessage('Invalid verification link. No token provided.');
      return;
    }

    verifyEmail(token);
  }, [token]);

  const verifyEmail = async (token) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/verify-token`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setMessage('Email verified successfully! Redirecting to login...');
        setTimeout(() => {
          router.push('/login');
        }, 3000);
      } else {
        setStatus('error');
        setMessage(data.message || 'Email verification failed');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Network error. Please try again.');
    }
  };

  const resendVerification = () => {
    router.push('/resend-verification');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-cyan-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-2xl border border-cyan-100 overflow-hidden">
          <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 p-8 text-center">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
              {status === 'verifying' && (
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
              )}
              {status === 'success' && (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              )}
              {status === 'error' && (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">
              Email Verification
            </h1>
            <p className="text-cyan-100 text-sm">
              CourseHub LMS
            </p>
          </div>

          <div className="p-8">
            <div className="text-center">
              {status === 'verifying' && (
                <div>
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-100 rounded-full mb-4">
                      <div className="animate-pulse">
                        <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-3">
                    Verifying Your Email
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Please wait while we verify your email address...
                  </p>
                  <div className="flex justify-center">
                    <div className="animate-bounce flex space-x-1">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-cyan-500 rounded-full animation-delay-200"></div>
                      <div className="w-2 h-2 bg-cyan-500 rounded-full animation-delay-400"></div>
                    </div>
                  </div>
                </div>
              )}

              {status === 'success' && (
                <div>
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-3">
                    Email Verified Successfully!
                  </h2>
                  <p className="text-gray-600 mb-6">
                    {message}
                  </p>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                    <p className="text-green-800 text-sm">
                      ✅ Your account is now active and ready to use!
                    </p>
                  </div>
                  <button 
                    onClick={() => router.push('/login')}
                    className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-cyan-700 transition-all duration-200 transform hover:scale-[1.02]"
                  >
                    Continue to Login
                  </button>
                </div>
              )}

              {status === 'error' && (
                <div>
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                      <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-3">
                    Verification Failed
                  </h2>
                  <p className="text-gray-600 mb-6">
                    {message}
                  </p>
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                    <p className="text-red-800 text-sm">
                      ❌ The verification link may have expired or is invalid.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <button 
                      onClick={resendVerification}
                      className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-cyan-700 transition-all duration-200 transform hover:scale-[1.02]"
                    >
                      Resend Verification Email
                    </button>
                    <button 
                      onClick={() => router.push('/signup')}
                      className="w-full bg-gray-100 text-gray-700 font-semibold py-3 px-6 rounded-lg hover:bg-gray-200 transition-all duration-200"
                    >
                      Back to Sign Up
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="bg-gray-50 px-8 py-4 border-t border-gray-100">
            <p className="text-center text-xs text-gray-500">
              Need help? Contact us at{' '}
              <a href="mailto:support@coursehub.com" className="text-cyan-600 hover:text-cyan-700">
                support@coursehub.com
              </a>
            </p>
          </div>
        </div>

        <div className="mt-6 text-center">
          <button 
            onClick={() => router.push('/')}
            className="text-cyan-600 hover:text-cyan-700 text-sm font-medium transition-colors duration-200"
          >
            ← Back to Home
          </button>
        </div>
      </div>

      <style jsx>{`
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
      `}</style>
    </div>
  );
}