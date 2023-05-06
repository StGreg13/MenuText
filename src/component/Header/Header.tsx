import s from './header.module.css'
import SideMenu from "../SideMenu/SideMenu";
import {useState} from "react";
import menuIcon from '../../assets/img/menu.svg'

function Header(props) {
    const [isMenuOpen, setMenuOpen] = useState(false)

    return (
        <div className={s.headerWrapper}>
            <div className={s.headerInner}>
                <span
                    onClick={()=> setMenuOpen(!isMenuOpen)}
                ><img src={menuIcon} alt=""/></span>
                <SideMenu isOpen={isMenuOpen} onClose={()=> setMenuOpen(!isMenuOpen)}/>
            </div>
        </div>
    );
}

export default Header;