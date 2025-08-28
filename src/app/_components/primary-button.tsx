export default function PrimaryButton({ text }: { text: string }) {
  return (
    <div className="bg-[var(--primary)] border-1 border-[var(--primary)] hover:brightness-105 active:brightness-90 text-[1.125rem]/[1.125rem] lg:text-[1.5rem]/[1.5rem] font-normal text-[var(--bg-accents)] rounded-full px-[1.25rem] lg:px-[1.75rem] py-[1rem] select-none cursor-pointer transition-discrete duration-300">
      {text}
    </div>
  );
}
