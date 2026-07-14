import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "JCICREED Delivery Services",
  description:
    "Premiere service-oriented transport company with a fleet of 30+ trucks. Fast, efficient, and hassle-free delivery since 2018.",
  openGraph: {
    title: "JCICREED Delivery Services",
    description:
      "Premiere service-oriented transport company with a fleet of 30+ trucks. Fast, efficient, and hassle-free delivery since 2018.",
    images: [{ url: "/images/fleet-trucks.png" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
