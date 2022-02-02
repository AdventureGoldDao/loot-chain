import { FC, CSSProperties } from "react";
import styles from "./Home.module.scss";
import { LaunchPopUp } from "../../modules/launch-pop-up";
import { Body1 } from "../../ui/typography";
import bodyImg1 from './assets/body1_img1.png'
import bodyImg2 from './assets/body1_img2.png'
import { useWindowSize } from "../../hooks/use-window-size";
import { useControlPopUp } from "../../ui/pop-up-container";

type HomeType = {};

export const Home: FC<HomeType> = () => {
	const windowHeight = useWindowSize()[1];

	const { popUp, close, toggle } = useControlPopUp();

	return (
		<>
			<section
				className={styles.component}
				style={{ "--window-height": windowHeight ? `${windowHeight}px` : "100vh" } as CSSProperties}
			>
				<div className={styles.footer}>
					<div className={styles.wrapper}>
						<div className={styles.texts}>
							<Body1 className={styles.body1}>
								<img className={styles.img1} src={bodyImg1}/>
								<p className={styles.text}>
									We are a popping community of singles meeting through crypto.
								</p>
								<img className={styles.img2} src={bodyImg2}/>
							</Body1>
						</div>
					</div>
				</div>
			</section>
			{popUp.defined && <LaunchPopUp control={popUp} close={close} />}
		</>
	);
};
