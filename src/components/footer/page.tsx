"use client";

import { BoneIcon, Facebook, Instagram, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative w-full bg-linear-to-br from-[#f0e8dd] via-[#f0e8dd]/70 to-[#e6dccf] py-12 px-4 mt-20 overflow-hidden">

      
      <BoneIcon className="absolute left-6 bottom-6 w-10 h-10 text-[#FF7A00]/70 rotate-12 animate-bounce" />
      <BoneIcon className="absolute right-6 top-6 w-8 h-8 text-[#8B4513]/60 -rotate-12 animate-pulse" />

      <div className="max-w-6xl mx-auto flex flex-col items-center gap-8 text-center">


        <h3 className="text-sm sm:text-base md:text-2xl font-bold text-[#8B4513] flex flex-wrap items-center justify-center gap-2 text-center">
          Feito com <span className="animate-pulse">🐾</span> por Adopt a Friend
        </h3>

        {/* Redes sociais */}
        <div className="flex items-center gap-10">

          <a
            href="https://facebook.com"
            target="_blank"
            className="group p-3 rounded-full  shadow-md hover:scale-110 hover:shadow-lg transition"
          >
            <Facebook className="text-blue-600" />
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            className="group p-3 rounded-full  shadow-md hover:scale-110 hover:shadow-lg transition"
          >
            <Instagram className="text-pink-500" />
          </a>

          <a
            href="https://wa.me/5599999999999?text=Olá%20tenho%20interesse%20em%20adotar%20um%20animal"
            target="_blank"
            className="group p-3 rounded-full shadow-md hover:scale-110 hover:shadow-lg transition"
          >
            <MessageCircle className="text-green-600" />
          </a>

        </div>

        {/* Links */}
        <div className="flex gap-10 text-[1em] text-[#8B4513] font-bold">
          <Link href="#about" className="hover:text-[#FF7A00] transition">
            Sobre
          </Link>
          <Link href="#contato" className="hover:text-[#FF7A00] transition">
            Contato
          </Link>
          <Link href="#slide" className="hover:text-[#FF7A00] transition">
            Adoção
          </Link>
        </div>

        {/* Copyright */}
        <p
          className="text-sm text-[#FF7A00] font-semibold"
          suppressHydrationWarning
        >
          © 2026 Adopt a Friend — Todos os direitos reservados
        </p>

      </div>
    </footer>
  );
}
