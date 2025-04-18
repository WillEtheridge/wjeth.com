// Internal Imports
import MainDiv from "@/app/components/mainDiv";
import {
  BlogAndWorkMap,
  HeadingBlock,
} from "../components/workAndBlogComponents";
import getAllPosts from "../functions/getAllPosts";

export default function PostListPage({ heading, linkPrefix }) {
  const posts = getAllPosts(linkPrefix); // safe server-side usage

  return (
    <MainDiv>
      <HeadingBlock backTo="home" destination="/" heading={heading} />
      <BlogAndWorkMap data={posts} />
    </MainDiv>
  );
}
