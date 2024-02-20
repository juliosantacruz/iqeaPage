import WhattsButton from "@/components/WhattsButton/WhattsButton";
import Header from "@/layout/Navbar/Header";
import Footer from "@/layout/Footer";
import { useMessages, NextIntlClientProvider } from "next-intl";
import "./home.scss";
import "../globals.scss";

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = useMessages();
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <WhattsButton />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
