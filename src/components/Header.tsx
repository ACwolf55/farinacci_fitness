import React from 'react'
import Link from "next/link";
import Image from "next/image";
import { useRouter } from 'next/router';
import Footer from "~/components/Footer";


function Header() {

  const router = useRouter();

  return (
    <header className="px-4 md:px-24 py-4 md:flex md:items-center md:justify-between z-20">
      <div className="flex items-center">
        <Image
          src="/FarinacciFitnessLogo.jpg"
          alt="Farinacci Fitness Logo"
          width={128}
          height={128}
          className="w-16 h-16 md:w-24 md:h-24"
        />
        <div className="flex flex-col">
        <h2 className="text-2xl md:text-3xl ml-2">Farinacci</h2>
        <h2 className="text-2xl md:text-3xl ml-2">Fitness</h2>
        </div>
      </div>
  
    <nav className="mt-4 md:mt-0 text-lg">
      <Link href="/" className={`block mt-2 md:inline-block md:mt-0 md:ml-4 ${router.pathname === '/' ? 'text-blue-500' : 'hover:text-blue-500'}`}>
        Home
      </Link>
      <Link href="/about" className={`block mt-2 md:inline-block md:mt-0 md:ml-4 ${router.pathname === '/about' ? 'text-blue-500' : 'hover:text-blue-500'}`}>
        About
      </Link>
      <Link href="/programs" className={`block mt-2 md:inline-block md:mt-0 md:ml-4 ${router.pathname === '/programs' ? 'text-blue-500' : 'hover:text-blue-500'}`}>
        Programs
      </Link>
      <Link href="/successStories" className={`block mt-2 md:inline-block md:mt-0 md:ml-4 ${router.pathname === '/successStories' ? 'text-blue-500' : 'hover:text-blue-500'}`}>
        Success Stories
      </Link>
      <Link href="/contact" className={`block mt-2 md:inline-block md:mt-0 md:ml-4 ${router.pathname === '/contact' ? 'text-blue-500' : 'hover:text-blue-500'}`}>
        Contact
      </Link>
    </nav>
    </header>
  );
}


export default Header