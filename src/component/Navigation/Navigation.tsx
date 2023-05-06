import s from "./navigation.module.css";
import {MenuData} from '../../data/menu.js'
import {useState} from "react";

function Navigation(props) {
    const [menuStack, setMenuStack] = useState([{ data: MenuData, parent: null }]);
    const [backButtonLabel, setBackButtonLabel] = useState("");

    const MenuItem = ({ item, handleClick }) => {
        if (item.submenu && item.submenu.length > 0) {
            return (
                <div
                    className={s.menuItemWith}
                    onClick={() => handleClick(item)}>
                    {item.title}
                </div>
            )
        }
        if (item.submenu && item.submenu.length == 0) {
            return (
                <div className={s.menuItemEmpty}>
                    {item.title}
                </div>
            )
        }
        if (item.subtitle) {
            return (
                <a href="#" className={s.menuItemLink}>
                        <h3>{item.title}</h3>
                    {item.subtitle && <p>{item.subtitle}</p>}
                </a>
            )
        }
    };

    const MultiLevelMenu = ({ data, onItemClick, onGoBack, backButtonLabel }) => (
        <div className={s.navMenu}>
            {onGoBack && (
                <button
                    className={s.buttonBack}
                    onClick={onGoBack}>
                    {backButtonLabel}
                </button>
            )}
            {data.map((item, index) => (
                <MenuItem key={index} item={item} handleClick={onItemClick} />
            ))}
        </div>
    );

    const onItemClick = (item) => {
        if (item.submenu && item.submenu.length > 0) {
            setBackButtonLabel(item.title);
            setMenuStack([...menuStack, { data: item.submenu, parent: item }]);
        }
    };

    const onGoBack = () => {
        const newMenuStack = [...menuStack];
        newMenuStack.pop();
        setMenuStack(newMenuStack);
        if (newMenuStack.length > 1) {
            setBackButtonLabel(newMenuStack[newMenuStack.length - 1].parent.title);
        } else {
            setBackButtonLabel("");
        }
    };

    return (
        <div>
            <MultiLevelMenu
                data={menuStack[menuStack.length - 1].data}
                onItemClick={onItemClick}
                onGoBack={menuStack.length > 1 ? onGoBack : null}
                backButtonLabel={backButtonLabel}
            />
        </div>
    );
}

export default Navigation;