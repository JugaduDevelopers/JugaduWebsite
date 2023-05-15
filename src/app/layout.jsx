import React from "react";
import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Jugadu Developers",
  description: "",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <title>Jugadu Developers</title>
      </head>
      <body>
        <header className="sticky top-0 mb-10 z-50">
          <Header />
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
