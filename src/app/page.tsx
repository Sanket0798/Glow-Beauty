"use client";

import React from "react";
import Image from "next/image";
import Hero from "@/components/Hero";
import Feature from "@/components/Feature";
import NewArrival from "@/components/NewArrival";
import Category from "@/components/Category";
import BlogSection from "@/components/BlogSection";
import { NextUIProvider } from "@nextui-org/react";

import NavBar from "@/components/NavBar";

const page = () => {
  return (
    <main>
      <NextUIProvider>
        {/* <NavBar /> */}
        <Hero />
        <Feature />
        <NewArrival />
        <Category />
        <BlogSection />
      </NextUIProvider>
    </main>
  );
};

export default page;
