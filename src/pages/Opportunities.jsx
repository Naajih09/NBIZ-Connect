import React, { useState } from 'react';
import OpportunityCard from '../components/OpportunityCard';
import Button from '../components/Button';
import Modal from '../components/Modal'; // Import Modal
import CreateOpportunityForm from '../components/forms/CreateOpportunityForm'; // Import Form
import { Filter, Plus } from 'lucide-react';

const MOCK_DATA = [
  // ... your previous mock data
  { id: 1, title: "AgriTech Solutions", category: "Agriculture", amount: "$50,000", location: "Lagos, NG", desc: "Automated irrigation systems..." },
  { id: 2, title: "PayFast Wallet", category: "FinTech", amount: "$120,000", location: "Abuja, NG", desc: "Seamless cross-border payments..." },
];

const Opportunities = () => {
  // 1. State to control the modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-brand-dark">Investment Opportunities</h1>
          <p className="text-gray-500">Discover and connect with high-growth businesses.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="px-4"><Filter size={16}/> Filters</Button>
          
          {/* 2. Button triggers the modal */}
          <Button variant="secondary" onClick={() => setIsModalOpen(true)}>
            <Plus size={18} /> Post a Business
          </Button>
        </div>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_DATA.map((item) => (
          <OpportunityCard 
            key={item.id}
            title={item.title}
            category={item.category}
            amount={item.amount}
            location={item.location}
            description={item.desc}
          />
        ))}
      </div>

      {/* 3. The Modal Component sits here */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title="Create New Opportunity"
      >
        <CreateOpportunityForm onClose={() => setIsModalOpen(false)} />
      </Modal>
    </div>
  );
};

export default Opportunities;