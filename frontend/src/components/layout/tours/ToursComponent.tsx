import type { ReactNode } from "react"
import tour_one from "../../../assets/user_one.png";
import tour_two from "../../../assets/tours_two.png";
import tour_three from "../../../assets/tours_three.png";
import tour_four from "../../../assets/tours_four.png";
import tour_five from "../../../assets/tours_five.png";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { FaHeart } from "react-icons/fa6";
import { FiMapPin, FiStar } from "react-icons/fi";
import { TbCalendar, TbUsers } from "react-icons/tb";

interface toursProps {
    price: number;
    icon: ReactNode;
    city: string;
    address: string;
    image: string;
    rating: number;
    days: number;
    travelers: number;
    tags: string[];
}

const toursLists: toursProps[] = [
    { 
        price: 2400, 
        icon: <FaHeart/>, 
        city: "Dubai", 
        address: "Downtown Dubai - Near Burj Khalifa",
        image: tour_one,
        rating: 4.8,
        days: 5,
        travelers: 8,
        tags: ["Luxury", "Beach", "Shopping"]
    },
    { 
        price: 2100, 
        icon: <FaHeart/>, 
        city: "Riyadh", 
        address: "King Abdulaziz Road, Al-Murabba District",
        image: tour_two,
        rating: 4.6,
        days: 4,
        travelers: 6,
        tags: ["Cultural", "Desert", "History"]
    },
    { 
        price: 2900, 
        icon: <FaHeart/>, 
        city: "Abu Dhabi", 
        address: "Sheikh Zayed Grand Mosque Area",
        image: tour_three,
        rating: 4.9,
        days: 6,
        travelers: 10,
        tags: ["Premium", "Architecture", "Luxury"]
    },
    { 
        price: 1800, 
        icon: <FaHeart/>, 
        city: "Sharjah", 
        address: "Al Qasba Cultural District",
        image: tour_four,
        rating: 4.4,
        days: 3,
        travelers: 4,
        tags: ["Cultural", "Art", "Museum"]
    },
    { 
        price: 3200, 
        icon: <FaHeart/>, 
        city: "Fujairah", 
        address: "East Coast Mountains & Beaches",
        image: tour_five,
        rating: 4.7,
        days: 7,
        travelers: 12,
        tags: ["Adventure", "Beach", "Mountains"]
    },
    { 
        price: 1950, 
        icon: <FaHeart/>, 
        city: "Al Ain", 
        address: "Oasis City, Garden City Region",
        image: tour_four,
        rating: 4.5,
        days: 4,
        travelers: 6,
        tags: ["Nature", "Heritage", "Family"]
    },
    { 
        price: 2750, 
        icon: <FaHeart/>, 
        city: "Muscat", 
        address: "Oman Coastal Road, Muttrah Area",
        image: tour_three,
        rating: 4.8,
        days: 5,
        travelers: 8,
        tags: ["Luxury", "Coastal", "Spa"]
    },
    { 
        price: 2200, 
        icon: <FaHeart/>, 
        city: "Doha", 
        address: "West Bay, Pearl District",
        image: tour_two,
        rating: 4.6,
        days: 4,
        travelers: 6,
        tags: ["Modern", "Shopping", "Luxury"]
    }
]

interface buttonProps {
    title: string;
    href: string;
    active?: boolean;
}

const buttonsList: buttonProps[] = [
    { title: "All Type", href: "#", active: true },
    { title: "Sandy Dunes", href: "#" },
    { title: "Cold Bond Fires", href: "#" },
    { title: "Exclusive Hotels", href: "#" },
    { title: "Beautiful Malls", href: "#" },
    { title: "Beach Resorts", href: "#" },
    { title: "Mountain Views", href: "#" }
]

