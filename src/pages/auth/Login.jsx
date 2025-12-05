import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, ArrowRight } from 'lucide-react';
import Button from '../../components/Button';

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      // In a real app, you'd save the token here
      localStorage.setItem('authToken', '12345'); 
      navigate('/dashboard');
    }, 1500);
  };

  return (
    <div className="min-h-screen flex bg-white">
      {/* LEFT SIDE - BRANDING (Hidden on mobile) */}
      <div className="hidden lg:flex lg:w-1/2 bg-brand-blue relative overflow-hidden flex-col justify-between p-12 text-white">
        <div className="z-10">
          <h1 className="text-3xl font-bold">Naajih<span className="text-brand-gold">Biz</span>.</h1>
        </div>
        <div className="z-10 relative">
          <h2 className="text-5xl font-bold mb-6 leading-tight">Welcome back to the community.</h2>
          <p className="text-blue-200 text-lg max-w-md">
            Continue connecting with investors and entrepreneurs shaping the future of business.
          </p>
        </div>
        {/* Abstract Background Decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-gold opacity-10 rounded-full translate-y-1/3 -translate-x-1/3 blur-2xl"></div>
      </div>

      {/* RIGHT SIDE - FORM */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="max-w-md w-full">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-brand-dark mb-2">Log In</h2>
            <p className="text-gray-500">
              Don't have an account? <Link to="/signup" className="text-brand-blue font-semibold hover:underline">Sign up</Link>
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
                <input 
                  type="email" 
                  required
                  placeholder="you@example.com" 
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <a href="#" className="text-sm text-brand-blue hover:underline">Forgot password?</a>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
                <input 
                  type="password" 
                  required
                  placeholder="••••••••" 
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition"
                />
              </div>
            </div>

            <Button type="submit" variant="primary" className="w-full py-3 text-lg shadow-lg shadow-blue-900/20">
              {loading ? 'Logging in...' : 'Log In'} <ArrowRight size={20} />
            </Button>
          </form>

          {/* Social Login Divider */}
          <div className="mt-8 relative flex items-center justify-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <span className="relative bg-white px-4 text-sm text-gray-500">Or continue with</span>
          </div>
          
          <div className="mt-6 grid grid-cols-2 gap-4">
             <button className="flex items-center justify-center py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition font-medium text-gray-700">Google</button>
             <button className="flex items-center justify-center py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition font-medium text-gray-700">LinkedIn</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;