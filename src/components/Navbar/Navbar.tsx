"use client";

import { useCallback, useEffect, useState } from "react";
import { useMobile } from "@/hooks/mobilehooks";
import styles from "./Navbar.module.css";

export default function Navbar() {
	const [scrolled, setScrolled] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);
	const isMobile = useMobile();

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > (isMobile ? 16 : 50));
		};

		handleScroll();
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [isMobile]);

	useEffect(() => {
		if (!isMobile && menuOpen) {
			setMenuOpen(false);
		}
	}, [isMobile, menuOpen]);

	const closeMenu = useCallback(() => setMenuOpen(false), []);

	return (
		<nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
			<div className={styles.navName}>Dr. R. Kamala</div>
			<button
				className={styles.navToggle}
				onClick={() => setMenuOpen((prev) => !prev)}
				aria-label="Menu"
				aria-expanded={menuOpen}
				aria-controls="primary-navigation"
				type="button"
			>
				<span />
				<span />
				<span />
			</button>
			<ul
				className={`${styles.navLinks} ${menuOpen ? styles.navLinksOpen : ""}`}
				id="primary-navigation"
			>
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
