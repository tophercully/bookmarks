import type { Metadata } from "next";
import localFont from "next/font/local";
import "./output.css";
import { Analytics } from "@vercel/analytics/next";

const overusedGrotesk = localFont({
  src: "./fonts/OverusedGrotesk-VF.ttf",
  variable: "--overused-grotesk",
  weight: "100 900",
});
// const zodiak = localFont({
//   src: "./fonts/Zodiak-Variable.ttf",
//   variable: "--zodiak",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Useful",
  description: "Useful tools and resources for designers and developers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${overusedGrotesk.className} flex h-fit min-h-[100svh] w-screen flex-col items-center justify-center overflow-y-auto bg-white p-4 pt-0 text-black antialiased md:p-10`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
