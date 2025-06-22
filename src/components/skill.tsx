interface SkillProps {
  svg: string;
  text: string;
}
export default function Skill({ svg, text }: SkillProps) {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <img
        src={svg}
        className="w-[60%]"
      />
      <h1 className="font-montserrat mt-2 text-[18px] font-[600]">{text}</h1>
    </div>
  );
}
