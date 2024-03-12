import React, { useState } from 'react';
import cube from "../../images/cube.svg";
import logo from "../../images/truefoundry.svg";
import metric from "../../images/metrics-gray.png";
import list from "../../images/list-active.png";

const Navbar = () => {
    const [selectedTime, setSelectedTime] = useState(null);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleSelectTime = (time) => {
        setSelectedTime(time);
        setDropdownOpen(false); // Close the dropdown after selection
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <div className='pt-4'>
            <div className='flex gap-2 ml-2'>
                <div>
                    <img src={cube} alt="logo img" />
                </div>
                <div>
                    <img src={logo} alt="logo name" className='mt-[4px]' />
                </div>
                <div className='flex ml-20 gap-12'>
                    <div className='flex gap-2'>
                        <div className='relative top-[6px]'>
                            <img src={metric} alt="metric img" className='w-[16px]' />
                        </div>
                        <div>
                            <p className='cursor-pointer'>Metrics</p>
                        </div>
                    </div>
                    <div className='relative'>
                        <div className='flex gap-2'>
                            <div className='relative top-[6px]'>
                                <img src={list} alt="list img" className='w-[16px]' />
                            </div>
                            <div className="relative">
                                <p onClick={toggleDropdown} className='cursor-pointer'>Logs</p>

                            </div>

                        </div>
                    </div>
                </div>
                <div>
                    
                    {dropdownOpen && (
                        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
                            <div className="py-1" role="none">
                                <p onClick={() => handleSelectTime('last5')} className={`block px-4 py-2 text-sm text-gray-700 ${selectedTime === 'last5' ? 'bg-gray-200' : 'hover:bg-gray-100'} hover:text-gray-900`} role="menuitem">Last 5 minutes</p>
                                <p onClick={() => handleSelectTime('last15')} className={`block px-4 py-2 text-sm text-gray-700 ${selectedTime === 'last15' ? 'bg-gray-200' : 'hover:bg-gray-100'} hover:text-gray-900`} role="menuitem">Last 15 minutes</p>
                                <p onClick={() => handleSelectTime('last30')} className={`block px-4 py-2 text-sm text-gray-700 ${selectedTime === 'last30' ? 'bg-gray-200' : 'hover:bg-gray-100'} hover:text-gray-900`} role="menuitem">Last 30 minutes</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
