import fs from "fs";
import path from "path";
import matter from "gray-matter";

/**
 * Get all posts from a directory derived from the linkPrefix.
 * @param {string} linkPrefix - Used to both generate links and resolve the directory
 * @returns {Array} Array of post metadata with `link` field added
 */

function getAllPosts(linkPrefix) {
  // Convert linkPrefix like "/blog/posts" → "app/blog/posts"
  const relativeDir = linkPrefix.replace(/^\/+/, "app/"); // e.g., "/blog/posts" → "app/blog/posts"
  const postsDir = path.join(process.cwd(), relativeDir);

  if (!fs.existsSync(postsDir)) return [];

  return fs
    .readdirSync(postsDir)
    .filter((file) => file.endsWith(".mdx"))
    .map((filename) => {
      const filePath = path.join(postsDir, filename);
      const fileContent = fs.readFileSync(filePath, "utf-8");

      const { data } = matter(fileContent);

      if (!data.slug || !data.date) {
        console.warn(`Missing slug or date in frontmatter of ${filename}`);
        return null;
      }

      return {
        ...data,
        link: path.join(linkPrefix, data.slug),
      };
    })
    .filter(Boolean)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export default getAllPosts;
