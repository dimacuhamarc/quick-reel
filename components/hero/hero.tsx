import style from './hero.module.scss';

export default function hero() {
    return (
        <section className="hero is-dark is-bold is-medium">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title">Welcome!</h1>
                    <h2 className="subtitle">This is QuickReel</h2>
                </div>
            </div>
            <div className="hero-foot">
                <nav className="tabs is-boxed is-fullwidth">
                    <div className="container">
                        <ul>
                            <li className="is-active"><a>Top Rated Films</a></li>
                            <li><a>New Releases</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </section>
    )
}