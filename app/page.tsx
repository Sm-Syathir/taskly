"use client"
import Image from "next/image";
import Navbar from "@/components/layout/Navbar"
import { Hero } from "@/components/layout/Hero"
import { Background } from "@/components/layout/Background"




export default function Home() {
  return (
   <>
   <Navbar />
   <Hero />
  <Background />


 

   </>
  );
}