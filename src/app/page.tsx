import React  from "react";
import Image from "next/image";
import { MacbookScroll } from "./components/ui/macbook-scroll";
import { TextRevealCard } from "./components/ui/text-reveal-card";
import { MenuItem } from "./components/ui/navbar-menu";
import { GlobeDemo } from "./components/Globe/page";
import  GoogleGeminiEffectDemo  from "../app/components/Google/page";
import { TracingBeamDemo } from "./components/Tracing/page";
import  ThreeDCardDemo  from "../app/components/DCard/page";


export default function Home() {
  

  return (
    <>
      {/* Uncomment the MacbookScroll component if needed */}
      {/* <MacbookScroll /> */}
      
    

      <TextRevealCard 
        text={"Hey I'M Harsh Full Stack Developer"} 
        revealText={"Hey I'M Harsh Full Stack Developer"}
      />
      <GlobeDemo/>
      <ThreeDCardDemo/>
      <GoogleGeminiEffectDemo/>
    </>
  );
}
