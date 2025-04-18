import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  BodyText,
} from "./app/components/textComponents";

export function useMDXComponents(components) {
  return {
    h1: ({ children }) => <Heading1 text={children} />,
    h2: ({ children }) => <Heading2 text={children} />,
    h3: ({ children }) => <Heading3 text={children} />,
    h4: ({ children }) => <Heading4 text={children} />,
    h5: ({ children }) => <Heading5 text={children} />,
    h6: ({ children }) => <Heading6 text={children} />,
    p: ({ children }) => <BodyText text={children} />,
    ...components,
  };
}
