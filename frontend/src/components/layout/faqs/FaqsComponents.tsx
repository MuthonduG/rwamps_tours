import { useState } from 'react';
import { FiChevronDown, FiChevronUp, FiHelpCircle, FiMessageSquare, FiMail, FiPhone } from 'react-icons/fi';
import { MdSupportAgent, MdVerified } from 'react-icons/md';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: 'general' | 'booking' | 'payment' | 'travel';
}

const faqItems: FAQItem[] = [
  {
    id: 1,
    question: "How do I book a tour package?",
    answer: "You can book directly through our website, contact our support team, or visit our physical offices. Online booking is available 24/7 with instant confirmation.",
    category: 'booking'
  },
  {
    id: 2,
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, bank transfers, and cash payments at our offices. All transactions are secure and encrypted.",
    category: 'payment'
  },
  {
    id: 3,
    question: "Can I cancel or modify my booking?",
    answer: "Yes, you can cancel or modify your booking up to 48 hours before departure. Some premium packages may have different cancellation policies which will be clearly stated during booking.",
    category: 'booking'
  },
  {
    id: 4,
    question: "Do you provide travel insurance?",
    answer: "We offer comprehensive travel insurance as an add-on during booking. It covers medical emergencies, trip cancellations, lost luggage, and other travel-related incidents.",
    category: 'travel'
  },
  {
    id: 5,
    question: "What documents do I need for international tours?",
    answer: "Typically you'll need a valid passport with at least 6 months validity, visa (if required), travel insurance, and vaccination certificates. Our team will provide a detailed checklist based on your destination.",
    category: 'travel'
  },
  {
    id: 6,
    question: "Are flights included in the tour packages?",
    answer: "Most of our international packages include return flights. Domestic tours usually include transport but not flights. Package details clearly specify what's included. You can also opt for land-only packages.",
    category: 'general'
  },
  {
    id: 7,
    question: "How do group discounts work?",
    answer: "We offer special rates for groups of 6 or more people. Discounts range from 10-25% depending on group size and package. Contact our group booking department for customized quotes.",
    category: 'payment'
  },
  {
    id: 8,
    question: "What happens in case of bad weather?",
    answer: "We monitor weather conditions closely. If activities are cancelled due to bad weather, we offer alternative experiences or refunds for the affected portions. Safety is our top priority.",
    category: 'travel'
  }
];

const supportOptions = [
  {
    icon: <FiMessageSquare className="text-2xl" />,
    title: "Live Chat",
    description: "24/7 instant support",
    action: "Start Chat",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: <FiPhone className="text-2xl" />,
    title: "Phone Support",
    description: "+971 4 123 4567",
    action: "Call Now",
    color: "from-emerald-500 to-green-500"
  },
  {
    icon: <FiMail className="text-2xl" />,
    title: "Email Support",
    description: "support@traveluae.com",
    action: "Send Email",
    color: "from-purple-500 to-pink-500"
  }
];

