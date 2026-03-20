import Image from "next/image";

export function About() {

  return (
    <section id="sobre" className="py-20 bg-linear-to-br from-[#f0e8dd] via-[#f0e8dd]/70 to-[#e6dccf] text-[#8B4513] overflow-hidden  ">
      <div className="container mx-auto px-4 justify-center items-center ">
        <div className="grid lg:grid-cols-2 gap-12 items-center rounded-3xl">
          {/* Image */}
          <div className="order-2 lg:order-1 rounded-3xl shadow-2xl animate-[float_3s_ease-in-out_infinite]">
            <div className="relative shadow-2xl animate-[float_4s_ease-in-out_infinite]">
              <div className="absolute -top-6 left-6 w-full h-full rounded-3xl "></div>
              <Image
                src="/images/log-bry.jpg"
                alt="🐾 Adopt a Friend 🐾"
                width={900}
                height={600}
                className="object-cover relative rounded-3xl shadow-xl w-full "
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="inline-block px-4 py-2 ">
              <span className="text-sm font-semibold">
                Sobre{" "}
                <span className="font-bold text-[#FF7A00]">
                  🐾 Adopt a Friend 🐾
                </span>
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              <span className="text-[#FF7A00] font-bold">🐾 Adopt a Friend 🐾</span>
            </h2>

            <p className="text-lg text-[#8B4513] leading-relaxed max-w-xl">
              È um projeto criado com o propósito de conectar animais que
              precisam de um lar com pessoas dispostas a oferecer amor, cuidado
              e uma nova chance de vida. Acreditamos que cada adoção transforma
              não apenas a vida do animal, mas também a de quem decide acolher.
              Nossa missão é facilitar esse encontro de forma simples, acessível
              e acolhedora. Este projeto foi desenvolvido como parte do meu
              portfólio, com foco em criar uma experiência moderna, intuitiva e
              significativa para quem deseja adotar um pet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
