import React from "react";
import styles from "@/app/blog/styles.module.scss";
import Image from "next/image";
import notFound from "../assets/img/emptySearch.png";

const EmptySearch = () => {
    return (
        <div className={styles.error}>
                <Image
                    src={notFound}
                    width={500}
                    height={500}
                    alt=""
                />
            <p>
                Sorry, but there are no results for your search...
            </p>
        </div>
    )
}

export {EmptySearch}