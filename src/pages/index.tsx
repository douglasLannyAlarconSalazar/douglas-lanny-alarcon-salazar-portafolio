import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import LeftMenu from "@/components/organisms/LeftMenu";
import MainContent from "@/components/organisms/MainContent";
import RightMenu from "@/components/organisms/RightMenu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="w-full flex flex-col justify-center sm:flex-row">

      <LeftMenu />
   

      <MainContent />


      <RightMenu /> 

    </div>
  );
}

