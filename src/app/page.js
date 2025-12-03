import About from "@/Components/About";
import HomeBanner from "@/Components/HomeBanner";
import Sequence from "@/Components/Sequence";
import Services from "@/Components/Services";
import Design from "@/Components/Design";
import GetInTouch from "@/Components/GetInTouch";
import Maps from "@/Components/Maps";
import Gallery from "@/Components/Gallery";
import Count from "@/Components/Count";
export default function Home() {
  return (
    <>
    <HomeBanner />  
    <About />
  
    <Gallery />
    <Services />
    <Count />
    <Design />
    <GetInTouch />
    <Maps />
    </>
  );
}
