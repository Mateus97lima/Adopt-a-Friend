"use client";

import clsx from "clsx"
import { BoneIcon, Menu, X } from "lucide-react";
import Link from "next/link"
import { useState } from "react";
import { Button } from "../Button";
import { DesktopNavigation } from "../Navigation/Desktop";


export function Header(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return(

    <header className="fixed top-0 left-0 right-0 z-50 bg-#fff4e6 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center ">
            <div className="w-10 h-10  rounded-full flex items-center justify-center">
              <BoneIcon className="w-6 h-6 text-black" />
            </div>
            <h1 className={clsx('text-xl lg:text-[1.5em] font-bold text-gray-900 ')}>
              <Link href="/slide">🐾 Adopt a Friend 🐾</Link>
            </h1>

          </div>

        <DesktopNavigation/>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-900" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col gap-4">
              <Link href="#" className="text-gray-700 hover:text-orange-600 transition-colors py-2">
                Inicio
              </Link>
              <Link href="#about" className="text-gray-700 hover:text-orange-600 transition-colors py-2">
              Sobre
              </Link>
              <Link href="#slide" className=" flex gap-1 text-gray-700 hover:text-orange-600 transition-colors py-2">
                Pets
                  <BoneIcon className="w-4 h-5 text-gray-700 hover:text-orange-600 transition-colors" />
              </Link>
              <a href="#" className="text-gray-700 hover:text-orange-600 transition-colors py-2">
                Contato
              </a>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full">
                Adopt Now
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>


    )
}
