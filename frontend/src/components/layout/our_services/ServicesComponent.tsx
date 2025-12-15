import type { ReactNode } from 'react'
import { FcContacts } from "react-icons/fc";
import { FcCustomerSupport } from "react-icons/fc";
import { FcAutomotive } from "react-icons/fc";
import { FcCurrencyExchange } from "react-icons/fc";

interface tourServicesProps {
    icon: ReactNode;
    title: string;
    description: string
}

const tourServicesList: tourServicesProps[] = [
    { icon: <FcCustomerSupport/>, title: "24/7 Support", description: "While using our services, you are assured of 24/7 quality customer support."},
    { icon: <FcContacts/>, title: "Easy Booking", description: "Our booking and check out process is easy and aimed at fitting your uniques needs and concerns." },
    { icon: <FcAutomotive/>, title: "Free Transport", description: "Our tour services include a quality and comfortable transport medium ranging from flights to luxury cars." },
    { icon: <FcCurrencyExchange/>, title: "All Currencies Supported", description: "We accept all currencies and transaction rates are pegged on global forex prices." }
]

const ServicesComponent = () => {
  return (
     <section className="w-full flex flex-col justify-start items-center py-6 px-4 gap-6">

        <div className="flex justify-start items-center w-full p-4 py-6">
            <span className='text-5xl font-semibold text-gray-700'>
                Our Services
            </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-10">
            {
                tourServicesList.map((service_item, index)=> {
                    return(
                        <article 
                            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100 hover:border-blue-100 py-6"
                            key={index}
                        >
                            <div className="flex flex-col items-center text-center gap-6">
                                {/* Icon Container */}
                                <div className="mb-4 p-4 bg-blue-50 rounded-full">
                                    <div className="text-4xl">
                                        {service_item.icon}
                                    </div>
                                </div>
                                
                                {/* Title */}
                                <h3 className="text-xl font-bold text-gray-800 mb-3">
                                    {service_item.title}
                                </h3>
                                
                                {/* Description */}
                                <p className="text-gray-600 leading-10 py-4">
                                    {service_item.description}
                                </p>
                            </div>
                        </article>
                    )
                })
            }
        </div>

     </section>
  )
}

export default ServicesComponent