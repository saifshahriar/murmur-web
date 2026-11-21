"use client";

import Link from "next/link";
import { type SubmitEvent, useState } from "react";
import PasswordInput from "../_components/password-input";
import styles from "../_styles/auth.module.css";

export default function LoginForm() {
	const [showErrors, setShowErrors] = useState(false);

	const handleLogin = (event: SubmitEvent<HTMLFormElement>) => {
		event.preventDefault();

		const data = new FormData(event.currentTarget);

		console.log(data.get("email"));
		console.log(data.get("password"));
	};

	return (
		<>
			<form
				className={showErrors ? styles.showErrors : undefined}
				onInvalidCapture={() => setShowErrors(true)}
				onSubmit={handleLogin}
			>
				<div className={styles.field}>
					<label htmlFor="email">Email or username</label>
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
							type="email"
							id="email"
							name="email"
							placeholder="you@example.com"
							autoComplete="username"
							required
						/>
					</div>
					<p className={styles.fieldError}>
						Please enter a valid email or username.
					</p>
				</div>

				<div className={styles.field}>
					<label htmlFor="password">Password</label>
					<PasswordInput
						id="password"
						name="password"
						placeholder="******"
						autoComplete="current-password"
						minLength={6}
					/>
					<p className={styles.fieldError}>
						Password must be at least 6 characters.
					</p>
				</div>

				<div className={styles.formRow}>
					<label className={styles.remember}>
						<input type="checkbox" name="remember" />
						<span>Remember me</span>
					</label>
					<button type="button" className={styles.forgot}>
						Forgot password?
					</button>
				</div>

				<button type="submit" className={styles.loginBtn}>
					Log in
				</button>
			</form>

			<div className={styles.divider}>
				<span>or</span>
			</div>

			<Link href="/register" className={styles.signupBtn}>
				Create account
			</Link>

			<p className={styles.terms}>
				By signing in you agree to our Terms of Service and Privacy
				Policy.
			</p>
		</>
	);
}
