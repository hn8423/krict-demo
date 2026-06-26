type KrictLogoProps = {
  readonly variant?: "color" | "white";
};

export default function KrictLogo({ variant = "color" }: KrictLogoProps) {
  const wordColor = variant === "white" ? "text-white" : "text-[#14275c]";
  const subColor = variant === "white" ? "text-white/90" : "text-[#333]";

  return (
    <span className="inline-flex items-baseline gap-2 select-none">
      <span className={`text-3xl font-extrabold tracking-tight ${wordColor}`}>
        KR
        <span className="relative">
          I
          <span className="absolute -top-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-krict-cyan" />
        </span>
        CT
      </span>
      <span className={`text-lg font-semibold ${subColor}`}>한국화학연구원</span>
    </span>
  );
}
