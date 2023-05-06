import s from './sidemenu.module.css'
import closeIcon from '../../assets/img/close.svg'
import {useState} from "react";

import Region from "../Region/Region";
import Navigation from "../Navigation/Navigation";


function SideMenu(props) {
    const [open, setOpen] = useState(false)
    const { isOpen, onClose } = props;

    return (
        <div className={isOpen ? `${s.menuWrapper} ${s.open}` : `${s.menuWrapper}`}>
            <div className={s.menuHeader}>
                <Region/>
                <div className={s.close}
                     onClick={onClose}
                >
                   <img src={closeIcon} alt=""/>
                </div>
            </div>
            <Navigation/>
            <div className={s.menuBottom}>
                <a href="#">Контакты</a>
                <a href="#">Поиск</a>
            </div>
        </div>
    );
}

export default SideMenu;