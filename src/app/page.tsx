
import Divider from "@/components/Divider";

import Slide from "./slide/page";
import { FeedBack } from "@/components/FeedBack";
import About from "@/app/about/page";
import Hero from "./hero/page";


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

</>

  );
}
