import Link from "next/link";
import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      {/* top footer  */}
      <div className="w-full bg-[#232C3B] h-auto py-8">
        <div className="container-2xl">
          {/* footer menus */}
          <div className="flex justify-between w-full">
            {/* Company  */}
            <div>
              <h3 className="text-sm font-bold text-white">Company</h3>
              <div className="flex flex-col gap-1 mt-2 text-sm">
                <div className="cursor-pointer text-[#c6cad2]">About us</div>
                <div className="cursor-pointer text-[#c6cad2]">How It Work</div>
                <div className="cursor-pointer text-[#c6cad2]">FAQ</div>
                <div className="cursor-pointer text-[#c6cad2]">
                  Became a Tech
                </div>
                <div className="cursor-pointer text-[#c6cad2]">Pricing</div>
                <div className="cursor-pointer text-[#c6cad2]">News Room</div>
                <div className="cursor-pointer text-[#c6cad2]">
                  Media Inquries
                </div>
              </div>
            </div>

            {/* Resources   */}
            <div>
              <h3 className="text-sm font-bold text-white">Resources</h3>
              <div className="flex flex-col gap-1 mt-2 text-sm">
                <div className="cursor-pointer text-[#c6cad2]">TV Mounting</div>
                <div className="cursor-pointer text-[#c6cad2]">
                  Garage Doors
                </div>
                <div className="cursor-pointer text-[#c6cad2]">Appliances</div>
                <div className="cursor-pointer text-[#c6cad2]">
                  Refrigerators
                </div>
                <div className="cursor-pointer text-[#c6cad2]">Dishwashers</div>
                <div className="cursor-pointer text-[#c6cad2]">
                  Ovens & Stoves
                </div>
                <div className="cursor-pointer text-[#c6cad2]">
                  Washing Machines
                </div>
                <div className="cursor-pointer text-[#c6cad2]">Dryers</div>
              </div>
            </div>

            {/* Legals  */}
            <div>
              <h3 className="text-sm font-bold text-white">Legals</h3>
              <div className="flex flex-col gap-1 mt-2 text-sm">
                <div className="cursor-pointer text-[#c6cad2]">Privacy</div>
                <div className="cursor-pointer text-[#c6cad2]">
                  General Terms
                </div>
                <div className="cursor-pointer text-[#c6cad2]">
                  Member Terms
                </div>
                <div className="cursor-pointer text-[#c6cad2]">
                  Member FAQ’s
                </div>
                <div className="cursor-pointer text-[#c6cad2]">
                  Technician Terms
                </div>
                <div className="cursor-pointer text-[#c6cad2]">Guarantee</div>
                <div className="cursor-pointer text-[#c6cad2]">
                  Don't Sell My Information
                </div>
              </div>
            </div>

            {/* Newsletter Subscribe  */}
            <div className="w-[400px]">
              <h3 className="text-sm font-bold text-white">
                Newsletter Subscribe
              </h3>
              <p className="text-[#c6cad2] text-sm mt-2">
                Curabitur porttitor nisi ac nunc ornare, in fringilla nisl
                blandit. Sed quam metus, faucibus et pulvinar ut, volutpat ut
                orci. Integer sollicitudin cursus massa, non laoreet risus
                pretium eget.
              </p>

              <div className="relative w-full mt-6">
                <input
                  type="text"
                  placeholder="Your Email..."
                  className="w-full h-[40px] rounded-md outline-none border-none px-3 text-sm pr-16"
                />
                <div className="w-[40px] h-[40px] bg-[#FF6C3A] flex justify-center items-center rounded-tr-md rounded-br-md absolute right-[0px] top-0 cursor-pointer">
                  {" "}
                  <FaEnvelope className="text-white text-[18px]" />{" "}
                </div>
              </div>
            </div>
          </div>

          {/* social icons  */}
          <div className="flex mt-4">
            <div className="flex-1 bg-[#3b5998] flex justify-center items-center py-5 cursor-pointer group overflow-hidden relative">
              <div className="absolute inset-0 bg-[#FF6C3A] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></div>
              <FaFacebookF className="text-[22px] text-white relative z-10" />
            </div>
            <div className="flex-1 bg-[#e02f2f] flex justify-center items-center py-5 cursor-pointer group overflow-hidden relative">
              <div className="absolute inset-0 bg-[#FF6C3A] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></div>
              <FaGooglePlusG className="text-[22px] text-white relative z-10" />
            </div>
            <div className="flex-1 bg-[#55acee] flex justify-center items-center py-5 cursor-pointer group overflow-hidden relative">
              <div className="absolute inset-0 bg-[#FF6C3A] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></div>
              <FaTwitter className="text-[22px] text-white relative z-10" />
            </div>
            <div className="flex-1 bg-[#007bb5] flex justify-center items-center py-5 cursor-pointer group overflow-hidden relative">
              <div className="absolute inset-0 bg-[#FF6C3A] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></div>
              <FaLinkedinIn className="text-[22px] text-white relative z-10" />
            </div>
          </div>
        </div>
      </div>

      {/* bottom footer  */}

      <div className="w-full bg-[#161D28] h-[100px]">
        <div className="h-full container-2xl">
          <div className="flex justify-between w-full h-full">
            {/* support  */}
            <div className="flex items-center h-full gap-8">
              <div className="flex items-center gap-2">
                <img src="/images/home/clock.png" alt="" />
                <span className="font-bold text-white">
                  24/7 Customer Support
                </span>
              </div>

              <div className="flex items-center gap-2">
                <img src="/images/home/send.png" alt="" />
                <span className="font-bold text-white">
                  support@nrghost.com
                </span>
              </div>

              <div className="flex items-center gap-2">
                <img src="/images/home/contact.png" alt="" />
                <span className="font-bold text-white">+48 555 8753 005</span>
              </div>
            </div>

            {/* appstore  */}
            <div className="flex items-center gap-1">
              <Link href={"/"}>
                <img src="/images/home/app-store.svg" alt="" />
              </Link>
              <Link href={"/"}>
                <img src="/images/home/goolge-play.svg" alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
