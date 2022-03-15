import { pageWithLayout } from "../src/utils/page/pageInLayout";
import { Layout } from "../src/layout";
import { Home } from "../src/pages/home";
import { Sonet } from "../src/pages/sonet";

const Index = pageWithLayout(
	() => <Sonet />,
	() => (
		<Layout
			title="Bubble DAO"
			description="A poppin’ community of singles meeting through crypto."
		/>
	)
);

export default Index;
