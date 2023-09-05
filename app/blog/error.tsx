"use client"

import Image from "next/image";
import React from "react";
import errorPage from "../../assets/img/errorPage.png";
import styles from "@/app/blog/styles.module.scss";

type Props = {
    error: string
}

export default function ErrorWrapper({error}: Props) {
    return (
        <div className={styles.error}>
            <Image
                src={errorPage}
                width={500}
                height={500}
                alt=""
            />
            <p>Oops!!! {error}</p>
        </div>
    )
}