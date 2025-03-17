import Logo from "@/assets/logosaas.png";
import MenuIcon from "@/assets/menu.svg";
import Image from "next/image";
import ArrowRight from "@/assets/arrow-right.svg";
export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-2">
        <p className="text-white/60 hidden md:block">
          Steamline your workflow and boost your productivity
        </p>
        <div className="inline-flex items-center gap-1">
          <p>Get Started for FREE</p>
          <ArrowRight className="w-4 h-4 inline-flex justify-center items-center " />
        </div>
      </div>
      <div className=" py-5 ">
        <div className="container  ">
          <div className="flex items-center justify-between">
            <Image src={Logo} alt="Saas Logo" height={40} width={40} />
            <MenuIcon className=" h-5 w-5 md:hidden" />
            <nav className="hidden md:flex gap-6 text-black/60 items-center ">
              <a href="#">About</a>
              <a href="#">Features</a>
              <a href="#">Customers</a>
              <a href="#">Updates</a>
              <a href="#">Features</a>
              <button className="bg-black text-white px-4 py-4 rounded-lg font-medium inline-flex items-center justify-center tracking-tight ">
                Get for Free
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
