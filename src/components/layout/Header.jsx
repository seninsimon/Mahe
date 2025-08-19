'use client'

import React, { useState, useEffect } from 'react'
import { Search, User, ShoppingCart } from 'lucide-react'
import Navbar from './Navbar'
import { motion } from "framer-motion";

const Header = () => {
  const [cartCount] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80) // adjust threshold
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed z-50 w-full">
      <div className="dm-sans !z-10">
        {/* Top Banner */}
        <div className="bg-black text-white text-center py-2 text-sm relative">
          Get your Mahe fix on Zomato/Swiggy
          <div className="absolute top-2 right-4 text-sm">
            <select defaultValue="INR ₹" className="" aria-label="Currency">
              <option value="INR ₹">INR ₹</option>
            </select>
          </div>
        </div>

        {/* Main Header */}
        <motion.header
          initial={{ y: 0 }}
          animate={{ y: isScrolled ? -80 : 0 }} // smooth slide-up when scrolled
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="bg-white text-black px-4 md:px-6 py-4 shadow-sm"
        >
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:justify-between space-y-4 md:space-y-0">
            {/* Logo */}
            <div className="flex items-center justify-center md:justify-start">
              <img
                src="/mahe-logo.png"
                alt="MAHÈ Logo"
                className="h-12 w-auto"
              />
            </div>

            {/* Search */}
            <div className="md:max-w-md relative w-full">
              <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-200"
              />
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <button className="flex items-center justify-center space-x-2 px-4 py-2 border border-black rounded-full hover:bg-gray-100 w-full sm:w-auto">
                <User className="w-4 h-4" />
                <span>ACCOUNT</span>
              </button>
              <button className="flex items-center justify-center space-x-2 bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 w-full sm:w-auto">
                <ShoppingCart className="w-4 h-4" />
                <span>₹ 0 ({cartCount})</span>
              </button>
            </div>
          </div>
        </motion.header>
      </div>

      {/* Navbar - smoothly follows header */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: isScrolled ? 0 : 110 }} // animate down when header visible, up when scrolled
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        className="fixed top-0 left-0 right-0 z-40 bg-white shadow"
      >
        <Navbar />
      </motion.div>
    </div>
  )
}

export default Header
