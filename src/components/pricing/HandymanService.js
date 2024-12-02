import Image from "next/image";
import React from "react";

const HandymanService = () => {
  return (
    <div className="max-w-4xl p-4 mx-auto">
      <div className="space-y-8">
        {/* TV Image Section */}
        <div className="relative flex items-center justify-center w-full max-w-md mx-auto">
          <Image
            src="/images/pricing/handyman.png"
            alt="World Map on TV Display"
            width={230}
            height={100}
          />
          {/* TV Stand Indicator */}
        </div>

        {/* Pricing Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th></th>
                <th className="px-4 py-4 text-right">
                  <span className="text-gray-900"> Regular Price</span>
                  <span className="block text-sm text-gray-600">
                    Starting at
                  </span>
                </th>
                <th className="px-4 py-4 text-right">
                  <span className="font-medium text-blue-500">Puls</span>
                  <span className="text-gray-900"> Warranty</span>
                  <span className="block text-sm text-gray-600">Member</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr className="group hover:bg-gray-50">
                <td className="px-4 py-4 font-medium text-left">
                  TV Mounting Up to 31"
                </td>
                <td className="px-4 py-4 text-right text-gray-900">$69.00</td>
                <td className="px-4 py-4 font-medium text-right text-blue-500">
                  $62.10
                </td>
              </tr>
              <tr className="group hover:bg-gray-50">
                <td className="px-4 py-4 font-medium text-left">
                  TV Mounting 32" - 60"
                </td>
                <td className="px-4 py-4 text-right text-gray-900">$99.00</td>
                <td className="px-4 py-4 font-medium text-right text-blue-500">
                  $89.10
                </td>
              </tr>
              <tr className="group hover:bg-gray-50">
                <td className="px-4 py-4 font-medium text-left">
                  TV Mounting 61" - 80"
                </td>
                <td className="px-4 py-4 text-right text-gray-900">$149.00</td>
                <td className="px-4 py-4 font-medium text-right text-blue-500">
                  $134.10
                </td>
              </tr>
              <tr className="group hover:bg-gray-50">
                <td className="px-4 py-4 font-medium text-left">
                  TV Mounting Over 81"
                </td>
                <td className="px-4 py-4 text-right text-gray-900">$179.00</td>
                <td className="px-4 py-4 font-medium text-right text-blue-500">
                  $161.10
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HandymanService;
