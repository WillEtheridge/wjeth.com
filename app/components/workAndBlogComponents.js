// Internal Imports
import {
  Heading1,
  Heading3Link,
  Heading5,
  Heading6Link,
  BodyText,
  SmallText,
} from "../components/textComponents";

const BlogAndWorkMap = ({ data }) => {
  return (
    <div className="pb-16">
      {data.map((item, i) => (
        <div key={i} className="mb-16 mt-8 max-w-2xl">
          <div className="md:mb-2">
            <Heading3Link text={item.title} destination={item.link} />
            <Heading5 text={item.subTitle} />
            <SmallText text={new Date(item.date).toLocaleDateString("en-GB")} />
          </div>
          <BodyText text={item.description} />
        </div>
      ))}
    </div>
  );
};

const BlogDiv = ({ children }) => {
  return <div className="w-full lg:w-2/3 ">{children}</div>;
};

const HeadingBlock = ({ backTo, destination, heading, subTitle, date }) => {
  return (
    <div className="">
      <Heading6Link text={`<- Back to  ${backTo}`} destination={destination} />
      <Heading1 text={heading} />
      <Heading5 text={subTitle} />
      <SmallText text={date} />
    </div>
  );
};

export { BlogAndWorkMap, HeadingBlock, BlogDiv };
