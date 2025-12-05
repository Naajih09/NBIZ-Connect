import React from 'react';
import { MapPin, DollarSign } from 'lucide-react';
import Button from './Button';

const OpportunityCard = ({ title, description, category, amount, location }) => {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
      <div className="flex justify-between items-start mb-3">
        <span className="bg-blue-50 text-brand-blue text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wide">
          {category}
        </span>
        <span className="text-gray-400 text-xs">Just now</span>
      </div>
      
      <h3 className="text-xl font-bold text-brand-dark mb-2">{title}</h3>
      <p className="text-gray-500 text-sm mb-4 flex-grow line-clamp-3">
        {description}
      </p>

      <div className="border-t border-gray-100 pt-4 mt-auto">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center text-brand-green font-bold">
            <DollarSign size={16} />
            <span>{amount}</span>
          </div>
          <div className="flex items-center text-gray-400 text-sm">
            <MapPin size={14} className="mr-1" />
            <span>{location}</span>
          </div>
        </div>
        <Button variant="outline" className="w-full py-2 text-sm">View Details</Button>
      </div>
    </div>
  );
};

export default OpportunityCard;