"use client"
import * as React from "react"
import { useState, useEffect, useRef } from 'react'
import Link from "next/link"
import { capitalizeEachWord } from '@/lib/utils'
import { UserRound, ChevronDown, Home, Text } from 'lucide-react';
import { Outfit } from "next/font/google";
import Image from "next/image"

const outfit = Outfit({
  weight: ['400', '500', '300', '600', '700', '900', '800'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})


export default function Navbar({ userLoggedIn }: {userLoggedIn?: Boolean }) {

  // change style on scroll
  const [navbar, setNavbar] = useState(false);

  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    setIsUserLoggedIn(!!userLoggedIn);
  }, [userLoggedIn])

  const [showMobileShop, setShowMobileShop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 670;
      setNavbar(isScrolled);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  // change style on scroll

  // show hide navbar on scoll
  const [slide, setSlide] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingUp = currentScrollY < prevScrollY || currentScrollY <= 100;
      setPrevScrollY(currentScrollY);
      setSlide(isScrollingUp);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollY]);
  // show hide navbar on scoll

  // responsive sidebar management
  const [showSide, setShowSide] = useState(false);
  const handleSetShowClick = () => {
    setShowSide((prev) => !prev);
  }

  // close sidebar on scroll and click outside the sidebar
  const sideDivRef = useRef<HTMLDivElement>(null);
  const handleClickOutside = (event: MouseEvent) => {
    if (sideDivRef.current && !((sideDivRef.current as unknown) as HTMLElement).contains(event.target as Node)) {
      setShowSide(false);
      setShowMobileShop(false);
    }
  };

  useEffect(() => {
    const handleScrollSidebar = () => {
      if (sideDivRef.current) {
        const { top, bottom } = sideDivRef.current.getBoundingClientRect();
        if (top < 0 || bottom > window.innerHeight) {
          setShowSide(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('scroll', handleScrollSidebar);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('scroll', handleScrollSidebar);
    };
  }, []); // Run this effect only once on component mount

  return (
    <>
      <div className={` ${outfit.className} w-full flex px-4 lg:px-8 py-3 lg:py-4 items-center justify-start bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20  transition-opacity duration-500 ${slide ? '' : 'opacity-0 file:hidden'}`}>

        <div className="block lg:hidden mr-3 cursor-pointer" onClick={handleSetShowClick}>
          <Text />
        </div>

        {/* Desktop Navbar Start */}
        <div className='flex items-center'>
          <Link href='/'>
            <Image
                            alt="logo"
                            src="/images/logo.jpeg"
                            width={200}
                            height={80}
                        />
          </Link>
        </div>

        <div className="hidden lg:ml-20 lg:flex justify-center items-center gap-1">
          <Link href="/" className="text-base text-black font-[500] tracking-wider px-3 py-1.5">
            Home
          </Link>

          <Link href="/news" className="text-base text-black font-[500] tracking-wider px-3 py-1.5">
            News
          </Link>

          <Link href="/blogs" className="text-base text-black font-[500] tracking-wider px-3 py-1.5">
            Blog
          </Link>

          <Link href="/contact" className="text-base text-black font-[500] tracking-wider px-3 py-1.5">
            Contact
          </Link>
        </div>

        {/* Desktop Navbar Close */}

        {/* Mobile Navbar Start */}
        {
          showSide &&
          <div className={`block absolute h-screen w-screen overflow-hidden bg-slate-600 opacity-[0.4] lg:hidden top-0 left-0 z-[19]`}>

          </div>
        }

        <div ref={sideDivRef} className={`duration-300 ${showSide ? "left-[0%]" : "left-[-100%]"} block absolute h-screen overflow-auto overflow-x-hidden hide-scrollbar w-[75vw] bg-white shadow-sm lg:hidden top-0 left-0 z-[10000]`}>

          {/* NavMenu Options */}
          <div className="w-full text-black text-base flex flex-col items-start gap-y-4  pb-20" >

            <div className="p-4 bg-black text-white w-full flex justify-between items-center text-lg">
              <p className="flex-[20%] border-r-2 border-white">Menu</p>
              <p className="flex-1 cursor-pointer flex justify-end items-center gap-1" onClick={handleSetShowClick}>
                <ChevronDown className="h-6 w-6 rotate-90" />
                Back
              </p>
            </div>

            <div className="py-4 pb-20 px-4 w-full flex flex-col space-y-4 text-lg">
              <Link href="/" onClick={handleSetShowClick} className="hover:text-blue-800">
                Home
              </Link>

              <Link href="/news" onClick={handleSetShowClick} className="hover:text-blue-800">
                News
              </Link>

              <Link href="/blogs" onClick={handleSetShowClick} className="hover:text-blue-800">
                Blog
              </Link>

              <Link href="/contact" onClick={handleSetShowClick} className="hover:text-blue-800">
                Contact
              </Link>

            </div>

          </div>
        </div>

        {/* Mobile Navbar close */}
      </div>
    </>
  )
}