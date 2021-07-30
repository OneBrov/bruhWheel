import settings from '../../img/settings.svg'
import about from '../../img/about.svg'

import styles from './Navbar.module.scss'

function Navbar ({onToggleSettings}) {
    return (
        <nav className="d-flex text-light p-3 justify-content-between">
            <div> 
            <ul className="list-unstyled fs-2"> 
                <li className="d-inline fs-2 me-4 ">BruhWheel</li>
                <li onClick={onToggleSettings} className={`d-inline fs-4 me-4 btn text-light ${styles.btn}`}>Settings <img src={settings} alt="Settings" /> </li>
            </ul>
            </div>
            <div>
            <ul className="list-unstyled my-auto fs-2">
                <li className={`d-inline fs-4 btn text-light ${styles.btn}`}>
                <a href="#footer">About <img  width={24} height={24} src={about} alt="About"/> </a> 
                </li>
            </ul>
            </div>
        </nav>
    )
}

export default Navbar;