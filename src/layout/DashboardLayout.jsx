import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { LayoutGrid, Briefcase, MessageSquare, User, Settings, Bell, Search, Menu, X, Users } from 'lucide-react';

const SidebarItem = ({ icon: Icon, label, path, isActive, onClick }) => (
  <Link 
    to={path} 
    onClick={onClick}
    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive ? 'bg-blue-50 text-brand-blue font-semibold' : 'text-gray-600 hover:bg-gray-50'}`}
  >
    <Icon size={20} />
    <span>{label}</span>
  </Link>
);

const DashboardLayout = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close menu when clicking a link on mobile
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className="flex h-screen bg-brand-light font-sans overflow-hidden">
      
      {/* 1. MOBILE OVERLAY (Dark background when menu is open) */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 md:hidden backdrop-blur-sm"
          onClick={closeMenu}
        ></div>
      )}

      {/* 2. SIDEBAR (Responsive) */}
      <aside className={`
        fixed md:static inset-y-0 left-0 z-30 w-64 bg-white border-r border-gray-200 flex flex-col transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <div className="p-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-brand-blue">Naajih<span className="text-brand-gold">Biz</span></h1>
          {/* Close Button (Mobile Only) */}
          <button onClick={closeMenu} className="md:hidden text-gray-500">
            <X size={24} />
          </button>
        </div>
        
        <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
          <SidebarItem onClick={closeMenu} icon={LayoutGrid} label="Dashboard" path="/dashboard" isActive={location.pathname === '/dashboard'} />
          <SidebarItem onClick={closeMenu} icon={Briefcase} label="Opportunities" path="/dashboard/opportunities" isActive={location.pathname.includes('opportunities')} />
          <SidebarItem onClick={closeMenu} icon={Users} label="Find Investors" path="/dashboard/investors" isActive={location.pathname.includes('investors')} />
          <SidebarItem onClick={closeMenu} icon={MessageSquare} label="Messages" path="/dashboard/messages" isActive={location.pathname.includes('messages')} />
          <SidebarItem onClick={closeMenu} icon={User} label="Profile" path="/dashboard/profile" isActive={location.pathname.includes('profile')} />
        </nav>

        <div className="p-4 border-t border-gray-100">
           <SidebarItem onClick={closeMenu} icon={Settings} label="Settings" path="/dashboard/settings" isActive={location.pathname.includes('settings')} />
           {/* Logout Placeholder */}
           <Link to="/login" className="flex items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-50 rounded-lg mt-2">
             <span className="font-medium">Log Out</span>
           </Link>
        </div>
      </aside>

      {/* 3. MAIN CONTENT AREA */}
      <main className="flex-1 flex flex-col h-full overflow-hidden w-full">
        {/* TOP HEADER */}
        <header className="h-16 bg-white border-b border-gray-200 flex justify-between items-center px-4 md:px-8 shrink-0">
          
          {/* Hamburger Button (Mobile Only) */}
          <button 
            className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg mr-2"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>

          {/* Search Bar (Hidden on small mobile) */}
          <div className="relative hidden sm:block w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input type="text" placeholder="Search for investors or startups..." className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue text-sm" />
          </div>
          
          <div className="flex items-center gap-4 ml-auto">
            <button className="relative p-2 hover:bg-gray-100 rounded-full">
              <Bell size={20} className="text-gray-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
            </button>
            <div className="w-8 h-8 bg-brand-blue rounded-full text-white flex items-center justify-center font-bold text-xs">
              NS
            </div>
          </div>
        </header>

        {/* PAGE CONTENT SCROLL AREA */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8">
          <Outlet /> 
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;