const ToursComponent = () => {
  return (
    <section className="w-full py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-white to-gray-50">
        
        {/* Header Section */}
        <div className="w-full flex flex-col gap-4">
            <div className="flex flex-col justify-center items-center gap-10 py-10">
                <span className="inline-block text-sm font-semibold text-emerald-600 bg-emerald-50 px-4 py-2 rounded-full mb-4">
                    ✨ Premium Destinations
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                    Explore Best <span className="text-emerald-600">Travel</span> Places
                </h1>
                <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto text-center leading-10">
                    Discover handpicked luxury destinations with exclusive experiences tailored for your perfect getaway
                </p>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center items-center gap-4 mb-12">
                {
                    buttonsList.map((link) => (
                        <a 
                            href={link.href} 
                            key={link.title} 
                            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg ${
                                link.active 
                                ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-200' 
                                : 'bg-white text-gray-700 border border-gray-200 hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700'
                            }`}
                        >
                            {link.title}
                        </a>
                    ))
                }
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-between items-center mb-12">
                <div className="text-gray-600">
                    <span className="text-2xl font-bold text-gray-900">8</span>
                    <span className="ml-2">Premium Destinations</span>
                </div>
                <div className="flex gap-3">
                    <button className="w-12 h-12 rounded-full bg-emerald-600 text-white flex justify-center items-center shadow-lg hover:bg-emerald-700 hover:scale-110 transform transition-all duration-300 hover:shadow-xl">
                        <MdKeyboardDoubleArrowLeft className="text-xl" />
                    </button>
                    <button className="w-12 h-12 rounded-full bg-white text-gray-700 border border-gray-200 flex justify-center items-center shadow-lg hover:bg-gray-50 hover:scale-110 transform transition-all duration-300 hover:shadow-xl">
                        <MdKeyboardDoubleArrowRight className="text-xl" />
                    </button>
                </div>
            </div>

            {/* Tours Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {
                    toursLists.map((tour, index) => (
                        <div 
                            key={index} 
                            className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                        >
                            {/* Image Container with Overlay */}
                            <div className="relative h-64 overflow-hidden">
                                <img 
                                    src={tour.image} 
                                    alt={tour.city} 
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                
                                {/* Favorite Button */}
                                <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-red-500 shadow-lg hover:bg-white hover:scale-110 transition-all duration-300 z-10">
                                    {tour.icon}
                                </button>
                                
                                {/* Price Tag */}
                                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-lg">
                                    <div className="flex items-center gap-1">
                                        <span className="text-lg font-bold text-emerald-700">AED {tour.price}</span>
                                        <span className="text-sm text-gray-500">/person</span>
                                    </div>
                                </div>
                                
                                {/* Rating Badge */}
                                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-1.5 shadow-lg">
                                    <FiStar className="text-amber-500 fill-amber-500" />
                                    <span className="font-bold text-gray-800">{tour.rating}</span>
                                </div>
                            </div>
                            
                            {/* Content */}
                            <div className="p-6">
                                {/* City & Tags */}
                                <div className="mb-4">
                                    <div className="flex items-center justify-between mb-3 py-4">
                                        <h3 className="text-xl font-bold text-gray-900">{tour.city}</h3>
                                        <div className="flex items-center gap-1 text-gray-500">
                                            <TbUsers className="text-lg" />
                                            <span className="text-sm font-medium">{tour.travelers} people</span>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center text-gray-600 mb-4 py-4">
                                        <FiMapPin className="mr-2 text-emerald-600" />
                                        <span className="text-sm">{tour.address}</span>
                                    </div>
                                    
                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-4 py-4">
                                        {tour.tags.map((tag, i) => (
                                            <span 
                                                key={i} 
                                                className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-medium rounded-full"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                
                                {/* Details */}
                                <div className="flex items-center justify-between text-sm text-gray-600 border-t border-gray-100 pt-4 py-4">
                                    <div className="flex items-center gap-2">
                                        <TbCalendar className="text-lg" />
                                        <span>{tour.days} days</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <TbUsers className="text-lg" />
                                        <span>{tour.travelers} max</span>
                                    </div>
                                    <div className="text-emerald-700 font-semibold">
                                        <span className="text-lg">★★★★</span>
                                    </div>
                                </div>
                                
                                {/* View Details Button */}
                                <button className="w-full mt-6 py-3 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-semibold rounded-xl shadow-md hover:shadow-xl hover:from-emerald-700 hover:to-emerald-800 transform hover:-translate-y-0.5 transition-all duration-300 group-hover:shadow-emerald-200">
                                    View Details
                                </button>
                            </div>
                            
                            {/* Hover Effect Border */}
                            <div className="absolute inset-0 border-2 border-transparent group-hover:border-emerald-400/30 rounded-3xl transition-all duration-500 pointer-events-none"></div>
                        </div>
                    ))
                }
            </div>

            {/* View All Button */}
            <div className="text-center mt-16">
                <button className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:from-emerald-700 hover:to-emerald-800 transform hover:-translate-y-1 transition-all duration-300">
                    View All Destinations
                    <MdKeyboardDoubleArrowRight className="text-xl group-hover:translate-x-2 transition-transform duration-300" />
                </button>
            </div>
        </div>
    </section>
  )
}

export default ToursComponent