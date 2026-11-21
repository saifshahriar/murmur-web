import { Suspense } from "react";

type AboutPageProps = {
	params: Promise<{ id: string }>;
};

const UserContent = async ({ params }: AboutPageProps) => {
	const { id } = await params;

	return <p>Page is dynamic: {id}</p>;
};

const AboutPage = ({ params }: AboutPageProps) => {
	return (
		<Suspense fallback={<p>Loading user...</p>}>
			<UserContent params={params} />
		</Suspense>
	);
};

export default AboutPage;
