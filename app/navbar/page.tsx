"use client";
import { useState } from "react";
import Image from "next/image";
import { Search, ShoppingCart, MapPin, Menu, ChevronDown } from "lucide-react";


export default function AmazonNavbar() {
  const [isLangOpen, setIsLangOpen] = useState(false);

  return (
    <header className="font-sans sticky top-0 z-50">
      {/* Top Navbar */}
      <div className="bg-[#131921] text-white py-1 px-4 flex items-center gap-2 h-[60px]">
        
        {/* Logo */}
 
<div className="flex items-center border border-transparent hover:border-white px-2 py-1 cursor-pointer h-[50px] transition-all ml-1">
  <Image 
    src="/amazon_navbar4.png" // The name of the file in your public folder
    alt="Amazon Logo"
    width={95}      // Adjusted width to match navbar height
    height={30}     // Maintains aspect ratio
    priority        // Ensures the logo loads immediately (LCP)
    className="object-contain mt-2" 
  />
</div>

        {/* Deliver To */}
        <div className="hidden lg:flex items-center border border-transparent hover:border-white p-2 cursor-pointer">
          <MapPin size={18} className="mt-3" />
          <div className="text-[12px] ml-1 leading-tight">
            <p className="text-[#ccc]">Deliver to </p>
            <p className="font-bold">Pakistan</p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex flex-grow h-10 rounded-md overflow-hidden bg-white focus-within:ring-2 focus-within:ring-[#f3a847]">
          <div className="bg-[#f3f3f3] text-black text-[12px] px-3 flex items-center border-r hover:bg-[#dadada] cursor-pointer text-gray-600">
            All <ChevronDown size={14} className="ml-1" />
          </div>
          <input 
            type="text" 
            className="flex-grow px-3 text-black outline-none text-base" 
            placeholder="Buscar Amazon"
          />
          <button className="bg-[#febd69] hover:bg-[#f3a847] p-2 px-3 text-[#131921]">
            <Search size={24} strokeWidth={3} />
          </button>
        </div>

        {/* Right Links */}
        <div className="flex items-center">
          
          {/* Language Selector Toggle */}
          <div 
            className="relative border border-transparent hover:border-white p-2 cursor-pointer h-[50px] flex items-end gap-1"
            onMouseEnter={() => setIsLangOpen(true)}
            onMouseLeave={() => setIsLangOpen(false)}
          >
            <span className="text-sm font-bold">EN</span>
            <ChevronDown size={12} className="text-gray-400 mb-1" />

            {/* Language Dropdown Menu */}
            {isLangOpen && (
              <div className="absolute top-[50px] left-0 w-64 bg-white text-black shadow-xl border rounded-sm p-4 z-[100] cursor-default">
                <div className="absolute -top-2 left-4 w-4 h-4 bg-white rotate-45 border-t border-l"></div>
                <p className="text-sm font-semibold mb-3">Cambiar idioma</p>
                <div className="space-y-2 text-sm">
                  {['English - EN', 'español - ES', 'AR - العربية', 'Deutsch - DE'].map((lang, idx) => (
                    <label key={lang} className="flex items-center gap-2 hover:underline cursor-pointer">
                      <input type="radio" name="lang" defaultChecked={idx === 1} className="accent-[#e47911]" />
                      {lang}
                    </label>
                  ))}
                </div>
                <hr className="my-3" />
                <p className="text-xs text-blue-700 hover:underline cursor-pointer">Cambiar país/región</p>
              </div>
            )}
          </div>

          {/* Account */}
          <div className="border border-transparent hover:border-white p-2 cursor-pointer leading-tight">
            <p className="text-[12px]">Hello, sign in</p>
            <p className="text-sm font-bold flex items-center">Account & Lists <ChevronDown size={12} className="ml-1 text-gray-400" /></p>
          </div>

          {/* Orders */}
          <div className="hidden md:block border border-transparent hover:border-white p-2 cursor-pointer leading-tight">
            <p className="text-[12px]">Returns</p>
            <p className="text-sm font-bold">& Orders</p>
          </div>

          {/* Cart */}
          <div className="flex items-end border border-transparent hover:border-white p-2 cursor-pointer relative h-[50px]">
             <div className="relative">
                <span className="absolute -top-1 left-4 text-[#f08804] text-base font-bold">0</span>
                <ShoppingCart size={34} />
             </div>
             <p className="text-sm font-bold pb-1">Cart</p>
          </div>
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="bg-[#232f3e] text-white flex items-center px-4 py-1 text-[14px] gap-1 h-[39px]">
        <div className="flex items-center font-bold border border-transparent hover:border-white px-2 py-1 cursor-pointer">
          <Menu className="mr-1" size={20} /> All
        </div>
        {["Today's Deals", "Gift Cards", "Registry", "Sell", "Prime Video", "Customer Service"].map((item) => (
          <p key={item} className="px-2 py-1 border border-transparent hover:border-white cursor-pointer whitespace-nowrap">
            {item}
          </p>
        ))}
      </div>
    </header>
  );
}