import React from "react";
import { Layout } from "../../src/layout";
import { pageWithLayout } from "../../src/utils/page/pageInLayout";
import iconLove from "./images/icon_love.svg";
import iconArrow from "./images/icon_arrow.svg";
import game1 from "./images/game1.png";
import game2 from "./images/game2.png";
import game3 from "./images/game3.png";
import game4 from "./images/game4.jpg";
import game5 from "./images/game5.jpg";
import game6 from "./images/game6.jpg";
import game7 from "./images/game7.jpg";
import game8 from "./images/game8.jpg";
import game9 from "./images/game9.jpg";
import game10 from "./images/game10.jpg";

import styles from "./styles.module.scss";
const toolsList = [
	{
		name: "ggQuest",
		des: `We're building the ultimate onchain progression system for web3 gamers.`,
		image: game1,
		link: "http://discord.gg/sdeuuD27pD",
	},
	{
		name: "ARPA Randcast",
		des: `Randcast is an on-chain verifiable random number generator with a suite of APIs for different use cases, including NFT allocation, game attribute generation, and combat outcomes. Randcast is built to empower a fair and creative metaverse.`,
		image: game9,
		link: "https://www.arpanetwork.io/en-US/randcast",
	},
	{
		name: "Dark Forest ARES",
		des: `Dark Forest Community Rounds with Novel Game Mechanics Powered by DF Archon.`,
		image: game10,
		link: "https://dfares.vercel.app/",
	},
];
const gamesList = [
	{
		name: "Jokerace",
		des: `contests for communities to make,execute, and reward decisions.`,
		image: game2,
		link: "https://jokerace.xyz/",
	},
];
const infrastructureList = [
	{
		name: "ARPA",
		des: `ARPA Network is a new system architecture of threshold signature scheme (TSS). With an innovative protocol design and multiple unique mechanisms, ARPA Network adapts the threshold BLS scheme for blockchain.`,
		image: game3,
		link: "https://www.arpanetwork.io/",
	},
	{
		name: "Caldera",
		des: `Caldera makes it easy to launch performant, customizable blockchain rollups. No code required.`,
		image: game5,
		link: "https://caldera.xyz/",
	},
	{
		name: "STP",
		des: `STP optimizes Web3 for builders, communities and projects.`,
		image: game8,
		link: "https://www.stp.network/",
	},
	{
		name: "Ancient8",
		des: `GameFi Infrastructure Developer.`,
		image: game6,
		link: "https://ancient8.gg/",
	},
];
const defiList = [
	{
		name: "Mighty Swap",
		des: `Swap or provide liquidity on the Mighty Swap.`,
		image: game4,
		link: "https://stately-rabanadas-a5fcc8.netlify.app/#/swap",
	},
	{
		name: "RAI Finance",
		des: `RAI Finance is a decentralized finance application that provides digital asset users with social trading system, aggregated swap on heterogeneous blockchains.`,
		image: game7,
		link: "https://rai.finance/",
	},
];

export function Card({ item }) {
	const goToLink = (link) => {
		window.open(link);
	};

	return (
		<div
			className={styles.card}
			onClick={() => {
				goToLink(item.link);
			}}
		>
			<div className={styles.card_cover}>
				<img src={item.image}></img>
			</div>
			<div className={styles.card_info}>
				<div className={styles.card_name}>{item.name}</div>
				<div className={styles.card_des}>{item.des}</div>
			</div>
		</div>
	);
}

export function Ecosystem() {
	const goToGoogleForm = () => {
		window.open("https://forms.gle/Ue9avjswj8GJ1ZUi9");
	};
	return (
		<section className={styles.component}>
			<div className={styles.body}>
				<div className={styles.ecosystem}>
					<div className={styles.title}>Ecosystem Partners</div>
					<div className={styles.main}>
						<div className={styles.main_left}>
							<div className={styles.nav_box}>
								<a href="#games" className={styles.nav_item}>
									<span className={styles.item_name}>Games</span>
									<span className={styles.item_num}>{gamesList.length}</span>
								</a>
								<a href="#tools" className={styles.nav_item}>
									<span className={styles.item_name}>Tools & Resources</span>
									<span className={styles.item_num}>{toolsList.length}</span>
								</a>
								<a href="#infrastructure" className={styles.nav_item}>
									<span className={styles.item_name}>Infrastructure</span>
									<span className={styles.item_num}>{infrastructureList.length}</span>
								</a>
								<a href="#defi" className={styles.nav_item}>
									<span className={styles.item_name}>DeFi</span>
									<span className={styles.item_num}>{defiList.length}</span>
								</a>
							</div>
							<div className={styles.form_box} onClick={goToGoogleForm}>
								<img className={styles.icon_love} src={iconLove} alt="icon"></img>
								<div className={styles.text}>Become AGLD</div>
								<div className={styles.text_green}>PARTNER</div>
								<div className={styles.text_sub}>
									Building the future of blockchain gaming together.
								</div>
								<button className={styles.btn_submit} onClick={goToGoogleForm}>
									Submit
								</button>
								<img className={styles.icon_arrow} src={iconArrow} alt="icon"></img>
							</div>
						</div>
						<div className={styles.main_right}>
							<div id="games" className={styles.category}>
								<div className={styles.category_title}>Games</div>
								<div className={styles.category_list}>
									{gamesList.map((item) => (
										<Card item={item}></Card>
									))}
								</div>
							</div>
							{toolsList.length > 0 && (
								<div id="tools" className={styles.category}>
									<div className={styles.category_title}>Tools & Resources</div>
									<div className={styles.category_list}>
										{toolsList.map((item) => (
											<Card item={item}></Card>
										))}
									</div>
								</div>
							)}
							{infrastructureList.length > 0 && (
								<div id="infrastructure" className={styles.category}>
									<div className={styles.category_title}>Infrastructure</div>
									<div className={styles.category_list}>
										{infrastructureList.map((item) => (
											<Card item={item}></Card>
										))}
									</div>
								</div>
							)}
							{defiList.length > 0 && (
								<div id="defi" className={styles.category}>
									<div className={styles.category_title}>DeFi</div>
									<div className={styles.category_list}>
										{defiList.map((item) => (
											<Card item={item}></Card>
										))}
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
const Index = pageWithLayout(
	() => <Ecosystem />,
	() => <Layout title="AGLD" description="The Incentivization token for the Lootverse" />
);

export default Index;
