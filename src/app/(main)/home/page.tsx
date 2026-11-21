import type { Metadata } from "next";
import HomePage from "../_components/home-page";

export const metadata: Metadata = {
	title: "Murmur — Home",
	description: "A calmer place to share what's happening.",
};

export default function HomeRoute() {
	return <HomePage />;
}
