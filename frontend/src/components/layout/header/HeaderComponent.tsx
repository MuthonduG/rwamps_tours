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
    <section className="w-full flex flex-col justify-center items-center relative mt-[100px] md:mt-[120px] overflow-hidden">

        <div className="w-full grid grid-cols-3 justify-center items-center">

            {/* right */}
            <div className="flex flex-col justify-center items-center">

                <div className="flex justify-center items-center gap-4 p-3">
                    <div className="flex justify-center items-center">
                        <span className="text-9xl font-bold text-gray-900">Let's</span>
                    </div>
                    <div className="w-80 h-28 flex justify-center items-center shadow-md shadow-gray-700 rounded-full overflow-hidden">
                        <img src={header} alt="" className='w-full h-full object-cover' />
                    </div>
                </div>

                <div className="flex flex-col justify-center gap-4 items-center mt-4 p-2">
                    <div className="flex justify-start items-center p-2">
                        <span className='text-6xl font-bold text-green-800'>
                            Explore the scenaries
                        </span>
                    </div>
                    <div className="flex justify-start items-center leading-10 p-6 text-xl">
                        <p className='text-gray-700'>Your adventure begins here. Discover breathtaking destinations and create memories that last a lifetime.</p>
                    </div>
                </div>

                <div className="flex justify-center items-center w-full flex-3 p-4">

                    <div className="bg-neutral-200/90 hover:bg-yellow-600 w-full hover:text-white transition rounded-tl-xl px-6 py-6 p-4 hover:cursor-pointer">
                        <span className='font-semibold text-md'>Destination</span>
                    </div>

                    <div className="bg-neutral-200/90 hover:bg-yellow-600 w-full hover:text-white transition px-6 p-4 py-6 hover:cursor-pointer items-center">
                        <span className='font-semibold text-md'>Flight</span>
                    </div>

                    <div className="bg-neutral-200/90 hover:bg-yellow-600 w-full hover:text-white transition rounded-tr-xl px-6 py-6 p-4 hover:cursor-pointer">
                        <span className='font-semibold text-md'>Hotel</span>
                    </div>

                    
                </div>

            </div>

            {/* center */}
            <div className="flex flex-col justify-center items-center gap-4">
                <article className="relative rounded-2xl overflow-hidden w-full h-56 shadow-md shadow-gray-400">
                    <img src={tour_one} alt="" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gray-200/40"></div>
                    <div className="absolute top-2 left-2 flex items-center gap-2 bg-black/40 text-white px-2 py-1 rounded">
                       <CgArrowsExchangeAlt className="text-yellow-400" />
                    </div>                    
                </article>

                <article className="relative rounded-2xl overflow-hidden w-full h-56 shadow-md shadow-gray-400">
                    <img src={tour_two} alt="" className="w-full h-full object-cover"/>
                    <div className="absolute inset-0 bg-gray-200/40"></div> 
                    <div className="absolute top-2 left-2 flex items-center gap-2 bg-black/40 text-white px-2 py-1 rounded">
                       <CgArrowsExchangeAlt className="text-yellow-400" />
                    </div>
                </article>
            </div>

            {/* left */}
            <div className="flex flex-col justify-center items-center p-4">

                {/* reviews */}
                <div className="flex justify-between items-center gap-4 w-full p-3">

                    <div className="flex flex-col justify-center items-center">
                        <div className="flex -space-x-1 overflow-hidden py-4 px-6 w-full shadow-md drop-shadow-stone-600 rounded-full bg-gray-200">
                          <img src={user_one} alt="" className="inline-block size-10 rounded-full outline -outline-offset-1 outline-white/10 shadow-md shadow-gray-600" />
                          <img src={user_two} alt="" className="inline-block size-10 rounded-full outline -outline-offset-1 outline-white/10 shadow-md shadow-gray-600" />
                          <img src={user_three} alt="" className="inline-block size-10 rounded-full outline -outline-offset-1 outline-white/10 shadow shadow-gray-600" />
                          <img src={user_four} alt="" className="inline-block size-10 rounded-full outline -outline-offset-1 outline-white/10 shadow shadow-gray-600" />
                          <a href="" className="rounded-full size-10 bg-green-800 text-white font-semibold flex justify-center items-center">
                            99+
                          </a>
                        </div> 

                        <div className="p-4 flex justify-start py-4">
                            <span className="text-md font-semibold text-gray-600">Reviews: 4.5 out of 5.0</span>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-center rounded-full shadow-md drop-shadow-stone-600 bg-gray-200 w-fit">
                        <div className="w-fit h-fit bg-gray-100 rounded-3xl p-2">
                            <FaLinkedin className="text-yellow-700 size-6"/>
                        </div>
                        <div className="w-fit h-fit bg-gray-100 rounded-full p-2">
                            <FaFacebook className="text-yellow-700 size-6"/>
                        </div>
                        <div className="w-fit h-fit bg-gray-100 rounded-full p-2">
                            <FaInstagram className="text-yellow-700 size-6"/>
                        </div>
                    </div>

                </div>

                <div className="w-full p-2 flex justify-center items-center">
                    <article className="relative rounded-2xl overflow-hidden w-full h-56 shadow-md shadow-gray-400">
                       <img src={tour_three} alt="" className="w-full h-full object-cover"/>
                       <div className="absolute inset-0 bg-gray-100/40"></div> 
                       <div className="absolute top-2 left-2 flex items-center gap-2 bg-black/40 text-white px-2 py-1 rounded">
                          <CgArrowsExchangeAlt className="text-yellow-400" />
                        </div>
                    </article>
                </div>

                <div className="flex justify-center items-center p-4">
                    <span className="text-2xl font-semibold flex justify-center items-center gap-3 underline text-yellow-700">
                        Explore Our Packages
                        <MdDoubleArrow/>
                    </span>
                </div>

                
            </div>

        </div>

        <div className="flex w-full justify-start items-center p-2">

            {/* form */}
            <form action="" className="flex justify-start items-center p-4 text-gray-700 gap-10 rounded-md shadow shadow-gray-500">

                <div className="flex flex-col justify-start items-center gap-4">
                    <label htmlFor="">Location</label>
                    <select name="" id="" className="rounded-md p-2 px-6 bg-amber-100/5 border border-neutral-500">
                        <option value="" className="">Abu Dhabi</option>
                        <option value="" className="">Dubai</option>
                        <option value="" className="">Ajman</option>
                        <option value="" className="">Fujairah</option>
                        <option value="" className="">Ras AI Khaimah</option> 
                        <option value="" className="">Umm AI Quwain</option>
                        <option value="" className="">Fujairah</option>
                    </select>
                </div>

                <div className="flex flex-col justify-start items-center gap-4">
                    <label htmlFor="" className="">Date</label>
                    <input type="date" name="" id="" className="rounded-md p-2 px-6 bg-amber-100/5 border border-neutral-500"/>
                </div>

                <div className="flex flex-col justify-start items-center gap-4">
                    <label htmlFor="" className="">Price Range</label>
                    <select name="" id="" className="rounded-md p-2 px-6 bg-amber-100/5 border border-neutral-500">
                       <option value="" className="">AED 1000 - 2500</option>
                       <option value="" className="">AED 2600 - 5000</option>
                       <option value="" className="">AED 5000 - 7500</option>
                       <option value="" className="">AED 75000 - 10000</option>
                       <option value="" className="">AED 10000 - 15000</option>
                       <option value="" className="">AED 15000 - 20000</option>
                    </select>
                </div>

                <div className="flex h-full justify-center items-center p-4">
                    <button className="px-10 p-2 rounded-xl bg-green-800 hover:bg-green-700 transition hover:cursor-pointer text-white font-semibold border-2 border-green-700/60 shadow-md shadow-gray-500">
                        Search Now
                    </button>                     
                </div>

            </form>

        </div>

    </section>
  )
}

export default HeaderComponent;