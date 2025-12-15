import image from "../../assets/bg_image.png";

const WhyUsComponent = () => {
  return (
    <section className="w-full flex justify-center items-center py-12 px-4 md:px-8">
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        
        {/* Left Side - Content */}
        <div className="flex flex-col justify-center items-start w-full p-4 lg:p-8">
          <div className="mb-6 lg:mb-8">
            <span className="text-4xl md:text-5xl lg:text-6xl text-gray-800 font-bold">
              Why Choose Us ?
            </span>
          </div>

          <div className="mb-10 lg:mb-12 p-2 py-6">
            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 leading-10">
              Experience ultimate comfort in our Single Restore Room, designed to offer tranquility and relaxation for your perfect getaway.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            <div className="flex flex-col justify-start items-start p-6 lg:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
              <div className="flex items-center mb-4 gap-4 py-2">
                <div className="w-10 h-10 flex items-center justify-center bg-blue-100 text-blue-600 rounded-lg mr-4 ">
                  <span className="text-lg font-bold">01</span>
                </div>
                <span className="font-bold text-xl lg:text-2xl text-gray-800">Travel Plan</span>
              </div>
              <p className="text-gray-600 leading-relaxed text-base lg:text-lg">
                Personalized itineraries designed to match your unique travel style and preferences.
              </p>
            </div>

            <div className="flex flex-col justify-start items-start p-6 lg:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
              <div className="flex items-center mb-4 gap-1.25 py-2">
                <div className="w-10 h-10 flex items-center justify-center bg-green-100 text-green-600 rounded-lg mr-4">
                  <span className="text-lg font-bold">02</span>
                </div>
                <span className="font-bold text-xl lg:text-2xl text-gray-800">Expert Guides</span>
              </div>
              <p className="text-gray-600 leading-relaxed text-base lg:text-lg">
                Knowledgeable local guides to enhance your experience with insider tips and stories.
              </p>
            </div>

            <div className="flex flex-col justify-start items-start p-6 lg:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
              <div className="flex items-center mb-4 py-2 gap-2">
                <div className="w-10 h-10 flex items-center justify-center bg-purple-100 text-purple-600 rounded-lg mr-4">
                  <span className="text-lg font-bold">03</span>
                </div>
                <span className="font-bold text-xl lg:text-2xl text-gray-800">24/7 Support</span>
              </div>
              <p className="text-gray-600 leading-relaxed text-base lg:text-lg">
                Round-the-clock assistance to ensure your journey is smooth and worry-free.
              </p>
            </div>

            <div className="flex flex-col justify-start items-start p-6 lg:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
              <div className="flex items-center mb-4 py-2 gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-orange-100 text-orange-600 rounded-lg mr-4">
                  <span className="text-lg font-bold">04</span>
                </div>
                <span className="font-bold text-xl lg:text-2xl text-gray-800">Best Value</span>
              </div>
              <p className="text-gray-600 leading-relaxed text-base lg:text-lg">
                Premium experiences at competitive prices with no hidden fees or charges.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center items-center w-full p-4 lg:p-8">
          <div className="relative w-full max-w-2xl aspect-square flex justify-center items-center">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
            
            <div className="relative w-full h-full flex justify-center items-center">
              <div className="absolute w-[85%] h-[85%] bg-gradient-to-br from-green-600/10 to-emerald-400/10 rounded-full"></div>
              
              <div className="relative w-[75%] h-[75%] bg-gradient-to-br from-emerald-500/50 to-green-600/60 rounded-full shadow-2xl shadow-green-500/30 flex justify-center items-center overflow-hidden">
                <img 
                  src={image} 
                  alt="Travel Experience" 
                  className="w-full h-full object-cover mix-blend-overlay opacity-90"
                />
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-emerald-300/20 rounded-full blur-xl"></div>
                
                {/* Decorative Circles */}
                <div className="absolute -top-8 right-8 w-16 h-16 border-2 border-emerald-300/30 rounded-full"></div>
                <div className="absolute bottom-12 -left-8 w-12 h-12 border-2 border-green-400/40 rounded-full"></div>
              </div>
              
              {/* Stats Badges */}
              <div className="absolute top-10 right-10 bg-white p-4 rounded-2xl shadow-xl">
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600">500+</div>
                  <div className="text-sm text-gray-600">Happy Travelers</div>
                </div>
              </div>
              
              <div className="absolute bottom-10 left-10 bg-white p-4 rounded-2xl shadow-xl">
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600">50+</div>
                  <div className="text-sm text-gray-600">Destinations</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default WhyUsComponent;