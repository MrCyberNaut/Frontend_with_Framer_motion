"use client";
import productImage from "@/assets/product-image.png";
import Image from "next/image";
import pyramindImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { use, useRef } from "react";
export const ProductShowcase = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  // when the scroll progress is 0, the translateY is 0% and when the scroll progress is 1, the translateY is 100%
  return (
    <section className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Boost your prodcutivity</div>
          </div>
          <h2 className="section-title mt-5">
            A more effective way to track your progress{" "}
          </h2>
          <p className="section-description mt-5">
            {/* leading if the line height that we want  */}
            Effortlessly turn your ideas into a fully funcitonal, responsive,
            SaaS website in just minutes with this template
          </p>
        </div>
        <div className="relative">
          <Image src={productImage} alt="Product Image" className="mt-10" />
          <motion.img
            src={pyramindImage.src}
            alt="Pyramid Image"
            width={262}
            height={262}
            className="hidden md:block absolute -right-36 -top-32"
            style={{ translateY }}
            // cuz translateY = transalteY so in JS we can skip writing the
            // translateY: translateY
          />
          <motion.img
            src={tubeImage.src}
            alt="Tube Image"
            width={248}
            height={248}
            className="hidden md:block absolute bottom-24 -left-36"
            style={{ translateY }}
            // cuz translateY = transalteY so in JS we can skip writing the
            // translateY: translateY
          />
        </div>
      </div>
    </section>
  );
};
