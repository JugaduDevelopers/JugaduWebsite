import React from "react";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata = {
  title: {
    default: "Jugadu Developers",
    template: "%s | Jugadu Developers",
  },
  description: "",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <header className="sticky top-0 z-50 ">
          <Header />
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
