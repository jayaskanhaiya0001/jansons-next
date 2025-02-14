import Link from 'next/link';

const AboutUs = () => {
  return (
    <section className="px-4 py-10 md:px-10 md:py-20  bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Text Content */}
          <div className="flex-1 pr-10 mb-8 lg:mb-0">
            <h2 className="text-3xl font-bold text-left mb-6">About Us</h2>
            <p className="text-left mb-6 text-xl sm:text-2xl">
              Jainsons (India) is an authorized distributor of industrial electrical components with high level of quality
              serving customers.
              We are well established with a highly professional sales, marketing, warehousing, and distribution
              operation.
              <br />
              <br />
              Consequently, we are able to provide solutions for customers in the Wiring Harness Industry, Railways, D.M.R.C., OEMs, etc.
            </p>
            <div className="flex justify-start">
              <Link href="/product">
                <button className="bg-[#880909] text-white px-6 py-3 rounded-[40px] shadow hover:bg-yellow-600 transition duration-300">
                  Know More
                </button>
              </Link>
            </div>
          </div>

          {/* Image or Icon Section */}
          <div className="flex-1 relative bg-[url('/11111.png')] bg-no-repeat bg-cover rounded-lg p-6 flex justify-center items-center">
            <div className="absolute right-0 top-[70%] md:top-[80%] lg:top-[90%] rounded-full outline-4 outline-white outline bg-yellow-400 h-14 w-14 flex justify-center items-center">
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
