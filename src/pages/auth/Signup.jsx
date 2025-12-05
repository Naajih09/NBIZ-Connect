import React, { useState } from 'react';
import { User, Briefcase, TrendingUp } from 'lucide-react';
import Button from '../../components/Button';

const Signup = () => {
  // State to track user role selection
  const [role, setRole] = useState('entrepreneur'); // 'entrepreneur' or 'investor'

  return (
    <div className="min-h-screen bg-brand-light flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-4xl overflow-hidden flex flex-col md:flex-row">
        
        {/* Sidebar Guide */}
        <div className="bg-brand-dark text-white p-8 md:w-1/3 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-4">Join NaajihBiz</h2>
          <div className="space-y-6">
            <div className="flex gap-3">
              <div className="bg-brand-gold/20 p-2 rounded text-brand-gold h-fit"><User size={20}/></div>
              <div>
                <h3 className="font-bold">Create Profile</h3>
                <p className="text-sm text-gray-400">Showcase your business or portfolio.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="bg-brand-green/20 p-2 rounded text-brand-green h-fit"><TrendingUp size={20}/></div>
              <div>
                <h3 className="font-bold">Get Verified</h3>
                <p className="text-sm text-gray-400">Build trust with our verification system.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Form */}
        <div className="p-8 md:w-2/3">
          <h2 className="text-2xl font-bold text-brand-dark mb-6">Create your account</h2>
          
          {/* Role Toggle */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div 
              onClick={() => setRole('entrepreneur')}
              className={`cursor-pointer border-2 rounded-xl p-4 text-center transition-all ${role === 'entrepreneur' ? 'border-brand-blue bg-blue-50' : 'border-gray-200 hover:border-brand-blue/50'}`}
            >
              <Briefcase className={`mx-auto mb-2 ${role === 'entrepreneur' ? 'text-brand-blue' : 'text-gray-400'}`} />
              <span className={`font-bold block ${role === 'entrepreneur' ? 'text-brand-blue' : 'text-gray-500'}`}>Entrepreneur</span>
            </div>
            <div 
              onClick={() => setRole('investor')}
              className={`cursor-pointer border-2 rounded-xl p-4 text-center transition-all ${role === 'investor' ? 'border-brand-gold bg-yellow-50' : 'border-gray-200 hover:border-brand-gold/50'}`}
            >
              <TrendingUp className={`mx-auto mb-2 ${role === 'investor' ? 'text-brand-gold' : 'text-gray-400'}`} />
              <span className={`font-bold block ${role === 'investor' ? 'text-brand-dark' : 'text-gray-500'}`}>Investor</span>
            </div>
          </div>

          {/* The Input Form */}
          <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="First Name" className="border border-gray-300 p-3 rounded-lg w-full focus:ring-1 focus:ring-brand-blue outline-none" />
                  <input type="text" placeholder="Last Name" className="border border-gray-300 p-3 rounded-lg w-full focus:ring-1 focus:ring-brand-blue outline-none" />
              </div>
              <input type="email" placeholder="Email Address" className="border border-gray-300 p-3 rounded-lg w-full focus:ring-1 focus:ring-brand-blue outline-none" />
              <input type="password" placeholder="Create Password" className="border border-gray-300 p-3 rounded-lg w-full focus:ring-1 focus:ring-brand-blue outline-none" />
              <Button variant="primary" className="w-full py-3 mt-4">
                  Join as {role === 'entrepreneur' ? 'Entrepreneur' : 'Investor'}
              </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;