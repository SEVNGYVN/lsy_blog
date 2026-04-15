import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const f1PostsDirectory = path.join(process.cwd(), 'posts', 'f1');

// 💡 1️⃣ 폴더 안의 모든 파일을 무한히 파고들며(재귀적으로) 찾아내는 새끼 엔진!
function getAllFilesRecursive(dir: string, fileList: string[] = []) {
  if (!fs.existsSync(dir)) return [];
  
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getAllFilesRecursive(filePath, fileList); // 폴더면 또 파고듦
    } else {
      fileList.push(filePath); // 파일이면 목록에 수집
    }
  }
  return fileList;
}

export function getSortedF1PostsData() {
  if (!fs.existsSync(f1PostsDirectory)) {
    fs.mkdirSync(f1PostsDirectory, { recursive: true });
    return [];
  }
  
  const allFiles = getAllFilesRecursive(f1PostsDirectory);
  
  const allPostsData = allFiles
    .filter(file => file.endsWith('.md'))
    .map((fullPath) => {
      // 💡 2️⃣ 윈도우(\)와 맥/리눅스(/) 구분 없이 주소 경로를 통일시키는 마법
      const relativePath = path.relative(f1PostsDirectory, fullPath);
      const slug = relativePath.replace(/\\/g, '/').replace(/\.md$/, '');
      
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const matterResult = matter(fileContents);

      return {
        slug, // 여기가 이제 'driver/LEC' 처럼 나옴!
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
  
  const allFiles = getAllFilesRecursive(f1PostsDirectory);
  return allFiles
    .filter(file => file.endsWith('.md'))
    .map((fullPath) => {
      const relativePath = path.relative(f1PostsDirectory, fullPath);
      // 💡 3️⃣ 다중 폴더를 인식하게 해주는 배열 분리 기술
      const slugArray = relativePath.replace(/\\/g, '/').replace(/\.md$/, '').split('/');
      return slugArray;
    });
}

export async function getF1PostData(slugArrayOrString: string | string[]) {
  // 사용자가 단일 폴더든 다중 폴더든 똑똑하게 합쳐주는 기술
  const slugJoined = Array.isArray(slugArrayOrString) 
    ? slugArrayOrString.join('/') 
    : slugArrayOrString;

  const fullPath = path.join(f1PostsDirectory, `${slugJoined}.md`);
  
  if (!fs.existsSync(fullPath)) {
    throw new Error(`File not found: ${fullPath}`);
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  
  const contentHtml = processedContent.toString();

  return {
    slug: slugJoined,
    contentHtml,
    title: matterResult.data.title || "Untitled",
    date: matterResult.data.date || "1970-01-01",
    description: matterResult.data.description || "",
    tags: matterResult.data.tags || [],
    category: matterResult.data.category || "칼럼"
  };
}
