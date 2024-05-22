"use client";

import { PaintingScroll } from "./painting-scroll";





export function PaintingProjects() {
    return <div>

        <h3 className="text-center text-[18px] md:text-[24px] font-bold pt-[4rem] mb-[-5rem]">Recent Painting Projects</h3>
        <PaintingScroll images={images} />;
    </div>
}

const images = [
    "/exterior-painting.jpeg",
    "/pimg2.jpg",
    "/pimg4.jpg",
    "/pimg3.jpg",
    "/hero2.jpeg",
    "/pimg.jpg",
    "/hero3.jpeg",
    "/hero4.jpg",
    "/roof2.JPG",
    "/wall-painting.jpeg",
    "/roof3.JPG",
    "/interior-painting1.jpg",
    "/roof4.JPG",
    "/roof-painting.jpeg",
    "/interior-painting4.JPG", 
    "/interior-painting5.JPG", 
    "/interior-painting6.jpeg", 
    
    

];