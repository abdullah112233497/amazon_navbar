"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Search, ShoppingCart, MapPin, Menu, ChevronDown, X } from "lucide-react";

export default function AmazonNavbar() {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Lock scrolling when the mobile menu is active
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    // Cleanup on unmount
    return () => { document.body.style.overflow = "unset"; };
  }, [isMobileMenuOpen]);

  const isDimmed = isLangOpen || isAccountOpen || isMobileMenuOpen;

  const navLinks = [
    "Today's Deals", 
    "Gift Cards", 
    "Registry", 
    "Sell", 
    "Prime Video", 
    "Customer Service"
  ];

  return (
    <>
      {/* Dimmer Overlay */}
      <div 
        onClick={() => setIsMobileMenuOpen(false)}
        className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-300 ${isDimmed ? "opacity-100" : "opacity-0 pointer-events-none"}`} 
      />

      {/* Mobile Sliding Menu (From Right) */}
      <div 
        className={`fixed top-0 right-0 h-[100dvh] w-[80vw] max-w-[320px] bg-white z-50 transform transition-transform duration-300 ease-in-out shadow-2xl flex flex-col ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="bg-[#232f3e] text-white p-4 flex justify-between items-center h-[60px] flex-shrink-0">
          <div className="flex items-center gap-2 font-bold text-[16px]">
            <div className="w-7 h-7 bg-white text-[#232f3e] rounded-full flex items-center justify-center text-sm">👤</div>
            Hello, sign in
          </div>
          <button onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#f3a847]">
            <X size={28} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto text-black pb-10">
          <div className="p-4 border-b border-gray-200">
            <h3 className="font-bold text-[18px] mb-4">Browse</h3>
            <ul className="space-y-5">
              <li className="font-bold text-[#131921]">Amazon Home</li>
              {navLinks.map((item) => (
                <li key={item} className="text-gray-700 text-[15px] cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Main Header Container - Strict 100% width */}
      <header className="font-sans sticky top-0 z-40 select-none shadow-md w-full max-w-[100vw] overflow-x-hidden md:overflow-visible bg-[#131921]">
        
        {/* TOP ROW: Logo and Icons */}
        <div className="text-white py-1 px-2 flex items-center justify-between h-[60px] w-full gap-1">
          
          {/* LEFT SIDE: Logo & Deliver */}
          <div className="flex items-center flex-shrink-0 min-w-0">
            <div className="flex items-center border border-transparent hover:border-white px-1 sm:px-2 h-[50px] cursor-pointer">
              <Image 
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" 
                alt="Amazon"
                width={85} 
                height={28} 
                className="object-contain mt-2" 
                priority
              />
            </div>

            <div className="hidden lg:flex items-center border border-transparent hover:border-white px-2 h-[50px] cursor-pointer ml-1">
              <MapPin size={18} className="mt-3" />
              <div className="ml-1 flex flex-col justify-center">
                <p className="text-[#ccc] text-[12px] leading-[14px]">Deliver to</p>
                <p className="font-bold text-[14px] leading-[15px]">Pakistan</p>
              </div>
            </div>
          </div>

          {/* MIDDLE: Search Bar (Desktop Only) */}
          <div className="hidden md:flex flex-grow h-10 rounded-md overflow-hidden bg-white focus-within:ring-[3px] focus-within:ring-[#f3a847] mx-2 transition-shadow min-w-0">
            <div className="bg-[#f3f3f3] text-[#555] text-[12px] px-3 flex items-center border-r border-gray-300 hover:bg-[#dadada] hover:text-black cursor-pointer flex-shrink-0">
              All <ChevronDown size={14} className="ml-1 mt-0.5" />
            </div>
            <input 
              type="text" 
              className="flex-grow px-3 text-black outline-none text-[15px] placeholder:text-gray-600 min-w-0" 
              placeholder="Search Amazon"
            />
            <button className="bg-[#febd69] hover:bg-[#f3a847] p-2 px-3 text-[#131921] flex-shrink-0">
              <Search size={24} strokeWidth={2.5} />
            </button>
          </div>

          {/* RIGHT SIDE: Icons & Menus */}
          <div className="flex items-center flex-shrink-0 gap-1 sm:gap-0">
            
            {/* Lang (Desktop) */}
            <div className="hidden md:flex items-center border border-transparent hover:border-white px-2 h-[50px] cursor-pointer" onMouseEnter={() => setIsLangOpen(true)} onMouseLeave={() => setIsLangOpen(false)}>
              <span className="text-[14px] font-bold mt-2">🇺🇸 EN</span>
              <ChevronDown size={10} className="text-gray-400 mt-3 ml-1" />
            </div>

            {/* Account (Desktop) */}
            <div className="hidden md:flex flex-col justify-center border border-transparent hover:border-white px-2 h-[50px] cursor-pointer">
              <p className="text-[12px] leading-[12px]">Hello, sign in</p>
              <p className="text-[14px] font-bold flex items-center leading-[15px]">Account & Lists <ChevronDown size={10} className="ml-1 text-gray-400" /></p>
            </div>

            {/* Orders (Desktop) */}
            <div className="hidden md:flex flex-col justify-center border border-transparent hover:border-white px-2 h-[50px] cursor-pointer">
              <p className="text-[12px] leading-[12px]">Returns</p>
              <p className="font-bold text-[14px] leading-[15px]">& Orders</p>
            </div>

            {/* User Icon (Mobile Only) */}
            <div className="md:hidden flex flex-col justify-center border border-transparent hover:border-white px-1 sm:px-2 h-[50px] cursor-pointer">
              <p className="text-[13px] leading-[14px]">Sign in ›</p>
              <div className="flex items-center">
                 {/* <div className="w-5 h-5 bg-white text-[#131921] rounded-full flex items-center justify-center text-[10px] font-bold mt-1">👤</div> */}
              </div>
            </div>

            {/* Cart (Both) */}
            <div className="flex items-end border border-transparent hover:border-white px-1 sm:px-2 h-[50px] cursor-pointer relative pb-1">
               <div className="relative">
                  <span className="absolute left-[13px] -top-1.5 text-[#f08804] text-[16px] font-bold w-4 text-center">0</span>
                  <ShoppingCart size={36} strokeWidth={1.5} className="text-white" />
               </div>
               <p className="hidden md:block text-[14px] font-bold ml-0.5">Cart</p>
            </div>

            {/* Hamburger (Mobile Only) */}
            <div 
              className="md:hidden flex items-center border border-transparent hover:border-white px-1 h-[50px] cursor-pointer"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={28} />
            </div>
          </div>
        </div>

        {/* BOTTOM ROW (Mobile Search) */}
        <div className="md:hidden w-full px-2 pb-2">
           <div className="flex w-full h-11 rounded-md overflow-hidden bg-white focus-within:ring-[3px] focus-within:ring-[#f3a847] shadow-sm">
            <input 
              type="text" 
              className="flex-grow px-3 text-black outline-none text-[16px] min-w-0" 
              placeholder="Search Amazon" 
            />
            <button className="bg-[#febd69] p-2 px-4 text-[#131921] flex-shrink-0">
              <Search size={24} strokeWidth={2.5} />
            </button>
          </div>
        </div>

        {/* DESKTOP BOTTOM NAV */}
        <div className="hidden md:flex bg-[#232f3e] text-white items-center px-2 text-[14px] h-[39px] w-full">
          <div className="flex items-center font-bold border border-transparent hover:border-white px-2 h-[34px] cursor-pointer mr-1">
            <Menu className="mr-1" size={24} /> All
          </div>
          <div className="flex items-center space-x-1">
            {navLinks.map((item) => (
              <p key={item} className="px-2 h-[34px] flex items-center border border-transparent hover:border-white cursor-pointer whitespace-nowrap">
                {item}
              </p>
            ))}
          </div>
        </div>
      </header>
    </>
  );
}