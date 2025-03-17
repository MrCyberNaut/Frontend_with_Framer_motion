import productImage from "@/assets/product-image.png";
import Image from "next/image";
import pyramindImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";
export const ProductShowcase = () => {
  return (
    <section className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="max-w-[540px] mx-auto">
          <div className="flex justify-center">
            <div className="tag">Boost your prodcutivity</div>
          </div>
          <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-5">
            A more effective way to track your progress{" "}
          </h2>
          <p className="text-center text-[22px] leading-[30px] tracking-tight text-[@010D3E] mt-5">
            {/* leading if the line height that we want  */}
            Effortlessly turn your ideas into a fully funcitonal, responsive,
            SaaS website in just minutes with this template
          </p>
        </div>
        <div className="relative">
          <Image src={productImage} alt="Product Image" className="mt-10" />
          <Image
            src={pyramindImage}
            alt="Pyramid Image"
            width={262}
            height={262}
            className="hidden md:block absolute -right-36 -top-32"
          />
          <Image
            src={tubeImage}
            alt="Tube Image"
            width={248}
            height={248}
            className="hidden md:block absolute bottom-24 -left-36"
          />
        </div>
      </div>
    </section>
  );
};
