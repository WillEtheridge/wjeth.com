// Internal Imports
import MainDiv from "../components/mainDiv";
import { HeadingBlock } from "../components/workAndBlogComponents";

export default function About() {
  return (
    <MainDiv>
      <HeadingBlock backTo="home" destination={"/"} heading={"About"} />
    </MainDiv>
  );
}
