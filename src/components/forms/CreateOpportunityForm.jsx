import React, { useState } from 'react';
import { Upload, DollarSign, PieChart, Tag } from 'lucide-react';
import Button from '../Button';

const CreateOpportunityForm = ({ onClose }) => {
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API Request
    setTimeout(() => {
      setIsLoading(false);
      alert("Success! Your opportunity has been submitted for review.");
      onClose(); // Close modal on success
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      
      {/* Section 1: The Basics */}
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Business Name</label>
          <input required type="text" placeholder="e.g. SolarMax Nigeria" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue outline-none" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Tagline / Short Pitch</label>
          <input required type="text" placeholder="Providing affordable solar energy to rural communities..." className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue outline-none" />
        </div>

        <div className="grid grid-cols-2 gap-4">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <div className="relative">
                    <Tag className="absolute left-3 top-3 text-gray-400" size={18}/>
                    <select className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue outline-none bg-white">
                        <option>FinTech</option>
                        <option>AgriTech</option>
                        <option>HealthTech</option>
                        <option>Education</option>
                        <option>Real Estate</option>
                        <option>Retail</option>
                    </select>
                </div>
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                <input type="text" placeholder="Lagos, Nigeria" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue outline-none" />
            </div>
        </div>
      </div>

      <hr className="border-gray-100" />

      {/* Section 2: Financials */}
      <div>
        <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Investment Details</h3>
        <div className="grid grid-cols-2 gap-4">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Funding Goal (₦)</label>
                <div className="relative">
                    <DollarSign className="absolute left-3 top-3 text-gray-400" size={18}/>
                    <input required type="number" placeholder="5,000,000" className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue outline-none" />
                </div>
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Equity Offered (%)</label>
                <div className="relative">
                    <PieChart className="absolute left-3 top-3 text-gray-400" size={18}/>
                    <input required type="number" placeholder="10" className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue outline-none" />
                </div>
            </div>
        </div>
      </div>

      <hr className="border-gray-100" />

      {/* Section 3: Pitch Deck / Visuals */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Cover Image & Documents</label>
        <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 flex flex-col items-center justify-center text-center hover:bg-gray-50 transition cursor-pointer">
            <div className="bg-blue-50 p-3 rounded-full mb-3">
                <Upload className="text-brand-blue" size={24} />
            </div>
            <p className="text-sm font-medium text-gray-900">Click to upload or drag and drop</p>
            <p className="text-xs text-gray-500 mt-1">SVG, PNG, JPG or GIF (max. 800x400px)</p>
        </div>
      </div>

      {/* Section 4: Detailed Description */}
      <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Description</label>
          <textarea rows="4" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue outline-none" placeholder="Tell investors why they should choose you..."></textarea>
      </div>

      {/* Actions */}
      <div className="flex justify-end gap-3 pt-2">
        <Button type="button" variant="ghost" onClick={onClose}>Cancel</Button>
        <Button type="submit" variant="primary" className="min-w-[140px]">
            {isLoading ? 'Submitting...' : 'Post Opportunity'}
        </Button>
      </div>
    </form>
  );
};

export default CreateOpportunityForm;