"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";
import type { WallMessage } from "@/types";
import styles from "./RememberWall.module.css";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function formatDate(iso: string): string {
	const d = new Date(iso);
	return `${MONTHS[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
}

export default function RememberWall() {
	const [messages, setMessages] = useState<WallMessage[]>([]);
	const [loading, setLoading] = useState(true);
	const [submitLoading, setSubmitLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [name, setName] = useState("");
	const [relation, setRelation] = useState("");
	const [text, setText] = useState("");
	const [showSuccess, setShowSuccess] = useState(false);
	const wallRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		let cancelled = false;

		async function load() {
			setLoading(true);
			setError(null);

			try {
				const res = await fetch("/api/wall-messages?limit=200", { cache: "no-store" });
				const json = (await res.json()) as { messages?: WallMessage[]; error?: string };

				if (!res.ok) throw new Error(json.error || "Failed to load messages.");

				if (!cancelled) setMessages(json.messages ?? []);
			} catch (err) {
				const message = err instanceof Error ? err.message : "Failed to load messages.";
				if (!cancelled) setError(message);
			} finally {
				if (!cancelled) setLoading(false);
			}
		}

		void load();

		return () => {
			cancelled = true;
		};
	}, []);

	const handleSubmit = useCallback(async () => {
		if (submitLoading) return;

		if (!name.trim() || !text.trim()) {
			alert("Please enter your name and a message.");
			return;
		}

		setSubmitLoading(true);
		setError(null);

		try {
			const res = await fetch("/api/wall-messages", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					name: name.trim(),
					relation,
					text: text.trim(),
				}),
			});

			const json = (await res.json()) as { message?: WallMessage; error?: string };

			if (!res.ok) throw new Error(json.error || "Failed to submit message.");
			if (!json.message) throw new Error("Missing message in response.");

			setMessages((prev) => [json.message as WallMessage, ...prev]);
			setName("");
			setRelation("");
			setText("");
			setShowSuccess(true);

			setTimeout(() => setShowSuccess(false), 4000);
			setTimeout(() => {
				wallRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
			}, 300);
		} catch (err) {
			const message = err instanceof Error ? err.message : "Failed to submit message.";
			setError(message);
		} finally {
			setSubmitLoading(false);
		}
	}, [name, relation, text, submitLoading]);

	return (
		<section id="remember" className={styles.remember}>
			<ScrollReveal>
				<p className="section-label">Community</p>
				<h2 className="section-title">
					Leave a <em>Memory</em>
				</h2>
				<p className={styles.rememberIntro}>
					If you knew Kamala, were touched by her words, or simply want to leave a note for her
					family — this space is for you.
				</p>
			</ScrollReveal>

			<ScrollReveal>
				<div className={styles.rememberForm}>
					<div className={styles.formRow}>
						<div className={styles.formGroup}>
							<label htmlFor="msg-name">Your Name</label>
							<input
								type="text"
								id="msg-name"
								placeholder="Your name"
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
						</div>
						<div className={styles.formGroup}>
							<label htmlFor="msg-relation">How did you know her?</label>
							<select
								id="msg-relation"
								value={relation}
								onChange={(e) => setRelation(e.target.value)}
							>
								<option value="">Select (optional)</option>
								<option>Family</option>
								<option>Friend</option>
								<option>Colleague</option>
								<option>Former student</option>
								<option>Reader of her work</option>
								<option>Neighbor</option>
								<option>Other</option>
							</select>
						</div>
					</div>
					<div className={styles.formGroup}>
						<label htmlFor="msg-text">Your message</label>
						<textarea
							id="msg-text"
							placeholder="Share a memory, a thought, or a note for her family..."
							maxLength={500}
							value={text}
							onChange={(e) => setText(e.target.value)}
						/>
						<div className={styles.charCount}>{text.length} / 500</div>
					</div>
					<button className={styles.submitBtn} onClick={handleSubmit} type="button">
						{submitLoading ? "Submitting..." : "Leave Your Note"}
					</button>
					{error && <div className={styles.errorMsg}>{error}</div>}
					<div className={`${styles.successMsg} ${showSuccess ? styles.successMsgVisible : ""}`}>
						&#x2726; Thank you. Your memory has been added to the wall below.
					</div>
				</div>
			</ScrollReveal>

			{!loading && messages.length > 0 && (
				<div>
					<p className={styles.wallHeading}>Memories left by those who loved her</p>
					<p className={styles.wallCount}>
						{messages.length === 1 ? "1 memory shared" : `${messages.length} memories shared`}
					</p>
				</div>
			)}

			<div className={styles.messagesWall} ref={wallRef}>
				{loading ? (
					<div className={styles.emptyWall}>Loading memories...</div>
				) : messages.length === 0 ? (
					<div className={styles.emptyWall}>Be the first to leave a memory for Mini...</div>
				) : (
					messages.map((msg) => (
						<div className={styles.messageCard} key={msg.id}>
							<div className={styles.messageText}>&ldquo;{msg.text}&rdquo;</div>
							<div className={styles.messageMeta}>
								<span className={styles.messageName}>{msg.name}</span>
								{msg.relation && (
									<>
										{" "}
										&middot; <em>{msg.relation}</em>
									</>
								)}
								<br />
								<span className={styles.messageDate}>{formatDate(msg.created_at)}</span>
							</div>
						</div>
					))
				)}
			</div>
		</section>
	);
}
