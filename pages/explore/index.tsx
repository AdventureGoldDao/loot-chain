import { FC } from "react";
import styles from "../../src/pages/home/Home.module.scss";
import { pageWithLayout } from "../../src/utils/page/pageInLayout";
import { Layout } from "../../src/layout";
import img from "./upcoming.png";
type HomeType = {};

export const Explore: FC<HomeType> = () => {
	return (
		<>
			<section className={styles.component}>
				<div className={styles.body}>
					<div className={styles.explore}>
						<img src={img} className={styles.imgWrapper} alt="icon" />
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
