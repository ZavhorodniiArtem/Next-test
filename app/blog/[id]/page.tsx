import {Metadata} from "next";
import styles from "../styles.module.scss";
import Link from "next/link";
import {getAllPosts} from "@/services/getPosts";

async function getData(id: string) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        next: {
            revalidate: 120,
        }
    })
    return response.json();
}

type Props = {
    params: {
        id: string
    }
}

export async function generateStaticParams() {
    const posts: any[] = await getAllPosts();

    return posts.map((post) => ({
        slug: post.id.toString()
    }))
}

export async function generateMetadata({params: {id}}: Props): Promise<Metadata> {
    const post = await getData(id);
    return {
        title: post.title
    }
}

export default async function Post({params: {id}}: Props) {
    const post = await getData(id);

    return (
        <div className={styles.container}>
            <div className={styles.back}>
                <Link href="/blog">
                    Back to posts
                </Link>
            </div>
            <div className={styles.post}>
                <h1> Post {post.id}</h1>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>

        </div>
    )
}