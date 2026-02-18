"use client";

import { useCallback, useEffect, useState } from "react";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";
import { tributes } from "@/data/tributes";
import type { Tribute } from "@/types";
import TributeCard from "./TributeCard";
import TributeModal from "./TributeModal";
import styles from "./Tributes.module.css";

export default function Tributes() {
	const [selectedTribute, setSelectedTribute] = useState<Tribute | null>(null);

	const openTribute = useCallback((tribute: Tribute) => {
		setSelectedTribute(tribute);
		document.body.style.overflow = "hidden";
	}, []);

	const closeTribute = useCallback(() => {
		setSelectedTribute(null);
		document.body.style.overflow = "";
	}, []);

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") closeTribute();
		};
		document.addEventListener("keydown", handleKeyDown);
		return () => document.removeEventListener("keydown", handleKeyDown);
	}, [closeTribute]);

	return (
		<div id="tributes" className={styles.tributes}>
			<div className={styles.inner}>
				<ScrollReveal>
					<p className="section-label">Notes for the Book</p>
					<h2 className="section-title">
						Words Written <em>for Her</em>
					</h2>
				</ScrollReveal>
				<div className={styles.tributesGrid}>
					{tributes.map((tribute) => (
						<ScrollReveal key={tribute.author}>
							<TributeCard tribute={tribute} onClick={() => openTribute(tribute)} />
						</ScrollReveal>
					))}
				</div>
			</div>
			<TributeModal tribute={selectedTribute} onClose={closeTribute} />
		</div>
	);
}
