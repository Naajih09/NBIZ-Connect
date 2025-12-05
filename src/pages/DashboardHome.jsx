import React from 'react';
import { TrendingUp, Users, DollarSign, ArrowRight } from 'lucide-react';
import Button from '../components/Button';

// Simple Stat Card Component (Local to this page)
const StatCard = ({ title, value, subtext, icon: Icon, colorClass }) => (
  <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-start justify-between">
    <div>
      <p className="text-gray-500 text-sm font-medium mb-1">{title}</p>
      <h3 className="text-2xl font-bold text-brand-dark">{value}</h3>
      <p className={`text-xs mt-2 ${subtext.includes('+') ? 'text-green-600' : 'text-gray-400'}`}>
        {subtext}
      </p>
    </div>
    <div className={`p-3 rounded-lg ${colorClass}`}>
      <Icon size={24} />
    </div>
  </div>
);

const DashboardHome = () => {
  return (
    <div className="space-y-8">
      {/* 1. Welcome Section */}
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-brand-dark">Welcome back, Entrepreneur! 👋</h1>
          <p className="text-gray-500 mt-1">Here is what’s happening with your business today.</p>
        </div>
        <div className="hidden md:block">
           <Button variant="primary">New Report</Button>
        </div>
      </div>

      {/* 2. Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard 
          title="Total Funding Raised" 
          value="₦ 4,500,000" 
          subtext="+12% from last month" 
          icon={DollarSign} 
          colorClass="bg-blue-50 text-brand-blue"
        />
        <StatCard 
          title="Profile Views" 
          value="1,240" 
          subtext="+85 new visitors" 
          icon={Users} 
          colorClass="bg-yellow-50 text-brand-gold"
        />
        <StatCard 
          title="Active Opportunities" 
          value="3" 
          subtext="2 Pending Review" 
          icon={TrendingUp} 
          colorClass="bg-green-50 text-brand-green"
        />
      </div>

      {/* 3. Recent Activity & Suggestions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Recent Activity */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
          <h3 className="font-bold text-brand-dark mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex gap-4 items-start pb-4 border-b border-gray-50 last:border-0 last:pb-0">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-500">
                  INV
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-800">New Investor viewed your profile</p>
                  <p className="text-xs text-gray-400">2 hours ago</p>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-4 text-brand-blue text-sm font-semibold hover:underline flex items-center justify-center gap-1">
            View All Activity <ArrowRight size={16}/>
          </button>
        </div>

        {/* Recommended Actions */}
        <div className="bg-brand-blue rounded-xl shadow-lg p-6 text-white relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="font-bold text-xl mb-2">Complete your Profile</h3>
            <p className="text-blue-100 text-sm mb-6 max-w-xs">
              Profiles with a pitch video and financial history are 80% more likely to get funded.
            </p>
            <Button variant="secondary" className="text-sm">Upload Pitch Deck</Button>
          </div>
          {/* Decorative circle */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white opacity-10 rounded-full"></div>
        </div>

      </div>
    </div>
  );
};

export default DashboardHome;