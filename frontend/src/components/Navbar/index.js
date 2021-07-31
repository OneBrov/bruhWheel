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
                    
                        <div className="d-flex"> 
                            <ul className="list-unstyled fs-2"> 
                                <li onClick={onToggleSettings} className={` fs-4 me-4 btn text-light d-flex ${styles.btn}`}>
                                    Settings <img className="ms-2 my-auto" src={settings} alt="Settings" /> 
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul className="list-unstyled my-auto fs-2">
                                <li className={` fs-4 btn text-light ${styles.btn}`}>
                                <a className="d-flex" href="#footer">
                                    About <img className="ms-2 my-auto" width={24} height={24} src={about} alt="About"/> 
                                </a> 
                                </li>
                            </ul>
                        </div>
                    
                </div>
            </div>
        </nav>
    )
}

export default Navbar;