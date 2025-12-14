import type { ReactNode } from 'react';
import rwamps_logo from '../../../assets/RWAMPS logo-1.svg';
import { FaShoppingBasket } from "react-icons/fa";
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
  return (
    <section className="w-full">
      <nav className="flex flex-col md:grid md:grid-cols-3 items-center w-full px-4 md:px-6 py-4 gap-4 md:gap-0">

        {/* LEFT: Logo - Always top left, centered on mobile */}
        <div className=" flex items-center gap-3 md:justify-self-start w-full md:w-auto justify-center md:justify-start">
          <img
            src={rwamps_logo}
            alt="Rwamps Logo"
            className="h-10 md:h-12 w-10 md:w-12 object-contain"
          />
          <span className="font-semibold text-xl md:text-2xl text-gray-800/70">
            Rwamps
          </span>
        </div>

        {/* CENTER: Nav links - Hidden on mobile, shown on medium+ */}
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

        {/* RIGHT: Icons - Always top right */}
        <div className="flex items-center gap-5 md:justify-self-end w-full md:w-auto justify-center md:justify-start">
          <FaShoppingBasket className="text-xl md:text-2xl cursor-pointer hover:text-yellow-700 transition-colors" />
          <LuMessageCircleHeart className="text-xl md:text-2xl cursor-pointer hover:text-yellow-700 transition-colors" />
        </div>

      </nav>

      {/* Mobile Navigation - Shown only on small screens */}
      <div className="md:hidden w-full px-4 pb-4">
        <div className="flex items-center justify-center gap-3 rounded-4xl border-2 border-gray-600/5 p-3 shadow-md shadow-slate-600/50 overflow-x-auto">
          {navlinkList.map((navlink) => (
            <a
              key={navlink.title}
              href={navlink.href}
              className="text-gray-700 font-medium px-2 hover:text-yellow-700 whitespace-nowrap text-sm"
            >
              {navlink.title}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NavbarComponent;