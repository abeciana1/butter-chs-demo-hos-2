import { Roboto } from "next/font/google";
import "./globals.css";
import NavBar from '@/components/_navigation/NavBar'
import Footer from '@/components/_navigation/Footer'
import AnnouncementDataFetch from '@/components/_header/AnnouncementBar'

const roboto = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: 'swap'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} antialiased max-w-[1500px] relative mx-auto`}
      >
        <AnnouncementDataFetch />
        <NavBar />
          {children}
        <Footer/>
      </body>
    </html>
  );
}
