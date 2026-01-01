import header from "../../../assets/header.png";
import tour_one from "../../../assets/tours_one.png";
import tour_two from "../../../assets/tours_two.png";
import tour_three from "../../../assets/tours_three.png";
import { CgArrowsExchangeAlt } from "react-icons/cg";
import user_one from "../../../assets/user_one.png";
import user_two from "../../../assets/tours_two.png";
import user_three from "../../../assets/user_three.png";
import user_four from "../../../assets/user_four.png";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { MdDoubleArrow } from "react-icons/md";

const HeaderComponent = () => {
  return (
    <section className="w-full top-20 flex flex-col justify-center items-center relative mt-[100px] md:mt-[120px] overflow-hidden px-4 md:px-8 lg:px-16 py-8">

      {/* Main Grid Container */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 justify-center items-start gap-12 lg:gap-16">

        {/* LEFT COLUMN */}
        <div className="flex flex-col justify-start items-center lg:items-start space-y-8 relative">
          
          {/* Add vertical separator line for desktop */}
          <div className="hidden lg:block absolute -right-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-300/50 to-transparent"></div>
          
          {/* "Let's" with Image */}
          <div className="flex flex-col lg:flex-row justify-center lg:justify-start items-center lg:items-end gap-6 w-full">
            <div className="flex justify-center items-center">
              <span className="text-7xl md:text-8xl lg:text-9xl font-bold text-gray-900 leading-none">
                Let's
              </span>
            </div>
            <div className="w-64 md:w-72 lg:w-80 h-24 md:h-28 flex justify-center items-center shadow-lg shadow-gray-700/30 rounded-full overflow-hidden">
              <img 
                src={header} 
                alt="Travel header" 
                className='w-full h-full object-cover' 
              />
            </div>
          </div>

          {/* Text Content - Add subtle background for better separation */}
          <div className="flex flex-col justify-center gap-6 items-center lg:items-start text-center lg:text-left w-full p-6 lg:p-4 rounded-2xl bg-gradient-to-br from-white/50 to-gray-50/50">
            <div className="flex justify-start items-center p-2 w-full">
              <span className='text-4xl md:text-5xl lg:text-6xl font-bold text-green-800 leading-tight'>
                Explore the scenery
              </span>
            </div>
            <div className="flex justify-start items-center leading-relaxed p-4 lg:p-2 w-full">
              <p className='text-gray-700 text-lg md:text-xl max-w-xl'>
                Your adventure begins here. Discover breathtaking destinations and create memories that last a lifetime.
              </p>
            </div>
          </div>

          {/* Tab Navigation - Enhance with border */}
          <div className="flex justify-center items-center w-full max-w-md mt-4">
            <div className="flex w-full rounded-xl overflow-hidden shadow-lg border border-gray-200">
              <div className="bg-neutral-200/90 hover:bg-yellow-600 w-full hover:text-white transition-all duration-300 px-6 py-4 hover:cursor-pointer text-center border-r border-gray-300">
                <span className='font-semibold text-lg'>Destination</span>
              </div>
              <div className="bg-neutral-200/90 hover:bg-yellow-600 w-full hover:text-white transition-all duration-300 px-6 py-4 hover:cursor-pointer text-center border-r border-gray-300">
                <span className='font-semibold text-lg'>Flight</span>
              </div>
              <div className="bg-neutral-200/90 hover:bg-yellow-600 w-full hover:text-white transition-all duration-300 px-6 py-4 hover:cursor-pointer text-center">
                <span className='font-semibold text-lg'>Hotel</span>
              </div>
            </div>
          </div>

        </div>

        {/* CENTER COLUMN - Images */}
        <div className="w-full flex flex-col justify-center items-center gap-8 relative">
          {/* Add vertical separator line for desktop */}
          <div className="hidden lg:block absolute -right-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-300/50 to-transparent"></div>
          
          <article className="relative rounded-2xl overflow-hidden w-full max-w-lg h-72 shadow-xl shadow-gray-400/50 hover:shadow-2xl hover:shadow-gray-500/60 transition-shadow duration-300">
            <img 
              src={tour_one} 
              alt="Tour destination one" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/60 text-white px-3 py-2 rounded-full">
              <CgArrowsExchangeAlt className="text-yellow-400" />
              <span className="text-sm font-medium">Swap View</span>
            </div>                    
          </article>

          <article className="relative rounded-2xl overflow-hidden w-full max-w-lg h-72 shadow-xl shadow-gray-400/50 hover:shadow-2xl hover:shadow-gray-500/60 transition-shadow duration-300">
            <img 
              src={tour_two} 
              alt="Tour destination two" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div> 
            <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/60 text-white px-3 py-2 rounded-full">
              <CgArrowsExchangeAlt className="text-yellow-400" />
              <span className="text-sm font-medium">Swap View</span>
            </div>
          </article>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col justify-center items-center lg:items-start space-y-8">

          {/* Reviews Section */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 w-full p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-lg">

            <div className="flex flex-col justify-center items-center lg:items-start">
              <div className="flex -space-x-3 overflow-hidden py-4 px-6 w-full">
                <img 
                  src={user_one} 
                  alt="User review" 
                  className="inline-block size-12 rounded-full ring-2 ring-white shadow-lg" 
                />
                <img 
                  src={user_two} 
                  alt="User review" 
                  className="inline-block size-12 rounded-full ring-2 ring-white shadow-lg" 
                />
                <img 
                  src={user_three} 
                  alt="User review" 
                  className="inline-block size-12 rounded-full ring-2 ring-white shadow-lg" 
                />
                <img 
                  src={user_four} 
                  alt="User review" 
                  className="inline-block size-12 rounded-full ring-2 ring-white shadow-lg" 
                />
                <a 
                  href="#" 
                  className="rounded-full size-12 bg-green-800 text-white font-bold flex justify-center items-center text-sm ring-2 ring-white shadow-lg hover:bg-green-700 transition-colors"
                >
                  99+
                </a>
              </div> 

              <div className="p-4 flex justify-start">
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-2">
                  <div className="flex items-center">
                    <span className="text-xl font-bold text-gray-800">4.5</span>
                    <span className="text-yellow-500 ml-1">★★★★★</span>
                  </div>
                  <span className="text-md font-semibold text-gray-600">out of 5.0</span>
                </div>
              </div>
            </div>

            <div className="flex flex-row lg:flex-col justify-center items-center gap-4 rounded-full p-4 bg-white/80">
              <a href="#" className="w-12 h-12 flex items-center justify-center bg-white rounded-full p-2 shadow-lg hover:shadow-xl hover:scale-110 transition-all">
                <FaLinkedin className="text-yellow-700 size-6"/>
              </a>
              <a href="#" className="w-12 h-12 flex items-center justify-center bg-white rounded-full p-2 shadow-lg hover:shadow-xl hover:scale-110 transition-all">
                <FaFacebook className="text-yellow-700 size-6"/>
              </a>
              <a href="#" className="w-12 h-12 flex items-center justify-center bg-white rounded-full p-2 shadow-lg hover:shadow-xl hover:scale-110 transition-all">
                <FaInstagram className="text-yellow-700 size-6"/>
              </a>
            </div>

          </div>

          {/* Bottom Image */}
          <div className="w-full flex justify-center items-center">
            <article className="relative rounded-2xl overflow-hidden w-full max-w-lg h-72 shadow-xl shadow-gray-400/50 hover:shadow-2xl hover:shadow-gray-500/60 transition-shadow duration-300">
              <img 
                src={tour_three} 
                alt="Tour destination three" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div> 
              <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/60 text-white px-3 py-2 rounded-full">
                <CgArrowsExchangeAlt className="text-yellow-400" />
                <span className="text-sm font-medium">Swap View</span>
              </div>
            </article>
          </div>

          {/* Explore Packages CTA */}
          <div className="flex justify-center items-center p-4 w-full">
            <a 
              href="#" 
              className="group inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-gradient-to-r from-yellow-600 to-yellow-700 text-white font-bold text-xl shadow-lg hover:shadow-xl hover:from-yellow-700 hover:to-yellow-800 transition-all duration-300"
            >
              Explore Our Packages
              <MdDoubleArrow className="group-hover:translate-x-2 transition-transform duration-300"/>
            </a>
          </div>

        </div>

      </div>

      {/* Search Form - Desktop Only */}
      <div className="hidden lg:flex w-full max-w-6xl justify-center items-center md:justify-start md:items-end mt-12 p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl shadow-xl">
        
        <form action="" className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-between items-end gap-8 p-6 text-gray-700 w-full">

          <div className="flex flex-col justify-start items-start gap-3 min-w-[200px]">
            <label htmlFor="location" className="font-semibold text-gray-800">Location</label>
            <select 
              name="location" 
              id="location" 
              className="w-full rounded-xl p-3 px-4 bg-white border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            >
              <option value="">Select Destination</option>
              <option value="abu-dhabi">Abu Dhabi</option>
              <option value="dubai">Dubai</option>
              <option value="ajman">Ajman</option>
              <option value="fujairah">Fujairah</option>
              <option value="ras-al-khaimah">Ras Al Khaimah</option> 
              <option value="umm-al-quwain">Umm Al Quwain</option>
              <option value="sharjah">Sharjah</option>
            </select>
          </div>

          <div className="flex flex-col justify-start items-start gap-3 min-w-[200px]">
            <label htmlFor="date" className="font-semibold text-gray-800">Date</label>
            <input 
              type="date" 
              name="date" 
              id="date" 
              className="w-full rounded-xl p-3 px-4 bg-white border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            />
          </div>

          <div className="flex flex-col justify-start items-start gap-3 min-w-[200px]">
            <label htmlFor="price" className="font-semibold text-gray-800">Price Range</label>
            <select 
              name="price" 
              id="price" 
              className="w-full rounded-xl p-3 px-4 bg-white border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            >
              <option value="">Select Budget</option>
              <option value="1000-2500">AED 1000 - 2500</option>
              <option value="2600-5000">AED 2600 - 5000</option>
              <option value="5000-7500">AED 5000 - 7500</option>
              <option value="7500-10000">AED 7500 - 10000</option>
              <option value="10000-15000">AED 10000 - 15000</option>
              <option value="15000-20000">AED 15000 - 20000</option>
            </select>
          </div>

          <div className="flex h-full justify-center items-center">
            <button 
              type="submit"
              className="px-12 py-3 rounded-xl bg-gradient-to-r from-green-800 to-green-700 hover:from-green-700 hover:to-green-600 transition-all duration-300 text-white font-bold text-lg shadow-lg hover:shadow-xl border-2 border-green-700/60 hover:scale-105"
            >
              Search Now
            </button>                     
          </div>

        </form>

      </div>

    </section>
  )
}

export default HeaderComponent;