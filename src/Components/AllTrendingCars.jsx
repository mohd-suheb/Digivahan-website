import { useState } from 'react';
import { Car } from 'lucide-react';

export default function AllTrendingCars({ setCurrentPage, onBack }) {
  const [selectedCar, setSelectedCar] = useState(null);
  
  const [cars] = useState([
    {
      id: 'TC-001',
      name: 'Maruti Suzuki Swift',
      carId: 'TC-001',
      type: 'Hatchback',
      brand: 'Maruti Suzuki',
      mileage: '22 km/l',
      price: '₹ 8.00 Lakh',
      engine: '1498 cc',
      transmission: 'Manual/Automatic',
      fuelType: 'Petrol/Diesel',
      seating: '5 Persons',
      features: ['ABS', 'Airbags', 'Bluetooth', 'Parking Sensors']
    },
    {
      id: 'TC-002',
      name: 'Hyundai Creta',
      carId: 'TC-002',
      type: 'SUV',
      brand: 'Hyundai',
      mileage: '18 km/l',
      price: '₹ 12.50 Lakh',
      engine: '1497 cc',
      transmission: 'Manual/Automatic',
      fuelType: 'Petrol/Diesel',
      seating: '5 Persons',
      features: ['ABS', 'Airbags', 'Sunroof', 'Parking Sensors']
    },
    {
      id: 'TC-003',
      name: 'Tata Nexon',
      carId: 'TC-003',
      type: 'SUV',
      brand: 'Tata',
      mileage: '20 km/l',
      price: '₹ 9.00 Lakh',
      engine: '1199 cc',
      transmission: 'Manual/Automatic',
      fuelType: 'Petrol/Diesel',
      seating: '5 Persons',
      features: ['ABS', 'Airbags', 'Bluetooth', 'Cruise Control']
    },
    {
      id: 'TC-004',
      name: 'Honda City',
      carId: 'TC-004',
      type: 'Sedan',
      brand: 'Honda',
      mileage: '19 km/l',
      price: '₹ 11.50 Lakh',
      engine: '1498 cc',
      transmission: 'Manual/Automatic',
      fuelType: 'Petrol',
      seating: '5 Persons',
      features: ['ABS', 'Airbags', 'Bluetooth', 'Parking Sensors']
    }
  ]);

  const handleCarClick = (car) => {
    setSelectedCar(car);
  };

  const handleBackToList = () => {
    setSelectedCar(null);
  };

  // Car Detail View
  if (selectedCar) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Links */}
          <div className="mb-6">
            <button 
              onClick={onBack}
              className="text-blue-600 text-sm hover:underline mb-1 block"
            >
              ← Back to Manage User App
            </button>
            <a href="#" className="text-blue-600 text-sm hover:underline mb-1 block">
              ← Back to Menu
            </a>
            <button 
              onClick={handleBackToList}
              className="text-blue-600 text-sm hover:underline"
            >
              ← Back to All Cars
            </button>
          </div>

          {/* Car Detail Card */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Left: Car Image */}
              <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center">
                <Car className="w-40 h-40 text-gray-400" />
              </div>

              {/* Right: Car Details */}
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {selectedCar.name}
                </h1>
                <p className="text-2xl font-bold text-blue-600 mb-6">
                  {selectedCar.price}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Car ID</p>
                    <p className="text-sm font-medium text-gray-900">{selectedCar.carId}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Type</p>
                    <p className="text-sm font-medium text-gray-900">{selectedCar.type}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Mileage</p>
                    <p className="text-sm font-medium text-gray-900">{selectedCar.mileage}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Brand</p>
                    <p className="text-sm font-medium text-gray-900">{selectedCar.brand}</p>
                  </div>
                </div>

                {/* Specifications */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Specifications</h3>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p>• Engine: {selectedCar.engine}</p>
                    <p>• Transmission: {selectedCar.transmission}</p>
                    <p>• Fuel Type: {selectedCar.fuelType}</p>
                    <p>• Seating: {selectedCar.seating}</p>
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Features</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedCar.features.map((feature, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-green-50 text-green-700 text-sm rounded-full border border-green-200"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Car List View
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Links */}
       <div className="mb-6">

  <button  
    onClick={() => setCurrentPage("manageuser")}
    className="text-blue-600 text-sm hover:underline mb-1 block"
  >
    ← Back to Manage User App
  </button>

  <a
    onClick={()=>setCurrentPage("trendingCars")}
    href="#"
    className="text-blue-600 text-sm hover:underline"
  >
    ← Back to Menu
  </a>

</div>


        {/* Title Section */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-1">All Trending Cars</h1>
          <p className="text-sm text-gray-600">Browse all trending cars in the system</p>
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car) => (
            <div 
              key={car.id} 
              onClick={() => handleCarClick(car)}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
            >
              
              {/* Car Image Placeholder */}
              <div className="bg-gray-100 h-48 flex items-center justify-center">
                <Car className="w-20 h-20 text-gray-400" />
              </div>

              {/* Car Details */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {car.name}
                </h3>
                <p className="text-xs text-gray-500 mb-3">{car.carId}</p>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-600">{car.type}</span>
                  <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs rounded-full">
                    {car.mileage}
                  </span>
                </div>

                <div className="text-xl font-bold text-blue-600">
                  {car.price}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}