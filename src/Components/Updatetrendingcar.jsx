import { useState } from 'react';
import { Search } from 'lucide-react';

export default function UpdateTrendingCar({setCurrentPage, onBack }) {
  const [showForm, setShowForm] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [formData, setFormData] = useState({
    carId: '',
    brand: '',
    model: '',
    year: '',
    price: '',
    mileage: '',
    fuelType: '',
    transmission: '',
    color: '',
    description: '',
    images: []
  });

  const handleSearch = () => {
    if (searchQuery.trim()) {
      setShowForm(true);
      
      // Dummy data (future me API se data aayega)
      setFormData({
        carId: 'TC-001',
        brand: 'Maruti Suzuki',
        model: 'Swift',
        year: '2023',
        price: '800000',
        mileage: '22',
        fuelType: 'Petrol',
        transmission: 'Manual',
        color: 'Red',
        description: '',
        images: []
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Updated data:', formData);
    // Yahan API call hogi future me
    alert('Car details updated successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="mb-6">
          <button onClick={ ()=>setCurrentPage("manageuser")}
            
            className="text-blue-600 text-sm hover:underline mb-1 block"
          >
            ← Back to Manage User App
          </button>
          
            <a  onClick={onBack} 
           href="#" className="text-blue-600 text-sm hover:underline">
            ← Back to Menu
          </a>
          
          
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          
          {/* Title */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Search className="w-5 h-5 text-blue-600" />
              </div>

              <div className="flex-1">
                <h3 className="text-base font-semibold text-gray-800 mb-0.5">
                  Update Trending Car
                </h3>
                <p className="text-xs text-gray-600">Search and update car details</p>
              </div>
            </div>
          </div>

          {/* Search Box */}
          {!showForm && (
            <div className="p-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search by Car ID / Brand / Model
              </label>

              <div className="flex gap-2">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                  placeholder="Enter car ID, brand name, or model name"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />

                <button
                  onClick={handleSearch}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                >
                  <Search className="w-4 h-4" />
                  Search
                </button>
              </div>
            </div>
          )}

          {/* FORM REMOVED */}
        </div>
      </div>
    </div>
  );
}
