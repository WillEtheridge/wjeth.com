// Internal Imports
import { Heading1, Heading2Link, BodyText } from "./components/textComponents";
import MainDiv from "./components/mainDiv";
import HiMyNameIs from "./components/hiMyNameIs";

export default function Home() {
  return (
    <MainDiv>
      <div>
        <HiMyNameIs />
        <Heading1 text="Will Etheridge" />
        <BodyText text="Developer / Designer / Marketer" />
      </div>
      <div className="mt-8 ">
        <Heading2Link text="Work" destination="/work" />
        {/*
<Heading2Link text="Blog" destination="/blog" />
        */}
        <Heading2Link text="About" destination="/about" />
        <Heading2Link text="Contact" destination="/contact" />
      </div>
    </MainDiv>
  );
}
