"use client"
import Link from "next/link";

const logos = [
  { src: 'panduit.png', alt: 'Panduit' },
  { src: 'xtralis.png', alt: 'Xtralis' },
  { src: 'phoenix.png', alt: 'Phoenix Contact' },
  { src: 'partex.png', alt: 'Partex' },
  { src: 'hellermann.png', alt: 'HellermannTyton' },
  { src: 'ideal.png', alt: 'Ideal' },
  { src: 'app.png', alt: 'APP' },
  { src: 'allied.png', alt: 'Allied Connectors' },
];
///

function Collaborations() {
  return (
    <section className="p-6 bg-white">
      <h2 className="text-center text-2xl font-bold mb-6">Our Collaborations</h2>
      <p className="text-center text-gray-500 mb-6">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </p>
      <div className=" grid grid-cols-3 gap-4">
        {logos.map((logo , index) => (
          <Link href={`/collaborations/${index}`}  key={logo.alt}>
            <div
             
              className="bg-[url('/collab-bg.png')]  md:min-h-72  bg-contain bg-no-repeat w-full     p-4 flex justify-center items-center "
            >
              <img src={`/${logo.src}`} alt={logo.alt} className="md:h-16  mx-auto" />
            </div>
          </Link>
        ))}
      </div>
      {/* collab-bg.png */}
    </section>
  );
}

export default Collaborations;
