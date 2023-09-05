"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";
import {useSession, signOut} from "next-auth/react";

type NavLink = {
    label: string;
    href: string;
}

type Props = {
    navLinks: NavLink[];
}

const Navigation = ({navLinks}: Props) => {
    const pathname = usePathname();
    const session = useSession();

    return (
        <>
            {
                navLinks.map((link) => {
                    const isActive = pathname === link.href;

                    if (!session?.data && link.label === "Profile") return;

                    return (
                        <Link
                            href={link.href}
                            key={link.label}
                            className={`link-header ${isActive ? "active" : ""}`}
                        >
                            {link.label}
                        </Link>
                    )
                })
            }

            {
                session?.data
                    ? <Link href="#" onClick={() => signOut({callbackUrl: "/"})} className="link-header">Sign Out</Link>
                    : <Link href="/signin" className="link-header">Sign In</Link>
            }
        </>
    )
}
export {Navigation}