import React from 'react';
import '../Styles//HorizontalScrollList.css'; // Import the CSS file

import { FaUmbrellaBeach, FaTree, FaStar, FaMoneyBillAlt, FaUsers, FaDog, FaCoffee, FaHome, FaMountain, FaHeart, FaSwimmer, FaFire, FaSkiing, FaHiking, FaPlane } from 'react-icons/fa';

const categories = [
    { name: 'All', category: '', icon: <FaHome className='text-[25px] mb-[5px]' /> },
    { name: 'Beachfront', category: 'Beachfront', icon: <FaUmbrellaBeach className='text-[25px] mb-[5px]' /> },
    { name: 'Cabins', category: 'Cabins', icon: <FaTree className='text-[25px] mb-[5px]' /> },
    { name: 'Trending', category: 'Trending', icon: <FaStar className='text-[25px] mb-[5px]' /> },
    { name: 'Luxury', category: 'Luxury', icon: <FaMoneyBillAlt className='text-[25px] mb-[5px]' /> },
    { name: 'Budget', category: 'Budget', icon: <FaMoneyBillAlt className='text-[25px] mb-[5px]' /> },
    { name: 'Family', category: 'Family-Friendly', icon: <FaUsers className='text-[25px] mb-[5px]' /> },
    { name: 'Farms', category: 'Pet-Friendly', icon: <FaDog className='text-[25px] mb-[5px]' /> },
    { name: 'Unique', category: 'Unique Stays', icon: <FaCoffee className='text-[25px] mb-[5px]' /> },
    { name: 'Romantic', category: 'Romantic Getaways', icon: <FaHeart className='text-[25px] mb-[5px]' /> },
    { name: 'Adventure', category: 'Adventure', icon: <FaMountain className='text-[25px] mb-[5px]' /> },
    { name: 'Swimming', category: 'Swimming', icon: <FaSwimmer className='text-[25px] mb-[5px]' /> },
    { name: 'Camping', category: 'Camping', icon: <FaFire className='text-[25px] mb-[5px]' /> },
    { name: 'Skiing', category: 'Skiing', icon: <FaSkiing className='text-[25px] mb-[5px]' /> },
    { name: 'Hiking', category: 'Hiking', icon: <FaHiking className='text-[25px] mb-[5px]' /> },
    { name: 'Flights', category: 'Flights', icon: <FaPlane className='text-[25px] mb-[5px]' /> },
];
const HorizontalScrollList = ({ setCategory }) => {
    return (
        <div className="horizontal-scroll-list no-scrollbar">
            {categories.map((category, index) => (
                <button
                    key={index}
                    onClick={() => setCategory(category.category)}
                    className="horizontal-scroll-item"
                >
                    {category.icon}
                    <p>{category.name}</p>
                </button>
            ))}
        </div>
    );
};


export default HorizontalScrollList;
