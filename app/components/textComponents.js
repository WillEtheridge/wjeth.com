// External Imports
import Link from "next/link";

const Heading1 = ({ text }) => {
  return (
    <h1 className="text-cOrange text-h1Mobile md:text-h1Tablet lg:text-h1 leading-tight">
      {text}
    </h1>
  );
};

const Heading2 = ({ text }) => {
  return (
    <h2 className="text-cGreen text-h2Mobile md:text-h2Tablet lg:text-h2 leading-tight">
      {text}
    </h2>
  );
};

const Heading2Link = ({ text, destination }) => {
  return (
    <div>
      <Link href={destination} className="relative inline-block group">
        <span className="text-cGreen text-h2Mobile md:text-h2Tablet lg:text-h2 leading-tight underline lg:no-underline underline-offset-6">
          {text}
        </span>
        <span className="absolute left-0 bottom-0 h-[4px] w-full bg-cGreen scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out origin-left"></span>
      </Link>
    </div>
  );
};

const Heading3 = ({ text }) => {
  return (
    <h3 className="text-cRed text-h3Mobile md:text-h3Tablet lg:text-h3">
      {text}
    </h3>
  );
};

const Heading3Link = ({ text, destination }) => {
  return (
    <div>
      <Link href={destination} className="relative inline-block group">
        <span className="text-cRed text-h3Mobile md:text-h3Tablet lg:text-h3 leading-tight underline lg:no-underline underline-offset-6">
          {text}
        </span>
        <span className="absolute left-0 bottom-0 h-[3px] w-full bg-cRed scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out origin-left"></span>
      </Link>
    </div>
  );
};

const Heading4 = ({ text }) => {
  return (
    <h4 className="text-cBlue2 text-h4Mobile md:text-h4Tablet lg:text-h4">
      {text}
    </h4>
  );
};

const Heading4Link = ({ text, destination }) => {
  return (
    <div>
      <Link href={destination} className="relative inline-block group">
        <span className="text-cBlue2 text-h4Mobile md:text-h4Tablet lg:text-h4 leading-tight">
          {text}
        </span>
        <span className="absolute left-0 bottom-0 h-[3px] w-full bg-cBlue2 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out origin-left"></span>
      </Link>
    </div>
  );
};

const Heading5 = ({ text }) => {
  return (
    <h5 className="text-cPurple text-h5Mobile md:text-h5Tablet lg:text-h5">
      {text}
    </h5>
  );
};

const Heading6 = ({ text }) => {
  return (
    <h6 className="text-cBlue text-h6Mobile md:text-h6Tablet lg:text-h6 leading-tight">
      {text}
    </h6>
  );
};

const Heading6Link = ({ text, destination }) => {
  return (
    <div>
      <Link href={destination} className="relative inline-block group">
        <span className="text-cBlue text-h6Mobile md:text-h6Tablet lg:text-h6 leading-tight">
          {text}
        </span>
        <span className="absolute left-0 bottom-0 h-[2px] w-full bg-cBlue scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out origin-left"></span>
      </Link>
    </div>
  );
};

const BodyText = ({ text }) => {
  return <p className="text-cWhite text-body">{text}</p>;
};

const BodyLink = ({ children, href }) => {
  return (
    <a
      href={href}
      className="text-cWhite text-body underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

const BoldBodyText = ({ text }) => {
  return <strong className="text-cWhite text-body font-bold">{text}</strong>;
};

const SmallText = ({ text }) => {
  return <p className="text-cGreen2 text-smallBody">{text}</p>;
};

export {
  Heading1,
  Heading2,
  Heading2Link,
  Heading3,
  Heading3Link,
  Heading4,
  Heading4Link,
  Heading5,
  Heading6,
  Heading6Link,
  BodyText,
  BodyLink,
  BoldBodyText,
  SmallText,
};
