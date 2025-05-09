// External Imports
import { Source_Code_Pro } from "next/font/google";

// Internal Imports
import "./globals.css";
import Marquee from "./components/topScroller";
import Bottom from "./components/bottom";

const sourceCode = Source_Code_Pro({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "William Etheridge",
  description: "Developer / Designer / Marketer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${sourceCode.className} max-w-screen bg-cBg flex flex-col items-center`}
      >
        <Marquee />
        {children}
        <Bottom />
      </body>
    </html>
  );
}
