import {Metadata} from "next";
import {Posts} from "@/components/Posts";
import {PostSearch} from "@/components/PostSearch";
import styles from "./styles.module.scss"

export const metadata: Metadata = {
    title: 'Blog | Next test',
}

export default function Blog() {
    return (
        <div className={styles.list}>
            <h1>Posts</h1>
            <PostSearch/>
            <Posts/>
        </div>
    )
}
