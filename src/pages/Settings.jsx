import React, { useState } from 'react';
import { User, Lock, Bell, CreditCard, Save } from 'lucide-react';
import Button from '../components/Button';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { id: 'profile', label: 'Profile Details', icon: User },
    { id: 'security', label: 'Password & Security', icon: Lock },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'billing', label: 'Billing & Plan', icon: CreditCard },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-brand-dark mb-6">Account Settings</h1>
      
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col md:flex-row min-h-[500px]">
        
        {/* Sidebar Tabs */}
        <div className="w-full md:w-64 bg-gray-50 border-r border-gray-200 p-4">
          <nav className="space-y-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                  activeTab === tab.id 
                  ? 'bg-white text-brand-blue shadow-sm ring-1 ring-gray-200' 
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                <tab.icon size={18} />
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-8">
          
          {/* PROFILE TAB */}
          {activeTab === 'profile' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="flex items-center gap-6 mb-8">
                <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center text-2xl font-bold text-gray-500">JD</div>
                <div>
                  <Button variant="outline" className="text-sm py-1 px-3">Change Photo</Button>
                  <p className="text-xs text-gray-400 mt-2">JPG, GIF or PNG. Max 1MB.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input type="text" defaultValue="John" className="w-full p-2 border rounded-lg focus:ring-brand-blue" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input type="text" defaultValue="Doe" className="w-full p-2 border rounded-lg focus:ring-brand-blue" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                  <textarea rows="4" className="w-full p-2 border rounded-lg focus:ring-brand-blue" defaultValue="Serial Entrepreneur..."></textarea>
                </div>
              </div>
            </div>
          )}

          {/* SECURITY TAB */}
          {activeTab === 'security' && (
             <div className="space-y-6 max-w-md animate-in fade-in duration-300">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
                  <input type="password" className="w-full p-2 border rounded-lg" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                  <input type="password" className="w-full p-2 border rounded-lg" />
                </div>
             </div>
          )}

          {/* NOTIFICATIONS TAB */}
          {activeTab === 'notifications' && (
            <div className="space-y-4 animate-in fade-in duration-300">
              <h3 className="font-bold text-gray-900">Email Notifications</h3>
              {['New Investment Opportunities', 'Messages from Investors', 'Weekly Newsletter'].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                  <span className="text-gray-700">{item}</span>
                  <input type="checkbox" defaultChecked className="w-5 h-5 text-brand-blue rounded focus:ring-brand-blue" />
                </div>
              ))}
            </div>
          )}

          {/* Save Button */}
          <div className="mt-10 pt-6 border-t border-gray-100 flex justify-end">
            <Button variant="primary">
              <Save size={18} /> Save Changes
            </Button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Settings;