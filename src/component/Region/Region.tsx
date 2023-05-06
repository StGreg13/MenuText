import s from './region.module.css'
import rus from '../../assets/img/Icon_RU.svg'
import {RegionData} from '../../data/region.js'
import {useEffect, useRef, useState} from "react";

function Region(props) {
    const [isOpen, setOpen] = useState(false)
    const [language, setLanguage] = useState({name: "RU", icon:rus})
    const regionRef = useRef(null);

    const selectLanguage= (name, icon) => {
        setLanguage({name, icon});
        setOpen(!isOpen)
    }

    const handleDocumentClick = (e) => {
        if (regionRef.current && !regionRef.current.contains(e.target)) {
            setOpen(false);
        }

    };

    useEffect(() => {
        document.addEventListener('click', handleDocumentClick);

        return () => {
            document.removeEventListener('click', handleDocumentClick);
        };
    }, []);

    return (
        <div className={s.regionLanguage} ref={regionRef}>
            <div className={
                isOpen ? `${s.selectedRegion} ${s.open}` : `${s.selectedRegion}`
            }
                onClick={()=> setOpen(!isOpen)}
            >
                <img src={language.icon} alt=""/>
                <span>{language.name}</span>
            </div>
            <div className={isOpen ? `${s.dropdownMenu} ${s.open}` : `${s.dropdownMenu}`}>
                <p>Страна</p>
                {RegionData.map((country, index)=> {
                    return (
                        <div
                            className={
                                (country.short === language.name) ? `${s.itemLanguage} ${s.active}` : `${s.itemLanguage}`
                            }
                            id={country.short}
                            key={index}
                            onClick={() =>selectLanguage(country.short, country.img)}
                        >
                            <img src={country.img} alt=""/>
                            <span>{country.name}</span>
                        </div>
                    )
                })

                }
            </div>
        </div>
    );
}

export default Region;