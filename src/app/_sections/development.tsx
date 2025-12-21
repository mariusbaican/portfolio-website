"use client";

import { useRef } from "react";
import BackGlow from "../_components/back-glow";
import { useGlobalContext } from "../_components/context-provider";
import {
  easeIn,
  easeInOut,
  easeOut,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Development() {
  const { bgColor, textColor, primaryColor } = useGlobalContext();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.6", "end 0.4"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0, 1, 1, 0]);
  const translateY = useTransform(
    scrollYProgress,
    [0, 0.3, 0.4, 0.6, 0.7, 1],
    ["0vh", "0vh", "-10vh", "10vh", "0vh", "0vh"]
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1],
    [0.6, 1, 1, 0.6],
    { ease: [easeOut, easeInOut, easeIn] }
  );

  return (
    <motion.section
      ref={ref}
      className="w-screen h-screen flex flex-col items-center justify-center"
      style={{ opacity, scale }}
    >
      <BackGlow
        bgColor={bgColor}
        glowOpacity={0.06}
        className="flex flex-col gap-y-[3rem]"
      >
        <Experience
          primaryColor={primaryColor}
          textColor={textColor}
        />
        <Education
          primaryColor={primaryColor}
          textColor={textColor}
        />
      </BackGlow>
    </motion.section>
  );
}

function Experience({
  primaryColor,
  textColor,
}: {
  primaryColor: string;
  textColor: string;
}) {
  return (
    <div className="flex flex-col w-[var(--content-width)] items-start z-2">
      <motion.div
        className="font-bold text-[3rem] mb-[1.5rem]"
        style={{ color: textColor }}
      >
        My Experience.
      </motion.div>
      <div className="flex flex-col gap-y-[1.5rem] w-[90%]">
        <div className="flex flex-row gap-x-[1.5rem] w-full h-auto items-center">
          <motion.div
            className="relative w-[4rem] h-auto aspect-1/1 rounded-full border-2"
            style={{ borderColor: primaryColor, background: textColor }}
          >
            <Image
              src="/assets/experience/brickbot.webp"
              alt="BrickBot Logo"
              fill
              className="object-cover rounded-full"
            />
          </motion.div>
          <div className="flex flex-col w-full justify-between">
            <div
              className="text-[1.25rem] font-bold"
              style={{ color: textColor }}
            >
              Robotics Team Mentor
            </div>
            <div className="flex flex-row items-center justify-center">
              <div
                className="text-[1.125rem] mr-auto font-regular**"
                style={{ color: textColor }}
              >
                BrickBot
              </div>
              <div
                className="text-[1.125rem] ml-auto font-regular"
                style={{ color: textColor }}
              >
                Jun 2023 - Present
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className="text-[1.25rem]/[2rem] font-regular mb-[0.5rem]"
            style={{ color: textColor }}
          >
            I mentor the{" "}
            <Link
              href="https://brickbot.ro"
              target="_blank"
              style={{ color: primaryColor }}
              className="hover:saturate-0 hover:brightness-2000"
            >
              BrickBot
            </Link>{" "}
            competitive robotics team, supporting students as they explore STEM
            and discover their potential. I guide them through challenges,
            celebrate their progress, and help them build confidence,
            creativity, and teamwork.
          </div>
          <ul
            className="list-disc list-inside pl-[1.5rem]"
            style={{ "--marker-color": primaryColor } as React.CSSProperties}
          >
            <li
              className="text-[1.25rem]/[2rem] font-regular marker:text-[var(--marker-color)]"
              style={{ color: textColor }}
            >
              Strengthened leadership and mentoring skills through active team
              guidance and process coordination
            </li>
            <li
              className="text-[1.25rem]/[2rem] font-regular marker:text-[var(--marker-color)]"
              style={{ color: textColor }}
            >
              Introduced principled design practices for both hardware and
              software systems
            </li>
            <li
              className="text-[1.25rem]/[2rem] font-regular marker:text-[var(--marker-color)]"
              style={{ color: textColor }}
            >
              Created custom learning resources to onboard and support new team
              members
            </li>
            <li
              className="text-[1.25rem]/[2rem] font-regular marker:text-[var(--marker-color)]"
              style={{ color: textColor }}
            >
              Shifted team focus towards sustainability and long term progress
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function Education({
  primaryColor,
  textColor,
}: {
  primaryColor: string;
  textColor: string;
}) {
  return (
    <div className="flex flex-col w-[var(--content-width)] items-start z-2">
      <motion.div
        className="font-bold text-[3rem] mb-[1.5rem]"
        style={{ color: textColor }}
      >
        My Education.
      </motion.div>
      <div className="grid grid-cols-1 gap-y-[1.5rem] w-[90%]">
        <div className="flex flex-row gap-x-[1.5rem] w-full h-auto items-center">
          <motion.div
            className="relative w-[4rem] h-auto aspect-1/1 rounded-full border-2"
            style={{
              borderColor: primaryColor,
              background: textColor,
            }}
          >
            <Image
              src="/assets/experience/unstpb.webp"
              alt="BrickBot Logo"
              fill
              className="object-cover rounded-full"
            />
          </motion.div>
          <div className="flex flex-col w-full h-full justify-between">
            <div
              className="text-[1.25rem] font-bold"
              style={{ color: textColor }}
            >
              {"Bachelor's Degree in Computer Engineering"}
            </div>
            <div className="flex flex-row items-center justify-center w-full">
              <div
                className="text-[1.125rem] mr-auto font-regular"
                style={{ color: textColor }}
              >
                University Politehnica of Bucharest
              </div>
              <div
                className="text-[1.125rem] ml-auto font-regular"
                style={{ color: textColor }}
              >
                Oct 2023 - Jul 2027
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className="text-[1.25rem]/[2rem] font-regular mb-[0.5rem]"
            style={{ color: textColor }}
          >
            I spend my days diving into code, algorithms, and systems, figuring
            things out as I go. Each project challenges me, teaches me patience
            and sparks curiosity, slowly shaping the way I think, solve problems
            and see the world through a technical lens.
          </div>
          <ul
            className="list-disc list-inside pl-[1.5rem]"
            style={{ "--marker-color": primaryColor } as React.CSSProperties}
          >
            <li
              className="text-[1.25rem]/[2rem] font-regular marker:text-[var(--marker-color)]"
              style={{ color: textColor }}
            >
              <b>Relevant coursework:</b> Data Structures and Algorithms,
              Operating Systems, Object-Oriented Programming, Algorithm Design,
              Communication Protocols, Programming Paradigms
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
