"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Button } from "../../components/Button";

type Slide = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
};

const slides: Slide[] = [
  {
    id: 1,
    title: "Miya",
    description: "2 meses, fêmea, castrada, vacinada e vermifugada",
    imageUrl: "/images/gato-bry.png",
  },
  {
    id: 2,
    title: "lucas",
    description: "2 anos, macho, castrado, vacinado e vermifugado",
    imageUrl: "/images/gato3.jpg",
  },
  {
    id: 3,
    title: "raabel",
    description: "1 ano, macho, castrado, vacinado e vermifugado",
    imageUrl: "/images/gato2.jpg",
  },
  {
    id: 4,
    title: "teresa",
    description: "2 anos, fêmea, castrada, vacinada e vermifugada",
    imageUrl: "/images/dog6.jpg",
  },
  {
    id: 5,
    title: "rex",
    description: "4 meses, macho, castrado, vacinado e vermifugado",
    imageUrl: "/images/dog4.jpg",
  },
  {
    id: 6,
    title: "luna",
    description: "1 mes, fêmea, castrada, vacinada e vermifugada",
    imageUrl: "/images/dog5.jpg",
  },
  {
    id: 7,
    title: "milly",
    description: "1 ano, fêmea, castrada, vacinada e vermifugada",
    imageUrl: "/images/dog2.jpg",
  },
  {
    id: 8,
    title: "bryen",
    description: "1 ano, macho, castrado, vacinado e vermifugado",
    imageUrl: "/images/gato4.jpg",
  },
  {
    id: 9,
    title: "Fanny",
    description: "2 anos, fêmea, castrada, vacinada e vermifugada",
    imageUrl: "/images/dog3.jpg",
  },
  {
    id: 10,
    title: "belen",
    description: "2 meses, macho, castrado, vacinado e vermifugado",
    imageUrl: "/images/gato5.jpg",
  },
  {
    id: 11,
    title: "nana",
    description: "1 ano, macho, castrado, vacinado e vermifugado",
    imageUrl: "/images/dog1.jpg",
  },
];

export default function Slide() {
  return (
    <section id="slide" className="flex mt-23 mb-12 justify-center items-center flex-col gap-10">
      <h2 className="text-2xl font-bold">
        Animais disponíveis para{" "}
        <span className="text-[#FF7A00]"> 🐾 doação 🐾</span>
      </h2>

      <Swiper
        spaceBetween={19}
        slidesPerView={6}
        modules={[Autoplay]}
        autoplay={{
          delay: 2000, // tempo entre slides (2 segundos)
          disableOnInteraction: false, // continua mesmo se o usuário mexer
        }}
        breakpoints={{
          480: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
        className="w-full h-auto px-4 "
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="bg-[#F0E8DD] backdrop-blur-sm rounded-2xl shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105">
              {/* imagem */}
              <Image
                width={500}
                height={800}
                src={slide.imageUrl}
                alt={slide.title}
                className="w-full h-36 md:h-48 object-cover"
              />

              {/* conteúdo */}
              <div className="p-4">
                <h3 className="text-lg text-[#8B4513]font-semibold">
                  {slide.title}
                </h3>
                <p className="text-[#8B4513] text-sm">{slide.description}</p>
              </div>
              <Button className="font-bold text-[#8B4513] p-4 bg-[#FF7A00] cursor-pointer transform hover:bg-[#FF7A00]/90"> 🐶Adopt me🐱</Button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
