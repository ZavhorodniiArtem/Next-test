import {getServerSession} from "next-auth/next";
import {authConfig} from "@/configs/auth";
import styles from "./style.module.scss"

export default async function Profile() {
const session = await getServerSession(authConfig);

    return (
        <div className={styles.profile}>
            <h1>
                Profile of {session?.user?.name}
            </h1>
            {
                session?.user?.image && <img src={session.user.image} alt=""/>
            }
        </div>
    )
}