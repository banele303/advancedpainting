"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import logo from "../../public/logo.jpeg"
import Image from "next/image";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div>
            <div>
                <div
                    className={
                        scrolled
                            ? "scrolled w-screen h-[80px] z-50 bg-black  fixed drop-shadow-lg pt-[2rem] pb-[2rem]"
                            : " w-screen h-[80px] z-50  fixed drop-shadow-lg pt-[3rem] "
                    }
                >
                    <div className="px-2 flex justify-between items-center w-full h-full">
                        <div className="flex items-center h-[3rem] w-[4rem] md:h-[5rem] md:w-[10rem] ml-[2rem] md:ml-1 md:pl-[4rem]">
                            <Image src={logo} width={100} height={100} alt="hero painting image" className='h-full md:h-full rounded-sm' />
                        </div>
                        <div className="hidden md:flex pr-4">
                            <ul className="hidden md:flex ">
                                <li className="md:ml-3 py-3  text-[19px] font-Poppins  px-6  border-5 border-sky-900 cursor-pointer text-white  font-bold">
                                    <Link href="/">Home</Link>
                                </li>

                                <li className="md:ml-3 py-3 px-2 border-5 border-sky-900  text-[19px] font-Poppins cursor-pointer text-white font-bold">
                                    <Link href="/interior-painting">Interior Painting</Link>
                                </li>
                                <li className="md:ml-3 py-3 px-2 border-5 border-sky-900  text-[19px] font-Poppins cursor-pointer text-white font-bold">
                                    <Link href="/exterior-painting">Exterior Painting</Link>
                                </li>
                                <li className="md:ml-3 py-3 px-2  border-5 border-sky-900 cursor-pointer text-[19px] font-Poppins text-white font-bold">
                                    <Link href="/roof-painting">Roof Painting</Link>
                                </li>
                            </ul>
                            <button
                                type="button"
                                className={`px-6  mx-[1rem]  font-poppins bg-blue-900   text-[14px]  md:text-[15px] border-none rounded-[3rem]  text-white   hover:scale-[1.1] transition-all duration-75 font-bold  font-Poppins`}
                            >
                                <Link href="/contact-us"> +27 67 158 2431</Link>
                            </button>
                        </div>
                        <div className="md:hidden mr-4" onClick={handleClick}>
                            {!nav ? (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>


                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>

                            )}
                        </div>
                    </div>

                    <ul
                        className={
                            !nav
                                ? "hidden"
                                : "scrolled absolute bg-gray-900 w-[290px] px-4 top-[5rem] right-[1rem] border-none rounded-md"
                        }
                    >
                        <li className=" md:ml-3 py-3 px-6 font-Poppins border-5 border-sky-900 cursor-pointer text-white font-bold">
                            <Link href="/">Home</Link>
                        </li>
                        <li className=" md:ml-3 py-3 px-6 font-Poppins border-5 border-sky-900 cursor-pointer text-white font-bold">
                            <Link href="/interior-painting">Interior Painting</Link>
                        </li>
                        <li className="md:ml-3 py-3 px-6 border-5 border-sky-900  text-[19px] font-Poppins cursor-pointer text-white font-bold">
                            <Link href="/exterior-painting">Exterior Painting</Link>
                        </li>
                        <li className="md:ml-3 py-3 px-6 font-Poppins border-5 border-sky-900 cursor-pointer text-white font-bold">
                            <Link href="/roof-painting">Roof Painting</Link>
                        </li>


                        <div className="flex flex-col my-4">
                            <button
                                type="button"
                                className={`px-6  mr-[2rem]  font-poppins bg-blue-400   text-[16px]  md:text-[1px] border-none rounded-[3rem]  text-white   hover:scale-[1.1] transition-all duration-75 font-bold  font-Poppins`}
                            >
                                <Link href="/contact-us">  + 27 67 158 2431</Link>
                            </button>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;