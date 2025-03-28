import Image from "next/image";

export default function WhySeekahost () {
    return (
        <>
        <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-15 justify-center">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Why SeekaHost
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Image src="/images/home/learning.svg" width={40} height={40} alt="Lifelong Learning" />
                </div>
                <div>
                  <h3 className="text-lg md:text-2xl font-semibold">Lifelong Learning</h3>
                  <p className="text-gray-700 md:text-xl font-medium">
                    We champion continuous growth and exploration, inspiring our learners to embrace learning as a lifelong journey.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Image src="/images/home/education.svg" width={40} height={40} alt="Quality Education" />
                </div>
                <div>
                  <h3 className="text-lg md:text-2xl font-semibold">Quality Education</h3>
                  <p className="text-gray-700 md:text-xl font-medium">
                    SkillNest delivers high-quality courses, curated by leading experts, ensuring an exceptional learning experience for all.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Image src="/images/home/inclusivity.svg" width={40} height={40} alt="Inclusivity" />
                </div>
                <div>
                  <h3 className="text-lg md:text-2xl font-semibold">Inclusivity</h3>
                  <p className="text-gray-700 md:text-xl font-medium">
                    We welcome learners of all backgrounds and skill levels, fostering an inclusive and supportive online community.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Image src="/images/home/empowerment.svg" width={40} height={40} alt="Empowerment" />
                </div>
                <div>
                  <h3 className="text-lg md:text-2xl font-semibold">Empowerment</h3>
                  <p className="text-gray-700 md:text-xl font-medium">
                    Our platform is designed to empower learners, giving them the tools and knowledge to thrive in their personal and professional endeavors.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <div className="flex justify-center md:justify-end">
              <Image
                src="/images/home/woman-laptop.webp"
                alt="Woman using laptop"
                width={416}
                height={539}
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full py-16">
        <Image
          src="/images/shared/middle-banner.svg"
          alt="Background Image"
          fill
          className="object-cover z-0"
          priority
        />

        <div className="relative z-1 max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center">

          <div className="md:w-1/2 mb-8 md:mb-0 text-white">
            <p className="text-sm md:text-2xl font-medium mb-2">Important For Transactions</p>
            <h2 className="text-2xl md:text-4xl mb-6 leading-snug">
              Useful for facilitating transactions<span className='font-semibold'> between <br />
                <span className="relative font-bold after:content-[''] after:absolute after:left-0 after:bottom-[-3px] after:w-full after:h-[4px] after:bg-[#FDB927] after:transform after:skew-x-65">buyers &amp; sellers</span></span>
            </h2>
            <ul className="space-y-2">
              <li className="flex items-start md:text-xl">
                <span className="mr-2"><Image src="/images/home/tick-mark.svg" alt="Tick mark icon" width={20} height={20} /></span>
                Money can be exchanged very easily
              </li>
              <li className="flex items-start md:text-xl">
                <span className="mr-2"><Image src="/images/home/tick-mark.svg" alt="Tick mark icon" width={20} height={20} /></span>
                Bills can be safely paid anywhere at any time
              </li>
              <li className="flex items-start md:text-xl">
                <span className="mr-2"><Image src="/images/home/tick-mark.svg" alt="Tick mark icon" width={20} height={20} /></span>
                Work quickly, saving your important time
              </li>
            </ul>
          </div>


          <div className="md:w-1/2 relative flex justify-center md:justify-end items-center">
            <Image
              src="/images/home/buynsell.webp"
              alt="Person using laptop"
              width={560}
              height={446}
              className="rounded-md"
            />
          </div>
        </div>
      </section>
        </>
    );
}