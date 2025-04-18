import PostPage, { generatePostMetadata } from "@/app/components/postPage";

const contentType = "blog";

export async function generateStaticParams() {
  const { getPostSlugs } = await import("@/app/functions/buildPosts");
  return getPostSlugs(contentType).map((slug) => ({ slug }));
}

export async function generateMetadata({ params: { slug } }) {
  return generatePostMetadata(contentType, slug);
}

export default async function BlogPost({ params: { slug } }) {
  return <PostPage contentType={contentType} slug={slug} />;
}
