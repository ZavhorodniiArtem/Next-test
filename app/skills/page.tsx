import {Metadata} from "next";
import styles from "@/app/blog/styles.module.scss";
import {SkillsList} from "@/components/Skills";
import {SkillsSearch} from "@/components/SkillsSearch";
import {AddSkill} from "@/components/AddSkill";

export const metadata: Metadata = {
    title: 'My API | Next test',
}

export default function MyApi() {
    return (
        <div className={styles.list}>
            <h1>SKILLS</h1>
            <SkillsSearch/>
            <SkillsList/>
            <AddSkill/>
        </div>
    )
}