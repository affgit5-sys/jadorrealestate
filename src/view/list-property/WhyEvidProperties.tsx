import React from 'react';
import Image from 'next/image';
import { Check } from 'lucide-react';

function WhyjadorProperties() {
  const benefits = [
    "Most awarded real estate agency in the UAE",
    "Our agents speak more than 45 languages",
    "Achieved 50+ billion AED sales in our career",
    "0% Zero fees to you",
    "Get listed on local & global portals"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl font-bold text-blue-900 mb-8 font-serif">
              Why list your property with jador Properties?
            </h2>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-700 text-sm md:text-base">{benefit}</p>
                </div>
              ))}
            </div>

            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 flex items-center cursor-pointer">
              List Your Property
              <span className="ml-2">→</span>
            </button>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative w-full h-96 rounded-2xl overflow-hidden">
              <Image
                src="/images/third.webp"
                alt="Why list your property with jador Properties - Dubai's most awarded real estate agency with zero fees and global reach"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* How does it work section */}
        <div className="mt-20 text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-4 font-serif">
            How does it work?
          </h2>
          <p className="text-sm md:text-base text-gray-600">
            Start the effortless journey of listing your property with us, step by step.
          </p>
        </div>
      </div>
    </section>
  );
}

export default WhyjadorProperties;
