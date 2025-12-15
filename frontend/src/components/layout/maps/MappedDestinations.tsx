import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { FiMapPin, FiStar, FiNavigation } from 'react-icons/fi';
import { MdHotel, MdAttractions, MdRestaurant, MdBeachAccess } from 'react-icons/md';
import L from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Alternative method that doesn't require require()
if (typeof (L.Icon.Default.prototype as any)._getIconUrl === 'undefined') {
  delete (L.Icon.Default.prototype as any)._getIconUrl;
}

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

interface Destination {
  id: number;
  name: string;
  description: string;
  type: 'hotel' | 'attraction' | 'restaurant' | 'beach';
  coordinates: [number, number];
  rating: number;
  price: string;
  address: string;
  features: string[];
  icon: React.ReactNode;
}

const destinations: Destination[] = [
  {
    id: 1,
    name: "Burj Khalifa",
    description: "The world's tallest building with breathtaking views of Dubai from its observation decks.",
    type: 'attraction',
    coordinates: [25.1972, 55.2744],
    rating: 4.8,
    price: "AED 169+",
    address: "1 Sheikh Mohammed bin Rashid Blvd, Downtown Dubai",
    features: ["Observation Deck", "Restaurants", "Fountain Show"],
    icon: <MdAttractions className="text-2xl text-blue-600" />
  },
  {
    id: 2,
    name: "Atlantis The Palm",
    description: "Luxury resort located at the apex of Palm Jumeirah with waterpark and aquarium.",
    type: 'hotel',
    coordinates: [25.1309, 55.1185],
    rating: 4.7,
    price: "AED 1200+",
    address: "Crescent Rd, Palm Jumeirah, Dubai",
    features: ["Waterpark", "Aquarium", "Private Beach", "Spa"],
    icon: <MdHotel className="text-2xl text-emerald-600" />
  },
  {
    id: 3,
    name: "Al Fanar Restaurant",
    description: "Authentic Emirati cuisine in a traditional setting with Arabian Gulf views.",
    type: 'restaurant',
    coordinates: [25.2769, 55.2962],
    rating: 4.5,
    price: "AED 150+",
    address: "The Dubai Mall, Financial Centre Rd, Dubai",
    features: ["Traditional Cuisine", "Waterfront", "Cultural Experience"],
    icon: <MdRestaurant className="text-2xl text-amber-600" />
  },
  {
    id: 4,
    name: "Jumeirah Beach",
    description: "Pristine public beach with crystal clear waters and views of Burj Al Arab.",
    type: 'beach',
    coordinates: [25.2285, 55.2593],
    rating: 4.6,
    price: "Free",
    address: "Jumeirah Road, Dubai",
    features: ["Public Beach", "Water Sports", "Beach Cafes", "Burj Al Arab View"],
    icon: <MdBeachAccess className="text-2xl text-teal-600" />
  }
];

