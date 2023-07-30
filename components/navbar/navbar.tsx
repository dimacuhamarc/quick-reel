import Link from "next/link";

import style from "./navbar.module.scss";

export default function navbar() {
    return (
        <div className={style.container}>
            <div className="container">
                <div className="navbar is-flex is-justify-content-space-around">
                    <Link href="/">Welcome to QuickReel</Link>
                    <Link href="/">Search</Link>
                    <Link href="https://github.com/dimacuhamarc" rel="noopener noreferrer" target="_blank">Developer</Link>
                </div>
            </div>
        </div>
    )
}