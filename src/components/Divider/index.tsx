type DividerProps = {
  speed?: number; // duração da animação (segundos)
  items?: string[]; // elementos (emoji ou texto)
  pauseOnHover?: boolean;
};

export default function Divider({
  speed = 8,
  items = ["🦴", "🐕"],
  pauseOnHover = true,
}: DividerProps) {
  return (
    <div className="relative w-full h-16 overflow-hidden  bg-linear-to-br from-[#f0e8dd] via-[#f0e8dd]/70 to-[#e6dccf group">
      {/* linha */}
      <div className="absolute top-[55%] left-0 w-full h-0.5 bg-gray-300 -translate-y-1/2" />

      {/* patas */}
      <div className="flex justify-around items-center h-full">
        {Array.from({ length: 10 }).map((_, i) => (
          <span key={i} className="text-xl">
            🐾
          </span>
        ))}
      </div>


      <div
        className={`absolute top-1/2 left-full flex gap-10 ${
          pauseOnHover ? "group-hover:[animation-play-state:paused]" : ""
        }`}
        style={{
          animation: `drive ${speed}s linear infinite`,
        }}
      >
        {items.map((item, index) => (
          <span key={index} className="text-xl -translate-y-1/2">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
