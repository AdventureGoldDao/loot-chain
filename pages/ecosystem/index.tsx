import React from "react";
import { Layout } from "../../src/layout";
import { pageWithLayout } from "../../src/utils/page/pageInLayout";
import iconLove from "./images/icon_love.svg";
import iconArrow from "./images/icon_arrow.svg";
import game1 from "./images/game1.png";
import game2 from "./images/game2.png";
import game3 from "./images/game3.png";

import styles from "./styles.module.scss";
const gamesList = [
	{
		name: "ggQuest",
		des: `We're building the ultimate onchainprogression system for web3 gamers.`,
		image: game1,
		link: "https://jokerace.xyz/",
	},
	{
		name: "Jokerace",
		des: `Contests for communities to make,executer and reward decisions.`,
		image: game2,
		link: "http://discord.gg/sdeuuD27pD",
	},
	{
		name: "ARPA",
		des: `ARPA Network is a new system architecture of threshold signature scheme (TSS). With an innovative protocol design and multiple unique mechanisms, ARPA Network adapts the threshold BLS scheme for blockchain.`,
		image: game3,
		link: "https://www.arpanetwork.io/",
	},
	{
		name: "ARPA",
		des: `ARPA Network is a new system architecture of threshold signature scheme (TSS). With an innovative protocol design and multiple unique mechanisms, ARPA Network adapts the threshold BLS scheme for blockchain.`,
		image: game3,
		link: "https://www.arpanetwork.io/",
	},
	{
		name: "ARPA",
		des: `ARPA Network is a new system architecture of threshold signature scheme (TSS). With an innovative protocol design and multiple unique mechanisms, ARPA Network adapts the threshold BLS scheme for blockchain.`,
		image: game3,
		link: "https://www.arpanetwork.io/",
	},
	{
		name: "ARPA",
		des: `ARPA Network is a new system architecture of threshold signature scheme (TSS). With an innovative protocol design and multiple unique mechanisms, ARPA Network adapts the threshold BLS scheme for blockchain.`,
		image: game3,
		link: "https://www.arpanetwork.io/",
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
		window.open(
			"https://docs.google.com/spreadsheets/d/1uoArzIFb84MlX4lpV-xyVsBpbDvhaaegiGal-hfRd9o/edit?usp=sharing"
		);
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
									<span className={styles.item_num}>3</span>
								</a>
								<a href="#nft" className={styles.nav_item}>
									<span className={styles.item_name}>NFT</span>
									<span className={styles.item_num}>3</span>
								</a>
								<a href="#daos" className={styles.nav_item}>
									<span className={styles.item_name}>DAOs</span>
									<span className={styles.item_num}>3</span>
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
							<div id="nft" className={styles.category}>
								<div className={styles.category_title}>NFT</div>
								<div className={styles.category_list}>
									{gamesList.map((item) => (
										<Card item={item}></Card>
									))}
								</div>
							</div>
							<div id="daos" className={styles.category}>
								<div className={styles.category_title}>DAOs</div>
								<div className={styles.category_list}>
									{gamesList.map((item) => (
										<Card item={item}></Card>
									))}
								</div>
							</div>
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
