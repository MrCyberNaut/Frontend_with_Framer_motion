import ArrowRight from "@/assets/arrow-right.svg";
import starImage from "@/assets/star.png";
import springImage from "@/assets/spring.png";
import Image from "next/image";
export const CallToAction = () => {
  return (
    <section className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 text-white overflow-x-clipped">
      <div className="container">
        <div className="section-heading relative">
          <h2 className="section-title">Sign Up for Free today</h2>
          <p className="section-description mt-5">
            Celebrate the joy of accomplishment with an app deesigned to track
            your progress and motivate your efforts.
          </p>
          <Image
            src={starImage}
            alt="starImage"
            width={360}
            className=" abosolute -left-[350px] -top-[137px]"
          />
          <Image
            src="SpringImage"
            width={360}
            className="abolsute -right-[331px]"
          />
        </div>
        <div className="flex justify-center gap-2 mt-10">
          <button className="btn btn-primary">Get for free</button>
          <button className="btn btn-text gap-1">
            <span>Learn more</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
