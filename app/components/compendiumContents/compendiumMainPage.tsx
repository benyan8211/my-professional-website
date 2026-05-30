'use client'

import { useState, useEffect } from 'react';
import { getAllPosts } from "./compendiumHelpers";
import LoadingComponent from '@/app/helpers/LoadingComponent';
import Link from 'next/link';

interface User {
    slug: string; metadata: { [key: string]: any; }; content: string;
  }

const CompendiumMainPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [posts, setPosts] = useState<User[] | null>(null);
    useEffect(() => {
        const getAllPostsHelper = async () => {
            const getAllPostsResponse = await getAllPosts();
            getAllPostsResponse.sort((a, b) => b.metadata.date.localeCompare(a.metadata.date));
            setPosts(getAllPostsResponse);
            setIsLoading(false);
        }
        getAllPostsHelper();
    }, []);

    return (
        <>
            {isLoading && <LoadingComponent />}
            {posts && 
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
            }
        </>
    );
}

export default CompendiumMainPage;