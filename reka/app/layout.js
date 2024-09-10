import localFont from "next/font/local";
import "./globals.css";


export const metadata = {
  title: "Reka online market",
  description: "Fresh food delivered to Your Doo step",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
