import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Navbar from "../components/Navbar"; // Corrected import path

export const metadata = {
  title: "Our Team - Company Name",
  description: "Meet the talented team behind our company.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
