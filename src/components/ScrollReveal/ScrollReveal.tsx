"use client";

import { useEffect, useRef } from "react";

interface ScrollRevealProps {
	children: React.ReactNode;
	className?: string;
}

export default function ScrollReveal({ children, className = "" }: ScrollRevealProps) {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;

		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						entry.target.classList.add("visible");
						observer.unobserve(entry.target);
					}
				}
			},
			{ threshold: 0.1 },
		);

		observer.observe(el);

		return () => observer.disconnect();
	}, []);

	return (
		<div ref={ref} className={`reveal ${className}`}>
			{children}
		</div>
	);
}
