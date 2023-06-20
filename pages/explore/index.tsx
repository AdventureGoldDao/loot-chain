import { FC } from "react";
import styles from "../../src/pages/home/Home.module.scss";
import { pageWithLayout } from "../../src/utils/page/pageInLayout";
import { Layout } from "../../src/layout";
type HomeType = {};

export const Explore: FC<HomeType> = () => {
	return (
		<>
			<section className={styles.component}>
				<div className={styles.body}>
					<div className={styles.explore}>
						<div className={styles.imgWrapper} />
					</div>
				</div>
			</section>
		</>
	);
};

const Index = pageWithLayout(
	() => <Explore />,
	() => <Layout title="AGLD" description="The Incentivization token for the Lootverse" />
);

export default Index;
