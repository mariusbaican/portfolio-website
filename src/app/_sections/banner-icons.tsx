"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMiniDocumentText } from "react-icons/hi2";
import { MdEmail } from "react-icons/md";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function BannerIcons() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="absolute bottom-0 left-auto right-auto flex flex-row space-x-[2.25rem] mb-[1rem]"
    >
      <motion.div
        initial={{ opacity: 0, translateY: 40 }}
        animate={
          isInView
            ? { opacity: 1, translateY: 0 }
            : { opacity: 0, translateY: 40 }
        }
        transition={{
          type: "spring",
          visualDuration: 0.3,
          bounce: 0.3,
          delay: 0.3,
        }}
      >
        <Link
          href="https://www.linkedin.com/in/marius-baican/"
          aria-label="My LinkedIn Profile"
          target="_blank"
        >
          <FaLinkedin className="h-[var(--icon-size)] w-auto aspect-square fill-[var(--primary)] hover:fill-[var(--primary-accents)] hover:translate-y-[-0.5rem] duration-300 transition-transform" />
        </Link>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, translateY: 40 }}
        animate={
          isInView
            ? { opacity: 1, translateY: 0 }
            : { opacity: 0, translateY: 40 }
        }
        transition={{
          type: "spring",
          visualDuration: 0.3,
          bounce: 0.3,
          delay: 0.4,
        }}
      >
        <Link
          href="mailto:marius.baican18@gmail.com"
          aria-label="My Email Address"
          target="_blank"
        >
          <MdEmail className="h-[var(--icon-size)] w-auto aspect-square fill-[var(--primary)] hover:fill-[var(--primary-accents)] hover:translate-y-[-0.5rem] duration-300 transition-transform" />
        </Link>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, translateY: 40 }}
        animate={
          isInView
            ? { opacity: 1, translateY: 0 }
            : { opacity: 0, translateY: 40 }
        }
        transition={{
          type: "spring",
          visualDuration: 0.3,
          bounce: 0.3,
          delay: 0.5,
        }}
      >
        <Link
          href="https://github.com/mariusbaican"
          aria-label="My GitHub Profile"
          target="_blank"
        >
          <FaGithub className="h-[var(--icon-size)] w-auto aspect-square fill-[var(--primary)] hover:fill-[var(--primary-accents)] hover:translate-y-[-0.5rem] duration-300 transition-transform" />
        </Link>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, translateY: 40 }}
        animate={
          isInView
            ? { opacity: 1, translateY: 0 }
            : { opacity: 0, translateY: 40 }
        }
        transition={{
          type: "spring",
          visualDuration: 0.3,
          bounce: 0.3,
          delay: 0.6,
        }}
      >
        <Link
          href="https://mariusbaican.com/assets/resume.pdf"
          aria-label="My Resume"
          target="_blank"
        >
          <HiMiniDocumentText className="h-[var(--icon-size)] w-auto aspect-square fill-[var(--primary)] hover:fill-[var(--primary-accents)] hover:translate-y-[-0.5rem] duration-300 transition-transform" />
        </Link>
      </motion.div>
    </section>
  );
}
