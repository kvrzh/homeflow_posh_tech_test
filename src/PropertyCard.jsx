import { FaBookmark } from 'react-icons/fa';
import { memo } from "react";

const IMAGE_NOT_FOUND_URL = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png';

function PropertyCard({ property, isActive, handleChangeActive }) {
  return (
    <div className="border-2 bg-gray-50">
      <div className="relative">
        <img src={property.photos[0] ? `https://mr0.homeflow.co.uk/${property.photos[0]}` : IMAGE_NOT_FOUND_URL} alt={property.display_address} />

        <button onClick={() => handleChangeActive(property.property_id)} className="absolute top-0 right-2" title="Click to bookmark this property">
          <FaBookmark className={`${isActive ? 'text-red-400' : 'text-yellow-400'}`} size="40" />
        </button>

        <p className="absolute bottom-0 right-0 px-2 py-1 border-t border-l bg-gray-50">{property.price}</p>
      </div>

      <div className="px-3 py-2">
        <p>{property.display_address}</p>
      </div>
    </div>
  );
};

export default memo(PropertyCard);
