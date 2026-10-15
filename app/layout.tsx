import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Black Hole Hero Demo",
  description: "A WebGL black hole hero section integrated into a Next.js and Tailwind project.",
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
