"use client";

import { useCallback, useEffect, useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
	const [scrolled, setScrolled] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const closeMenu = useCallback(() => setMenuOpen(false), []);

	return (
		<nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
			<div className={styles.navName}>Dr. R. Kamala</div>
			<button
				className={styles.navToggle}
				onClick={() => setMenuOpen((prev) => !prev)}
				aria-label="Menu"
			>
				<span />
				<span />
				<span />
			</button>
			<ul className={`${styles.navLinks} ${menuOpen ? styles.navLinksOpen : ""}`}>
				<li>
					<a href="#about" onClick={closeMenu}>
						About
					</a>
				</li>
				<li>
					<a href="#book" onClick={closeMenu}>
						The Book
					</a>
				</li>
				<li>
					<a href="#tributes" onClick={closeMenu}>
						Tributes
					</a>
				</li>
				<li>
					<a href="#remember" onClick={closeMenu}>
						Remember Her
					</a>
				</li>
				<li>
					<a href="#gallery" onClick={closeMenu}>
						Gallery
					</a>
				</li>
			</ul>
		</nav>
	);
}
