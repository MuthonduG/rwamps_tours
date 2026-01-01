import type { ReactNode } from 'react';
import { useState } from 'react';
import rwamps_logo from '../../../assets/RWAMPS logo-1.svg';
import { FaShoppingBasket, FaTimes, FaBars } from "react-icons/fa";
import { LuMessageCircleHeart } from "react-icons/lu";

interface NavLink {
  title: string;
  href: string;
  icon?: ReactNode;
}

const navlinkList: NavLink[] = [
  { title: "Home", href: "#" },
  { title: "About", href: "#" },
  { title: "Services", href: "#" },
  { title: "Contact", href: "#" },
  { title: "FAQs", href: "#" },
  { title: "Tours", href: "#" },
];

const NavbarComponent = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  const closeSideNav = () => {
    setIsSideNavOpen(false);
  };

  return (
    <>
      {/* Main Navbar */}
      <section className="w-full fixed z-50 bg-white/95">
        <nav className="flex flex-col md:grid md:grid-cols-3 items-center w-full px-4 md:px-6 py-4 gap-4 md:gap-0">

          {/* LEFT: Logo and Mobile Menu Button */}
          <div className="flex items-center justify-between w-full md:w-auto md:justify-self-start">
            <div className="flex items-center gap-3">
              <img
                src={rwamps_logo}
                alt="Rwamps Logo"
                className="h-10 md:h-12 w-10 md:w-12 object-contain"
              />
              <span className="font-semibold text-xl md:text-2xl text-gray-800/70">
                Rwamps
              </span>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={toggleSideNav}
              className="md:hidden text-gray-700 text-2xl"
              aria-label="Toggle menu"
            >
              <FaBars />
            </button>
          </div>

          {/* CENTER: Nav links - Hidden on mobile */}
          <div className="hidden md:flex w-full md:w-auto items-center justify-center">
            <div className="flex items-center justify-center gap-4 lg:gap-6 rounded-4xl border-2 border-gray-600/5 p-3 shadow-md shadow-slate-600/50">
              {navlinkList.map((navlink) => (
                <a
                  key={navlink.title}
                  href={navlink.href}
                  className="text-gray-700 font-medium px-2 lg:px-3.5 hover:text-yellow-700 text-sm lg:text-base"
                >
                  {navlink.title}
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT: Icons - Hidden on mobile, shown on medium+ */}
          <div className="hidden md:flex items-center gap-5 md:justify-self-end">
            <FaShoppingBasket className="text-xl md:text-2xl cursor-pointer hover:text-yellow-700 transition-colors" />
            <LuMessageCircleHeart className="text-xl md:text-2xl cursor-pointer hover:text-yellow-700 transition-colors" />
          </div>

        </nav>
      </section>

      {/* Side Navigation Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 md:hidden ${
          isSideNavOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeSideNav}
      />

      {/* Side Navigation Drawer */}
      <aside 
        className={`fixed top-0 right-0 h-full w-64 bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden ${
          isSideNavOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Side Nav Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div className="flex items-center gap-3">
            <img
              src={rwamps_logo}
              alt="Rwamps Logo"
              className="h-10 w-10 object-contain"
            />
            <span className="font-semibold text-xl text-gray-800/70">
              Rwamps
            </span>
          </div>
          <button 
            onClick={closeSideNav}
            className="text-gray-700 text-2xl"
            aria-label="Close menu"
          >
            <FaTimes />
          </button>
        </div>

        {/* Side Nav Links */}
        <nav className="p-6">
          <ul className="space-y-4">
            {navlinkList.map((navlink) => (
              <li key={navlink.title}>
                <a
                  href={navlink.href}
                  onClick={closeSideNav}
                  className="flex items-center gap-3 text-gray-700 font-medium p-3 rounded-lg hover:bg-yellow-50 hover:text-yellow-700 transition-colors"
                >
                  {navlink.icon && (
                    <span className="text-xl">
                      {navlink.icon}
                    </span>
                  )}
                  <span className="text-lg">{navlink.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Side Nav Footer */}
        <div className="absolute bottom-0 w-full p-6 border-t">
          <div className="flex items-center justify-center gap-6">
            <a 
              href="#" 
              className="text-gray-600 hover:text-yellow-700 transition-colors"
              aria-label="Shopping basket"
            >
              <FaShoppingBasket className="text-2xl" />
            </a>
            <a 
              href="#" 
              className="text-gray-600 hover:text-yellow-700 transition-colors"
              aria-label="Messages"
            >
              <LuMessageCircleHeart className="text-2xl" />
            </a>
          </div>
          <div className="mt-4 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Rwamps. All rights reserved.
          </div>
        </div>
      </aside>
    </>
  );
};

export default NavbarComponent;