import type { Metadata } from "next";
import AuthShell from "../_components/auth-shell";
import styles from "../_styles/auth.module.css";
import RegisterForm from "./register-form";

export const metadata: Metadata = {
	title: "Murmur - Create account",
	description: "Create your Murmur account and join the conversation.",
};

export default function RegisterPage() {
	return (
		<AuthShell>
			<h1>Create your account</h1>
			<p className={styles.subtitle}>
				Join Murmur and start the conversation
			</p>

			<RegisterForm />
		</AuthShell>
	);
}
