import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <>
   <div className=" h-[1132px] w-[1440px] bg-[#252B42] ">
     <Navbar />
     <Hero />

   </div>
    </>
  );
}
