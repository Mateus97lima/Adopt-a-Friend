"use client";

import { Button } from "@/components/Button";
import React, { useState } from "react";
import { Bone, PawPrint, Dog, Cat } from "lucide-react";

export default function Contato() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  });

  const [enviado, setEnviado] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setEnviado(true);
  }

  return (
    <section id="contato" className="relative min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-[#f0e8dd] via-[#f0e8dd]/70 to-[#e6dccf] overflow-hidden">

      {/* 🐾 ÍCONES DECORATIVOS */}

      {/* esquerda */}
      <Bone className="absolute left-10 top-20 w-10 h-10 text-orange-400/70 animate-bounce" />
      <PawPrint className="absolute left-20 bottom-20 w-12 h-12 text-[#8B4513]/60 rotate-12 animate-bounce" />

      {/* direita */}
      <Dog className="absolute right-16 top-24 w-12 h-12 text-orange-500/60 animate-bounce " />
      <Cat className="absolute right-10 bottom-24 w-10 h-10 text-[#8B4513]/70 -rotate-12 animate-bounce" />

      {/* extras espalhados */}
      <Bone className="absolute left-1/2 top-10 w-8 h-8 text-orange-300/60 animate-bounce" />
      <PawPrint className="absolute right-1/3 bottom-10 w-10 h-10 text-[#8B4513]/50 animate-bounce" />


      <div className="w-full max-w-lg p-8 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-orange-100 z-10">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-900">
          <span className="text-[#FF7A00]">Adote um animal</span> 🐾Contato🐾
        </h2>

        {enviado ? (
          <div className="text-green-600 text-center my-10 font-semibold text-lg">
            Obrigado pelo seu interesse! Entraremos em contato em breve.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">

            <div>
              <label className="block text-[#8B4513] font-semibold mb-1">
                Nome
              </label>
              <input
                name="nome"
                value={form.nome}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border border-orange-200 focus:border-[#FF7A00] focus:ring-2 focus:ring-[#FF7A00]/30 outline-none"
              />
            </div>

            <div>
              <label className="block text-[#8B4513] font-semibold mb-1">
                E-mail
              </label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border border-orange-200 focus:border-[#FF7A00] focus:ring-2 focus:ring-[#FF7A00]/30 outline-none"
              />
            </div>

            <div>
              <label className="block text-[#8B4513] font-semibold mb-1">
                Telefone
              </label>
              <input
                name="telefone"
                value={form.telefone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border border-orange-200 focus:border-[#FF7A00] focus:ring-2 focus:ring-[#FF7A00]/30 outline-none"
              />
            </div>

            <div>
              <label className="block text-[#8B4513] font-semibold mb-1">
                Mensagem
              </label>
              <textarea
                name="mensagem"
                value={form.mensagem}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-orange-200 focus:border-[#FF7A00] focus:ring-2 focus:ring-[#FF7A00]/30 outline-none"
              />
            </div>

            <Button className="w-full py-3 bg-[#FF7A00] text-white font-bold rounded-lg shadow-md hover:bg-[#FF7A00]/90 transition">
              Enviar
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}
