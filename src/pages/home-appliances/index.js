import React from "react";
import Image from "next/image";
import { BsTelephoneFill } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { AiFillStar } from "react-icons/ai";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";
const index = () => {
  const reviews = [
    {
      id: 1,
      name: "John Doe",
      designation: "Senior Technician",
      logo: "/images/logo1.png", // Replace with your image path
      content:
        "John was fantastic! He completed the installation quickly and professionally.",
      reviewer: "Jane Smith",
    },
    {
      id: 2,
      name: "Emily Brown",
      designation: "Field Expert",
      logo: "/images/logo2.png", // Replace with your image path
      content:
        "Emily provided excellent service and ensured everything was set up perfectly.",
      reviewer: "Michael Johnson",
    },
    {
      id: 3,
      name: "Robert White",
      designation: "Certified Installer",
      logo: "/images/logo1.png", // Replace with your image path
      content: "Great experience! Robert was on time and very knowledgeable.",
      reviewer: "Sarah Williams",
    },

    {
      id: 3,
      name: "Mini Loona",
      designation: "Influencer",
      logo: "/images/logo1.png", // Replace with your image path
      content: "Great experience! Robert was on time and very knowledgeable.",
      reviewer: "Sarah Williams",
    },
  ];

  const blogs = [
    {
      id: 1,
      image: "/images/blogs/blog1.jpg", // Replace with your blog image path
      title: "Exploring the Future of Technology in 2024",
      content:
        "Technology is advancing faster than ever before. In this post, we take a look at some of the key trends that will shape the future of technology in 2024 and beyond...",
      date: "February 2023",
    },
    {
      id: 2,
      image: "/images/blogs/blog2.jpg", // Replace with your blog image path
      title: "How Artificial Intelligence is Changing Our Lives",
      content:
        "Artificial Intelligence (AI) is no longer a futuristic concept; it’s here, and it’s transforming industries across the globe. From healthcare to,  we work and live...",
      date: "January 2023",
    },
    {
      id: 3,
      image: "/images/blogs/blog3.jpg", // Replace with your blog image path
      title: "The Rise of Remote Work: A New Era",
      content:
        "The pandemic forced many businesses to adopt remote work, and now it’s become the new normal. In this article, we explore the advantages  of and employers...",
      date: "December 2022",
    },
    {
      id: 4,
      image: "/images/blogs/blog2.jpg", // Replace with your blog image path
      title: "The Rise of Remote Work: A New Era",
      content:
        "The pandemic forced many businesses to adopt remote work, and now it’s become the new normal. In this article, we explore the advantages and challenges of remote work for both employees and employers...",
      date: "December 2022",
    },
  ];

  return (
    <>
      <div className="relative bg-home-appliances-bg bg-cover bg-center h-[635px]">
        <div className="flex flex-col items-start justify-center h-full px-4 mx-auto text-center text-white max-w-container xl:max-w-container-xl 2xl:max-w-container-2xl">
          {/* Main Heading */}
          <h1 className="mb-4 text-4xl font-bold text-[#52575a]">
            Appliance repair made easy
          </h1>
          {/* Subcontent */}
          <p className="mb-6 text-lg text-[#52575a]">
            The best technicians in your neighborhood. Guaranteed.
          </p>
          {/* Schedule Now Button */}
          <button className="px-6 py-3 font-semibold bg-primary-color">
            Schedule Now
          </button>
        </div>

        {/* Brand Images and Call Center */}
        <div className="absolute bottom-0 left-0 w-full py-4 bg-black bg-opacity-50">
          <div className="container flex flex-wrap items-center justify-between px-4 mx-auto">
            {/* Brand Logos */}
            <div className="flex space-x-4">
              <Image
                src="/images/services/bbb-small.png"
                alt="Brand 1"
                width={80}
                height={40}
                className="object-contain"
              />
              <Image
                src="/images/services/facebook-rating-blue.svg"
                alt="Brand 2"
                width={80}
                height={40}
                className="object-contain"
              />
            </div>
            {/* Call Center */}
            <div className="flex items-center text-white">
              <BsTelephoneFill className="mr-2 text-2xl" />
              <span className="text-lg font-medium">
                Call Us: (123) 456-7890
              </span>
            </div>
          </div>
        </div>
      </div>

      <section className="my-4">
        <div className="mx-auto max-w-container xl:max-w-container-xl 2xl:max-w-container-2xl">
          <div className="flex flex-col justify-between w-full gap-4 py-8 lg:flex-row">
            {/* content  */}
            <div className="flex flex-col gap-1">
              <h2 className="text-2xl font-bold tracking-wide">
                What needs to be repaired?
              </h2>
              {/* <p className="text-sm">
                We can mount your TV, conceal wires, and more!
              </p> */}
            </div>

            {/* inchees  */}
            <div className="flex flex-wrap justify-center gap-3 md:justify-between">
              <div className="w-[124px] h-[124px] border rounded-md flex flex-col gap-5 justify-center items-center">
                <img src="/images/services/dishwaher_icon_hover.svg" alt="" />
                <span className="text-sm">Dishwasher</span>
              </div>
              <div className="w-[124px] h-[124px] border rounded-md flex flex-col gap-5 justify-center items-center">
                <img src="/images/services/washer_icon_hover.svg" alt="" />
                <span className="text-sm">Washer</span>
              </div>
              <div className="w-[124px] h-[124px] border rounded-md flex flex-col gap-5 justify-center items-center">
                <img src="/images/services/dryer_icon_hover.svg" alt="" />
                <span className="text-sm">Dryer</span>
              </div>
              <div className="w-[124px] h-[124px] border rounded-md flex flex-col gap-5 justify-center items-center">
                <img
                  src="/images/services/refrigerator_icon_hover.svg"
                  alt=""
                />
                <span className="text-sm">Refrigerator</span>
              </div>
              <div className="w-[124px] h-[124px] border rounded-md flex flex-col gap-5 justify-center items-center">
                <img src="/images/services/oven_icon_hover.svg" alt="" />
                <span className="text-sm">Oven</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto mt-20 max-w-container xl:max-w-container-xl 2xl:max-w-container-2xl">
        <div className="flex flex-col items-center justify-between w-full gap-4 md:flex-row md:gap-1">
          <div className="">
            <img src="/images/services/appliances-info.jpg" alt="" />
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-2">
              <div className="w-[25px] h-[25px] mt-2 rounded-full bg-primary-color flex justify-center items-center">
                <FaCheck className="text-white text-[18px]" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold">Easy booking</h3>
                <span className="text-sm">
                  We're only a few clicks or a phone call away.
                </span>
              </div>
            </div>

            <div className="flex gap-2">
              <div className="w-[25px] h-[25px] mt-2 rounded-full bg-primary-color flex justify-center items-center">
                <FaCheck className="text-white text-[18px]" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold">In-home estimate</h3>
                <span className="text-sm">No risk. No pressure.</span>
              </div>
            </div>

            <div className="flex gap-2">
              <div className="w-[25px] h-[25px] mt-2 rounded-full bg-primary-color flex justify-center items-center">
                <FaCheck className="text-white text-[18px]" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold">Quality results</h3>
                <span className="text-sm">
                  Expert technicians. Guaranteed parts and service.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto my-20 max-w-container xl:max-w-container-xl 2xl:max-w-container-2xl">
        <div className="flex flex-col items-center w-full gap-4 lg:justify-between lg:flex-row">
          <div className="flex flex-col border shadow-md lg:shadow-none lg:border-none rounded-md items-center gap-3 w-[255px] h-[255px] justify-center">
            <img
              src="/images/services/booking.svg"
              alt=""
              className="h-[84px]"
            />
            <h3 className="text-lg font-bold">Simple booking</h3>
            <span className="text-sm">Request an appointment in minutes</span>
          </div>

          <div className="flex flex-col border shadow-md lg:shadow-none lg:border-none rounded-md items-center gap-3 w-[255px] h-[255px] justify-center">
            <img
              src="/images/services/time_new.svg"
              alt=""
              className="h-[84px]"
            />
            <h3 className="text-lg font-bold">Easy scheduling</h3>
            <span className="text-sm">One-hour arrival windows</span>
          </div>

          <div className="flex flex-col border shadow-md lg:shadow-none lg:border-none rounded-md items-center gap-3 w-[255px] h-[255px] justify-center">
            <img
              src="/images/services/risk-free.svg"
              alt=""
              className="h-[84px]"
            />
            <h3 className="text-lg font-bold">Reliable & vetted</h3>
            <span className="text-sm">Background checked technicians</span>
          </div>

          <div className="flex flex-col border shadow-md lg:shadow-none lg:border-none rounded-md items-center gap-3 w-[255px] h-[255px] justify-center">
            <img
              src="/images/services/25-points.svg"
              alt=""
              className="h-[84px]"
            />
            <h3 className="text-lg font-bold">Experienced</h3>
            <span className="text-sm">50,000+ installations and counting</span>
          </div>
        </div>
      </div>

      <section className="py-10 bg-gray-50">
        <div className="px-4 mx-auto text-center max-w-container">
          <h2 className="mb-8 text-3xl font-bold text-gray-800">
            Our top technicians are in your neighborhood and beyond
          </h2>

          {/* Swiper Slider */}
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-8"
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id}>
                <div className="p-6 bg-white border shadow-md md:rounded-lg">
                  {/* Top Section */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-lg font-bold text-gray-800">
                        {review.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {review.designation}
                      </p>
                    </div>
                    <img
                      src={review.logo}
                      alt="Logo"
                      className="object-contain w-12 h-12 rounded-full"
                    />
                  </div>

                  {/* Content */}
                  <p className="mb-4 text-sm text-gray-600">{review.content}</p>

                  {/* Bottom Section */}
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-gray-800">
                      {review.reviewer}
                    </p>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, index) => (
                        <AiFillStar key={index} className="text-yellow-500" />
                      ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section className="py-10 bg-gray-100">
        <div className="px-4 mx-auto text-center max-w-container xl:max-w-container-xl 2xl:max-w-container-2xl">
          <h2 className="mb-8 text-3xl font-bold text-gray-800">
            The Beat - The Puls Blog
          </h2>

          {/* Blog Swiper Slider */}
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-8"
          >
            {blogs.map((blog) => (
              <SwiperSlide key={blog.id}>
                <div className="overflow-hidden bg-white border shadow-md md:rounded-lg">
                  <img
                    src={blog.image}
                    alt="Blog Image"
                    className="object-cover w-full h-56"
                  />
                  <div className="p-6">
                    {/* Blog Title */}
                    <h3 className="mb-2 text-xl font-semibold text-gray-800">
                      {blog.title}
                    </h3>

                    {/* Blog Content */}
                    <p className="mb-4 text-sm text-gray-600">
                      {blog.content}
                      <span className="text-gray-500">...</span>
                    </p>

                    {/* Date */}
                    <p className="text-sm text-gray-400">{blog.date}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <div className="mx-auto my-3 max-w-container xl:max-w-container-xl 2xl:max-w-container-2xl">
        <div className="flex w-full h-[398px]">
          <div className="w-[385px] px-12 h-full flex justify-center items-start flex-col border rounded-md gap-4">
            <h2 className="text-2xl font-bold">
              Ready to get <br />
              started?
            </h2>
            <span className="text-sm">
              We're only a few clicks or a phone call away.
            </span>
            <button className="px-6 py-3 text-sm font-semibold text-white bg-primary-color">
              Fix my Application
            </button>
          </div>
          <div>
            <img
              src="/images/services/appliances.jpg"
              className="object-cover w-full h-full"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="w-full h-[100px]"></div>
    </>
  );
};

export default index;