const FaqsComponent = () => {
  const [openItems, setOpenItems] = useState<number[]>([1]);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const toggleItem = (id: number) => {
    setOpenItems(prev =>
      prev.includes(id)
        ? prev.filter(itemId => itemId !== id)
        : [...prev, id]
    );
  };

  const filteredFaqs = faqItems.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories = [
    { id: 'all', label: 'All Questions', count: faqItems.length },
    { id: 'booking', label: 'Booking', count: faqItems.filter(f => f.category === 'booking').length },
    { id: 'payment', label: 'Payment', count: faqItems.filter(f => f.category === 'payment').length },
    { id: 'travel', label: 'Travel', count: faqItems.filter(f => f.category === 'travel').length },
    { id: 'general', label: 'General', count: faqItems.filter(f => f.category === 'general').length }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'booking': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'payment': return 'bg-emerald-100 text-emerald-700 border-emerald-200';
      case 'travel': return 'bg-amber-100 text-amber-700 border-amber-200';
      case 'general': return 'bg-purple-100 text-purple-700 border-purple-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <section className="w-full py-20 px-4 md:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="w-full py-10">
        {/* Header */}
        <div className="flex flex-col justify-center items-center gap-6 py-6">
          <div className="inline-flex items-center gap-3 mb-6">
            <FiHelpCircle className="text-4xl text-yellow-700" />
            <span className="text-lg font-semibold text-yellow-700 bg-yellow-50 px-4 py-2 rounded-full">
              Frequently Asked Questions
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Find Answers to <span className="text-yellow-700">Your Questions</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about booking, payments, travel requirements, and more.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - FAQs List */}
          <div className="lg:col-span-2">
            {/* Search Bar */}
            <div className="mb-8">
              <div className="relative py-4">
                <input
                  type="text"
                  placeholder="Search questions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full p-4 pl-12 pr-4 bg-white rounded-2xl border border-gray-200 shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
                <FiHelpCircle className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
              </div>
            </div>

            {/* Categories */}
            <div className="mb-8 py-6">
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-5 py-3 rounded-xl font-medium transition-all duration-300 ${
                      activeCategory === category.id
                        ? 'bg-yellow-700 text-white shadow-lg shadow-yellow-200'
                        : 'bg-white text-gray-700 border border-gray-200 hover:border-yellow-300 hover:bg-yellow-50'
                    }`}
                  >
                    {category.label}
                    <span className={`ml-2 px-2 py-1 text-xs rounded-full ${
                      activeCategory === category.id ? 'bg-white/20' : 'bg-gray-100'
                    }`}>
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* FAQs List */}
            <div className="space-y-4 py-6 flex flex-col gap-4">
              {filteredFaqs.map((faq) => (
                <div
                  key={faq.id}
                  className={`bg-white rounded-2xl border-2 transition-all duration-300 ${
                    openItems.includes(faq.id)
                      ? 'border-yellow-500/30 shadow-xl'
                      : 'border-gray-100 hover:border-yellow-200 hover:shadow-lg'
                  }`}
                >
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full p-6 text-left flex items-center justify-between"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl ${getCategoryColor(faq.category)}`}>
                        <FiHelpCircle className="text-lg" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                          {faq.question}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(faq.category)}`}>
                            {faq.category.charAt(0).toUpperCase() + faq.category.slice(1)}
                          </span>
                          <span className="text-sm text-gray-500">
                            Updated 2 days ago
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      {openItems.includes(faq.id) ? (
                        <FiChevronUp className="text-2xl text-yellow-700" />
                      ) : (
                        <FiChevronDown className="text-2xl text-gray-400" />
                      )}
                    </div>
                  </button>
                  
                  {/* Answer */}
                  <div className={`overflow-hidden transition-all duration-300 ${
                    openItems.includes(faq.id) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="px-6 pb-6">
                      <div className="pl-14">
                        <div className="prose prose-lg">
                          <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                        </div>
                        <div className="mt-6 pt-6 border-t border-gray-100 flex items-center gap-4">
                          <div className="flex items-center gap-2">
                            <MdVerified className="text-emerald-500" />
                            <span className="text-sm text-gray-600">Verified answer</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                            <span className="text-sm text-gray-600">Helpful for 95% of users</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-12 p-8 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-2xl border border-yellow-100">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-700">98%</div>
                  <div className="text-sm text-gray-600">Satisfaction Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-700">15min</div>
                  <div className="text-sm text-gray-600">Avg. Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-700">2.5K+</div>
                  <div className="text-sm text-gray-600">Questions Answered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-700">24/7</div>
                  <div className="text-sm text-gray-600">Support Available</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Support Options */}
          <div className="space-y-8 flex flex-col gap-2">
            {/* Support Card */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 text-white">
              <div className="flex items-center gap-4 mb-6 py-10">
                <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                  <MdSupportAgent className="text-3xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Need More Help?</h3>
                  <p className="text-gray-300 hidden md:inline-flex">Our support team is here for you</p>
                </div>
              </div>
              
              <div className="space-y-4 flex flex-col gap-4">
                {supportOptions.map((option, index) => (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-4 hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className="flex flex-col md:flex-row items-center justify-between gap-3">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-lg bg-gradient-to-r ${option.color}`}>
                          {option.icon}
                        </div>
                        <div>
                          <h4 className="font-bold">{option.title}</h4>
                          <p className="text-sm text-gray-300">{option.description}</p>
                        </div>
                      </div>
                      <button className="px-4 py-2 bg-white/10 rounded-lg text-sm font-medium hover:bg-white/20 transition-colors">
                        {option.action}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-gray-300 text-sm">
                  <span className="font-bold">Office Hours:</span> Sunday - Thursday, 8:00 AM - 8:00 PM GST
                </p>
              </div>
            </div>

            {/* Still Have Questions */}
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg">
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <FiHelpCircle className="text-3xl text-yellow-700" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Still Have Questions?
                </h3>
                <p className="text-gray-600 mb-6">
                  Can't find the answer you're looking for? Our team is ready to help.
                </p>
                <button className="w-full py-4 bg-gradient-to-r from-green-600 to-green-800 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:from-yellow-700 hover:to-yellow-800 transition-all duration-300">
                  Contact Support Team
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center py-10">
          <div className="inline-flex items-center gap-4 text-gray-600">
            <span className="text-sm">Didn't find your answer?</span>
            <button className="px-6 py-3 border-2 border-green-700 text-green-700 font-bold rounded-xl hover:bg-green-700 hover:text-white transition-all duration-300">
              Submit Your Question
            </button>
            <span className="text-sm">We'll respond within 24 hours</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqsComponent;