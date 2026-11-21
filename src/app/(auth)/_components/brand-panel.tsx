import styles from "../_styles/auth.module.css";

export default function BrandPanel() {
	return (
		<section className={styles.brand}>
			<span className={styles.badge}>
				<svg
					viewBox="0 0 24 24"
					width="30"
					height="30"
					fill="currentColor"
					aria-hidden="true"
				>
					<path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
				</svg>
			</span>
			<h2 className={styles.brandName}>Murmur</h2>
			<p className={styles.tagline}>
				Join the conversation. Share what&apos;s happening in your
				world.
			</p>
			<ul className={styles.features}>
				<li>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
						aria-hidden="true"
					>
						<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
						<path d="M16 3.128a4 4 0 0 1 0 7.744" />
						<path d="M22 21v-2a4 4 0 0 0-3-3.87" />
						<circle cx="9" cy="7" r="4" />
					</svg>
					Follow your interests
				</li>
				<li>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
						aria-hidden="true"
					>
						<path d="M2 10v3" />
						<path d="M6 6v11" />
						<path d="M10 3v18" />
						<path d="M14 8v7" />
						<path d="M18 5v13" />
						<path d="M22 10v3" />
					</svg>
					Hear what people are talking about
				</li>
				<li>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
						aria-hidden="true"
					>
						<path d="M16 10a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 14.286V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
						<path d="M20 9a2 2 0 0 1 2 2v10.286a.71.71 0 0 1-1.212.502l-2.202-2.202A2 2 0 0 0 17.172 19H10a2 2 0 0 1-2-2v-1" />
					</svg>
					Join the conversation
				</li>
			</ul>
		</section>
	);
}
