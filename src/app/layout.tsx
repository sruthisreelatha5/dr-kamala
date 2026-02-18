import type { Metadata } from "next";
import { Cormorant_Garamond, Lato } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
	variable: "--font-serif",
	subsets: ["latin"],
	weight: ["300", "400", "500", "600"],
	style: ["normal", "italic"],
});

const lato = Lato({
	variable: "--font-sans",
	subsets: ["latin"],
	weight: ["300", "400"],
});

export const metadata: Metadata = {
	title: "Dr. R. Kamala \u2014 The Hall of Silence",
	description:
		"A memorial tribute to Dr. R. Kamala \u2014 Daughter, Mother, Aunt, Friend, Teacher. The light of every room she ever entered.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${cormorant.variable} ${lato.variable}`}>
			<body>{children}</body>
		</html>
	);
}
