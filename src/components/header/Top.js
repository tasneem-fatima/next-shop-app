import styles from "./styles.module.scss";
import { MdSecurity } from "react-icons/md";
import { BsSuitHeart } from "react-icons/bs";
import { RiAccountPinCircleFill, RiArrowDropDownFill } from "react-icons/ri";
import Link from "next/link";
import { useState } from "react";
import UserMenu from "./UserMenu";
function Top() {
    const [loggedIn, setLoggedIn] = useState(true);
    return (
        <div className={styles.top}>
            <div className={styles.top__container}>
                <div></div>
                <ul className={styles.top__list}>
                    <li>
                        <img src=""
                            alt="" />
                        <span>Morocco/USD</span>
                    </li>
                    <li>
                        <MdSecurity />
                        <span>Buyer Protection</span>
                    </li>
                    <li>
                        <span>Customer Service</span>
                    </li>
                    <li>
                        <span>Help</span>
                    </li>
                    <li>
                        <BsSuitHeart />
                        <Link href="/profile/wishList">
                            <span>WishList</span>
                        </Link>
                    </li>
                    <li>
                    {loggedIn ? (<li>
                        <div className={styles.flex}>
                            <RiAccountPinCircleFill />
                            <span>Tasneem</span>
                            <RiArrowDropDownFill />
                        </div>
                    </li>) : (<li>
                        <div className={styles.flex}>
                            <RiAccountPinCircleFill />
                            <span>Account</span>
                            <RiArrowDropDownFill />
                        </div>
                    </li>)}
                    <UserMenu loggedIn={loggedIn}/>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Top