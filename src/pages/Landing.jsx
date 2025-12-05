import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Users, DollarSign, ArrowRight, CheckCircle } from 'lucide-react';
import Button from '../components/Button';

const Landing = () => {
  return (
    <div className="font-sans text-brand-dark bg-white">
      {/* 1. NAVBAR */}
      <nav className="flex justify-between items-center px-6 md:px-20 py-5 bg-white sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-blue rounded-lg flex items-center justify-center text-white font-bold">N</div>
          <span className="text-2xl font-bold text-brand-blue">NaajihBiz<span className="text-brand-gold">.</span></span>
        </div>
        
        <div className="hidden md:flex gap-8 font-medium text-gray-600">
          <a href="#features" className="hover:text-brand-blue transition">Features</a>
          <a href="#how-it-works" className="hover:text-brand-blue transition">How it Works</a>
          <a href="#community" className="hover:text-brand-blue transition">Community</a>
        </div>

        <div className="flex gap-4">
          <Link to="/login">
            <Button variant="ghost" className="hidden md:block">Log In</Button>
          </Link>
          <Link to="/signup">
            <Button variant="secondary">Get Started</Button>
          </Link>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <header className="relative bg-brand-blue overflow-hidden text-white pt-20 pb-32 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div className="inline-block px-4 py-1 bg-blue-800 rounded-full text-blue-200 text-sm font-semibold mb-6 border border-blue-700">
              🚀 The #1 Platform for Halal Business Growth
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Connect. Invest. <br/><span className="text-brand-gold">Succeed.</span>
            </h1>
            <p className="text-lg text-blue-100 mb-8 max-w-lg leading-relaxed">
              We bridge the gap between ambitious entrepreneurs and visionary investors. 
              Secure funding, find mentorship, and grow your business with ethical principles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/signup">
                <Button variant="secondary" className="px-8 py-4 text-lg">Join the Network</Button>
              </Link>
              <Link to="/dashboard/opportunities">
                <Button variant="outline" className="px-8 py-4 text-lg border-white text-white hover:bg-white hover:text-brand-blue">
                  Explore Opportunities
                </Button>
              </Link>
            </div>
            <div className="mt-8 flex items-center gap-4 text-sm text-blue-200 font-medium">
              <div className="flex -space-x-2">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gray-300 border-2 border-brand-blue"></div>
                ))}
              </div>
              <p>Trusted by 5,000+ members</p>
            </div>
          </div>

          {/* Hero Illustration / Dashboard Preview */}
          <div className="relative hidden md:block">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-gold opacity-20 rounded-full blur-3xl -translate-y-1/2"></div>
            <div className="relative bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-2xl transform rotate-2 hover:rotate-0 transition duration-500">
               {/* Mock Card 1 */}
               <div className="bg-white p-4 rounded-xl shadow-lg mb-4 flex items-center gap-4">
                 <div className="bg-green-100 p-3 rounded-full text-green-600"><DollarSign size={24}/></div>
                 <div>
                   <p className="text-gray-500 text-sm">Total Investment Raised</p>
                   <p className="text-brand-dark font-bold text-xl">₦ 125,000,000</p>
                 </div>
               </div>
               {/* Mock Card 2 */}
               <div className="bg-white p-4 rounded-xl shadow-lg flex items-center gap-4">
                 <div className="bg-blue-100 p-3 rounded-full text-brand-blue"><Users size={24}/></div>
                 <div>
                   <p className="text-gray-500 text-sm">Active Investors</p>
                   <p className="text-brand-dark font-bold text-xl">450+ Verified</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
        
        {/* Background Wave (SVG) */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-24" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
          </svg>
        </div>
      </header>

      {/* 3. FEATURES GRID */}
      <section id="features" className="py-24 px-6 md:px-20 bg-white">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-brand-dark mb-4">Why Choose NaajihBiz?</h2>
          <p className="text-gray-500 text-lg">We provide the tools you need to succeed, whether you are looking to fund the next big thing or build it.</p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          {[
            { icon: DollarSign, title: "Secure Funding", desc: "Access verified investors ready to fund halal and ethical business ideas.", color: "text-brand-gold bg-yellow-50" },
            { icon: Users, title: "Thriving Community", desc: "Network with like-minded Muslim entrepreneurs and share experiences.", color: "text-brand-blue bg-blue-50" },
            { icon: TrendingUp, title: "Expert Mentorship", desc: "Get guidance from industry veterans to navigate your business journey.", color: "text-brand-green bg-green-50" }
          ].map((feature, idx) => (
            <div key={idx} className="p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition duration-300 group">
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${feature.color}`}>
                <feature.icon size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-brand-blue transition">{feature.title}</h3>
              <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. CTA / FOOTER */}
      <footer className="bg-gray-50 border-t border-gray-200 pt-20 pb-10 px-6 md:px-20">
        <div className="max-w-5xl mx-auto bg-brand-blue rounded-3xl p-10 md:p-16 text-center text-white shadow-xl mb-20 relative overflow-hidden">
           <div className="relative z-10">
             <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to grow your business?</h2>
             <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">Join thousands of entrepreneurs and investors making a difference today.</p>
             <Link to="/signup">
               <Button variant="secondary" className="px-10 py-4 text-lg font-bold shadow-lg">Get Started Now</Button>
             </Link>
           </div>
           {/* Abstract Circles */}
           <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
           <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-gold opacity-10 rounded-full translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="text-center text-gray-400 text-sm">
          <p>&copy; 2024 NaajihBiz Connect. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;