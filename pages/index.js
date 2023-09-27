import { pageWithLayout } from "../src/utils/page/pageInLayout";
import { Layout } from "../src/layout";
import { Home } from "../src/pages/home";
// import { Explore } from "../pages/explore";

const Index = pageWithLayout(
	() => <Home />,
	// () => <Explore />,
	() => <Layout title="AGLD" description="Building the Lootverse Infrastructure" />
);

export default Index;
