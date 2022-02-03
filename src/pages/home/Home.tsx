import { FC } from "react";
import styles from "./Home.module.scss";
import { Body1 } from "../../ui/typography";
import bodyImg1 from "./assets/body1_img1.png";
import bodyImg2 from "./assets/body1_img2.png";
import line from "./assets/line.png";
import bridge from "./assets/bridge.png";
import dance from "./assets/dance.png";
import idea from "./assets/idea.png";
import openWindow from "./assets/openWindow.png";
import { useWindowSize } from "../../hooks/use-window-size";
import { useControlPopUp } from "../../ui/pop-up-container";

type HomeType = {};

export const Home: FC<HomeType> = () => {
	const windowHeight = useWindowSize()[1];

	const { popUp, close, toggle } = useControlPopUp();

	return (
		<>
			<section className={styles.component}>
				<div className={styles.body}>
					<div className={styles.wrapper}>
						<Body1 className={styles.body1}>
							<img className={styles.img1} src={bodyImg1} />
							<p className={styles.text}>
								We are a popping <br />
								community of singles
								<br />
								meeting through crypto.
								<br />
								<button className={styles.button}>Join Club</button>
							</p>
							<img className={styles.img2} src={bodyImg2} />
						</Body1>
						<div className={styles.body2}>
							<img className={styles.line} src={line} />
							<div className={styles.body2_content}>
								<p className={styles.body2_title}>Our Mission</p>
								<p className={styles.body2_text}>
									We build meaningful bonds in an
									<br />
									exclusive community based on
									<br />
									passionate interests.
									<br />
									Our members mingle in a safe
									<br />
									environment free from <br />
									judgement and surrounded by
									<br />
									like-minded individuals.
									<br />
								</p>
							</div>
							<img className={styles.idea} src={idea} />
						</div>
					</div>
					<div className={styles.body2}>
						<img src={bridge} className={styles.bridge} />
						<img src={dance} className={styles.dance} />
						<div className={styles.body3_content}>
							<p className={styles.body3_title}>Exclusively in New York City</p>
							<p className={styles.body3_text}>
								We are a group of single New Yorkers bringing
								<br />
								virtual to reality from all over the world.
								<br />
								In the next generation, we believe the most
								<br />
								successful relationships will come from strong
								<br />
								communities of shared interests.
								<br />
								Our duty is to help facilitate mingling through
								<br />
								community-based in-person and virtual events.
								<br />
							</p>
							<img src={openWindow} className={styles.win} />
						</div>
					</div>
				</div>
				<div className={styles.footer}>
					<p className={styles.footer_title}>Stay in touch with us</p>
					<p className={styles.footer_text}>
						Join our community in the following Discord link to
						<br />
						begin your journey
					</p>
					<button style={{ marginTop: "0.5rem" }} className={styles.button}>
						Join Club
					</button>
				</div>
			</section>
			{/*{popUp.defined && <LaunchPopUp control={popUp} close={close}/>}*/}
		</>
	);
};