// Custom marker icons using Base64 SVG
const createCustomIcon = (color: string) => new Icon({
  iconUrl: `data:image/svg+xml;base64,${btoa(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32">
      <path fill="${color}" d="M16 0C10.477 0 6 4.477 6 10c0 6 8 14 10 22 2-8 10-16 10-22 0-5.523-4.477-10-10-10z"/>
      <circle cx="16" cy="10" r="6" fill="white"/>
    </svg>
  `)}`,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32]
});

const getTypeColor = (type: Destination['type']) => {
  switch (type) {
    case 'hotel': return '#059669';
    case 'attraction': return '#2563eb';
    case 'restaurant': return '#d97706';
    case 'beach': return '#0d9488';
    default: return '#6b7280';
  }
};

// Component to center map on selected destination
function ChangeView({ center, zoom }: { center: [number, number]; zoom: number }) {
  const map = useMap();
  useEffect(() => {
    map.setView(center, zoom, { animate: true });
  }, [center, zoom, map]);
  return null;
}

const MappedDestinations = () => {
  const [selectedDestination, setSelectedDestination] = useState<Destination>(destinations[0]);
  const [mapCenter, setMapCenter] = useState<[number, number]>(destinations[0].coordinates);
  const [mapZoom, setMapZoom] = useState<number>(12);

  const handleDestinationClick = (destination: Destination) => {
    setSelectedDestination(destination);
    setMapCenter(destination.coordinates);
    setMapZoom(14);
  };

  const handleFlyTo = (coordinates: [number, number]) => {
    setMapCenter(coordinates);
    setMapZoom(15);
  };

  return (
    <section className="w-full py-12 px-4 md:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="w-full mx-auto">
        {/* Header */}
        <div className="flex flex-col justify-center items-center gap-6 py-10">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Explore Poupular <span className="text-green-800">Destinations</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the best places to visit in United Arab Emirates
          </p>
        </div>

        {/* Main Content - 25% Left, 75% Right */}
        <div className="flex flex-col lg:flex-row gap-8 h-[600px]">
          {/* Left Panel - 25% width */}
          <div className="lg:w-1/4 w-full">
            <div className="bg-white rounded-3xl shadow-xl h-full overflow-hidden flex flex-col">
              {/* Panel Header */}
              <div className="p-6 border-b border-gray-100">
                <h3 className="text-xl font-bold text-gray-900">Destinations</h3>
                <p className="text-gray-600 text-sm mt-1">Select to view details</p>
              </div>
              
              {/* Destinations List */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {destinations.map((destination) => (
                  <button
                    key={destination.id}
                    onClick={() => handleDestinationClick(destination)}
                    className={`w-full p-4 rounded-2xl text-left transition-all duration-300 ${
                      selectedDestination.id === destination.id
                        ? 'bg-yellow-50 border-2 border-yellow-700/30 shadow-lg'
                        : 'bg-gray-50 hover:bg-gray-100 border border-gray-200 hover:border-yellow-500/30'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`p-3 rounded-xl ${selectedDestination.id === destination.id ? 'bg-yellow-700/10' : 'bg-white'}`}>
                        {destination.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <h4 className="font-bold text-gray-900">{destination.name}</h4>
                          <div className="flex items-center gap-1">
                            <FiStar className="text-amber-500 fill-amber-500" />
                            <span className="font-bold text-gray-800">{destination.rating}</span>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mt-1 line-clamp-1">{destination.address}</p>
                        <div className="flex items-center justify-between mt-3">
                          <span className="text-yellow-700 font-bold">{destination.price}</span>
                          <span className={`text-xs px-3 py-1 rounded-full ${selectedDestination.id === destination.id ? 'bg-yellow-700 text-white' : 'bg-gray-200 text-gray-700'}`}>
                            {destination.type}
                          </span>
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Stats Footer */}
              <div className="p-6 border-t border-gray-100 bg-gray-50">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-700">4</div>
                    <div className="text-xs text-gray-600">Destinations</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-700">4.7</div>
                    <div className="text-xs text-gray-600">Avg. Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel - 75% width (Map) */}
          <div className="lg:w-3/4 w-full">
            <div className="bg-white rounded-3xl shadow-xl h-full overflow-hidden relative">
              {/* Map Container */}
              <div className="h-full w-full">
                <MapContainer
                  center={mapCenter}
                  zoom={mapZoom}
                  style={{ height: "100%", width: "100%" }}
                  className="rounded-3xl"
                >
                  <ChangeView center={mapCenter} zoom={mapZoom} />
                  
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  />
                  
                  {destinations.map((destination) => (
                    <Marker
                      key={destination.id}
                      position={destination.coordinates}
                      icon={createCustomIcon(getTypeColor(destination.type))}
                      eventHandlers={{
                        click: () => handleDestinationClick(destination),
                      }}
                    >
                      <Popup className="rounded-xl shadow-xl">
                        <div className="p-3 min-w-[250px]">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="p-2 rounded-lg bg-gray-100">
                              {destination.icon}
                            </div>
                            <div>
                              <h3 className="font-bold text-gray-900">{destination.name}</h3>
                              <div className="flex items-center gap-1">
                                <FiStar className="text-amber-500 fill-amber-500 text-sm" />
                                <span className="text-sm font-bold">{destination.rating}</span>
                              </div>
                            </div>
                          </div>
                          <p className="text-gray-600 text-sm mb-3">{destination.description}</p>
                          <div className="flex items-center text-gray-500 text-sm mb-4">
                            <FiMapPin className="mr-2" />
                            <span>{destination.address}</span>
                          </div>
                          <button
                            onClick={() => handleFlyTo(destination.coordinates)}
                            className="w-full bg-green-800 text-white py-2 rounded-lg font-semibold hover:bg-yellow-800 transition-colors flex items-center justify-center gap-2"
                          >
                            <FiNavigation />
                            Fly to Location
                          </button>
                        </div>
                      </Popup>
                    </Marker>
                  ))}
                </MapContainer>
              </div>

              {/* Selected Destination Info Overlay */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 max-w-lg">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-3 rounded-xl" style={{ backgroundColor: `${getTypeColor(selectedDestination.type)}10` }}>
                        {selectedDestination.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{selectedDestination.name}</h3>
                        <div className="flex items-center gap-2">
                          <FiStar className="text-amber-500 fill-amber-500" />
                          <span className="font-bold">{selectedDestination.rating}</span>
                          <span className="text-gray-500">•</span>
                          <span className="font-bold text-yellow-700">{selectedDestination.price}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm">{selectedDestination.description}</p>
                  </div>
                  <button
                    onClick={() => handleFlyTo(selectedDestination.coordinates)}
                    className="w-12 h-12 bg-yellow-700 text-white rounded-full flex items-center justify-center hover:bg-yellow-800 transition-colors shadow-lg"
                    title="Fly to location"
                  >
                    <FiNavigation className="text-xl" />
                  </button>
                </div>
                
                {/* Features */}
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex flex-wrap gap-2">
                    {selectedDestination.features.map((feature, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 bg-yellow-50 text-green-700 text-xs font-medium rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Map Controls */}
              <div className="absolute top-6 right-6 flex flex-col gap-3">
                <button
                  onClick={() => setMapCenter([25.2048, 55.2708])}
                  className="w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
                  title="Reset view"
                >
                  <FiMapPin className="text-gray-700" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-12 text-center py-6">
          <div className="inline-flex items-center gap-6 text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-emerald-600"></div>
              <span>Hotels</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-600"></div>
              <span>Attractions</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-amber-600"></div>
              <span>Restaurants</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-teal-600"></div>
              <span>Beaches</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MappedDestinations;