import { useState } from "react";
import user_one from "../../../assets/user_one.png";
import user_two from "../../../assets/user_two.png";
import user_three from "../../../assets/user_three.png";
import user_four from "../../../assets/user_four.png";
import user_five from "../../../assets/user_five.png";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

interface testimonialsProps {
    image: string;
    comment: string;
    name: string;
    occupation: string;
    rating: number;
}

const testimonialsList: testimonialsProps[] = [
    { 
        image: user_one, 
        comment: "They took care of everything from transport to accommodations, making the whole trip completely stress-free and thoroughly enjoyable. The attention to detail was exceptional!", 
        name: "Khalif Muhammad", 
        occupation: "CEO, XYZ Company",
        rating: 5
    },
    { 
        image: user_two, 
        comment: "An unforgettable experience! The tour guides were knowledgeable, the itinerary was perfectly planned, and every moment felt special. Highly recommended for anyone seeking adventure.", 
        name: "Sarah Johnson", 
        occupation: "Marketing Director, TechCorp",
        rating: 5
    },
    { 
        image: user_three, 
        comment: "The best travel experience of my life. From booking to departure, everything was seamless. The team's professionalism and dedication made our family vacation perfect.", 
        name: "Robert Chen", 
        occupation: "Senior Engineer, Innovate Labs",
        rating: 4
    },
    { 
        image: user_four, 
        comment: "Exceptional service and attention to detail. They customized our honeymoon trip exactly as we wanted. Every hotel, tour, and transfer was perfectly arranged.", 
        name: "Emma Williams", 
        occupation: "Architect, Design Studio",
        rating: 5
    },
    { 
        image: user_five, 
        comment: "Outstanding travel agency! They understood exactly what we were looking for and delivered beyond expectations. The cultural experiences they arranged were authentic and memorable.", 
        name: "David Miller", 
        occupation: "Finance Manager, Global Bank",
        rating: 5
    }
];

const TestimonialsComponent = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? testimonialsList.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === testimonialsList.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex: number) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <section className="w-full flex justify-center items-center py-20 px-4 md:px-8 bg-gradient-to-b from-gray-50 to-white p-4">
            <div className="w-full max-w-6xl">
                {/* Header Section */}
                <div className="flex flex-col justify-center items-center gap-4 py-6 w-full">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        What Our <span className="text-yellow-700">Travelers</span> Say
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Hear from our satisfied customers about their unforgettable journeys
                    </p>
                </div>

                {/* Main Slider Card */}
                <div className="relative w-full">
                    <div className="w-[90%] mx-auto">
                        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                            <div className="grid grid-cols-1 lg:grid-cols-2">
                                {/* Left Side - Image */}
                                <div className="relative lg:h-auto h-80">
                                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/20 to-yellow-700/10"></div>
                                    <img 
                                        src={testimonialsList[currentIndex].image} 
                                        alt={testimonialsList[currentIndex].name}
                                        className="w-full h-full object-cover"
                                    />
                                    
                                    {/* Quote Icon Overlay */}
                                    <div className="absolute bottom-6 left-6 w-16 h-16 bg-yellow-700/90 rounded-full flex items-center justify-center shadow-xl">
                                        <FaQuoteLeft className="text-white text-2xl" />
                                    </div>
                                    
                                    {/* Rating Badge */}
                                    <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-lg">
                                        <div className="flex items-center gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <FaStar 
                                                    key={i} 
                                                    className={`text-lg ${i < testimonialsList[currentIndex].rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`}
                                                />
                                            ))}
                                            <span className="ml-2 font-bold text-gray-800">
                                                {testimonialsList[currentIndex].rating}.0
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Side - Content & Controls */}
                                <div className="p-8 md:p-12 flex flex-col justify-between h-full">
                                    <div>
                                        {/* Quote Icon */}
                                        <div className="mb-6">
                                            <FaQuoteLeft className="text-yellow-700/30 text-5xl" />
                                        </div>
                                        
                                        {/* Testimonial Text */}
                                        <div className="mb-8">
                                            <p className="text-lg md:text-xl text-gray-700 leading-relaxed italic">
                                                "{testimonialsList[currentIndex].comment}"
                                            </p>
                                        </div>
                                        
                                        {/* User Info */}
                                        <div className="border-l-4 border-yellow-700 pl-6 py-2">
                                            <h3 className="text-2xl font-bold text-gray-900">
                                                {testimonialsList[currentIndex].name}
                                            </h3>
                                            <p className="text-gray-600 mt-1">
                                                {testimonialsList[currentIndex].occupation}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Navigation Controls */}
                                    <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
                                        {/* Dots Indicator */}
                                        <div className="flex items-center space-x-3">
                                            <span className="text-gray-500 text-sm">
                                                {String(currentIndex + 1).padStart(2, '0')} / {String(testimonialsList.length).padStart(2, '0')}
                                            </span>
                                            <div className="flex space-x-2">
                                                {testimonialsList.map((_, slideIndex) => (
                                                    <button
                                                        key={slideIndex}
                                                        onClick={() => goToSlide(slideIndex)}
                                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                                            slideIndex === currentIndex 
                                                            ? 'bg-green-700 w-8' 
                                                            : 'bg-gray-300 hover:bg-gray-400'
                                                        }`}
                                                        aria-label={`Go to testimonial ${slideIndex + 1}`}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                        
                                        {/* Arrow Buttons */}
                                        <div className="flex items-center space-x-4 gap-4">
                                            <button
                                                onClick={goToPrevious}
                                                className="w-12 h-12 rounded-full bg-yellow-700 text-white flex items-center justify-center shadow-lg hover:bg-yellow-800 hover:shadow-xl hover:scale-105 transform transition-all duration-300"
                                                aria-label="Previous testimonial"
                                            >
                                                <MdKeyboardArrowLeft className="text-2xl" />
                                            </button>
                                            <button
                                                onClick={goToNext}
                                                className="w-12 h-12 rounded-full bg-yellow-700 text-white flex items-center justify-center shadow-lg hover:bg-yellow-800 hover:shadow-xl hover:scale-105 transform transition-all duration-300"
                                                aria-label="Next testimonial"
                                            >
                                                <MdKeyboardArrowRight className="text-2xl" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-100 rounded-full -z-10"></div>
                    <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-yellow-50 rounded-full -z-10"></div>
                </div>

                {/* Additional Testimonials Preview (Optional) */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 py-6">
                    {testimonialsList.slice(0, 3).map((testimonial, index) => (
                        <div 
                            key={index}
                            className={`p-6 rounded-2xl transition-all duration-300 cursor-pointer py-4 ${
                                index === currentIndex 
                                ? 'bg-white shadow-lg border-2 border-yellow-700/20' 
                                : 'bg-gray-50 hover:bg-white hover:shadow-md'
                            }`}
                            onClick={() => goToSlide(index)}
                        >
                            <div className="flex items-center mb-4 gap-2">
                                <img 
                                    src={testimonial.image} 
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full object-cover mr-4"
                                />
                                <div>
                                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                                    <p className="text-sm text-gray-600">{testimonial.occupation}</p>
                                </div>
                            </div>
                            <div className="flex mb-3 py-3">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar 
                                        key={i} 
                                        className={`text-sm ${i < testimonial.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`}
                                    />
                                ))}
                            </div>
                            <p className="text-gray-700 text-sm line-clamp-2">
                                "{testimonial.comment}"
                            </p>
                        </div>
                    ))}
                </div>

                {/* Stats Section */}
                <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
                    <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
                        <div className="text-4xl font-bold text-yellow-700 mb-2">98%</div>
                        <div className="text-gray-600">Customer Satisfaction</div>
                    </div>
                    <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
                        <div className="text-4xl font-bold text-yellow-700 mb-2">5K+</div>
                        <div className="text-gray-600">Happy Travelers</div>
                    </div>
                    <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
                        <div className="text-4xl font-bold text-yellow-700 mb-2">150+</div>
                        <div className="text-gray-600">Destinations</div>
                    </div>
                    <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
                        <div className="text-4xl font-bold text-yellow-700 mb-2">24/7</div>
                        <div className="text-gray-600">Support Available</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsComponent;