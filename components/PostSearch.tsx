"use client"

import {FormEventHandler, useState} from "react";
import styles from "../styles/search.module.scss";
import {usePosts} from "@/store";

const PostSearch = () => {
    const [search, setSearch] = useState("");
    const getPostsBySearch = usePosts(state => state.getPostsBySearch)

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();
        await getPostsBySearch(search);
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <input
                type="search"
                placeholder="Search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
            />
            <button type="submit">Search</button>
        </form>
    )
}

export {PostSearch}