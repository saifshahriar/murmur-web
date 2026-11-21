import { Inter } from "next/font/google";
import Link from "next/link";
import type { ReactNode } from "react";
import styles from "../_styles/auth.module.css";
import BrandPanel from "./brand-panel";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

export default function AuthShell({ children }: { children: ReactNode }) {
	return (
		<div className={`${styles.page} ${inter.variable}`}>
			<main className={styles.card}>
				<BrandPanel />
				<section className={styles.form}>
					<Link href="/" className={styles.backHome}>
						<svg
							viewBox="0 0 24 24"
							width="16"
							height="16"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							aria-hidden="true"
						>
							<line x1="19" y1="12" x2="5" y2="12" />
							<polyline points="12 19 5 12 12 5" />
						</svg>
						Back to home
					</Link>
					{children}
				</section>
			</main>
		</div>
	);
}
