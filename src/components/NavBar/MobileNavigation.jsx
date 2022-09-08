import React from "react";
import { IoMenuSharp, IoCloseSharp } from "react-icons/io5"
import { useState } from "react"

import NavLinks from "./NavLinks";
import styles from "./index.module.css"

const MobileNavigation = () => {

    const [open, setOpen] = useState(false)

    const hamburgerIcon = <IoMenuSharp className={styles.hamburger} size="40px" color="white" onClick={() => setOpen(!open)}/>
    const closeIcon = <IoCloseSharp className={styles.hamburger} size="40px" color="white" onClick={() => setOpen(!open)}/>

    return (
        <nav role="nav" className={styles.mobileNavBar}>
            {open ? closeIcon : hamburgerIcon}
            {open && <NavLinks divName="mobileNavLinksContainer"/>}
        </nav>
    )
}

export default MobileNavigation
