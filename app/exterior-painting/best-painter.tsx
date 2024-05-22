"use client";
import React from "react";

import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";

import bathroomremodelar from "../../public/interior-painting1.jpg"
import shower from "../../public/interior-painting2.jpeg"
import { BackgroundGradient } from "./background-gradient";

export function BestPainter() {
    return (
        <div className="pt-[8rem]">
            <h3 className="text-[22px] text-center pb-[3rem] font-bold text-blue-400">From the first contact to post-installation, Long Home is with you every step of the process </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-[2rem] md:px-[4rem] py-8">
                <div>
                    <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
                        <Image
                            src={bathroomremodelar}
                            alt="jordans"
                            height="400"
                            width="400"
                            className="object-contain rounded-md"
                        />

                        <p className="text-md leading-6 text-neutral-600 dark:text-neutral-400 py-5">
                            Take your bathroom from outdated to outstanding. Call now or fill out the quick form to schedule your FREE in-home design consultation today
                        </p>

                    </BackgroundGradient>
                </div>
                <div>
                    <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
                        <Image
                            src={shower}
                            alt="jordans"
                            height="400"
                            width="400"
                            className="object-contain rounded-md"
                        />

                        <p className="text-md leading-6 text-neutral-600 dark:text-neutral-400 py-5">
                        With Long Baths, the bath & shower possibilities are endless. Choose from a variety of sizes, colors, finishes and accessories to design a space that is both beautiful and functional
                        </p>

                    </BackgroundGradient>
                </div>
                <div>
                    <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-[200px] h-[200px] text-blue-400">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
</svg>


                        <p className="text-md text-neutral-600 leading-6 dark:text-neutral-400 py-5">
                        Your peace of mind guaranteed with a lifetime transferable warranty. Your new bath or walk-in shower should last you a lifetime, but Long Baths will be there for life, in case it doesn&apos;t.
                        </p>

                    </BackgroundGradient>
                </div>

            </div>
        </div>

    );
}