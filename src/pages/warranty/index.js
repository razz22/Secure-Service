import Image from "next/image";
import React from "react";

const index = () => {
  return (
    <div>
      <section
        className="relative bg-cover bg-center bg-no-repeat h-[70vh] flex items-center justify-center text-center"
        style={{ backgroundImage: "url('/images/warranty/bg.png')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>{" "}
        {/* For overlay */}
        <div className="relative z-10 max-w-3xl px-6 text-white">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            A Single Solution for All Your Home Needs
          </h1>
          <p className="mb-6 text-lg md:text-xl">
            Join now and save 15% on your next appointment
          </p>
          <button className="px-6 py-3 font-semibold text-white transition duration-300 rounded-lg bg-primary-color hover:bg-blue-700">
            See Plans & Pricing
          </button>
        </div>
      </section>

      <div className="mx-auto max-w-container xl:max-w-container-xl 2xl:max-w-container-2xl">
        <div className="w-full py-8">
          <h2 className="text-3xl font-bold text-center">
            Puls Home Protection and Warranty Plans
          </h2>
          <p className="my-2 text-2xl text-center text-primary-color">
            Pay yearly, <br />
            get the first month on us
          </p>

          <div>
            <div className="w-full p-4 mx-auto max-w-7xl md:p-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {/* Appliance Protection Card */}
                <div className="relative p-6 bg-white border border-gray-100 shadow-lg rounded-2xl">
                  <div className="flex items-center justify-center h-24 mb-4">
                    <div className="relative w-20 h-20">
                      <Image
                        src="/images/warranty/10.png"
                        alt="Green house icon"
                        width={300}
                        height={100}
                      />
                    </div>
                  </div>
                  <h2 className="mb-2 text-2xl font-bold text-center text-gray-800">
                    Appliance Protection
                  </h2>
                  <p className="mb-6 text-center text-gray-600">
                    Coverage for your sweet home and appliances
                  </p>
                  <div className="mb-6 text-center">
                    <span className="text-4xl font-bold text-gray-900">
                      $34.99
                    </span>
                    <span className="text-gray-600">/mo</span>
                  </div>
                  <button className="w-full px-4 py-3 mb-6 font-semibold text-white transition-colors rounded-lg bg-primary-color ">
                    Get Started
                  </button>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <svg
                        className="flex-shrink-0 w-5 h-5 mt-1 text-blue-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700">
                        Coverage for your home appliances
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg
                        className="flex-shrink-0 w-5 h-5 mt-1 text-blue-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700">
                        Full repair or replacement in case of breakdown
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg
                        className="flex-shrink-0 w-5 h-5 mt-1 text-blue-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700">
                        Same or next day service
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg
                        className="flex-shrink-0 w-5 h-5 mt-1 text-blue-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700">
                        Seamless claim process by phone, online, or via the Puls
                        App
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg
                        className="flex-shrink-0 w-5 h-5 mt-1 text-blue-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700">
                        Exclusive 15% off additional Puls Home services
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Puls Whole Home Card */}
                <div className="relative p-6 bg-white border border-gray-100 shadow-lg rounded-2xl">
                  <div className="flex items-center justify-center h-24 mb-4">
                    <div className="relative w-20 h-20">
                      <Image
                        src="/images/warranty/11.png"
                        alt="Blue house icon with clouds"
                        width={200}
                        height={100}
                      />
                    </div>
                  </div>
                  <h2 className="mb-2 text-2xl font-bold text-center text-gray-800">
                    Puls Whole Home
                  </h2>
                  <p className="mb-6 text-center text-gray-600">
                    Coverage for your kitchen, laundry and all home systems
                  </p>
                  <div className="mb-6 text-center">
                    <span className="text-4xl font-bold text-gray-900">
                      $59.99
                    </span>
                    <span className="text-gray-600">/mo</span>
                  </div>
                  <button className="w-full px-4 py-3 mb-6 font-semibold text-white transition-colors rounded-lg bg-primary-color ">
                    Get Started
                  </button>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <svg
                        className="flex-shrink-0 w-5 h-5 mt-1 text-blue-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700">
                        Coverage for your kitchen, laundry appliances & home
                        systems
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg
                        className="flex-shrink-0 w-5 h-5 mt-1 text-blue-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700">
                        Full repair or replacement in case of breakdown
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg
                        className="flex-shrink-0 w-5 h-5 mt-1 text-blue-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700">
                        Same or next day service
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg
                        className="flex-shrink-0 w-5 h-5 mt-1 text-blue-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700">
                        Seamless claim process by phone, online, or via the Puls
                        App
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg
                        className="flex-shrink-0 w-5 h-5 mt-1 text-blue-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700">
                        Exclusive 15% off additional Puls Home services
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Systems Protection Card */}
                <div className="relative p-6 bg-white border border-gray-100 shadow-lg rounded-2xl">
                  <div className="flex items-center justify-center h-24 mb-4">
                    <div className="relative w-20 h-20">
                      <Image
                        src="/images/warranty/12.png"
                        alt="Electrical outlet icon"
                        width={200}
                        height={100}
                      />
                    </div>
                  </div>
                  <h2 className="mb-2 text-2xl font-bold text-center text-gray-800">
                    Systems Protection
                  </h2>
                  <p className="mb-6 text-center text-gray-600">
                    Coverage for your home systems, incl. HVAC, electrical, &
                    plumbing
                  </p>
                  <div className="mb-6 text-center">
                    <span className="text-4xl font-bold text-gray-900">
                      $34.99
                    </span>
                    <span className="text-gray-600">/mo</span>
                  </div>
                  <button className="w-full px-4 py-3 mb-6 font-semibold text-white transition-colors rounded-lg bg-primary-color ">
                    Get Started
                  </button>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <svg
                        className="flex-shrink-0 w-5 h-5 mt-1 text-blue-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700">
                        Coverage for your home systems
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg
                        className="flex-shrink-0 w-5 h-5 mt-1 text-blue-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700">
                        Full repair or replacement in case of breakdown
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg
                        className="flex-shrink-0 w-5 h-5 mt-1 text-blue-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700">
                        Same or next day service
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg
                        className="flex-shrink-0 w-5 h-5 mt-1 text-blue-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700">
                        Seamless claim process by phone, online, or via the Puls
                        App
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg
                        className="flex-shrink-0 w-5 h-5 mt-1 text-blue-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700">
                        Exclusive 15% off additional Puls Home services
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
