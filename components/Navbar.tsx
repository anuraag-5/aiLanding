import { mainFont, mainFont2 } from "@/app/fonts";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="absolute top-0 z-1 w-full p-1 md:p-7 text-white bg-transparent flex justify-between items-center uppercase">
        <div className={mainFont.className + ` text-3xl ml-2 flex`} >
            <Image 
            src="/images/logo.svg"
            alt="Logo"
            width={30}
            height={30}
            className="mr-2"
            />
            Kael
        </div>
        <button className={mainFont2.className + " cursor-pointer py-2 px-3 md:px-6 bg-white text-black rounded-full text-[10px] md:text-[16px] uppercase"}>Launch with Kael ↗️</button>
    </div>
  )
}

export default Navbar