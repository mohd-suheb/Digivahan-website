
import { FaQrcode } from 'react-icons/fa';

const SmartQRFeature = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Smart QR Code System
            </h2>
            <p className="text-gray-600 mb-6">
              Get a unique QR code for your vehicle that contains all essential information. 
              Share it easily with authorities, service centers, or insurance companies.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">✓</span>
                <span>Instant access to vehicle documents</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">✓</span>
                <span>Secure and encrypted information</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">✓</span>
                <span>Easy sharing with authorized parties</span>
              </li>
            </ul>
          </div>
          <div className="flex justify-center">
            <div className="bg-gray-100 rounded-lg p-12">
              <FaQrcode className="text-9xl text-yellow-600" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartQRFeature;