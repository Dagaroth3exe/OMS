import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Nav = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: 'Home' },
    { id: 2, text: 'Company' },
    { id: 3, text: 'Resources' },
    { id: 4, text: 'About' },
    { id: 5, text: 'Contact' },
  ];

  return (
    <div className="flex justify-between items-center h-[60px] w-full mx-auto px-4 pt-1 text-black" >
      {/* Logo */}
      <h1 className="p-2 w-full text-4xl font-bold text-[#805FDF]">Blurock</h1>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex">
        {navItems.map(item => ( 
          <li
            key={item.id}
            className='text-blue-700 hover:text-white hover: focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-md px-4 py-1 text-center me-2 mt-1.5 mb-5 dark:text-black dark:hover:text-white dark:hover:bg-gradient-to-r from-[#805FDF] to-[#F09AB2] dark:focus:ring-blue-800 cursor-pointer transition ease-in-out hover:translate-y-1 hover:scale-110 duration-300'
          >
            {item.text}
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#ffffff] ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        {/* Mobile Logo */}
        <h1 className='w-full text-3xl font-bold text-[#805FDF] m-4'>Blurock</h1>

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 border-b rounded-xl hover:bg-[#805FDF] duration-300 hover:text-white cursor-pointer border-gray-600'
          >
            {item.text}
          </li>
        ))}
      </ul> 
    </div>
  );
};

export default Nav;
