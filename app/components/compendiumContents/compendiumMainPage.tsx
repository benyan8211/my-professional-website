import { getAllPosts } from "./compendiumHelpers";
import Link from 'next/link';
import styles from './compendiumContents.module.css';

const CompendiumMainPage = () => {
    const posts = getAllPosts();
    posts.sort((a, b) => b.metadata.date.localeCompare(a.metadata.date));

    return (
        <div className="justify-items-center mt-30">
            {posts.map((post) => (
                <article key={post.slug}>
                    <br />
                    <Link className="text-white-500 hover:text-gray-500" href={`/compendium/${post.slug}`}>
                        <h2>{post.metadata.title}</h2>
                    </Link>
                </article>
            ))}
        </div>
    );
}

export default CompendiumMainPage;