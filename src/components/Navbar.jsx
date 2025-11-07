import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-neutral-950/80 backdrop-blur-md text-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-wide text-purple-400">
          ConnectFolio
        </Link>

        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`hover:text-purple-400 transition ${
                location.pathname === item.path ? 'text-purple-400' : ''
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="focus:outline-none">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open ? 'max-h-60' : 'max-h-0'
        }`}
      >
        <div className="px-6 pb-4 bg-neutral-900 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`block py-2 border-b border-neutral-700 hover:text-purple-400 transition ${
                location.pathname === item.path ? 'text-purple-400' : ''
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
