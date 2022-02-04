import { FC } from "react";
import styles from "./Home.module.scss";
import { Body1 } from "../../ui/typography";
import bodyImg1 from "./assets/body1_img1.png";
import bodyImg1Mobile from "./assets/body1_img1_mobile.png";
import bodyImg2 from "./assets/body1_img2.png";
import bodyImg2Mobile from "./assets/body1_img2_mobile.png";
import line from "./assets/line.png";
import line_mobile from "./assets/line_mobile.png";
import bridge from "./assets/bridge.png";
import dance from "./assets/dance.png";
import dance_mobile from "./assets/dance_mobile.png";
import idea from "./assets/idea.png";
import idea_mobile from "./assets/idea_mobile.png";
import openWindow from "./assets/openWindow.png";
import { useWindowSize } from "../../hooks/use-window-size";

type HomeType = {};

export const Home: FC<HomeType> = () => {
	const winHeight = useWindowSize()[0];
	return (
		<>
			<section className={styles.component}>
				<div className={styles.body}>
					<div className={styles.wrapper}>
						<Body1 className={styles.body1}>
							<img className={styles.img1} src={winHeight > 765 ? bodyImg1 : bodyImg1Mobile} />
							<p className={styles.text}>
								We are a popping <br />
								community of singles
								<br />
								meeting through crypto.
								<br />
								<button className={styles.button}>Join Club</button>
							</p>
							<img className={styles.img2} src={winHeight > 765 ? bodyImg2 : bodyImg2Mobile} />
						</Body1>
						<div className={styles.body2}>
							<img className={styles.line} src={winHeight > 768 ? line : line_mobile} />
							<div className={styles.body2_content}>
								<p className={styles.body2_title}>Our Mission</p>
								{winHeight > 758 ? (
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
								) : (
									<p className={styles.body2_text}>
										We build meaningful bonds
										<br />
										in an exclusive community
										<br />
										based on passionate
										<br />
										interests.
										<br />
										Our members mingle in a
										<br />
										safe environment free from
										<br />
										judgement and surrounded
										<br />
										by like-minded individuals.
										<br />
									</p>
								)}
							</div>
							<img className={styles.idea} src={winHeight > 768 ? idea : idea_mobile} />
						</div>
					</div>
					<div className={styles.body2}>
						{winHeight > 756 ? (
							<>
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
							</>
						) : (
							<>
								<div className={styles.body3_content}>
									<p className={styles.body3_title}>
										Exclusively in
										<br />
										New York City
									</p>
									<p className={styles.body3_text}>
										We are a group of single New
										<br />
										Yorkers bringing virtual to reality
										<br />
										from all over the world.
										<br />
										In the next generation, we believe
										<br />
										the most successful relationships
										<br />
										will come from strong communities
										<br />
										of shared interests.
										<br />
										Our duty is to help facilitate
										<br />
										mingling through community-based
										<br />
										in-person and virtual events.
										<br />
									</p>
								</div>
								<img src={dance_mobile} className={styles.bridge} />
								<img src={openWindow} className={styles.win} />
							</>
						)}
					</div>
				</div>
				<div className={styles.footer}>
					<p className={styles.footer_title}>Stay in touch with us</p>
					{winHeight > 768 ? (
						<p className={styles.footer_text}>
							Join our community in the following Discord link to
							<br />
							begin your journey
						</p>
					) : (
						<p className={styles.footer_text}>
							Join our community in the following
							<br />
							Discord link to begin your journey
						</p>
					)}

					<button
						style={{ marginTop: winHeight > 768 ? "0.5rem" : "8rem" }}
						className={styles.button}
					>
						Join Club
					</button>
				</div>
			</section>
			{/*{popUp.defined && <LaunchPopUp control={popUp} close={close}/>}*/}
		</>
	);
};
