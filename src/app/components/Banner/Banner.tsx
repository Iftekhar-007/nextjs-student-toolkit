"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="pt-20 bg-[url('https://htmldemo.net/kidschool/kidschool/images/slider/1.jpg')] bg-cover bg-center bg-no-repeat w-full ">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto">
        <div>
          <h2 className="text-4xl font-bold text-white">KIDSSCHOOL</h2>
          <p className="text-5xl font-bold text-white">
            <span className="text-6xl">PERFECT START</span> <br /> FOR YOUR
            CHILD
          </p>
        </div>
        <div>
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: [-20, 0, -20, 0], opacity: 1 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          >
            <img
              className="w-[400px] h-auto"
              src="https://htmldemo.net/kidschool/kidschool/images/slider/1.png"
              alt="coming soon"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
