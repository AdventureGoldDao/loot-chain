import { pageWithLayout } from "../src/utils/page/pageInLayout";
import { Layout } from "../src/layout";
import { Home } from "../src/pages/home";
// import { Explore } from "../pages/explore";

const Index = pageWithLayout(
	() => <Home />,
	// () => <Explore />,
	() => <Layout title="AGLD" description="The Incentivization token for the Lootverse" />
);

export default Index;
