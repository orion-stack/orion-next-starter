"use client";
import Image from "next/image";
import { Button, ThemeToggle, LanguageSwitcher } from "@/components/custom"; // Removed Rotate import
import { motion } from "motion/react"; // Import motion from the new library
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <div className="flex min-h-screen items-center justify-center bg-white font-sans dark:bg-black">
      {/* 
        Adjust min-h-screen on main to account for the removed element, 
        giving a bit more space for the content above the buttons,
        but keeping the original 'justify-between' structure 
        will still distribute content across the height.
      */}
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 sm:items-start">
        {/* IMPROVED TOP BAR: Logo on the left, LanguageSwitcher and ThemeToggle on the right. Logo size updated. */}
        <div className="flex w-full justify-between items-center">
          <Image
            className="dark:invert"
            src="/assets/images/logo.svg"
            alt="Orion Starter Logo"
            width={35}
            height={35}
            priority
          />
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </div>

        {/* ROCKET IMAGE: Centered with Floating Animation */}
        <div className="flex w-full justify-center">
          <motion.div
            animate={{ y: [0, -15, 0] }} // Animate the y-axis to create a float effect
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "reverse", // Smoothly reverse the animation
            }}
          >
            <Image
              src="/assets/images/rocket.png"
              alt="Rocket"
              width={200}
              height={200}
              priority
            />
          </motion.div>
        </div>

        {/* TEXT CONTENT (Original structure maintained) */}
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            {t("title")}
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            {t("description")}
          </p>
        </div>

        {/* BUTTONS (Original structure maintained) */}
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <Button asChild>
            <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="dark:invert"
                src="/vercel.svg"
                alt="Vercel logomark"
                width={16}
                height={16}
              />
              Deploy Now
            </a>
          </Button>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("documentationButton")}
          </a>
        </div>

        {/* ROTATE component removed */}
      </main>
    </div>
  );
}
