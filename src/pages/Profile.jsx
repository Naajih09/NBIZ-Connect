import React from 'react';
import { MapPin, Mail, Calendar, CheckCircle, Edit, Link as LinkIcon, Briefcase } from 'lucide-react';
import Button from '../components/Button';

const Profile = () => {
  return (
    <div className="max-w-5xl mx-auto">
      
      {/* 1. Profile Header Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-8">
        
        {/* Cover Photo */}
        <div className="h-48 bg-gradient-to-r from-brand-blue to-blue-800 relative">
          <button className="absolute bottom-4 right-4 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg text-sm backdrop-blur-sm transition">
            Change Cover
          </button>
        </div>

        {/* Profile Info */}
        <div className="px-8 pb-8">
          <div className="flex flex-col md:flex-row items-start md:items-end -mt-16 mb-6 gap-6">
            
            {/* Avatar */}
            <div className="w-32 h-32 rounded-full border-4 border-white bg-gray-200 flex items-center justify-center text-4xl font-bold text-gray-400 shadow-md">
              NS
            </div>

            {/* Name & Title */}
            <div className="flex-1 pt-16 md:pt-0">
              <div className="flex items-center gap-2 mb-1">
                <h1 className="text-2xl font-bold text-brand-dark">John Doe</h1>
                <span className="text-blue-500" title="Verified User"><CheckCircle size={20} fill="#E3F2FD" /></span>
              </div>
              <p className="text-gray-500 font-medium mb-2">Serial Entrepreneur & Tech Enthusiast</p>
              
              <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-1"><MapPin size={16}/> Lagos, Nigeria</div>
                <div className="flex items-center gap-1"><Calendar size={16}/> Joined Jan 2024</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 mt-4 md:mt-0">
              <Button variant="outline" className="px-4"><LinkIcon size={18}/></Button>
              <Button variant="primary"><Edit size={18}/> Edit Profile</Button>
            </div>
          </div>

          {/* Bio Section */}
          <div className="border-t border-gray-100 pt-6">
            <h3 className="text-lg font-bold text-brand-dark mb-2">About</h3>
            <p className="text-gray-600 leading-relaxed max-w-3xl">
              I am passionate about building scalable solutions for the African market. 
              Currently working on AgriTech solutions to help farmers in Northern Nigeria reduce food waste. 
              Seeking investment and mentorship to expand operations.
            </p>
          </div>
        </div>
      </div>

      {/* 2. Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Left Sidebar: Stats & Skills */}
        <div className="space-y-6">
          {/* Stats Card */}
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <h4 className="font-bold text-gray-900 mb-4">Community Stats</h4>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-500 text-sm">Opportunities Posted</span>
                <span className="font-bold text-brand-blue">12</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500 text-sm">Total Raised</span>
                <span className="font-bold text-brand-green">₦ 4.5M</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500 text-sm">Reputation Score</span>
                <span className="font-bold text-brand-gold">98/100</span>
              </div>
            </div>
          </div>

          {/* Badges / Skills */}
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
             <h4 className="font-bold text-gray-900 mb-4">Badges</h4>
             <div className="flex flex-wrap gap-2">
               <span className="px-3 py-1 bg-green-50 text-green-700 text-xs rounded-full border border-green-100 font-semibold">Halal Certified</span>
               <span className="px-3 py-1 bg-blue-50 text-brand-blue text-xs rounded-full border border-blue-100 font-semibold">Top Rated</span>
               <span className="px-3 py-1 bg-purple-50 text-purple-700 text-xs rounded-full border border-purple-100 font-semibold">Early Adopter</span>
             </div>
          </div>
        </div>

        {/* Right Content: Portfolio / Projects */}
        <div className="md:col-span-2">
          <div className="flex justify-between items-center mb-6">
             <h3 className="text-xl font-bold text-brand-dark">Active Projects</h3>
             <a href="#" className="text-brand-blue text-sm font-semibold hover:underline">View All</a>
          </div>

          <div className="space-y-4">
            {/* Project Card 1 */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition flex flex-col sm:flex-row gap-6">
              <div className="w-full sm:w-48 h-32 bg-gray-100 rounded-lg shrink-0 flex items-center justify-center text-gray-400">
                <Briefcase size={32}/>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                   <h4 className="font-bold text-lg text-brand-dark">SolarMax Nigeria</h4>
                   <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded font-bold">Seeking Funding</span>
                </div>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                  Providing affordable solar energy units to rural communities. We have successfully deployed 50 units in Kaduna.
                </p>
                <div className="flex items-center gap-4 text-sm font-medium">
                  <span className="text-brand-blue">Target: ₦5,000,000</span>
                  <span className="text-gray-300">|</span>
                  <span className="text-gray-500">Equity: 10%</span>
                </div>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition flex flex-col sm:flex-row gap-6">
              <div className="w-full sm:w-48 h-32 bg-gray-100 rounded-lg shrink-0 flex items-center justify-center text-gray-400">
                <Briefcase size={32}/>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                   <h4 className="font-bold text-lg text-brand-dark">AgriLogistics App</h4>
                   <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded font-bold">Live</span>
                </div>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                  Connecting farmers directly to market vendors to reduce spoilage rates.
                </p>
                <div className="flex items-center gap-4 text-sm font-medium">
                  <span className="text-brand-green">Revenue: ₦1.2M / mo</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Profile;