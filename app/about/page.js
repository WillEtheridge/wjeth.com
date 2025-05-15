// Internal Imports
import MainDiv from "../components/mainDiv";
import { HeadingBlock } from "../components/workAndBlogComponents";
import { BodyText } from "../components/textComponents";
import { BlogDiv } from "../components/workAndBlogComponents";

export default function About() {
  return (
    <MainDiv>
      <HeadingBlock backTo="home" destination={"/"} heading={"About"} />
      <BlogDiv>
        <BodyText text={"Hi, my name is Will"}></BodyText>
        <BodyText
          text={`I'm originally from Hampshire, England. I'm currently
        travelling the world whilst living the "Digital Nomad" dream.`}
        ></BodyText>
        <BodyText
          text={`Most of my current work is in mobile and web app development. I'm interested in taking on projects in these areas.`}
        ></BodyText>
      </BlogDiv>
    </MainDiv>
  );
}
