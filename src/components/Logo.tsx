import Link from "next/link";

export function Logo({ size = 40, className = "" }: { size?: number; className?: string }) {
  return (
    <Link href="/" className={`group flex items-center gap-2.5 ${className}`}>
      <span
        className="font-logo leading-none transition-transform duration-300 group-hover:-rotate-3 inline-block"
        style={{ fontSize: `${size * 0.85}px` }}
      >
        OG
      </span>
      <span className="eyebrow !text-[9px] leading-tight !tracking-[0.18em]">
        Barber&apos;s<br />Club
      </span>
    </Link>
  );
}
