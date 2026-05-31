'use client'

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import MyWebsiteNavBar from '@/app/components/navBar/navBar';
import { compileMDX } from 'next-mdx-remote/rsc';
import styles from './page.module.css';
import Link from 'next/link';
import { CircleArrowLeft } from 'lucide-react';
import '../../globals.css';
import rehypePrettyCode from 'rehype-pretty-code';
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { visit } from 'unist-util-visit';
import remarkToc from 'remark-toc';
import rehypeSlug from 'rehype-slug';
import { useMDXComponents } from '@/mdx-components';
import LoadingComponent from '../../helpers/LoadingComponent';


interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

function cleanSlugs() {
  return (tree: any) => {
    visit(tree, 'element', (node) => {
      // Look for headings with an id attribute
      if (
        ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(node.tagName) &&
        node.properties &&
        node.properties.id
      ) {
        // Remove \uFE0E and \uFE0F from the id string
        node.properties.id = String(node.properties.id).replace(/[\uFE0E\uFE0F]/g, '')
      }
    })
  }
}

function cleanLinks() {
  const anchorTags = document.querySelectorAll('a[href*="%EF%B8%8F"]');

  anchorTags.forEach((tag) => {
    const currentHref = tag.getAttribute('href');

    if (currentHref) {
      const cleanedHref = currentHref.replace("%EF%B8%8F", '');
      tag.setAttribute('href', cleanedHref);
    }
  });
}

export default function BlogPostPage({ params }: PageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [articleContent, setArticleContent] = useState<React.ReactNode | null>(null);
  const paramsHookResponse = useParams();
  const slug = paramsHookResponse?.slug;
  useEffect(() => {
    const prepareMDX = async () => {
      const routeResponse = await fetch(`/api/compendium/${slug}`);
      const routeResponseFormatted = await routeResponse.json();
      const source = routeResponseFormatted.data.articleContent;
      const themeContent = routeResponseFormatted.data.themeContent;
      const mdxOptions: any = {
        remarkPlugins: [remarkFrontmatter, remarkGfm, remarkMath, [remarkToc, { heading: 'table of contents', maxDepth: 3 }]],
        rehypePlugins: [
          [
            rehypePrettyCode,
            {
              theme: JSON.parse(themeContent)
            },
          ],
          rehypeKatex,
          rehypeSlug,
          cleanSlugs
        ],
      };
      const { content } = await compileMDX({
        source,
        options: {
          parseFrontmatter: true,
          mdxOptions,
        },
        // Add custom components if needed
        components: useMDXComponents({}), 
      });
      setArticleContent(content);
      setIsLoading(false);
    }
    prepareMDX();
  }, []);

  useEffect(() => {
    cleanLinks()
    const hash = window.location.hash;
    if (!hash) return;

    // Remove the '#' symbol to target the raw ID
    let targetId = hash.replace('#', '');
    const element = document.getElementById(targetId);
      console.log('element', element);
      if (element) {
        element.scrollIntoView({ behavior: 'instant', block: 'start' });
    }
  }, [articleContent])

  return (
    <>
      <MyWebsiteNavBar activeTab={'compendium'} />
      {isLoading && <LoadingComponent />}
      {articleContent && 
        <>
        <Link className={`${styles.backToCompendiumMainPageLink} text-white-500 hover:text-gray-500`} href="/compendium"><CircleArrowLeft className="text-white-500 hover:text-gray-500" /><span className={styles.backToCompendiumMainPageText}>Back to Compendium Main Page</span></Link>
        <article className={`prose py-8 pl-[30px] pr-[30px] ${styles.articleText}`}>
          {articleContent}
        </article>
        </>
      }
    </>
  );
}
