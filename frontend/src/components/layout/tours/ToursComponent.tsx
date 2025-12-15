import type { ReactNode } from "react"
import { FaRegHeart } from "react-icons/fa";
import tour_one from "../../../assets/user_one.png";
import tour_two from "../../../assets/tours_two.png";
import tour_three from "../../../assets/tours_three.png";
import tour_four from "../../../assets/tours_four.png";
import tour_five from "../../../assets/tours_five.png";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

interface toursProps {
    price: number;
    icon: ReactNode;
    city: string;
    address: string;
    image: string;
}

const toursLists: toursProps[] = [
    { 
        price: 2400, 
        icon: <FaRegHeart/>, 
        city: "Dubai", 
        address: "RASHIDA AHMED DOWNTOWN DUBAI BAHAR 3 TOWER- THE WALK NEAR BURJ KHALIFA FLOOR 34, 56B 22312 UNITED ARAB EMIRATES example address in dubai" ,
        image: tour_one
    },
    { 
        price: 2400, 
        icon: <FaRegHeart/>, 
        city: "Ryadh", 
        address: "Ahmed Al-Fahad King Abdulaziz Road, Building 15 Al-Murabba District 11564 Riyadh SAUDI ARABIA" ,
        image: tour_two
    },
    { 
        price: 2400, 
        icon: <FaRegHeart/>, 
        city: "Dubai", 
        address: "RASHIDA AHMED DOWNTOWN DUBAI BAHAR 3 TOWER- THE WALK NEAR BURJ KHALIFA FLOOR 34, 56B 22312 UNITED ARAB EMIRATES example address in dubai" ,
        image: tour_three
    },
    { 
        price: 2400, 
        icon: <FaRegHeart/>, 
        city: "Dubai", 
        address: "RASHIDA AHMED DOWNTOWN DUBAI BAHAR 3 TOWER- THE WALK NEAR BURJ KHALIFA FLOOR 34, 56B 22312 UNITED ARAB EMIRATES example address in dubai" ,
        image: tour_four
    },
    { 
        price: 2400, 
        icon: <FaRegHeart/>, 
        city: "Dubai", 
        address: "RASHIDA AHMED DOWNTOWN DUBAI BAHAR 3 TOWER- THE WALK NEAR BURJ KHALIFA FLOOR 34, 56B 22312 UNITED ARAB EMIRATES example address in dubai" ,
        image: tour_five
    },
    { 
        price: 2400, 
        icon: <FaRegHeart/>, 
        city: "Dubai", 
        address: "RASHIDA AHMED DOWNTOWN DUBAI BAHAR 3 TOWER- THE WALK NEAR BURJ KHALIFA FLOOR 34, 56B 22312 UNITED ARAB EMIRATES example address in dubai" ,
        image: tour_four
    },
    { 
        price: 2400, 
        icon: <FaRegHeart/>, 
        city: "Dubai", 
        address: "RASHIDA AHMED DOWNTOWN DUBAI BAHAR 3 TOWER- THE WALK NEAR BURJ KHALIFA FLOOR 34, 56B 22312 UNITED ARAB EMIRATES example address in dubai" ,
        image: tour_four
    },
    { 
        price: 2400, 
        icon: <FaRegHeart/>, 
        city: "Dubai", 
        address: "RASHIDA AHMED DOWNTOWN DUBAI BAHAR 3 TOWER- THE WALK NEAR BURJ KHALIFA FLOOR 34, 56B 22312 UNITED ARAB EMIRATES example address in dubai" ,
        image: tour_four
    }
]

interface buttonProps {
    title: string;
    href: string;
}

const buttonsList: buttonProps[] = [
    { title: "All Type", href: "#" },
    { title: "Sandy Dunes", href: "#" },
    { title: "Cold Bond Fires", href: "#" },
    { title: "Exclusive Hotels", href: "#" },
    { title: "Beautiful Malls", href: "#" }
]

const ToursComponent = () => {
  return (
    <section className="w-full flex-col justify-start items-center p-2 py-28">

        <div className="flex justify-start items-center p-4 py-6">
            <span className="font-semibold text-7xl text-gray-800">
                Explore Best Travel Places
            </span>
        </div>

        <div className="flex justify-between items-center w-full">

            <div className="flex justify-start items-center p-4 gap-4">
                {
                    buttonsList.map((link)=> {
                        return (
                            <a href={link.href} key={link.title} className="p-2 px-6 bg-gray-100 rounded-xl shadow-md shadow-gray-600 hover:bg-yellow-700/80 hover:text-white font-semibold transition">
                              {link.title}
                            </a>
                        )
                    })
                }
            </div>

            <div className="flex justify-end items-center gap-4">
                <a href="" className="size-10 p-2 rounded-full bg-yellow-700 text-white shadow-sm shadow-gray-500 flex justify-center items-center">
                    <MdKeyboardDoubleArrowLeft className="text-2xl font-semibold"/>
                </a>
                <a href="" className="size-10 p-2 rounded-full bg-gray-200 shadow-sm shadow-gray-500 flex justify-center items-center">
                    <MdKeyboardDoubleArrowRight className="text-2xl font-semibold"/>
                </a>
            </div>

        </div>

        <div className="flex flex-wrap justify-start items-center gap-10 p-4 w-full">
            {
                toursLists.map((tour, index)=> {
                    return(
                        <article key={index} className="w-80 flex flex-col justify-center items-center rounded-4xl overflow-hidden shadow-md shadow-gray-500 bg-gray-100">

                            <div className="w-full h-[60%]"> 
                                <img src={tour.image} alt="" className="w-full h-60 object-cover"/>
                            </div>

                            <div className="flex justify-between items-center w-full">
                                <div className="flex justify-start items-center p-2">
                                    <span className="font-semibold text-xl text-gray-700"> AED {tour.price} </span>
                                    <span className="text-lg text-gray-500">/ Starting</span>
                                </div> 
                                <div className="flex justify-end items-center p-2">
                                    <a href="#" className="flex justify-center items-center p-2 rounded-full bg-white">
                                        {tour.icon}
                                    </a>
                                </div>
                            </div>

                            <div className="w-full border-b-2 border-b-gray-300 flex flex-col justify-start items-center">
                                <div className="flex justify-start items-center w-full p-2">
                                    <span className="font-semibold text-xl text-gray-700">
                                        {tour.city}
                                    </span>
                                </div>
                                <div className="flex justify-start items-center leading-10 w-full p-2">
                                    <p className="text-sm text-gray-500">
                                        {tour.address}
                                    </p>
                                </div>
                            </div>

                            <div className="flex justify-center items-center p-4 w-full">
                                <button className="hover:cursor-pointer px-6 p-2 rounded-xl bg-green-800 hover:bg-green-700 transition shadow-md shadow-gray-500">
                                    View Details
                                </button>
                            </div>

                        </article>
                    )
                })
            }

        </div>

    </section>
  )
}

export default ToursComponent
