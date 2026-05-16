import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentPath = path.join(process.cwd(), 'compendiumDocuments');

export function getAllPosts() {
  const files = fs.readdirSync(contentPath);

  return files.map((fileName) => {
    const slug = fileName.replace('.mdx', '');
    const fileContent = fs.readFileSync(path.join(contentPath, fileName), 'utf8');
    
    // Parse frontmatter metadata
    const { data, content } = matter(fileContent);
    
    return {
      slug,
      metadata: data,
      content,
    };
  });
}