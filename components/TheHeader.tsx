import {Navigation} from "@/components/Navigation";

const navItems = [
    {label: "Home", href: "/"},
    {label: "Blog", href: "/blog"},
    {label: "Skills", href: "/skills"},
    {label: "Profile", href: "/profile"},
    {label: "About", href: "/about"}
]

const TheHeader = () => {
    return (
        <header className="container">
            <Navigation navLinks={navItems}/>
        </header>
    )
}

export {TheHeader}