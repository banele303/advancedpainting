"use client";
import React from "react";

import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";

import bathroomremodelar from "../../public/pimg4.jpg"
import shower from "../../public/interior-painting6.jpeg"
import interior from "../../public/pimg3.jpg"
import { BackgroundGradient } from "./background-gradient";

export function BestPainter() {
    return (
        <div className="pt-[8rem]">
            <h3 className="text-[22px] text-center pb-[3rem] font-bold text-blue-400 text-center">Best Interior Painting for All</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-[2rem] md:px-[4rem] py-8">
                <div>
                    <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
                        <Image
                            src={bathroomremodelar}
                            alt="jordans"
                            height="400"
                            width="400"
                            className="object-contain rounded-md h-full md:h-[300px] w-full"
                        />

                        <p className="text-md leading-6 text-neutral-600 dark:text-neutral-400 py-5">
                            As a professional residential painting contractor, we offer a full service encompassing all your exterior and interior home painting needs including walls, roofs, ceilings, floors, gutters, down pipes, fascia’s, barge boards, wood, and metal painting. We strive on being quick, efficient, reliable while using quality products and being affordable
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
                            It is amazing what a coat of paint can do to a complex, apartment block to refresh, renew and increase the value of the property. We value our homeowners and estate managers. Budget always plays a role, so we keep it affordable. We are all about professional long lasting painting solutions that encompass the needs of individual situations. We have certified rope teams to cater for projects that are too high for the average painting contractor.
                        </p>

                    </BackgroundGradient>
                </div>
                <div>
                    <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
                        <Image
                            src={interior}
                            alt="jordans"
                            height="400"
                            width="400"
                            className="object-contain rounded-md"
                        />


                        <p className="text-md text-neutral-600 leading-6 dark:text-neutral-400 py-5">
                            Roof&apos;s in Gauteng take a beating form the elements. Our African sun can tarnish tiled, flat, slabbed and corrugated roofs easily. When it comes to roofs it’s all about the preparation, if the preparation is done correctly your roof coating will weather the storm. We also offer waterproofing solutions for certain roofs. Torch-On & Fibrous Membrane waterproofing. We high pressure clean roofs and use a special treatment to ensure your roof stays vibrant all year round.
                        </p>

                    </BackgroundGradient>
                </div>

            </div>
            
        </div>

    );
}