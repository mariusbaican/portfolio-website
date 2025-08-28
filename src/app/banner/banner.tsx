import BannerIcons from "./banner-icons";
import BannerText from "./banner-text";

export default function Banner() {
  return (
    <section className="relative bg-[var(--bg)] w-full h-[60vh] lg:h-[70vh] flex flex-col items-center justify-center select-none">
      <BannerText />

      <div className="bg-radial from-[var(--primary)] to-[var(--primary-gradients)] to-70% w-[30rem] lg:w-[40rem] h-[30rem] lg:h-[40rem] rounded-full opacity-25 absolute left-[50%] top-[50%] translate-x-[-22rem] lg:translate-x-[-33rem] translate-y-[-17rem] lg:translate-y-[-23rem] animate-[pulseSlow_4s_ease-in-out_infinite]" />
      <div className=" bg-radial from-[var(--primary)] to-[var(--primary-gradients)] to-70% w-[30rem] lg:w-[40rem] h-[30rem] lg:h-[40rem] rounded-full opacity-25 absolute left-[50%] top-[50%] translate-x-[-3rem] lg:translate-x-[-10rem] translate-y-[-11rem] lg:translate-y-[-15rem] animate-[pulseSlow_4s_ease-in-out_2s_infinite]" />

      <BannerIcons />
    </section>
  );
}
