import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const f1PostsDirectory = path.join(process.cwd(), 'posts', 'f1');

export function getSortedF1PostsData() {
  if (!fs.existsSync(f1PostsDirectory)) {
    fs.mkdirSync(f1PostsDirectory, { recursive: true });
    return [];
  }
  const fileNames = fs.readdirSync(f1PostsDirectory);
  const allPostsData = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(f1PostsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const matterResult = matter(fileContents);

      return {
        slug,
        title: matterResult.data.title || "Untitled F1 Post",
        date: matterResult.data.date || "1970-01-01",
        description: matterResult.data.description || "",
        tags: matterResult.data.tags || [],
        readTime: matterResult.data.readTime || "5분",
        category: matterResult.data.category || "칼럼",
      };
    });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAllF1PostSlugs() {
  if (!fs.existsSync(f1PostsDirectory)) return [];
  const fileNames = fs.readdirSync(f1PostsDirectory);
  return fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map((fileName) => {
      return fileName.replace(/\.md$/, '');
    });
}

export async function getF1PostData(slug: string) {
  const fullPath = path.join(f1PostsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  
  const contentHtml = processedContent.toString();

  return {
    slug,
    contentHtml,
    title: matterResult.data.title || "Untitled",
    date: matterResult.data.date || "1970-01-01",
    description: matterResult.data.description || "",
    tags: matterResult.data.tags || [],
    category: matterResult.data.category || "칼럼"
  };
}
