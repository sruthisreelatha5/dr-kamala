export default function KannikonnaArt() {
	return (
		<svg
			style={{
				position: "absolute",
				inset: 0,
				width: "100%",
				height: "100%",
				pointerEvents: "none",
				overflow: "visible",
			}}
			viewBox="0 0 1440 800"
			xmlns="http://www.w3.org/2000/svg"
			preserveAspectRatio="xMidYMid slice"
		>
			<defs>
				<radialGradient id="petal1" cx="40%" cy="30%" r="65%">
					<stop offset="0%" stopColor="#fffde8" />
					<stop offset="50%" stopColor="#f5e88a" />
					<stop offset="100%" stopColor="#e8d060" />
				</radialGradient>
				<radialGradient id="petal2" cx="40%" cy="30%" r="65%">
					<stop offset="0%" stopColor="#fffff0" />
					<stop offset="50%" stopColor="#f9f0a0" />
					<stop offset="100%" stopColor="#ede070" />
				</radialGradient>
				<radialGradient id="petal3" cx="40%" cy="30%" r="65%">
					<stop offset="0%" stopColor="#fdfde0" />
					<stop offset="50%" stopColor="#f2e878" />
					<stop offset="100%" stopColor="#e0cc55" />
				</radialGradient>
				<radialGradient id="bud1" cx="40%" cy="25%" r="70%">
					<stop offset="0%" stopColor="#f9f0b0" />
					<stop offset="100%" stopColor="#c8a830" />
				</radialGradient>
				<filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
					<feGaussianBlur stdDeviation="0.6" />
				</filter>
			</defs>

			{/* LEFT CLUSTER */}
			<g transform="translate(60, -10)" opacity="0.88">
				<path
					d="M 0 0 C 2 80 -4 160 3 280 C 6 340 -2 400 4 480"
					stroke="#9db870"
					strokeWidth="1.8"
					fill="none"
					strokeLinecap="round"
				/>
				<path d="M 1 60 C -18 90 -30 110 -28 140" stroke="#9db870" strokeWidth="1.2" fill="none" />
				<path d="M 0 60 C 16 88 26 108 24 136" stroke="#9db870" strokeWidth="1.2" fill="none" />
				<path
					d="M 2 110 C -20 138 -32 158 -30 188"
					stroke="#9db870"
					strokeWidth="1.1"
					fill="none"
				/>
				<path d="M 1 110 C 18 136 28 156 26 184" stroke="#9db870" strokeWidth="1.1" fill="none" />
				<path d="M 3 165 C -16 192 -26 212 -22 240" stroke="#9db870" strokeWidth="1" fill="none" />
				<path d="M 2 165 C 14 190 22 210 20 237" stroke="#9db870" strokeWidth="1" fill="none" />
				<path
					d="M 3 218 C -12 244 -20 264 -16 290"
					stroke="#9db870"
					strokeWidth="0.9"
					fill="none"
				/>
				<path d="M 3 218 C 11 242 17 262 15 287" stroke="#9db870" strokeWidth="0.9" fill="none" />
				<path d="M 4 270 C -8 296 -14 316 -10 340" stroke="#9db870" strokeWidth="0.8" fill="none" />
				<path d="M 3 270 C 8 294 12 314 10 338" stroke="#9db870" strokeWidth="0.8" fill="none" />
				<path d="M 3 320 C -6 346 -10 366 -6 390" stroke="#9db870" strokeWidth="0.7" fill="none" />
				<path d="M 4 320 C 6 344 9 364 7 387" stroke="#9db870" strokeWidth="0.7" fill="none" />
				<path d="M 4 370 C -4 395 -7 414 -4 436" stroke="#9db870" strokeWidth="0.6" fill="none" />
				<path d="M 4 370 C 5 393 7 412 5 434" stroke="#9db870" strokeWidth="0.6" fill="none" />

				{/* Cluster at ~60 left */}
				<g transform="translate(-28, 140)" filter="url(#soft)">
					<ellipse
						cx="0"
						cy="-10"
						rx="8"
						ry="11"
						fill="url(#petal1)"
						opacity="0.92"
						transform="rotate(-20)"
					/>
					<ellipse
						cx="9"
						cy="-6"
						rx="8"
						ry="11"
						fill="url(#petal2)"
						opacity="0.88"
						transform="rotate(30)"
					/>
					<ellipse
						cx="8"
						cy="5"
						rx="8"
						ry="11"
						fill="url(#petal1)"
						opacity="0.9"
						transform="rotate(80)"
					/>
					<ellipse
						cx="-1"
						cy="9"
						rx="8"
						ry="11"
						fill="url(#petal3)"
						opacity="0.87"
						transform="rotate(140)"
					/>
					<ellipse
						cx="-9"
						cy="3"
						rx="8"
						ry="11"
						fill="url(#petal2)"
						opacity="0.89"
						transform="rotate(200)"
					/>
					<circle cx="0" cy="0" r="4" fill="#c8940a" opacity="0.7" />
					<circle cx="0" cy="0" r="2" fill="#e8b020" opacity="0.9" />
				</g>
				{/* Cluster at ~60 right */}
				<g transform="translate(24, 136)" filter="url(#soft)">
					<ellipse cx="0" cy="-10" rx="7" ry="10" fill="url(#petal2)" opacity="0.9" />
					<ellipse
						cx="8"
						cy="-5"
						rx="7"
						ry="10"
						fill="url(#petal1)"
						opacity="0.86"
						transform="rotate(35)"
					/>
					<ellipse
						cx="7"
						cy="5"
						rx="7"
						ry="10"
						fill="url(#petal3)"
						opacity="0.88"
						transform="rotate(80)"
					/>
					<ellipse
						cx="-1"
						cy="8"
						rx="7"
						ry="10"
						fill="url(#petal1)"
						opacity="0.85"
						transform="rotate(140)"
					/>
					<ellipse
						cx="-8"
						cy="2"
						rx="7"
						ry="10"
						fill="url(#petal2)"
						opacity="0.87"
						transform="rotate(205)"
					/>
					<circle cx="0" cy="0" r="3.5" fill="#c08a0a" opacity="0.7" />
					<circle cx="0" cy="0" r="1.8" fill="#e0a818" opacity="0.9" />
				</g>
				{/* Cluster ~110 left */}
				<g transform="translate(-30, 188)" filter="url(#soft)">
					<ellipse cx="0" cy="-9" rx="8" ry="11" fill="url(#petal3)" opacity="0.9" />
					<ellipse
						cx="8"
						cy="-5"
						rx="8"
						ry="11"
						fill="url(#petal1)"
						opacity="0.86"
						transform="rotate(32)"
					/>
					<ellipse
						cx="7"
						cy="5"
						rx="8"
						ry="11"
						fill="url(#petal2)"
						opacity="0.88"
						transform="rotate(78)"
					/>
					<ellipse
						cx="-1"
						cy="9"
						rx="8"
						ry="11"
						fill="url(#petal3)"
						opacity="0.85"
						transform="rotate(145)"
					/>
					<ellipse
						cx="-8"
						cy="3"
						rx="8"
						ry="11"
						fill="url(#petal1)"
						opacity="0.87"
						transform="rotate(210)"
					/>
					<circle cx="0" cy="0" r="4" fill="#b87e08" opacity="0.7" />
				</g>
				{/* Cluster ~110 right */}
				<g transform="translate(26, 184)" filter="url(#soft)">
					<ellipse cx="0" cy="-8" rx="7" ry="10" fill="url(#petal1)" opacity="0.88" />
					<ellipse
						cx="7"
						cy="-4"
						rx="7"
						ry="10"
						fill="url(#petal3)"
						opacity="0.84"
						transform="rotate(36)"
					/>
					<ellipse
						cx="6"
						cy="5"
						rx="7"
						ry="10"
						fill="url(#petal2)"
						opacity="0.86"
						transform="rotate(82)"
					/>
					<ellipse
						cx="-1"
						cy="8"
						rx="7"
						ry="10"
						fill="url(#petal1)"
						opacity="0.83"
						transform="rotate(148)"
					/>
					<ellipse
						cx="-7"
						cy="2"
						rx="7"
						ry="10"
						fill="url(#petal3)"
						opacity="0.85"
						transform="rotate(212)"
					/>
					<circle cx="0" cy="0" r="3.5" fill="#c09010" opacity="0.65" />
				</g>
				{/* Cluster ~165 left */}
				<g transform="translate(-22, 240)" filter="url(#soft)">
					<ellipse cx="0" cy="-9" rx="7" ry="10" fill="url(#petal2)" opacity="0.85" />
					<ellipse
						cx="7"
						cy="-4"
						rx="7"
						ry="10"
						fill="url(#petal1)"
						opacity="0.81"
						transform="rotate(34)"
					/>
					<ellipse
						cx="6"
						cy="5"
						rx="7"
						ry="10"
						fill="url(#petal3)"
						opacity="0.83"
						transform="rotate(80)"
					/>
					<ellipse
						cx="-1"
						cy="8"
						rx="7"
						ry="10"
						fill="url(#petal2)"
						opacity="0.80"
						transform="rotate(146)"
					/>
					<ellipse
						cx="-7"
						cy="2"
						rx="7"
						ry="10"
						fill="url(#petal1)"
						opacity="0.82"
						transform="rotate(208)"
					/>
					<circle cx="0" cy="0" r="3" fill="#b87c08" opacity="0.6" />
				</g>
				{/* Buds lower section */}
				<g transform="translate(-16, 290)">
					<ellipse
						cx="0"
						cy="0"
						rx="5"
						ry="8"
						fill="url(#bud1)"
						opacity="0.75"
						transform="rotate(-10)"
					/>
				</g>
				<g transform="translate(15, 287)">
					<ellipse
						cx="0"
						cy="0"
						rx="5"
						ry="8"
						fill="url(#bud1)"
						opacity="0.72"
						transform="rotate(8)"
					/>
				</g>
				<g transform="translate(-10, 340)">
					<ellipse
						cx="0"
						cy="0"
						rx="4"
						ry="7"
						fill="url(#bud1)"
						opacity="0.65"
						transform="rotate(-5)"
					/>
				</g>
				<g transform="translate(10, 338)">
					<ellipse
						cx="0"
						cy="0"
						rx="4"
						ry="7"
						fill="url(#bud1)"
						opacity="0.62"
						transform="rotate(6)"
					/>
				</g>
				<g transform="translate(-6, 390)">
					<ellipse
						cx="0"
						cy="0"
						rx="3.5"
						ry="6"
						fill="url(#bud1)"
						opacity="0.55"
						transform="rotate(-8)"
					/>
				</g>
				<g transform="translate(7, 387)">
					<ellipse
						cx="0"
						cy="0"
						rx="3.5"
						ry="6"
						fill="url(#bud1)"
						opacity="0.52"
						transform="rotate(5)"
					/>
				</g>
				<g transform="translate(-4, 436)">
					<ellipse
						cx="0"
						cy="0"
						rx="3"
						ry="5"
						fill="url(#bud1)"
						opacity="0.42"
						transform="rotate(-4)"
					/>
				</g>
				<g transform="translate(5, 434)">
					<ellipse
						cx="0"
						cy="0"
						rx="3"
						ry="5"
						fill="url(#bud1)"
						opacity="0.40"
						transform="rotate(4)"
					/>
				</g>
			</g>

			{/* RIGHT CLUSTER */}
			<g transform="translate(1380, -10)" opacity="0.85">
				<path
					d="M 0 0 C -2 80 4 160 -3 280 C -6 340 2 400 -4 480"
					stroke="#9db870"
					strokeWidth="1.8"
					fill="none"
					strokeLinecap="round"
				/>
				<path d="M -1 55 C 18 84 30 104 28 134" stroke="#9db870" strokeWidth="1.2" fill="none" />
				<path d="M 0 55 C -16 82 -26 102 -24 130" stroke="#9db870" strokeWidth="1.2" fill="none" />
				<path d="M -2 108 C 20 136 32 156 30 186" stroke="#9db870" strokeWidth="1.1" fill="none" />
				<path
					d="M -1 108 C -18 134 -28 154 -26 182"
					stroke="#9db870"
					strokeWidth="1.1"
					fill="none"
				/>
				<path d="M -3 162 C 16 190 26 210 22 238" stroke="#9db870" strokeWidth="1" fill="none" />
				<path d="M -2 162 C -14 188 -22 208 -20 235" stroke="#9db870" strokeWidth="1" fill="none" />
				<path d="M -3 215 C 12 241 18 261 16 287" stroke="#9db870" strokeWidth="0.9" fill="none" />
				<path
					d="M -3 215 C -11 239 -17 259 -15 284"
					stroke="#9db870"
					strokeWidth="0.9"
					fill="none"
				/>
				<path d="M -4 268 C 8 294 13 314 11 338" stroke="#9db870" strokeWidth="0.8" fill="none" />
				<path
					d="M -3 268 C -8 292 -12 312 -10 336"
					stroke="#9db870"
					strokeWidth="0.8"
					fill="none"
				/>
				<path d="M -3 318 C 6 344 9 364 7 387" stroke="#9db870" strokeWidth="0.7" fill="none" />
				<path d="M -4 318 C -6 342 -9 362 -7 384" stroke="#9db870" strokeWidth="0.7" fill="none" />

				{/* Right side flower clusters */}
				<g transform="translate(28, 134)" filter="url(#soft)">
					<ellipse cx="0" cy="-10" rx="8" ry="11" fill="url(#petal2)" opacity="0.91" />
					<ellipse
						cx="8"
						cy="-5"
						rx="8"
						ry="11"
						fill="url(#petal1)"
						opacity="0.87"
						transform="rotate(32)"
					/>
					<ellipse
						cx="7"
						cy="5"
						rx="8"
						ry="11"
						fill="url(#petal3)"
						opacity="0.89"
						transform="rotate(78)"
					/>
					<ellipse
						cx="-1"
						cy="9"
						rx="8"
						ry="11"
						fill="url(#petal2)"
						opacity="0.86"
						transform="rotate(143)"
					/>
					<ellipse
						cx="-8"
						cy="3"
						rx="8"
						ry="11"
						fill="url(#petal1)"
						opacity="0.88"
						transform="rotate(207)"
					/>
					<circle cx="0" cy="0" r="4" fill="#c8940a" opacity="0.7" />
					<circle cx="0" cy="0" r="2" fill="#e8b020" opacity="0.9" />
				</g>
				<g transform="translate(-24, 130)" filter="url(#soft)">
					<ellipse cx="0" cy="-9" rx="7" ry="10" fill="url(#petal1)" opacity="0.89" />
					<ellipse
						cx="8"
						cy="-4"
						rx="7"
						ry="10"
						fill="url(#petal3)"
						opacity="0.85"
						transform="rotate(35)"
					/>
					<ellipse
						cx="7"
						cy="5"
						rx="7"
						ry="10"
						fill="url(#petal2)"
						opacity="0.87"
						transform="rotate(80)"
					/>
					<ellipse
						cx="-1"
						cy="8"
						rx="7"
						ry="10"
						fill="url(#petal1)"
						opacity="0.84"
						transform="rotate(144)"
					/>
					<ellipse
						cx="-8"
						cy="2"
						rx="7"
						ry="10"
						fill="url(#petal3)"
						opacity="0.86"
						transform="rotate(208)"
					/>
					<circle cx="0" cy="0" r="3.5" fill="#c08a0a" opacity="0.68" />
				</g>
				<g transform="translate(30, 186)" filter="url(#soft)">
					<ellipse cx="0" cy="-9" rx="8" ry="11" fill="url(#petal3)" opacity="0.88" />
					<ellipse
						cx="8"
						cy="-5"
						rx="8"
						ry="11"
						fill="url(#petal2)"
						opacity="0.84"
						transform="rotate(33)"
					/>
					<ellipse
						cx="7"
						cy="5"
						rx="8"
						ry="11"
						fill="url(#petal1)"
						opacity="0.86"
						transform="rotate(79)"
					/>
					<ellipse
						cx="-1"
						cy="9"
						rx="8"
						ry="11"
						fill="url(#petal3)"
						opacity="0.83"
						transform="rotate(145)"
					/>
					<ellipse
						cx="-8"
						cy="3"
						rx="8"
						ry="11"
						fill="url(#petal2)"
						opacity="0.85"
						transform="rotate(209)"
					/>
					<circle cx="0" cy="0" r="4" fill="#b87e08" opacity="0.68" />
				</g>
				<g transform="translate(-26, 182)" filter="url(#soft)">
					<ellipse cx="0" cy="-8" rx="7" ry="10" fill="url(#petal2)" opacity="0.86" />
					<ellipse
						cx="7"
						cy="-4"
						rx="7"
						ry="10"
						fill="url(#petal1)"
						opacity="0.82"
						transform="rotate(36)"
					/>
					<ellipse
						cx="6"
						cy="5"
						rx="7"
						ry="10"
						fill="url(#petal3)"
						opacity="0.84"
						transform="rotate(82)"
					/>
					<ellipse
						cx="-1"
						cy="8"
						rx="7"
						ry="10"
						fill="url(#petal2)"
						opacity="0.81"
						transform="rotate(147)"
					/>
					<ellipse
						cx="-7"
						cy="2"
						rx="7"
						ry="10"
						fill="url(#petal1)"
						opacity="0.83"
						transform="rotate(211)"
					/>
					<circle cx="0" cy="0" r="3.5" fill="#c09010" opacity="0.63" />
				</g>
				<g transform="translate(22, 238)" filter="url(#soft)">
					<ellipse cx="0" cy="-8" rx="7" ry="10" fill="url(#petal1)" opacity="0.83" />
					<ellipse
						cx="7"
						cy="-4"
						rx="7"
						ry="10"
						fill="url(#petal2)"
						opacity="0.79"
						transform="rotate(34)"
					/>
					<ellipse
						cx="6"
						cy="5"
						rx="7"
						ry="10"
						fill="url(#petal3)"
						opacity="0.81"
						transform="rotate(80)"
					/>
					<ellipse
						cx="-1"
						cy="8"
						rx="7"
						ry="10"
						fill="url(#petal1)"
						opacity="0.78"
						transform="rotate(146)"
					/>
					<ellipse
						cx="-7"
						cy="2"
						rx="7"
						ry="10"
						fill="url(#petal2)"
						opacity="0.80"
						transform="rotate(208)"
					/>
					<circle cx="0" cy="0" r="3" fill="#b87c08" opacity="0.58" />
				</g>
				{/* Buds right side */}
				<g transform="translate(16, 287)">
					<ellipse
						cx="0"
						cy="0"
						rx="5"
						ry="8"
						fill="url(#bud1)"
						opacity="0.72"
						transform="rotate(10)"
					/>
				</g>
				<g transform="translate(-15, 284)">
					<ellipse
						cx="0"
						cy="0"
						rx="5"
						ry="8"
						fill="url(#bud1)"
						opacity="0.70"
						transform="rotate(-8)"
					/>
				</g>
				<g transform="translate(11, 338)">
					<ellipse
						cx="0"
						cy="0"
						rx="4"
						ry="7"
						fill="url(#bud1)"
						opacity="0.62"
						transform="rotate(7)"
					/>
				</g>
				<g transform="translate(-10, 336)">
					<ellipse
						cx="0"
						cy="0"
						rx="4"
						ry="7"
						fill="url(#bud1)"
						opacity="0.60"
						transform="rotate(-6)"
					/>
				</g>
				<g transform="translate(7, 387)">
					<ellipse
						cx="0"
						cy="0"
						rx="3.5"
						ry="6"
						fill="url(#bud1)"
						opacity="0.52"
						transform="rotate(5)"
					/>
				</g>
				<g transform="translate(-7, 384)">
					<ellipse
						cx="0"
						cy="0"
						rx="3.5"
						ry="6"
						fill="url(#bud1)"
						opacity="0.50"
						transform="rotate(-4)"
					/>
				</g>
			</g>

			{/* Drifting fallen petals at bottom */}
			<g opacity="0.38">
				<ellipse cx="180" cy="760" rx="6" ry="9" fill="#f5e880" transform="rotate(-28 180 760)" />
				<ellipse cx="380" cy="785" rx="5" ry="8" fill="#f9f0a0" transform="rotate(18 380 785)" />
				<ellipse cx="620" cy="772" rx="6" ry="9" fill="#f5e870" transform="rotate(-14 620 772)" />
				<ellipse cx="820" cy="780" rx="5" ry="8" fill="#f8ee90" transform="rotate(22 820 780)" />
				<ellipse cx="1050" cy="768" rx="6" ry="9" fill="#f6e878" transform="rotate(-18 1050 768)" />
				<ellipse cx="1240" cy="788" rx="5" ry="8" fill="#f9f0a0" transform="rotate(12 1240 788)" />
			</g>
		</svg>
	);
}
