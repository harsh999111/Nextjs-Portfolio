"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";

export function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var pt-10 text-center">
      <CardBody className="bg-gray-50 h-full w-full relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black border-black/[0.1]   rounded-xl p-8 border  lg:p-24 ">
        <div className="sm:grid sm:grid-cols-2 sm:gap-6">

        <CardItem className="flex flex-col space-y-3">
          <h1 className="text-start text-3xl lg:text-5xl">So Who I'm</h1>
          <h2 className="text-justify lg:text-2xl">
          Hi there! I'm Harsh  a frontend developer with a passion for crafting visually appealing and highly functional web interfaces. My journey into web development began out of a fascination with the digital world and a desire to create impactful online experiences. Over the years, I've mastered HTML, CSS, and JavaScript, along with modern frameworks like React and Vue, allowing me to build responsive and dynamic websites that meet the needs of users and businesses alike.
          </h2>
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            height="1000"
            width="1000"
            className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        </div>


      
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            <Link href="/contact">

            Contact Me →
            </Link>
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
        Github
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
