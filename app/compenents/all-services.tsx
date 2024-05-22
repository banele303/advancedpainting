import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const businessList = [
    {
        title: "Interior Painting",
        id: 1,
        Image: "/pimg3.jpg",
    },
    {
        title: "Exterior Painting",
        id: 2,
        Image: "/exterior-painting.jpeg",
    },
    {
        title: "Roof Painting",
        id: 2,
        Image: "/roof-painting.jpeg",
    },


];

function PaintingServices() {
    return (
        <div className='mt-5 px-[2rem] md:px-[6rem] mt-[23rem] md:mt-[15rem]'>
            <h2 className='font-bold text-[22px] py-[2rem]'>All Painting Services You Need</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-5 '>
                {businessList.length > 0 ? businessList.map((business, index) => (
                    <div  key={business.id}>
                        <Image src={business.Image} alt={business.title} width={500} height={200} className='h-[350px] md:h-[200px] object-cover rounded-lg' />
                        <div className='flex flex-col items-baseline p-3 gap-1'>
                            <h2 className='p-1 bg-purple-200 text-primary rounded-full px-2 text-[12px]'>{business.title}</h2>
                            <h2 className='font-bold text-lg'>{business.title}</h2>
                            <button className="bg-blue-500 no-underline group w-[9rem] cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block">
                                <span className="absolute inset-0 overflow-hidden rounded-full">
                                    <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                                </span>
                                <div className="relative flex space-x-2 items-center z-10 rounded-full bg-blue-900 py-1 px-1 ring-1 ring-white/10">
                                    <Link
                                        href="/house-remodeling"
                                        className="text-center mx-auto"
                                    >
                                        Learn More
                                    </Link>
                                    <svg
                                        fill="none"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        width="16"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M10.75 8.75L14.25 12L10.75 15.25"
                                            stroke="orange"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                        />
                                    </svg>
                                </div>
                                <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-yellow-400/0 via-yellow-400/90 to-yellow-400/0 transition-opacity duration-500 group-hover:opacity-40" />
                            </button>

                        </div>
                    </div>
                )) :
                    [1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
                        <div key={index} className='w-full h-[300px] bg-slate-200 rounded-lg animate-pulse'></div>
                    ))
                }
            </div>
            <div className='py-[3rem] md:pt-[3rem] '>
                <h3 className='text-[17px] font-bold md:text-[20px] py-3'> Revive Your Walls Expert Wall Repair and Painting Services</h3>
                <p className='text-[17px] leading-7'>
                    Are your walls in dire need of repair, displaying unsightly cracks, dents, or peeling paint? Don&apos;t let damaged walls mar the beauty of your space or tarnish your property&apos;s value.
                    <br /><br />Imagine hosting guests at your home or welcoming clients to your office, only to have them notice the flaws on your walls. These imperfections can create an impression of neglect and unprofessionalism, making potential buyers hesitant and visitors underwhelmed.
                    <br />
                    <br />
                    But worry not! Our expert Wall Repair and Painting Services are here to rescue your walls and restore them to their former glory. With years of experience, our skilled team can handle any wall imperfections, providing flawless repairs and precise painting, turning your walls into a sight to behold.we understand the importance of a beautifully maintained space. Our mission is to help you achieve the ambiance you desire, be it in your home or business. Trust us to breathe new life into your walls, adding value to your property and creating an inviting atmosphere that leaves a lasting impression.
                </p>
                <h3 className='text-[17px] font-bold md:text-[20px] py-3 leading-7'>Are you tired of dealing with leaky roofs, pesky wall cracks, and constant maintenance issues that seem to never end? </h3>
                <p className='text-[17px]'>


                    Roof Waterproofing, we pride ourselves on being industry leaders in providing top-notch Torch On Waterproofing services. We understand that your roof is the first line of defense against the elements, and that&apos;s why we ensure a watertight seal that can withstand the harshest weather conditions, ensuring your peace of mind all year round.
                    <br /><br />
                    But that&apos;s not all! We also specialize in zinc roof waterproofing painting, giving your zinc roofs a durable and long-lasting protective coating that enhances their longevity and aesthetics. No more worries about rust or corrosion eating away at your valuable investments.
                    <br />
                    Is your property showing signs of wear and tear on the walls? Don&apos;t fret! Our team of skilled professionals excels in wall repair and painting, rejuvenating the look of




                </p>



            </div>


        </div>
    );
}

export default PaintingServices;