import localFont from "next/font/local";
import Image from "next/image";
import { IoHomeOutline } from "react-icons/io5";
import { TbDeviceMobileStar } from "react-icons/tb";
import { IoRocketOutline } from "react-icons/io5";
import { MdHealthAndSafety } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { BsArrowReturnRight } from "react-icons/bs";
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
  const services = [
    {
      id: 1,
      image: "/images/home/service/tool-box-big.png",
      name: "Handyman",
      tags: [
        "Drywall repair",
        "Interior painting",
        "Furniture assembly",
        "General handyman services",
      ],
    },
    {
      id: 2,
      image: "/images/home/service/washer-big.png",
      name: "Home Appliances",
      tags: [
        "Refrigerator",
        "Dryer",
        "Oven",
        "Washer",
        "Dishwasher",
        "Cooktop",
        "Freezer",
      ],
    },
    {
      id: 3,
      image: "/images/home/service/tv-big.png",
      name: "TV Mounting",
      tags: ['Up to 31"', '32"-60"', '61"-80"', 'Above 81"'],
    },
    {
      id: 4,
      image: "/images/home/service/plumbing-big.png",
      name: "Plumbing",
      tags: [
        "Bathroom",
        "Drains",
        "Kitchen",
        "Laundry",
        "Water heater",
        "Water or gas line",
      ],
    },

    {
      id: 5,
      image: "/images/home/service/garage-big.png",
      name: "Garage door repair",
      tags: [
        "Cable replacement",
        "Door replacement",
        "Garage door opener repair",
      ],
    },

    {
      id: 6,
      image: "/images/home/service/iphone-big.png",
      name: "iPhone repair",
      tags: ["LCD install", "Battery replacement"],
    },

    {
      id: 7,
      image: "/images/home/service/smarthome-big.png",
      name: "Smart home installation",
      tags: [
        "Smart security camera",
        "Video doorbell",
        "Thermostat",
        "Smart hub or speaker",
      ],
    },
  ];
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

        <section className="relative py-12 mt-4 bg-gradient-to-r from-orange-200 via-orange-600 to-orange-900">
          {/* Image Over Content */}
          <div className="relative mx-auto mb-10 max-w-container xl:max-w-container-xl 2xl:max-w-container-2xl">
            <div className="relative">
              <img
                src="/images/home/bg.jpg"
                alt="Introducing Puls Whole Home"
                className="object-cover w-full shadow-md h-96 rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 rounded-xl"></div>
              <div className="absolute inset-0 flex flex-col items-start justify-center p-8 space-y-4 text-white">
                <h2 className="text-4xl font-bold">
                  Introducing Puls Whole Home
                </h2>
                <p className="text-lg">
                  The perfect way to protect & upgrade your home. Our hybrid
                  home warranty and home services membership offers
                  comprehensive coverage for your home appliances and systems
                  and gives you 15% off all Puls home services year-round.
                </p>
                <button className="border-none outline-none bg-[#ff6c3a] text-white px-5 py-2 rounded-md text-sm md:text-xl">
                  Read More
                </button>
              </div>
            </div>
          </div>

          {/* Left Image, Right Content */}
          {/* <div className="flex flex-wrap gap-8 mx-auto max-w-7xl lg:flex-nowrap">
            <div className="w-full lg:w-1/2">
              <img
                src="/images/home/bg.jpg"
                alt="Introducing Puls Whole Home"
                className="object-cover w-full h-full shadow-md rounded-xl"
              />
            </div>
            <div className="flex flex-col justify-center w-full space-y-4 lg:w-1/2">
              <h2 className="text-4xl font-bold text-gray-800">
                Introducing Puls Whole Home
              </h2>
              <p className="text-lg text-gray-600">
                The perfect way to protect & upgrade your home. Our hybrid home
                warranty and home services membership offers comprehensive
                coverage for your home appliances and systems and gives you 15%
                off all Puls home services year-round.
              </p>
              <button className="px-6 py-3 font-medium text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700">
                Read More
              </button>
            </div>
          </div> */}
        </section>

        <section className="relative py-12 bg-gradient-to-r from-slate-100 to-slate-800">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="/images/home/bg-2.jpg"
              alt="Background"
              className="object-cover w-full h-full opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-orange-800/50 to-orange-100/20"></div>
          </div>

          {/* Content Section */}
          <div className="relative px-6 mx-auto max-w-7xl">
            {/* Header Section */}
            <div className="mb-8 text-center">
              <h2 className="text-4xl font-bold">Book a Home Service</h2>
              <p className="mt-2 text-lg text-white">
                Local and Trusted Pros for all your home projects
              </p>
            </div>

            {/* Search Section */}
            <div className="p-6 mb-8 space-y-4 bg-white shadow-lg rounded-xl">
              <input
                type="text"
                placeholder="Search for services (e.g., Dishwasher repair)"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ff6c3a]"
              />
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 text-sm  text-white bg-[#ff6c3a] rounded-full">
                  Dishwasher repair
                </span>
                <span className="px-4 py-2 text-sm  text-white bg-[#ff6c3a] rounded-full">
                  Dryer repair
                </span>
                <span className="px-4 py-2 text-sm  text-white bg-[#ff6c3a] rounded-full">
                  Mount TV
                </span>
              </div>
            </div>

            {/* Slider Section */}
            <div>
              <h3 className="mb-6 text-3xl font-bold text-white">
                See All Services
              </h3>
              <Swiper
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                  640: { slidesPerView: 2 },
                  1024: { slidesPerView: 4 },
                }}
                className="pb-8"
              >
                {services.map((_, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="overflow-hidden bg-white shadow-md rounded-xl">
                      <div className="relative h-48">
                        <img
                          src={`https://warwickboar.shorthandstories.com/ambient-television--why-streaming-services-are-focusing-on-the-background/assets/WUO3wSTyw5/ambient-tv-unsplash-image-2560x1706.jpeg`}
                          alt={`Service ${idx + 1}`}
                          className="object-cover w-full h-full"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-30"></div>
                      </div>
                      <div className="p-4 space-y-2">
                        <h4 className="text-xl font-semibold text-gray-800">
                          {_?.name}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 text-xs font-medium text-white bg-[#ff6c3a] rounded-full">
                            Home Repair
                          </span>
                          <span className="px-3 py-1 text-xs font-medium text-white bg-[#ff6c3a] rounded-full">
                            Trusted Pros
                          </span>
                        </div>
                        <button className="border-none outline-none bg-white text-[#ff6c3a]  py-2 rounded-md text-sm flex items-center gap-2">
                          <BsArrowReturnRight /> Book Now
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-orange-50 to-orange-100">
          <div className="container px-6 mx-auto max-w-7xl">
            {/* Header */}
            <div className="mb-12 text-center">
              <h2 className="text-5xl font-extrabold text-gray-800">
                How It Works
              </h2>
            </div>

            {/* Steps */}
            <div className="grid gap-12 md:grid-cols-3">
              {/* Step 1 */}
              <div className="flex flex-col items-center space-y-4 text-center">
                <img
                  src="/images/home/man1.png"
                  alt="Man calling on phone"
                  className="object-contain w-48 h-auto"
                />
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800">
                    Tell us what your home needs
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Book once for your immediate needs or sign up for a
                    membership to save up to 15% on all your home service needs
                    year-round.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center space-y-4 text-center">
                <img
                  src="/images/home/man2.png"
                  alt="Phone in hand"
                  className="object-contain w-48 h-auto"
                />
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800">
                    Instant booking with crazy fast service
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Book your appointment and Puls' predictive match technology
                    will connect you with a reliable, background-checked
                    technician who will arrive as early as the same day.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center space-y-4 text-center">
                <img
                  src="/images/home/man3.png"
                  alt="Man relaxing on chair"
                  className="object-contain w-48 h-auto"
                />
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800">
                    Sit back, we’ve got you covered
                  </h3>
                  <p className="mt-2 text-gray-600">
                    We aim to provide the best possible customer experience.
                    Rest easy knowing all repairs are backed by our 90-day
                    guarantee. Protection and Click & Fix plan members get an
                    extended guarantee, up to 180-days.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-12 text-center">
              <button className="px-8 py-3 text-white bg-[#ff6c3a] text-lg font-semibold rounded-lg shadow-md hover:bg-[#e65d26] transition-colors">
                Book a Service
              </button>
            </div>
          </div>
        </section>

        <section className="relative py-12 bg-gray-100">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="https://media.istockphoto.com/id/695160826/photo/question-mark-sign-idea-or-problem-concept-background.jpg?s=612x612&w=0&k=20&c=F_yOmEGvHVNWajAuEcSvTLMPAL1bszoSWhRKQppg1Jg="
              alt="Feedback Background"
              className="object-cover w-full h-full opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
          </div>

          {/* Content Section */}
          <div className="relative px-6 mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <h2 className="text-4xl font-bold text-white">
                Home Owners Love Us
              </h2>
              <p className="mt-2 text-lg text-gray-200">
                Hear what our satisfied clients have to say about our services.
              </p>
            </div>

            {/* Slider Section */}
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              pagination={{ clickable: true }}
              className="pb-8"
            >
              {[
                {
                  name: "John Doe",
                  feedback:
                    "Puls helped me repair my dishwasher on the same day! The technician was professional and the service was excellent.",
                  img: "/images/clients/customer2.png",
                },
                {
                  name: "Sarah Johnson",
                  feedback:
                    "Amazing experience with Puls. I signed up for their membership, and it saved me so much on multiple home repairs!",
                  img: "/images/clients/customer2.png",
                },
                {
                  name: "Michael Brown",
                  feedback:
                    "Very reliable service! The technician fixed my dryer efficiently, and I love the extended guarantee they provide.",
                  img: "/images/clients/customer2.png",
                },
              ].map((client, idx) => (
                <SwiperSlide key={idx}>
                  <div className="flex flex-col items-center p-6 space-y-4 shadow-lg bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500 rounded-xl">
                    {/* Client Image */}
                    <div className="w-24 h-24 overflow-hidden border-4 border-white rounded-full">
                      <img
                        src={client.img}
                        alt={client.name}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    {/* Client Name */}
                    <h3 className="text-xl font-semibold text-white">
                      {client.name}
                    </h3>
                    {/* Feedback */}
                    <p className="text-center text-white">{client.feedback}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        <section className="relative py-12 bg-gradient-to-r from-blue-500 to-teal-400">
          {/* Background Image */}
          <div className="absolute inset-0">
            {/* <img
              src="/images/home/one-click-bg.jpg"
              alt="Background"
              className="object-cover w-full h-full opacity-30"
            /> */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-800/50 to-teal-600/20"></div>
          </div>

          {/* Content Section */}
          <div className="relative px-6 mx-auto max-w-7xl">
            {/* Header Section */}
            <div className="mb-8 text-center">
              <h2 className="text-5xl font-extrabold text-white">
                One-click Booking
              </h2>
              <p className="mt-2 text-lg text-white">
                Easily book a service, track your appointments, and manage
                claims from the convenience of your mobile.
              </p>
            </div>

            {/* Mobile App Section */}
            <div className="flex flex-col items-center md:flex-row md:space-x-10">
              {/* Mobile Image */}
              <div className="flex justify-center flex-shrink-0 w-full md:w-1/2">
                <img
                  src="/images/home/app.png"
                  alt="Mobile App"
                  className="w-[270px] h-[490px] object-contain"
                />
              </div>

              {/* Content Section */}
              <div className="mt-6 space-y-4 text-white md:mt-0 md:w-1/2">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="mr-2 text-xl">📱</span>
                    <span className="font-medium">Book a service</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-xl">📝</span>
                    <span className="font-medium">Open a claim</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-xl">🔄</span>
                    <span className="font-medium">
                      Track your open appointments
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-xl">📍</span>
                    <span className="font-medium">
                      Get real-time location of your tech
                    </span>
                  </li>
                </ul>

                <div className="flex mt-6 space-x-4">
                  {/* App Store Button */}
                  <a
                    href="https://www.apple.com/app-store/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/images/home/app-store.svg"
                      alt="App Store"
                      className="w-32 h-auto"
                    />
                  </a>
                  {/* Google Play Button */}
                  <a
                    href="https://play.google.com/store"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/images/home/goolge-play.svg"
                      alt="Google Play"
                      className="w-32 h-auto"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
