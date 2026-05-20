import MyWebsiteNavBar from '@/app/components/navBar/navBar';
import dynamic from 'next/dynamic';
import { ComponentType } from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import { CircleArrowLeft } from 'lucide-react';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;

  const MdxPost: ComponentType = dynamic(
    () => import(`../../../compendiumDocuments/${slug}.mdx`)
  );

  return (
    <>
        <MyWebsiteNavBar activeTab={'compendium'} />
        <Link className={`${styles.backToCompendiumMainPageLink} text-white-500 hover:text-gray-500`} href="/compendium"><CircleArrowLeft className="text-white-500 hover:text-gray-500" /><span className={styles.backToCompendiumMainPageText}>Back to Compendium Main Page</span></Link>
        <article className={`prose mx-auto py-8 pl-[30px] pr-[30px] ${styles.articleText}`}>
            <MdxPost />
        </article>
    </>
  );
}
