"use client";
import { Button } from "@/components/Button";
import React, { useState } from "react";
import Image from "next/image";

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
    <section id="contato" className="min-h-screen flex items-center justify-center px-4 bg-linear-to-br from-[#f0e8dd] via-[#f0e8dd]/70 to-[#e6dccf] text-[#8B4513]">

      <div className="grid md:grid-cols-2 gap-10 items-center justify-center max-w-5xl w-full ">

        {/* 🐶 IMAGEM */}
        <div className="hidden md:flex justify-center w-full">
          <Image
            src="/images/dog5.jpg"
            alt="Adote um pet"
            width={600}
            height={600}
            className="rounded-2xl shadow-lg object-cover"
          />
        </div>

        {/* 📩 FORM */}
        <div className="w-full p-8 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-orange-100">

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

              <Button className="w-full py-3 bg-[#FF7A00] text-white font-bold rounded-lg shadow-md hover:bg-[#FF7A00]/90">
                Enviar
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
