// Internal Imports
import MainDiv from "../components/mainDiv";
import { HeadingBlock } from "../components/workAndBlogComponents";
import { BodyText } from "../components/textComponents";

const Mailto = ({ email, children }) => {
  return (
    <a
      href={`mailto:${email}`}
      className="underline underline-offset-8 text-cWhite"
    >
      {children}
    </a>
  );
};

export default function Contact() {
  return (
    <MainDiv>
      <HeadingBlock backTo="home" destination={"/"} heading={"Contact"} />
      <Mailto email="wjeth@pm.me">
        <BodyText text="wjeth@pm.me" />
      </Mailto>
    </MainDiv>
  );
}
