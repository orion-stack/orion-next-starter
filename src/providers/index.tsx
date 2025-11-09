"use client";

import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "./theme-provider";

type Props = {
  children: ReactNode;
  messages: Record<string, unknown>;
  locale?: string; // Add optional locale prop
};

export const Providers = ({ children, messages, locale = "en" }: Props) => {
  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </NextIntlClientProvider>
  );
};
