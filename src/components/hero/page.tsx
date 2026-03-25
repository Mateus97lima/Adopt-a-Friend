import { Button } from "@/components/Button";
import { Users, Award, SmileIcon} from "lucide-react";
import Image from "next/image";
import Link from "next/link";





export default function Hero() {
  return (
    <section id="Home" className="relative min-h-screen flex mt-20 items-center bg-linear-to-br from-[#f0e8dd] via-[#f0e8dd]/70 to-[#e6dccf] text-[#8B4513] overflow-hidden">
      <div className="container mx-auto px-4 py-20 relative z-10 shadow-lg rounded-3xl bg-[#F0E8DD] backdrop-blur-sm">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-white/40">
              <span className="text-sm font-medium">🐾 Adopt a Friend 🐾</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Adote um amigo e{" "}
              <span className="text-[#FF7A00]">transforme uma vida</span> 🐶🐱
            </h1>

            {/* Description */}
            <p className="text-lg text-[#8B4513] max-w-xl">
              Encontre seu novo melhor amigo e adote um animal de estimação com
              a{" "}
              <span className="font-bold text-[#ff7a00]">
                🐾 Adopt a Friend 🐾
              </span>
            </p>

            {/* Button */}
            <div className="flex flex-col sm:flex-row gap-4">

              <Button
                size="lg"
                className="bg-[#FF7A00] hover:bg-[#e66a00] text-white text-lg px-8 py-6 rounded-full cursor-pointer"
               >
                <Link href="#slide">
                Ver animais disponíveis
                </Link>
              </Button>



              <Button
                size="lg"
                variant="outline"
                className="border-2 border-[#8B4514] text-[#8B4513] hover:bg-black/5 text-lg px-8 py-6 rounded-full"
              >
                <Link href="#about">Saiba mais</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <Users className="w-8 h-8 mx-auto text-[#4F9DFF]" />
                <div className="text-2xl font-bold mt-2">500+</div>
                <div className="text-sm text-gray-500">Adoções</div>
              </div>

              <div className="text-center">
                <Award className="w-8 h-8 mx-auto text-[#4F9DFF]" />
                <div className="text-2xl font-bold mt-2">100+</div>
                <div className="text-sm text-gray-500">Animais Resgatados</div>
              </div>

              <div className="text-center">
                <SmileIcon className="w-8 h-8 mx-auto text-[#4F9DFF]" />
                <div className="text-2xl font-bold mt-2">98%</div>
                <div className="text-sm text-gray-500">Lares Felizes</div>
              </div>
            </div>
          </div>

          {/* RIGHT - IMAGE */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl animate-[float_4s_ease-in-out_infinite]">
              <Image
                src="/images/gato-bry.png"
                alt="Gato para adoção"
                width={900}
                height={600}
                className="object-cover "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
