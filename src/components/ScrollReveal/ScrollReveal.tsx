"use client";

import { useEffect, useRef } from "react";

interface ScrollRevealProps {
	children: React.ReactNode;
	className?: string;
}

type RevealCallback = (entry: IntersectionObserverEntry, observer: IntersectionObserver) => void;

const revealCallbacks = new Map<Element, RevealCallback>();
let sharedObserver: IntersectionObserver | null = null;

function getSharedObserver() {
	if (sharedObserver) return sharedObserver;

	sharedObserver = new IntersectionObserver(
		(entries, observer) => {
			for (const entry of entries) {
				revealCallbacks.get(entry.target)?.(entry, observer);
			}
		},
		{ threshold: 0.1 },
	);

	return sharedObserver;
}

function releaseSharedObserver() {
	if (!sharedObserver || revealCallbacks.size !== 0) return;
	sharedObserver.disconnect();
	sharedObserver = null;
}

export default function ScrollReveal({ children, className = "" }: ScrollRevealProps) {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;

		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			el.classList.add("visible");
			return;
		}

		const observer = getSharedObserver();
		const revealOnIntersect: RevealCallback = (entry, currentObserver) => {
			if (!entry.isIntersecting) return;
			entry.target.classList.add("visible");
			currentObserver.unobserve(entry.target);
			revealCallbacks.delete(entry.target);
			releaseSharedObserver();
		};

		revealCallbacks.set(el, revealOnIntersect);
		observer.observe(el);

		return () => {
			revealCallbacks.delete(el);
			observer.unobserve(el);
			releaseSharedObserver();
		};
	}, []);

	return (
		<div ref={ref} className={`reveal ${className}`}>
			{children}
		</div>
	);
}
