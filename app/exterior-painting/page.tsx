import Image from "next/image";
import Navbar from "../compenents/Navbar";
import Footer from "../compenents/ul/footer";
import InteriorHero from "./exterior-hero";
import { BestPainter } from "./best-painter";


export default function Home() {
  return (
 <div>
  <Navbar/>
  <InteriorHero/>
  <BestPainter/>
  <Footer/>
 </div>
  );
}
