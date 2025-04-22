import PostPage, { generatePostMetadata } from "@/app/components/postPage";

const contentType = "work";

export async function generateStaticParams() {
  const { getPostSlugs } = await import("@/app/functions/buildPosts");
  return getPostSlugs(contentType).map((slug) => ({ slug }));
}

export async function generateMetadata(props) {
  const { slug } = await props.params;
  return generatePostMetadata(contentType, slug);
}

export default async function WorkPost(props) {
  const { slug } = await props.params;
  return <PostPage contentType="work" slug={slug} />;
}
