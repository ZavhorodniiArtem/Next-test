"use client"

import styles from "../styles/addSkill.module.scss"
import {useState} from "react";
import {useSkills} from "@/store";
import {shallow} from "zustand/shallow";
import {nanoid} from "nanoid";

const AddSkill = () => {
    const [skill, setSkill] = useState("");
    const [level, setLevel] = useState(0);
    const [createSkill] = useSkills((state) => [
        state.createSkill
    ], shallow);

    return (
        <div className={styles.container}>
            <input
                type="text"
                placeholder="Add new skill"
                value={skill}
                onChange={(event) => setSkill(event.target.value)}
            />

            <input
                type="number"
                placeholder="Add level"
                value={level}
                onChange={(event) => setLevel(+event.target.value)}
            />

            <button onClick={() => createSkill({id: nanoid(), skill, level})}>
                Add new skill
            </button>
        </div>
    )
}

export {AddSkill}