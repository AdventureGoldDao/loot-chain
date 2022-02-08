import { pageWithLayout } from "../src/utils/page/pageInLayout";
import { Layout } from "../src/layout";
import { Home } from "../src/pages/home";

const Index = pageWithLayout(
	() => <Home />,
	() => (
		<Layout
			title="Bubble DAO"
			description="A poppin’ community of singles meeting through crypto."
		/>
	)
);

export default Index;
