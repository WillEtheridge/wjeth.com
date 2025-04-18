// External Imports
import { notFound } from "next/navigation";

// Internal Imports
import { useMDXComponents } from "@/mdx-components";
import MainDiv from "@/app/components/mainDiv";
import { BlogDiv } from "@/app/components/workAndBlogComponents";
import { Heading6Link } from "@/app/components/textComponents";
import {
  compilePostToJSX,
  getPostContent,
  getPostMetadata,
} from "@/app/functions/buildPosts";

export default async function PostPage({ contentType, slug }) {
  const post = getPostContent(contentType, slug);
  if (!post) return notFound();

  const components = useMDXComponents({});
  const jsx = await compilePostToJSX(post.content, components);

  return (
    <MainDiv>
      <Heading6Link
        text={`<- Back to ${contentType}`}
        destination={`/${contentType}`}
      />
      <BlogDiv>{jsx}</BlogDiv>
    </MainDiv>
  );
}

export async function generatePostMetadata(contentType, slug) {
  const data = getPostMetadata(contentType, slug);
  if (!data) return notFound();

  return {
    title: data.title,
    description: data.description,
    keywords: data.keywords || [],
  };
}
