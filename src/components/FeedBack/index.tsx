"use client";

import { Quote, Star } from "lucide-react";
import Image from "next/image";
import { Button } from "../Button";
import { useState, useEffect } from "react";
import { FeedBackModal } from "../FeddBackModal";


export type Testimonial = {
  name: string;
  role: string;
  imageUrl: string;
  text: string;
  rating: number;
};

export function FeedBack() {
  const [open, setOpen] = useState(false);

  const [userFeedbacks, setUserFeedbacks] = useState<Testimonial[]>(() => {
    if (typeof window === "undefined") return [];
    const data = localStorage.getItem("feedbacks");
    return data ? JSON.parse(data) : [];
  });

  // 🔥 Feedbacks fixos
  const defaultFeedbacks: Testimonial[] = [
    {
      name: "Carlos Mendes",
      role: "Gerente de TI",
      imageUrl: "/images/gato3.jpg",
      text: "Adotei o Thor aqui e foi a melhor decisão da minha vida. O processo foi muito simples!",
      rating: 5,
    },
    {
      name: "Marina Costa",
      role: "Advogada",
      imageUrl: "/images/gato5.jpg",
      text: "Sempre quis adotar um gatinho, e aqui encontrei a belen. Atendimento incrível!",
      rating: 5,
    },
    {
      name: "Roberto Silva",
      role: "Empresário",
      imageUrl: "/images/gato2.jpg",
      text: "Plataforma muito fácil de usar. Em poucos dias já estava com meu novo melhor amigo!",
      rating: 5,
    },
    {
      name: "Pedro Santos",
      role: "Engenheiro",
      imageUrl: "/images/dog5.jpg",
      text: "Adotei o Max e minha rotina mudou completamente. Experiência maravilhosa!",
      rating: 5,
    },
  ];

  // 🔥 Salvar no localStorage
  useEffect(() => {
    localStorage.setItem("feedbacks", JSON.stringify(userFeedbacks));
  }, [userFeedbacks]);

  // 🔥 Junta tudo
  const allFeedbacks = [...defaultFeedbacks, ...userFeedbacks];

  return (
    <section
      id="depoimentos"
      className="py-20 bg-linear-to-br from-[#f0e8dd] via-[#f0e8dd]/70 to-[#e6dccf] text-[#8B4513]"
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-orange-300/20 text-[#FF7A00] rounded-full mb-4">
            <span className="text-lg font-semibold">FeedBack</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            O Que as Pessoas Estão Dizendo
          </h2>

          <p className="text-xl text-gray-700">
            Histórias reais de pessoas que adotaram um animal.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allFeedbacks.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-2xl relative hover:shadow-lg transition-shadow"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-[#FF7A00]" />

              <div className="flex items-center gap-4 mb-6">
                <Image
                  width={400}
                  height={400}
                  src={testimonial.imageUrl}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />

                <div>
                  <div className="font-bold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role}
                  </div>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>

        <div className="items-center justify-center mt-12 text-center p-4">
          <Button
            variant="outline"
            size="sm"
            className="text-[#8B4513] p-5 bg-[#FF7A00]  font-bold cursor-pointer shadow-2xl animate-[float_6s_ease-in-out_infinite] hover:bg-[#FF7A00]/90 "
            onClick={() => setOpen(true)}
          >
            Diga seu Feedback
          </Button>
        </div>
      </div>

      {/* 🔥 Modal separado */}
      <FeedBackModal
        open={open}
        onClose={() => setOpen(false)}
        onAdd={(newFeedback) =>
          setUserFeedbacks((prev) => [...prev, newFeedback])
        }
      />
    </section>
  );
}
