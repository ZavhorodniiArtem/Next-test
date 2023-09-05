"use client"

import {FormEventHandler, useState} from "react";
import styles from "../styles/search.module.scss";
import {useSkills} from "@/store";

const SkillsSearch = () => {
    const [search, setSearch] = useState("");
    const getMyApiBySearch = useSkills(state => state.getMyApiBySearch)

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();
        await getMyApiBySearch(search);
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

export {SkillsSearch}