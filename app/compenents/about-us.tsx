import Image from "next/image";
import Link from "next/link";
import Aboutus from  "../../public/about-us.jpg"


export default function AboutUS() {
  const phoneNumber = '+27 83 300 0705';

  return (
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-[3rem] px-[2rem] md:px-[6rem] mb-[-18rem] md:mb-[.5rem] mt-[-14rem] md:mt-2">
         
        <section>
          { /* Owner Info */}

          <h3 className="text-[18px] font-bold py-4 md:text-[23px]">Transparency, Quality & Reliable Services!</h3>
          <h3 className="text-[16px] text-blue-400 font-bold py-4 md:text-[18px]">Preparation Excellence!</h3>
          <p className="text-[16px] leading-9">At Advanced Painting Team, we recognize the crucial role that proper surface preparation plays in delivering a perfect, long-lasting finish. Our expert painters in Gauteng are committed to excellence, carefully rectifying any flaws to guarantee a uniform, superior outcome with exceptional longevity. We derive immense satisfaction from our work, assuring a pristine finish that surpasses anticipations</p>
          <h3 className="text-[16px] text-blue-400 font-bold py-4 md:text-[18px]">Expertise in  Painting</h3>
          <p className="text-[16px] leading-9">From facades and rooftops to entrances, windows, and all that lies in between, our crew excels in painting a diverse range of outdoor surfaces. Whether it involves rejuvenating the exterior of your home or introducing a vibrant hue to your patio or deck, we possess the knowledge and tools to handle any task with meticulousness and attention to detail</p>
          <h3 className="text-[16px] text-blue-400 font-bold py-4 md:text-[18px]">Weather-Resistant Painting</h3>
          <p className="text-[16px] leading-9">Residing in Gauteng, we are well aware of the difficulties presented by varying weather conditions. This is why we solely utilize high-grade, weather-proof materials engineered to resist the elements, guaranteeing your home maintains its aesthetic appeal all year round. Our strict compliance with paint manufacturer guidelines ensures surface safeguarding and enduring color brilliance.</p>
          <h3 className="text-[16px] text-blue-400 font-bold py-4 md:text-[18px]">Quality Finish</h3>
          <p className="text-[16px] leading-9">In terms of paint application, we rigidly follow the guidelines provided by the paint manufacturers, which not only ensures the protection of surfaces but also guarantees visibly superior color durability. With our unwavering dedication to excellence, we assure a finish that not only boosts your home&apos;s street appeal but also safeguards it for the foreseeable future</p>
          </section>
        <section>

          
          { /* Owner Image */}
          <Image src={Aboutus} alt="about painting comapny image" width={500} height={200} className='h-full md:h-[660px] object-cover rounded-lg md:pt-[3rem]' />
          </section>
    </div>
  )
}