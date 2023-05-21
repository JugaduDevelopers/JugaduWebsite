import React from "react";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata = {
  title: {
    default: "kreoDeck",
    template: "%s | kreoDeck",
  },
  description: "",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="../../static/k.ico"/>
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
