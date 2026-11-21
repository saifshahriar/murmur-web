import type { Metadata } from "next";
import AuthShell from "../_components/auth-shell";
import styles from "../_styles/auth.module.css";
import LoginForm from "./login-form";

export const metadata: Metadata = {
	title: "Murmur - Log in",
	description: "Sign in to continue to Murmur.",
};

export default function LoginPage() {
	return (
		<AuthShell>
			<h1>Welcome back</h1>
			<p className={styles.subtitle}>Sign in to continue to Murmur</p>

			<LoginForm />
		</AuthShell>
	);
}
