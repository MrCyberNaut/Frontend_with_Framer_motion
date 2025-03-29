import logo from "@/assets/logosaas.png";
import Image from "next/image";
import SocialLinkedIn from "@/assets/social-linkedin.svg";
import SocialX from "@/assets/social-x.svg";
import SocialPin from "@/assets/social-pin.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialYoutube from "@/assets/social-youtube.svg";

export const Footer = () => {
  return (
    <footer className="bg-black py-10 text-[#BCBCBC] text-sm text-center">
      <div className="container">
        <div className="inline-flex relative before:content-['']  before:w-full before:top-2 0 before:blur  before:bottom-0 before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute before:">
          <Image src={logo} alt="logo" height={40} className="relative " />
        </div>
        <nav className="flex flex-col md:flex-row md:justify-center  gap-6 mt-6">
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Customers</a>
          <a href="#">Pricing</a>
          <a href="#">Help</a>
          <a href="#">Careers</a>
        </nav>
        <div className="flex justify-center gap-6 mt-6">
          <SocialLinkedIn />
          <SocialX />
          <SocialPin />
          <SocialInsta />
          <SocialYoutube />
        </div>
        <p className="mt-6">&copy; 2024 Arnav Sawant. All rights reserved</p>
      </div>
    </footer>
  );
};
