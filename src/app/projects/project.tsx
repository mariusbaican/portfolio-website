import { Squircle } from "@squircle-js/react";
import Image from "next/image";
import PrimaryButton from "../_components/primary-button";
import Link from "next/link";
import { cloneElement, isValidElement } from "react";
import SecondaryButton from "../_components/secondary-button";

export type ProjectProps = {
  title: string;
  description: string;
  imagePath: string;
  checkItOutButton?: string;
  sourceCodeButton?: string;
  techStack?: React.ReactNode[];
};

export default function Project({
  title,
  description,
  imagePath,
  checkItOutButton,
  sourceCodeButton,
  techStack,
}: ProjectProps) {
  return (
    <div className="w-full h-full">
      <DesktopProject
        title={title}
        description={description}
        imagePath={imagePath}
        checkItOutButton={checkItOutButton}
        sourceCodeButton={sourceCodeButton}
        techStack={techStack}
      />
      <MobileProject
        title={title}
        description={description}
        imagePath={imagePath}
        checkItOutButton={checkItOutButton}
        sourceCodeButton={sourceCodeButton}
        techStack={techStack}
      />
    </div>
  );
}

export function MobileProject({
  title,
  description,
  imagePath,
  checkItOutButton,
  sourceCodeButton,
  techStack,
}: ProjectProps) {
  return (
    <section className="flex lg:hidden flex-col items-start justify-start h-full w-full">
      <div className="w-full h-[16rem] ml-auto mr-auto">
        <Squircle
          cornerRadius={32}
          cornerSmoothing={0.6}
          className="relative bg-[var(--bg-accents)] overflow-hidden w-full h-full"
        >
          <Image
            src={imagePath}
            alt={title}
            fill
            className="object-cover object-top w-full h-full"
          />
        </Squircle>
      </div>
      <div className="mt-[1.5rem] mb-[1.25rem] text-[1.5rem]/[1.75rem] font-semibold text-[var(--text)]">
        {title}
      </div>
      <p className="text-[1rem]/[1.5rem] font-normal w-full mt-auto mb-auto">
        {description}
      </p>
      <div className="flex flex-row gap-x-[1rem] my-[1.5rem]">
        {techStack!.map((tech) => {
          const renderTech = isValidElement(tech)
            ? cloneElement(tech as React.ReactElement<{ className?: string }>, {
                className: [
                  (tech as React.ReactElement<{ className?: string }>).props
                    .className,
                  "w-[var(--icon-size)] h-[var(--icon-size)] fill-[var(--primary)]",
                ]
                  .filter(Boolean)
                  .join(" "),
              })
            : tech;

          return renderTech;
        })}
      </div>
      <div className="flex flex-row w-full justify-between items-center mt-auto">
        {checkItOutButton && (
          <Link
            href={checkItOutButton!}
            target="_blank"
          >
            <PrimaryButton text="Check it out" />
          </Link>
        )}
        {sourceCodeButton && (
          <Link
            href={sourceCodeButton!}
            target="_blank"
          >
            <SecondaryButton text="Source code" />
          </Link>
        )}
      </div>
    </section>
  );
}

export function DesktopProject({
  title,
  description,
  imagePath,
  checkItOutButton,
  sourceCodeButton,
  techStack,
}: ProjectProps) {
  return (
    <section className="hidden lg:flex flex-row gap-x-[2.25rem] items-center h-[16rem] w-full">
      <div className="w-[16rem] h-[16rem]">
        <Squircle
          cornerRadius={32}
          cornerSmoothing={0.6}
          className="relative bg-[var(--bg-accents)] overflow-hidden w-[16rem] h-[16rem]"
        >
          <Image
            src={imagePath}
            alt={title}
            fill
            className="object-cover object-top w-full h-full"
          />
        </Squircle>
      </div>
      <div className="flex flex-col h-full w-full items-start justify-start">
        <div className="mt-[1rem] text-[2rem]/[2rem] font-semibold text-[var(--text)]">
          {title}
        </div>
        <p className="text-[1.25rem]/[1.8rem] font-normal w-[80%] mt-auto mb-auto">
          {description}
        </p>
        <div className="flex flex-row items-center justify-start gap-x-[2.25rem]">
          {checkItOutButton && (
            <Link
              href={checkItOutButton!}
              target="_blank"
            >
              <PrimaryButton text="Check it out" />
            </Link>
          )}
          {sourceCodeButton && (
            <Link
              href={sourceCodeButton!}
              target="_blank"
            >
              <SecondaryButton text="Source code" />
            </Link>
          )}
          <div className="flex flex-row gap-x-[1rem]">
            {techStack!.map((tech) => {
              const renderTech = isValidElement(tech)
                ? cloneElement(
                    tech as React.ReactElement<{ className?: string }>,
                    {
                      className: [
                        (tech as React.ReactElement<{ className?: string }>)
                          .props.className,
                        "w-[var(--icon-size)] h-[var(--icon-size)] fill-[var(--primary)]",
                      ]
                        .filter(Boolean)
                        .join(" "),
                    }
                  )
                : tech;

              return renderTech;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
