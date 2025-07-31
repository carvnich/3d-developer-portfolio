import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

import {styles} from "../styles";
import {navLinks} from "../constants";
import {logo, logoNick, menu, close} from "../assets";

const Navbar = () => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Disable body scroll when mobile menu is open
    useEffect(() => {
        if (toggle) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }

        // Cleanup on unmount
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [toggle]);

    return (
        <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${scrolled ? "bg-primary" : "bg-transparent"}`}>
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                <Link to="/" className="flex items-center gap-2" onClick={() => {
                    setActive("");
                    window.scrollTo(0, 0);
                }}>
                    <img src={logoNick} alt="logo" className="w-9 h-9 object-fill"/>
                    <p className="text-white text-[18px] font-bold cursor-pointer flex ">
                        Nick &nbsp;<span className="sm:block hidden"> |&nbsp; Developer</span>
                    </p>
                </Link>

                <ul className="list-none hidden sm:flex flex-row gap-10">
                    {navLinks.map((nav) => (
                        <li key={nav.id} className={`${active === nav.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer transition-colors duration-200`} onClick={() => setActive(nav.title)}>
                            <a href={`#${nav.id}`}>{nav.title}</a>
                        </li>
                    ))}
                </ul>

                <div className="sm:hidden flex flex-1 justify-end items-center">
                    <img src={toggle ? close : menu} alt="menu" className="w-[28px] h-[28px] object-contain cursor-pointer z-30" onClick={() => setToggle(!toggle)}/>

                    {/* Full-screen mobile menu overlay */}
                    <div className={`fixed top-0 left-0 w-full h-screen bg-primary z-20 flex flex-col justify-center items-center transition-all duration-300 ease-in-out transform ${toggle ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"}`}>
                        <div className="absolute inset-0 bg-gradient-to-br from-primary via-tertiary to-primary opacity-50"></div>
                        <ul className="list-none flex justify-center items-center flex-col gap-8 relative z-10">
                            {navLinks.map((nav) => (
                                <li key={nav.id} className={`font-poppins font-medium cursor-pointer text-[28px] ${active === nav.title ? "text-white" : "text-secondary"} hover:text-white transition-all duration-300 transform hover:scale-110`} onClick={() => {
                                    setToggle(false);
                                    setActive(nav.title);
                                }}>
                                    <a href={`#${nav.id}`}>{nav.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;