import Image from "next/image";
import Navbar from "./compenents/Navbar";
import HomeHero from "./compenents/home-hero";
import AboutUS from "./compenents/about-us";
import PaintingServices from "./compenents/all-services";
import { Testimonials } from "./compenents/testimonials";
import { PaintingProjects } from "./compenents/ul/painting-projects";
import MostAskedPaintingQ from "./compenents/ul/most-askedq";
import Footer from "./compenents/ul/footer";

export default function Home() {
  return (
 <div>
  <Navbar/>
  <HomeHero/>
  <AboutUS/>
  <PaintingServices/>
  <Testimonials/>
  <PaintingProjects/>
  <MostAskedPaintingQ/>
  <Footer/>
 </div>
  );
}
