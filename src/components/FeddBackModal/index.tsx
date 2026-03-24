"use client";

import { Star } from "lucide-react";
import Image from "next/image";
import { Button } from "../Button";
import { useState } from "react";
import { Testimonial } from "../FeedBack";


type Props = {
  open: boolean;
  onClose: () => void;
  onAdd: (data: Testimonial) => void;
};

export function FeedBackModal({ open, onClose, onAdd }: Props) {
  const [name, setName] = useState("");
  const [petName, setPetName] = useState("");
  const [text, setText] = useState("");
  const [rating, setRating] = useState(5);
  const [imageUrl, setImageUrl] = useState("");

  const [errors, setErrors] = useState({
    name: "",
    petName: "",
    text: "",
  });

  if (!open) return null;

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

    onAdd(newFeedback);

    alert("Feedback enviado 🚀");

    setName("");
    setPetName("");
    setText("");
    setRating(5);
    setImageUrl("");
    onClose();

    setErrors({
      name: "",
      petName: "",
      text: "",
    });
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-2xl w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Deixe seu feedback 🐾</h2>

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
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                onClick={() => setRating(star)}
                className={`cursor-pointer w-6 h-6 ${
                  rating >= star ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                }`}
              />
            ))}
          </div>

          <div className="flex justify-between">
            <button type="button" onClick={onClose}>
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
  );
}
