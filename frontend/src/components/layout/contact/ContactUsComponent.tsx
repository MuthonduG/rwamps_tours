import React, { useState, type FormEvent } from 'react';
import { 
  FiMapPin, 
  FiPhone, 
  FiMail, 
  FiClock, 
  FiSend,
  FiCheckCircle,
  FiMessageSquare,
  FiUser,
  FiGlobe,
  FiChevronRight
} from 'react-icons/fi';
import { 
  MdOutlineSupportAgent,
  MdWhatsapp,
  MdLocationOn,
  MdOutlineEmail,
  MdOutlinePhone
} from 'react-icons/md';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  subject: string;
  message: string;
  preferredContact: 'email' | 'phone' | 'whatsapp';
}

interface ContactInfo {
  icon: React.ReactNode;
  title: string;
  value: string;
  description: string;
  action?: string;
}

const ContactUsComponent = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    subject: '',
    message: '',
    preferredContact: 'email'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeField, setActiveField] = useState<string>('');

  const contactInfo: ContactInfo[] = [
    {
      icon: <FiMapPin className="text-2xl" />,
      title: "Visit Our Office",
      value: "Dubai Marina, Al Marsa Street, Building 12, Floor 8",
      description: "Dubai, United Arab Emirates",
      action: "Get Directions"
    },
    {
      icon: <FiPhone className="text-2xl" />,
      title: "Call Us",
      value: "+971 4 123 4567",
      description: "Sunday - Thursday, 8:00 AM - 8:00 PM GST",
      action: "Call Now"
    },
    {
      icon: <FiMail className="text-2xl" />,
      title: "Email Us",
      value: "contact@traveluae.com",
      description: "We'll respond within 24 hours",
      action: "Send Email"
    },
    {
      icon: <FiClock className="text-2xl" />,
      title: "Office Hours",
      value: "8:00 AM - 8:00 PM",
      description: "Sunday to Thursday (Closed Friday & Saturday)",
      action: "Schedule Call"
    }
  ];

  const socialMedia = [
    { icon: <FaFacebook />, label: "Facebook", color: "bg-blue-600 hover:bg-blue-700", href: "#" },
    { icon: <FaTwitter />, label: "Twitter", color: "bg-sky-500 hover:bg-sky-600", href: "#" },
    { icon: <FaInstagram />, label: "Instagram", color: "bg-pink-600 hover:bg-pink-700", href: "#" },
    { icon: <FaLinkedin />, label: "LinkedIn", color: "bg-blue-700 hover:bg-blue-800", href: "#" },
    { icon: <MdWhatsapp />, label: "WhatsApp", color: "bg-green-500 hover:bg-green-600", href: "#" },
  ];

  const countries = [
    "United Arab Emirates",
    "Saudi Arabia",
    "Qatar",
    "Oman",
    "Kuwait",
    "Bahrain",
    "United States",
    "United Kingdom",
    "India",
    "Pakistan",
    "Australia",
    "Canada",
    "Germany",
    "France",
    "Other"
  ];

  const subjects = [
    "General Inquiry",
    "Booking Assistance",
    "Payment Issue",
    "Tour Modification",
    "Cancellation Request",
    "Group Booking",
    "Corporate Travel",
    "Feedback/Suggestion",
    "Complaint",
    "Partnership"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        country: '',
        subject: '',
        message: '',
        preferredContact: 'email'
      });
    }, 3000);
  };

  const handleQuickAction = (action: string) => {
    switch (action) {
      case 'Get Directions':
        window.open('https://maps.google.com/?q=Dubai+Marina+Al+Marsa+Street', '_blank');
        break;
      case 'Call Now':
        window.location.href = 'tel:+97141234567';
        break;
      case 'Send Email':
        window.location.href = 'mailto:contact@traveluae.com';
        break;
      case 'Schedule Call':
        // Implement scheduling logic
        console.log('Schedule call clicked');
        break;
    }
  };

  return (
    <section className="w-full py-20 px-4 md:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="w-full mx-auto">
        {/* Header */}
        <div className="flex flex-col justify-center items-center py-10 gap-4">
          <div className="inline-flex items-center gap-3 mb-6">
            <MdOutlineSupportAgent className="text-4xl text-green-700" />
            <span className="text-lg font-semibold text-green-700 bg-yellow-50 px-4 py-2 rounded-full">
              We're Here to Help
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get in <span className="text-green-700">Touch</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about our tours? Our team is ready to assist you with any inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Contact Information */}
          <div className="space-y-8 flex flex-col gap-4">
            {/* Contact Cards */}
            <div className="space-y-6 flex flex-col gap-4">
              {contactInfo.map((info, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-yellow-50 text-green-700 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 text-lg mb-2">{info.title}</h3>
                      <p className="text-gray-800 font-medium mb-1">{info.value}</p>
                      <p className="text-gray-600 text-sm mb-4">{info.description}</p>
                      <button
                        onClick={() => handleQuickAction(info.action || '')}
                        className="inline-flex items-center gap-2 text-green-700 font-semibold hover:text-green-800 transition-colors"
                      >
                        {info.action}
                        <FiChevronRight className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Connect With Us</h3>
              <div className="flex flex-wrap gap-3">
                {socialMedia.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${social.color} w-12 h-12 rounded-xl flex items-center justify-center text-white text-xl transition-all duration-300 hover:scale-110`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
              <p className="text-gray-300 text-sm mt-6">
                Follow us for travel tips, special offers, and destination updates
              </p>
            </div>
          </div>

          {/* Middle Column - Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-200">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <FiCheckCircle className="text-6xl text-green-500 mx-auto mb-6" />
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Message Sent Successfully!</h3>
                  <p className="text-gray-600 mb-8">
                    Thank you for contacting us. We'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-8 py-3 bg-yellow-700 text-white font-bold rounded-xl hover:bg-yellow-800 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Send Us a Message</h3>
                    <p className="text-gray-600">Fill out the form below and we'll respond promptly</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6 flex flex-col gap-4">
                    {/* Name Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className={`relative p-4 bg-gray-50 rounded-xl border-2 transition-all duration-300 ${
                        activeField === 'firstName' ? 'border-yellow-500 bg-white' : 'border-gray-200'
                      }`}>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <FiUser className="inline mr-2" />
                          First Name
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          onFocus={() => setActiveField('firstName')}
                          onBlur={() => setActiveField('')}
                          required
                          className="w-full bg-transparent focus:outline-none text-gray-900"
                          placeholder="Enter your first name"
                        />
                      </div>

                      <div className={`relative p-4 bg-gray-50 rounded-xl border-2 transition-all duration-300 ${
                        activeField === 'lastName' ? 'border-yellow-500 bg-white' : 'border-gray-200'
                      }`}>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <FiUser className="inline mr-2" />
                          Last Name
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          onFocus={() => setActiveField('lastName')}
                          onBlur={() => setActiveField('')}
                          required
                          className="w-full bg-transparent focus:outline-none text-gray-900"
                          placeholder="Enter your last name"
                        />
                      </div>
                    </div>

                    {/* Contact Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className={`relative p-4 bg-gray-50 rounded-xl border-2 transition-all duration-300 ${
                        activeField === 'email' ? 'border-yellow-500 bg-white' : 'border-gray-200'
                      }`}>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <MdOutlineEmail className="inline mr-2" />
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          onFocus={() => setActiveField('email')}
                          onBlur={() => setActiveField('')}
                          required
                          className="w-full bg-transparent focus:outline-none text-gray-900"
                          placeholder="you@example.com"
                        />
                      </div>

                      <div className={`relative p-4 bg-gray-50 rounded-xl border-2 transition-all duration-300 ${
                        activeField === 'phone' ? 'border-yellow-500 bg-white' : 'border-gray-200'
                      }`}>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <MdOutlinePhone className="inline mr-2" />
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          onFocus={() => setActiveField('phone')}
                          onBlur={() => setActiveField('')}
                          required
                          className="w-full bg-transparent focus:outline-none text-gray-900"
                          placeholder="+971 123 4567"
                        />
                      </div>
                    </div>

                    {/* Country and Subject */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className={`relative p-4 bg-gray-50 rounded-xl border-2 transition-all duration-300 ${
                        activeField === 'country' ? 'border-yellow-500 bg-white' : 'border-gray-200'
                      }`}>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <FiGlobe className="inline mr-2" />
                          Country
                        </label>
                        <select
                          name="country"
                          value={formData.country}
                          onChange={handleInputChange}
                          onFocus={() => setActiveField('country')}
                          onBlur={() => setActiveField('')}
                          required
                          className="w-full bg-transparent focus:outline-none text-gray-900 appearance-none p-2"
                        >
                          <option value="">Select your country</option>
                          {countries.map((country, index) => (
                            <option key={index} value={country}>{country}</option>
                          ))}
                        </select>
                        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                          <FiChevronRight className="rotate-90 text-gray-400" />
                        </div>
                      </div>

                      <div className={`relative p-4 bg-gray-50 rounded-xl border-2 transition-all duration-300 ${
                        activeField === 'subject' ? 'border-yellow-500 bg-white' : 'border-gray-200'
                      }`}>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <FiMessageSquare className="inline mr-2" />
                          Subject
                        </label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          onFocus={() => setActiveField('subject')}
                          onBlur={() => setActiveField('')}
                          required
                          className="w-full bg-transparent focus:outline-none text-gray-900 appearance-none"
                        >
                          <option value="">Select a subject</option>
                          {subjects.map((subject, index) => (
                            <option key={index} value={subject}>{subject}</option>
                          ))}
                        </select>
                        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                          <FiChevronRight className="rotate-90 text-gray-400" />
                        </div>
                      </div>
                    </div>

                    {/* Preferred Contact */}
                    <div className="p-4 bg-gray-50 rounded-xl">
                      <label className="block text-sm font-medium text-gray-700 mb-4">
                        Preferred Contact Method
                      </label>
                      <div className="flex flex-wrap gap-4">
                        {(['email', 'phone', 'whatsapp'] as const).map((method) => (
                          <label
                            key={method}
                            className="flex items-center gap-3 cursor-pointer"
                          >
                            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                              formData.preferredContact === method
                                ? 'border-yellow-600 bg-yellow-600'
                                : 'border-gray-300'
                            }`}>
                              {formData.preferredContact === method && (
                                <div className="w-2 h-2 rounded-full bg-white"></div>
                              )}
                            </div>
                            <input
                              type="radio"
                              name="preferredContact"
                              value={method}
                              checked={formData.preferredContact === method}
                              onChange={handleInputChange}
                              className="hidden"
                            />
                            <span className="text-gray-700 capitalize">{method}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Message */}
                    <div className={`relative p-4 bg-gray-50 rounded-xl border-2 transition-all duration-300 ${
                      activeField === 'message' ? 'border-yellow-500 bg-white' : 'border-gray-200'
                    }`}>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <FiMessageSquare className="inline mr-2" />
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        onFocus={() => setActiveField('message')}
                        onBlur={() => setActiveField('')}
                        required
                        rows={4}
                        className="w-full bg-transparent focus:outline-none text-gray-900 resize-none"
                        placeholder="Please provide details about your inquiry..."
                      />
                      <div className="text-right text-sm text-gray-500 mt-2">
                        {formData.message.length}/500 characters
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full py-4 px-6 bg-gradient-to-r from-green-600 to-green-800 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 ${
                          isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:from-yellow-700 hover:to-yellow-800'
                        }`}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Sending Message...
                          </>
                        ) : (
                          <>
                            <FiSend className="text-xl" />
                            Send Message
                          </>
                        )}
                      </button>
                      <p className="text-center text-gray-500 text-sm mt-4">
                        By submitting this form, you agree to our Privacy Policy and Terms of Service
                      </p>
                    </div>
                  </form>
                </>
              )}
            </div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsComponent;
