import { Button } from "@/components/Button";
import { BoneIcon } from "lucide-react";
import Link from "next/link";

export function DesktopNavigation() {
  {
    /* Desktop Navigation */
  }
  return (
    <nav className=" hidden md:flex items-center gap-8 md:gap-12 lg:gap-25 ">
      <Link
        href="#"
        className="font-bold text-gray-700 hover:text-orange-600 transition-colors border-b-2 border-transparent hover:border-orange-600"
      >
        Inicio
      </Link>
      <Link
        href="#about"
        className="font-bold text-gray-700 hover:text-orange-600 transition-colors border-b-2 border-transparent hover:border-orange-600"
      >
        Sobre
      </Link>
      <Link
        href="#slide"
        className="flex font-bold  text-gray-700 gap-1 hover:text-orange-600 transition-colors border-b-2 border-transparent hover:border-orange-600"
      >
        <BoneIcon className="w-4 h-6 text-gray-700 hover:text-orange-600 transition-colors" />
        Pets
      </Link>
      <Link
        href="#contato"
        className="font-bold text-gray-700 hover:text-orange-600 transition-colors border-b-2 border-transparent hover:border-orange-600"
      >
        Contato
      </Link>
      <Link href="#contato">
        <Button className="bg-orange-500 hover:bg-orange-600 text-white text-[1em] cursor-pointer rounded-full p-5">
          Adopt Now
        </Button>
      </Link>
    </nav>
  );
}
