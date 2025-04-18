/**
 * MDX Utilities for retrieving and compiling content from app content folders.
 * These helpers allow dynamic loading of `.mdx` files stored in
 * `app/[contentType]/posts`, parsing their frontmatter, and compiling them into JSX.
 *
 * Example content types: "blog", "work", "notes"
 */

import { compileMDX } from "next-mdx-remote/rsc";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

/**
 * Get all slugs (filenames without extension) from a given content type folder.
 *
 * @param {string} contentType - The folder inside `app/` (e.g., "blog", "work").
 * @returns {string[]} An array of slugs corresponding to `.mdx` filenames.
 */

function getPostSlugs(contentType) {
  const dir = path.join(process.cwd(), `app/${contentType}/posts`);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

/**
 * Retrieve frontmatter metadata for a single post by content type and slug.
 *
 * @param {string} contentType - The folder inside `app/` (e.g., "blog", "work").
 * @param {string} slug - The slug (filename without `.mdx`) of the post.
 * @returns {object|null} The frontmatter metadata, or null if not found.
 */

function getPostMetadata(contentType, slug) {
  const filePath = path.join(
    process.cwd(),
    `app/${contentType}/posts`,
    `${slug}.mdx`,
  );
  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data } = matter(fileContent);
  return data;
}

/**
 * Retrieve both frontmatter and raw Markdown content for a given post.
 *
 * @param {string} contentType - The folder inside `app/` (e.g., "blog", "work").
 * @param {string} slug - The slug (filename without `.mdx`) of the post.
 * @returns {{ content: string, data: object } | null} Parsed post content and metadata.
 */

function getPostContent(contentType, slug) {
  const filePath = path.join(
    process.cwd(),
    `app/${contentType}/posts`,
    `${slug}.mdx`,
  );
  if (!fs.existsSync(filePath)) return null;

  const rawContent = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(rawContent);
  return { content, data };
}

/**
 * Compile raw MDX content into JSX for rendering in Next.js.
 *
 * @param {string} content - The Markdown/MDX content to compile.
 * @param {Record<string, React.ComponentType>} components - Custom MDX components map.
 * @returns {Promise<JSX.Element>} A compiled JSX element from the MDX content.
 */

async function compilePostToJSX(content, components) {
  const { content: jsx } = await compileMDX({
    source: content,
    components,
    options: { parseFrontmatter: false },
  });

  return jsx;
}

export { compilePostToJSX, getPostContent, getPostMetadata, getPostSlugs };
