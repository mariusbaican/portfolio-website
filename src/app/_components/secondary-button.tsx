export default function SecondaryButton({ text }: { text: string }) {
  return (
    <div className="bg-[var(--bg-accents)] border-1 border-[var(--primary)] hover:bg-[var(--primary)] hover:text-[var(--bg-accents)] active:brightness-90 text-[1.125rem]/[1.125rem] lg:text-[1.5rem]/[1.5rem] font-normal text-[var(--primary)] rounded-full px-[1.25rem] lg:px-[1.75rem] py-[1rem] select-none cursor-pointer transition-all duration-300">
      {text}
    </div>
  );
}
