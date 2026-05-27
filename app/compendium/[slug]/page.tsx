import MyWebsiteNavBar from '@/app/components/navBar/navBar';
import { compileMDX } from 'next-mdx-remote/rsc';
import styles from './page.module.css';
import Link from 'next/link';
import { CircleArrowLeft } from 'lucide-react';
import '../../globals.css';
import rehypePrettyCode from 'rehype-pretty-code';
import fs from 'fs';
import path from 'path';
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkToc from 'remark-toc';
import rehypeSlug from 'rehype-slug';
import { useMDXComponents } from '@/mdx-components';


interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const themeFilePath = path.join(process.cwd(), 'theme.json');
  const mdxOptions: any = {
    remarkPlugins: [remarkFrontmatter, remarkGfm, remarkMath, [remarkToc, { heading: 'table of contents', maxDepth: 3 }]],
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: JSON.parse(fs.readFileSync(themeFilePath, 'utf8'))
        },
      ],
      rehypeKatex,
      rehypeSlug
    ],
  };

  const filePath = path.join(process.cwd(), 'compendiumDocuments', `${slug}.mdx`);
  const source = fs.readFileSync(filePath, 'utf8');

  const { content } = await compileMDX({
    source,
    options: {
      parseFrontmatter: true,
      mdxOptions,
    },
    // Add custom components if needed
    components: useMDXComponents({}), 
  });

  return (
    <>
        <MyWebsiteNavBar activeTab={'compendium'} />
        <Link className={`${styles.backToCompendiumMainPageLink} text-white-500 hover:text-gray-500`} href="/compendium"><CircleArrowLeft className="text-white-500 hover:text-gray-500" /><span className={styles.backToCompendiumMainPageText}>Back to Compendium Main Page</span></Link>
        <article className={`prose py-8 pl-[30px] pr-[30px] ${styles.articleText}`}>
          {content}
        </article>
    </>
  );
}
