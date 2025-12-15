import React from 'react';
import { 
  FiMapPin, 
  FiPhone, 
  FiMail, 
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiLinkedin
} from 'react-icons/fi';
import { MdFlightTakeoff } from 'react-icons/md';

const FooterComponent = () => {
  const footerLinks = {
    Destinations: ['Dubai', 'Abu Dhabi', 'Sharjah', 'Ras Al Khaimah'],
    Tours: ['Desert Safari', 'City Tours', 'Adventure', 'Cultural'],
    Company: ['About Us', 'Contact', 'Careers', 'Blog'],
    Support: ['Help Center', 'FAQ', 'Privacy Policy', 'Terms']
  };

  const socialLinks = [
    { icon: <FiFacebook />, href: '#', label: 'Facebook' },
    { icon: <FiTwitter />, href: '#', label: 'Twitter' },
    { icon: <FiInstagram />, href: '#', label: 'Instagram' },
    { icon: <FiLinkedin />, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="w-full bg-green-900 text-white">
      {/* Main Footer */}
      <div className="w-full py-12">
        <div className="w-full mx-auto px-4 p-6">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
            {/* Logo & Contact */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center">
                  <MdFlightTakeoff className="text-xl text-white" />
                </div>
                <div className='flex flex-col gap-2'>
                  <h2 className="text-2xl font-bold text-white">Rwamps Tours</h2>
                  <p className="text-emerald-200 text-sm">Discover Arabian Wonders</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-8 flex flex-col gap-4">
                <div className="flex items-center gap-3 text-emerald-100">
                  <FiMapPin className="text-emerald-300" />
                  <span className="text-sm">Dubai Marina, Dubai, UAE</span>
                </div>
                <div className="flex items-center gap-3 text-emerald-100">
                  <FiPhone className="text-emerald-300" />
                  <span className="text-sm">+971 4 123 4567</span>
                </div>
                <div className="flex items-center gap-3 text-emerald-100">
                  <FiMail className="text-emerald-300" />
                  <span className="text-sm">contact@rwampstours.com</span>
                </div>
              </div>

              {/* Social Media */}
              <div className='flex flex-col gap-2'>
                <h4 className="font-semibold text-white mb-4">Follow Us</h4>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="w-10 h-10 bg-emerald-800 hover:bg-yellow-700 rounded-lg flex items-center justify-center text-white transition-all duration-300 hover:scale-110 py-4"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Links Grid */}
            <div className="lg:w-3/5">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {Object.entries(footerLinks).map(([category, links]) => (
                  <div key={category} className="min-w-[150px] flex flex-col gap-4">
                    <h4 className="font-semibold text-white mb-6 text-lg border-b border-emerald-700 pb-2">
                      {category}
                    </h4>
                    <ul className="space-y-3">
                      {links.map((link, index) => (
                        <li key={index}>
                          <a
                            href="#"
                            className="text-emerald-200 hover:text-yellow-600 transition-colors text-sm hover:pl-2 duration-300 block py-3"
                          >
                            {link}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t w-full border-emerald-800 py-6 bg-green-950">
        <div className="w-full mx-auto px-4">
          <div className="flex flex-col justify-center items-center gap-4">
            <div className="text-emerald-300 text-sm">
              © {new Date().getFullYear()} Rwamps Tours. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;