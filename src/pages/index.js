import localFont from "next/font/local";
import Image from "next/image";
import { IoHomeOutline } from "react-icons/io5";
import { TbDeviceMobileStar } from "react-icons/tb";
import { IoRocketOutline } from "react-icons/io5";
import { MdHealthAndSafety } from "react-icons/md";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export default function Home() {
  return (
    <>
      <div className="">
        {/* hero section  */}
        <div className="mt-2">
          <div className="relative h-[280px] sm:h-[400px] lg:h-[650px] bg-cover md:bg-bottom bg-custom-image flex items-center md:items-start">
            <div className="py-[70px] mx-auto max-w-container xl:max-w-container-xl 2xl:max-w-container-2xl flex flex-col items-start gap-5 ">
              <h1 className="text-[22px] md:text-[34px] lg:text-[48px] font-bold text-[#fff]">
                <span className="block">Your go-to expert for all your</span>
                <span> home care needs</span>
              </h1>
              <button className="border-none outline-none bg-[#ff6c3a] text-white px-5 py-2 rounded-md text-sm md:text-xl">
                Book A Service
              </button>
            </div>
          </div>
        </div>

        {/* <div className="w-full my-4 bg-[#F5F5F5] h-[350px] py-4 lg:py-0 lg:h-[100px]">
          <div className="flex flex-col items-center justify-between h-full gap-4 mx-auto my-2 lg:flex-row max-w-container xl:max-w-container-xl 2xl:max-w-container-2xl">
            <img src="/images/brands/wall.svg" alt="" />
            <img src="/images/brands/cnbc.svg" alt="" />
            <img src="/images/brands/tc.svg" alt="" />
            <img src="/images/brands/fortune.svg" alt="" />
            <img src="/images/brands/times.svg" alt="" />
            <img src="/images/brands/venture.svg" alt="" />
          </div>
        </div> */}

        <div className="mx-auto mt-8 max-w-container xl:max-w-container-xl 2xl:max-w-container-2xl">
          <div className="flex flex-col w-full gap-6 md:flex-row md:gap-2 md:justify-between">
            <div className="flex items-center gap-4 p-3 rounded-md shadow-md md:w-[250px]">
              <IoHomeOutline className="text-[36px] md:text-[45px] text-[#ff6c3a]" />
              <span className="text-sm  text-[#7D91A5]">
                Trusted by 2M+ <br /> Households
              </span>
            </div>
            <div className="flex items-center gap-4 p-3 rounded-md shadow-md md:w-[250px]">
              <TbDeviceMobileStar className="text-[36px] md:text-[45px] text-[#ff6c3a]" />
              <span className="text-sm  text-[#7D91A5]">
                5 Star Technician <br /> Rating
              </span>
            </div>
            <div className="flex items-center gap-4 p-3 rounded-md shadow-md md:w-[250px]">
              <IoRocketOutline className="text-[36px] md:text-[45px] text-[#ff6c3a]" />
              <span className="text-sm  text-[#7D91A5]">
                Background <br /> Checked Technicians
              </span>
            </div>
            <div className="flex items-center gap-4 p-3 rounded-md shadow-md md:w-[250px]">
              <MdHealthAndSafety className="text-[36px] md:text-[45px] text-[#ff6c3a]" />
              <span className="text-sm  text-[#7D91A5]">
                90 Day Service <br /> Guaranteed
              </span>
            </div>
          </div>
        </div>

        {/* <div>
          gdhfjb Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          sapiente illo placeat ipsam et delectus, sit repellat laboriosam
          molestias? Possimus adipisci magni quis facere perferendis!
          Perferendis, enim. Sit, ipsum vero?
        </div> */}

        <div className="w-full h-[80px]"></div>
      </div>
    </>
  );
}
