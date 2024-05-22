import Image from "next/image";
import Navbar from "../compenents/Navbar";
import Footer from "../compenents/ul/footer";
import InteriorHero from "./interior-hero";
import { BestPainter } from "./best-painter";
import MostAskedPaintingQ from "../compenents/ul/most-askedq";


export default function Home() {
  return (
 <div>
  <Navbar/>
  <InteriorHero/>
  <BestPainter/>
  <MostAskedPaintingQ/>
  <Footer/>
 </div>
  );
}
