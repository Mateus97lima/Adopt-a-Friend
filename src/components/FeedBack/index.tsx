"use client";

import { Quote, Star } from "lucide-react";
import Image from "next/image";
import { Button } from "../Button";
import { useState, useEffect } from "react";

type Testimonial = {
  name: string;
  role: string;
  imageUrl: string;
  text: string;
  rating: number;
};

export function FeedBack() {
  const [open, setOpen] = useState(false);

  const [name, setName] = useState("");
  const [petName, setPetName] = useState("");
  const [text, setText] = useState("");
  const [rating, setRating] = useState(5);
  const [imageUrl, setImageUrl] = useState("");

const [userFeedbacks, setUserFeedbacks] = useState<Testimonial[]>(() => {
  const data = localStorage.getItem("feedbacks");
  return data ? JSON.parse(data) : [];
});

  const [errors, setErrors] = useState({
    name: "",
    petName: "",
    text: "",
  });

  // 🔥 Feedbacks fixos
  const defaultFeedbacks: Testimonial[] = [
    {
      name: 'Carlos Mendes',
      role: 'Gerente de TI',
      imageUrl:'/images/gato3.jpg',
      text: "Adotei o Thor aqui e foi a melhor decisão da minha vida. O processo foi muito simples!",
      rating: 5,
    },
    {
      name: 'Marina Costa',
      role: 'Advogada',
      imageUrl: '/images/gato5.jpg',
      text: 'Sempre quis adotar um gatinho, e aqui encontrei a belen. Atendimento incrível!',
      rating: 5,
    },
    {
      name: 'Roberto Silva',
      role: 'Empresário',
      imageUrl: '/images/gato2.jpg',
      text: 'Plataforma muito fácil de usar. Em poucos dias já estava com meu novo melhor amigo!',
      rating: 5,
    },
    {
    name: 'Pedro Santos',
    role: 'Engenheiro',
    imageUrl: '/images/dog5.jpg',
    text: 'Adotei o Max e minha rotina mudou completamente. Experiência maravilhosa!',
    rating:5,
    }
  ];
   // criar btn de apagar


  // 🔥 Salvar no localStorage
  useEffect(() => {
    localStorage.setItem("feedbacks", JSON.stringify(userFeedbacks));
  }, [userFeedbacks]);

  function handleImage(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    setImageUrl(url);
  }

  function validate() {
    let valid = true;

    const newErrors = {
      name: "",
      petName: "",
      text: "",
    };

    if (!name.trim()) {
      newErrors.name = "Digite seu nome";
      valid = false;
    }

    if (!petName.trim()) {
      newErrors.petName = "Digite o nome do pet";
      valid = false;
    }

    if (!text.trim()) {
      newErrors.text = "Digite um comentário";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!validate()) return;

    const newFeedback: Testimonial = {
      name,
      role: petName,
      text,
      rating,
      imageUrl: imageUrl || "/images/default.jpg",
    };

    setUserFeedbacks((prev) => [...prev, newFeedback]);

    alert("Feedback enviado 🚀");

    setName("");
    setPetName("");
    setText("");
    setRating(5);
    setImageUrl("");
    setOpen(false);

    setErrors({
      name: "",
      petName: "",
      text: "",
    });
  }

  // 🔥 Junta fixos + usuário
  const allFeedbacks = [...defaultFeedbacks, ...userFeedbacks];

  return (
    <section id="depoimentos" className="py-20 bg-linear-to-br from-[#f0e8dd] via-[#f0e8dd]/70 to-[#e6dccf] text-[#8B4513]">
      <div className="container mx-auto px-4">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-red-100 text-red-600 rounded-full mb-4">
            <span className="text-sm font-semibold">FeedBack</span>
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
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
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
            className="text-[#8B4513] p-4 bg-[#FF7A00] cursor-pointer hover:bg-[#FF7A00]/90"
            onClick={() => setOpen(true)}
          >
            Diga seu Feedback
          </Button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-2xl w-full max-w-md">

            <h2 className="text-xl font-bold mb-4">
              Deixe seu feedback 🐾
            </h2>

            <form onSubmit={handleSubmit}>

              <input
                className={`w-full border p-2 mb-1 rounded ${errors.name ? "border-red-500" : ""}`}
                placeholder="Seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && <p className="text-red-500 text-sm mb-2">{errors.name}</p>}

              <input
                className={`w-full border p-2 mb-1 rounded ${errors.petName ? "border-red-500" : ""}`}
                placeholder="Nome do pet 🐶"
                value={petName}
                onChange={(e) => setPetName(e.target.value)}
              />
              {errors.petName && <p className="text-red-500 text-sm mb-2">{errors.petName}</p>}

              <textarea
                className={`w-full border p-2 mb-1 rounded ${errors.text ? "border-red-500" : ""}`}
                placeholder="Comentário"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              {errors.text && <p className="text-red-500 text-sm mb-2">{errors.text}</p>}

              <input type="file" onChange={handleImage} className="mb-3" />

              {imageUrl && (
                <Image
                  width={400}
                  height={400}
                  alt="Preview"
                  src={imageUrl}
                  className="w-20 h-20 object-cover mb-3 rounded-full"
                />
              )}

              <div className="flex gap-2 mb-4">
                {[1,2,3,4,5].map((star) => (
                  <Star
                    key={star}
                    onClick={() => setRating(star)}
                    className={`cursor-pointer w-6 h-6 ${
                      rating >= star
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              <div className="flex justify-between">
                <button type="button" onClick={() => setOpen(false)}>
                  Cancelar
                </button>

                <Button
                  type="submit"
                  className="text-[#8B4513] p-4 bg-[#FF7A00] cursor-pointer hover:bg-[#FF7A00]/90 px-4 py-2 rounded"
                >
                  Enviar
                </Button>
              </div>

            </form>
          </div>
        </div>
      )}
    </section>
  );
}
