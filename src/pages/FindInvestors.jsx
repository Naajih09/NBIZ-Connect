import React from 'react';
import { Search, Filter, ShieldCheck, MapPin } from 'lucide-react';
import Button from '../components/Button';

const INVESTORS = [
  { id: 1, name: "Halal Capital VC", type: "Venture Capital", location: "Lagos", interest: "FinTech, AgriTech", budget: "$50k - $200k" },
  { id: 2, name: "Ahmed Musa", type: "Angel Investor", location: "Kano", interest: "Real Estate", budget: "$10k - $50k" },
  { id: 3, name: "Barakah Group", type: "Syndicate", location: "Abuja", interest: "HealthTech", budget: "$100k+" },
  { id: 4, name: "Zainab Ali", type: "Angel Investor", location: "Remote", interest: "Education", budget: "$5k - $20k" },
];

const FindInvestors = () => {
  return (
    <div>
      {/* Header & Filters */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-brand-dark">Find Investors</h1>
          <p className="text-gray-500">Connect with accredited investors looking for halal opportunities.</p>
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
            <input type="text" placeholder="Search by name or industry..." className="w-full pl-10 pr-4 py-2 border rounded-lg text-sm focus:ring-brand-blue outline-none" />
          </div>
          <Button variant="outline" className="px-3"><Filter size={18}/></Button>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {INVESTORS.map((inv) => (
          <div key={inv.id} className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition group">
            <div className="flex justify-between items-start mb-4">
               <div className="w-12 h-12 bg-brand-dark text-white rounded-full flex items-center justify-center font-bold text-lg">
                 {inv.name.charAt(0)}
               </div>
               <ShieldCheck className="text-brand-gold" size={24} />
            </div>
            
            <h3 className="font-bold text-lg text-gray-900 group-hover:text-brand-blue transition">{inv.name}</h3>
            <p className="text-sm text-gray-500 mb-4">{inv.type}</p>
            
            <div className="space-y-2 text-sm text-gray-600 mb-6">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-gray-400"/> {inv.location}
              </div>
              <div className="bg-gray-50 p-2 rounded">
                <span className="font-semibold text-gray-900">Interests:</span> {inv.interest}
              </div>
              <div className="bg-green-50 text-green-700 p-2 rounded border border-green-100 text-center font-semibold">
                Budget: {inv.budget}
              </div>
            </div>

            <Button variant="outline" className="w-full">Connect Request</Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FindInvestors;