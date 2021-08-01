import settings from '../../img/settings.svg'
import about from '../../img/about.svg'
import collapseIcon from '../../img/collapseIcon.svg'

import styles from './Navbar.module.scss'



function Navbar ({onToggleSettings}) {
    return (
        <nav className="d-flex text-light p-3  navbar navbar-expand-lg">
            <div className="container-fluid">
                <span className="d-inline fs-2 me-4 navbar-brand">BruhWheel</span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarItems" aria-controls="navbarItems" aria-expanded="false" aria-label="Toggle navigation">
                    <span >
                        <img width={24} height={24} src={collapseIcon} alt="Collapse"/>
                    </span>
                </button>
                <div id="navbarItems" className="collapse navbar-collapse">
                    
                        <div className=" my-2"> 
                            <ul onClick={onToggleSettings} className="list-unstyled fs-2 d-flex justify-content-center"> 
                                <li  className={`p-0 fs-4 me-4 btn text-light d-flex ${styles.btn}`}>
                                    Settings <img className="ms-2 my-auto" src={settings} alt="Settings" /> 
                                </li>
                            </ul>
                        </div>
                        <div className="my-2">
                            <ul className="list-unstyled fs-2 d-flex justify-content-center"> 
                                <li onClick={() => window.location.href = '#footer'} 
                                    className={`p-0 fs-4 me-4 btn text-light d-flex ${styles.btn}`}
                                >
                                About <img className="ms-2 my-auto" src={about} height={24} width={24} alt="Settings" /> 
                                </li>
                            </ul>
                        </div>
                    
                </div>
            </div>
        </nav>
    )
}

export default Navbar;