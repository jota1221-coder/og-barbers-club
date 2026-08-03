export function TeamAvatar({ initials }: { initials: string }) {
  return (
    <div className="aspect-square w-full flex items-center justify-center bg-ink-950 text-ink-50 border hairline">
      <span className="font-display text-5xl lg:text-6xl">{initials}</span>
    </div>
  );
}
