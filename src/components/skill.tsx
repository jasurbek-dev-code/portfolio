interface SkillProps {
  svg: string;
  text: string;
}

export default function Skill({ svg, text }: SkillProps) {
  return (
    <div className="group relative flex flex-col items-center justify-center rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/50 hover:bg-zinc-800/60 hover:shadow-lg hover:shadow-cyan-500/10">
      <div className="flex h-14 w-14 items-center justify-center transition-transform duration-300 group-hover:scale-110">
        <img
          src={svg}
          alt={text}
          className="h-10 w-10 object-contain drop-shadow"
          loading="lazy"
        />
      </div>
      <h3 className="font-montserrat mt-3 text-center text-sm font-semibold text-zinc-200 transition-colors group-hover:text-cyan-400">
        {text}
      </h3>
    </div>
  );
}
