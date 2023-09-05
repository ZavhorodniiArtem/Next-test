"use client"

import Link from "next/link";
import React, {useEffect} from "react";
import {usePosts} from "@/store";
import {shallow} from "zustand/shallow";
import {EmptySearch} from "@/components/EmptySearch";

const Posts = () => {
    const [posts, loading, getAllPosts] = usePosts((state) => [
        state.posts, state.loading, state.getAllPosts
    ], shallow);

    useEffect(() => {
        getAllPosts()
    }, [getAllPosts]);

    if (loading) return "Loading...";

    if (!posts.length) return <EmptySearch/>;

    return (
        <ul className="container">
            {
                posts.map((post: any) => (
                        <li key={post.id}>
                            <Link href={`/blog/${post.id}`} className="link">
                                {post.title}
                            </Link>
                        </li>
                    )
                )
            }
        </ul>
    )
}

export {Posts}