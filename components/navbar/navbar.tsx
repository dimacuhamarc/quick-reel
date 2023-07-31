import Link from "next/link";
import { usePathname } from "next/navigation";


const Navbar = () => {
    const currentPathname = usePathname();

    return (
        <div>
            <nav className="navbar is-bold is-light is-flex is-justify-content-space-around is-align-items-center">
                <div className="navbar-brand">
                    <a className="navbar-item has-text-weight-bold is-size-1" href="/">QuickReel</a>
                </div>
                <div className="navbar-end">     
                    <Link className={`navbar-item ${currentPathname === '/' ? 'is-active' : ''}`} href="/">Welcome to QuickReel</Link>
                    <Link className={`navbar-item ${currentPathname === '/search' ? 'is-active' : ''}`} href="/search">Search</Link>
                    <Link className="navbar-item" href="https://github.com/dimacuhamarc" rel="noopener noreferrer" target="_blank">Developer</Link> 
                </div>
            </nav>
        </div>
    )
}

export default Navbar;