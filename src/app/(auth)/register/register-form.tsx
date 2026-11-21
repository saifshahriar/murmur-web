"use client";

import Link from "next/link";
import { type SubmitEvent, useState } from "react";
import PasswordInput from "../_components/password-input";
import styles from "../_styles/auth.module.css";

export default function RegisterForm() {
	const [showErrors, setShowErrors] = useState(false);

	const handleRegister = (event: SubmitEvent<HTMLFormElement>) => {
		event.preventDefault();

		const data = new FormData(event.currentTarget);

		console.log(data.get("name"));
		console.log(data.get("email"));
		console.log(data.get("password"));
	};

	return (
		<>
			<form
				className={showErrors ? styles.showErrors : undefined}
				onInvalidCapture={() => setShowErrors(true)}
				onSubmit={handleRegister}
			>
				<div className={styles.field}>
					<label htmlFor="name">Name</label>
					<div className={styles.inputWrap}>
						<svg
							viewBox="0 0 24 24"
							width="18"
							height="18"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							aria-hidden="true"
						>
							<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
							<circle cx="12" cy="7" r="4" />
						</svg>
						<input
							type="text"
							id="name"
							name="name"
							placeholder="Your name"
							autoComplete="name"
							required
						/>
					</div>
					<p className={styles.fieldError}>Please enter your name.</p>
				</div>

				<div className={styles.field}>
					<label htmlFor="email">Email</label>
					<div className={styles.inputWrap}>
						<svg
							viewBox="0 0 24 24"
							width="18"
							height="18"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							aria-hidden="true"
						>
							<rect x="2" y="4" width="20" height="16" rx="2" />
							<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
						</svg>
						<input
							type="email"
							id="email"
							name="email"
							placeholder="you@example.com"
							autoComplete="email"
							required
						/>
					</div>
					<p className={styles.fieldError}>
						Please enter a valid email address.
					</p>
				</div>

				<div className={styles.field}>
					<label htmlFor="password">Password</label>
					<PasswordInput
						id="password"
						name="password"
						placeholder="******"
						autoComplete="new-password"
						minLength={6}
					/>
					<p className={styles.fieldError}>
						Password must be at least 6 characters.
					</p>
				</div>

				<button type="submit" className={styles.loginBtn}>
					Create account
				</button>
			</form>

			<div className={styles.divider}>
				<span>or</span>
			</div>

			<Link href="/login" className={styles.signupBtn}>
				Log in
			</Link>

			<p className={styles.terms}>
				By creating an account you agree to our Terms of Service and
				Privacy Policy.
			</p>
		</>
	);
}
