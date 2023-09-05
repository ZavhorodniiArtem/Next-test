"use client"

import React, {useEffect} from "react";
import {useSkills} from "@/store";
import {shallow} from "zustand/shallow";
import {EmptySearch} from "@/components/EmptySearch";
import styles from "../app/skills/styles.module.scss";
import {Skills} from "@/app/api/skills/skills";

const SkillsList = () => {
    const [skills, loading, getAllMyApi] = useSkills((state) => [
        state.skills, state.loading, state.getAllMyApi
    ], shallow);

    useEffect(() => {
        getAllMyApi()
    }, [getAllMyApi]);

    if (loading) return "Loading...";

    if (!skills.length) return <EmptySearch/>;

    return (
        <ul className="container">
            {
                skills.map((skill: Skills) => (
                        <li key={skill.id} className={styles.list}>
                            <p>
                                {skill.skill}
                            </p>

                            <p>
                                {`Level: ${skill.level}`}
                            </p>
                        </li>
                    )
                )
            }
        </ul>
    )
}

export {SkillsList}