
import Divider from "@/components/Divider";

import Slide from "../components/slide/page";
import { FeedBack } from "@/components/FeedBack";
import About from "@/components/about/page";
import Hero from "../components/hero/page";
import Contato from "../components/contato/page";
import Footer from "@/components/footer/page";





export default function Home() {
  return (
<>
          <Hero/>
          <Divider  />
          <About/>
          <Divider />
          <Slide/>
          <Divider />
          <FeedBack/>
          <Divider/>
          <Contato/>
          <Divider />
          <Footer/>

</>

  );
}
