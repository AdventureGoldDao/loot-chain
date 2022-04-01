import { pageWithLayout } from "../src/utils/page/pageInLayout";
import { Layout } from "../src/layout";
import { Home } from "../src/pages/home";
import { Sonet } from "../src/pages/sonet";

const Index = pageWithLayout(
	() => <Home />,
	() => <Layout title="AGLD" description="The Incentivization token for the Lootverse" />
);

export default Index;
