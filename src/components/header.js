function Header() {
    return (
        <header classNameNameNameName="mb-auto">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand navbar-text" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-flex-end" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active navbar-text" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active navbar-text" aria-current="page" href="#">About me</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active navbar-text" aria-current="page" href="#">Experience</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active navbar-text" aria-current="page" href="#">Education</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active navbar-text" aria-current="page" href="#">Hobbies</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header