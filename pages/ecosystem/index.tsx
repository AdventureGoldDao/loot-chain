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
import game11 from "./images/a1.jpg";
import game12 from "./images/a2.jpg";
import game13 from "./images/a3.png";
import game14 from "./images/game14.jpg";
import game15 from "./images/game15.jpg";
import game16 from "./images/game16.png";
import game17 from "./images/game17.jpg";
import game18 from "./images/game18.jpg";
import game19 from "./images/game19.jpg";
import game20 from "./images/game20.png";
import game21 from "./images/game21.jpg";
import game22 from "./images/game22.jpg";
import game23 from "./images/game23.png";
import game24 from "./images/game24.jpg";
import game25 from "./images/ancientForest.png";
import game26 from "./images/dice.png";

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
		name: "Jokerace",
		des: `contests for communities to make,execute, and reward decisions.`,
		image: game2,
		link: "https://jokerace.xyz/",
	},
];
const gamesList = [
	{
		name: "Ancient Forest",
		des: `Coming soon`,
		image: game25,
		link: "",
	},
	{
		name: "Dice Game",
		des: `Simple Fun dice rolling game, complete 6 moves to get a bonus, good luck!`,
		image: game26,
		link: "https://lootdice.xyz/",
	},
	{
		name: "Mighty Magic HEROES",
		des: `Welcome to the exciting world of "Mighty Magic"! In this captivating project, users have the opportunity to unleash their creativity and strategic prowess by participating in the minting and acquisition of unique Non-Fungible Tokens (NFTs) representing mighty heroes. These heroes are destined for epic battles, where their abilities, strengths, and weaknesses come into play.`,
		image: game11,
		link: "https://mighty-magic-dao.vercel.app/",
	},
	{
		name: "Land, Labor and Capitol (LLC)",
		des: `Tycoon style game where players can enjoy the gameplay with many different levels of involvement, from simply buying in-game stock in player-owned companies, to holding land in areas they think will appreciate in value, to actively managing a portfolio of firms and optimizing their operations based on their predictions of the macroeconomy.`,
		image: game12,
		link: "https://llcgame.io/",
	},
	// {
	// 	name: "Archloot",
	// 	des: `ArchLoot is a UGC P2E game that attempts to change the whole gamefi dynamics with its exceptional gameplay and unique infrastructure behind NFT assets. Basically a player assemble his/her own avatar with different parts (NFTs with a diversity of rarity, stats, looks and skills), then start the adventure. Game modes include PvE farm, group dungeons, 1 on 1 PvP, 3 on 3, clan wars, etc. The protocol behind the nft asset, EIP 4985 and BEP 129, which derives from loot, allows in game prop/parts level up, skill change, and interoperability of a single NFT.`,
	// 	image: game13,
	// 	link: "https://archloot.com/",
	// },
	{
		name: "LootCraft",
		des: `LootCraft is a fully on-chain 3D voxel world, where every block of the virtual space exists as part of the blockchain. Every action and interaction within the world, whether it's mining resources, crafting items, or building structures, occurs as a series of transactions on the Lootchain.`,
		image: game19,
		link: "https://lootcraft.buidl.day/",
	},
	{
		name: "Gabby World",
		des: `Gabby World's vision is to create a fully AIGC Autonomous World where users can raise their virtual alter egos, and guide and observe how they live and thrive in a decentralized open world with free will.`,
		image: game16,
		link: "https://www.gabby.world/",
	},
	{
		name: "Blade DAO",
		des: `A decentralized on-chain game ecosystem built by degens, for degens.`,
		image: game18,
		link: "https://www.bladedao.games/",
	},
	// {
	// 	name: "Chaquer",
	// 	des: `Chaquer is a fully on-chain real time strategy game. Chaquer's design is inspired by the Age of Empires series. `,
	// 	image: game23,
	// 	link: "http://chaquer.xyz",
	// },
	{
		name: "League of Thrones",
		des: `League of Thrones is a Modular On-Chain Strategy Game Played in DAOs.`,
		image: game24,
		link: "https://www.leagueofthrones.com",
	},
];
const infrastructureList = [
	{
		name: "Layerzero",
		des: `Layerzero is a user application (UA) configurable on-chain endpoint that runs a ULN. Layerzero relies on two parties to transfer messages between on-chain endpoints: the oracle and the relayer.`,
		image: game20,
		link: "https://layerzero.network/",
	},
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
		name: "Rabby Wallet",
		des: `Rabby Wallet is an open source browser plugin for the DeFi ecosystem, providing users with a better-to-use and more secure multi-chain experience.`,
		image: game15,
		link: "https://rabby.io/",
	},
	{
		name: "CARV",
		des: `CARV is building ID infrastructure focused on gaming, enabling players with achievement display, semantic social, and access to gaming premiums.`,
		image: game14,
		link: "https://carv.io/",
	},
];
const defiList = [
	{
		name: "Mighty Swap",
		des: `Swap or provide liquidity on the Mighty Swap.`,
		image: game4,
		link: "https://swap.lootchain.com/#/swap",
	},
	{
		name: "RAI Finance",
		des: `RAI Finance is a decentralized finance application that provides digital asset users with social trading system, aggregated swap on heterogeneous blockchains.`,
		image: game7,
		link: "https://rai.finance/",
	},
];
const guildsList = [
	{
		name: "Dark Forest ARES",
		des: `Dark Forest Community Rounds with Novel Game Mechanics Powered by DF Archon.`,
		image: game10,
		link: "https://dfares.vercel.app/",
	},
	{
		name: "Ancient8",
		des: `GameFi Infrastructure Developer.`,
		image: game6,
		link: "https://ancient8.gg/",
	},
	{
		name: "Despread",
		des: `DeSpread is a consulting firm specializing in Web3 & blockchain. We're contributing to Web3's mass adoption by supporting the growth of various startups and protocols.`,
		image: game17,
		link: "https://despread.io/",
	},
	{
		name: "Composable Labs",
		des: `Composable Labs where you can explore the world of Fully Onchain Games (FOCGs).`,
		image: game21,
		link: "https://app.composablelabs.io/",
	},
	{
		name: "AW Research",
		des: `We are an Autonomous World Research Group.`,
		image: game22,
		link: "https://chedao.notion.site/AW-Research-Collection-234dcfb1fc4441f9b0c14725b01fb921",
	},
];
export const ecosystemList = [
	...toolsList,
	...gamesList,
	...infrastructureList,
	...defiList,
	...guildsList,
];

export function Card({ item }) {
	const goToLink = (link) => {
		if (link) {
			window.open(link);
		}
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
								<a href="#guilds" className={styles.nav_item}>
									<span className={styles.item_name}>Guilds/Communities</span>
									<span className={styles.item_num}>{guildsList.length}</span>
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
							{guildsList.length > 0 && (
								<div id="guilds" className={styles.category}>
									<div className={styles.category_title}>Guilds/Communities</div>
									<div className={styles.category_list}>
										{guildsList.map((item) => (
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
	() => <Layout title="AGLD" description="Building the Lootverse Infrastructure" />
);

export default Index;
