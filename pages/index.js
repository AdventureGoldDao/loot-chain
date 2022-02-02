import { pageWithLayout } from "../src/utils/page/pageInLayout";
import { Layout } from "../src/layout";
import { Home } from "../src/pages/home";

const Index = pageWithLayout(
	() => <Home />,
	() => <Layout title="Bubble" description="" />
);

export default Index;
