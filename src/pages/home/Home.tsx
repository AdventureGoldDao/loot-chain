import { FC } from "react";
import styles from "./Home.module.scss";
import { useWindowSize } from "../../hooks/use-window-size";
import img from "./assets/img.png";
import img1 from "./assets/img_1.png";
import img2 from "./assets/img_2.png";
import img3 from "./assets/img_3.png";
import img5 from "./assets/img_5.png";
import img6 from "./assets/img_6.png";
import img8 from "./assets/img_8.png";
import img9 from "./assets/img_9.png";

import market1 from "./assets/market1.svg";
import market2 from "./assets/market2.svg";
import market3 from "./assets/market3.svg";
import market4 from "./assets/market4.svg";
import market5 from "./assets/market5.svg";
import market6 from "./assets/market6.svg";
import market7 from "./assets/market7.svg";
import market8 from "./assets/market8.svg";
import market9 from "./assets/market9.svg";
import market10 from "./assets/market10.svg";
import market11 from "./assets/market11.svg";
import market12 from "./assets/market12.svg";
import market13 from "./assets/market13.svg";
import market14 from "./assets/market14.svg";

import { Socials } from "../../modules/header/ui/navigation/Navigation";

type HomeType = {};

const list = [
	{
		title: "Community Governance",
		icon: (
			<svg
				width="38"
				height="40"
				viewBox="0 0 38 40"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M18.8869 11.889C19.5082 11.889 20.104 11.6421 20.5433 11.2028C20.9827 10.7635 21.2295 10.1677 21.2295 9.54637C21.2295 8.92508 20.9827 8.32923 20.5433 7.88991C20.104 7.45059 19.5082 7.20378 18.8869 7.20378C18.2656 7.20378 17.6697 7.45059 17.2304 7.88991C16.7911 8.32923 16.5443 8.92508 16.5443 9.54637C16.5443 10.1677 16.7911 10.7635 17.2304 11.2028C17.6697 11.6421 18.2656 11.889 18.8869 11.889ZM21.1857 0.816329C20.536 0.288262 19.7242 0 18.8869 0C18.0496 0 17.2378 0.288262 16.588 0.816329L0.964533 13.5132C-0.934524 15.0624 0.158684 18.1359 2.60747 18.1359H3.26964V31.2543C1.41431 32.2007 0.146189 34.1279 0.146189 36.3549V38.4383C0.146189 38.8525 0.310728 39.2497 0.603608 39.5426C0.896489 39.8355 1.29372 40 1.70791 40H36.0659C36.4801 40 36.8773 39.8355 37.1702 39.5426C37.463 39.2497 37.6276 38.8525 37.6276 38.4383V36.3549C37.6276 34.131 36.3595 32.2007 34.5041 31.2543V18.1359H35.1663C37.6151 18.1359 38.7083 15.0593 36.8061 13.5132L21.1889 0.813205L21.1857 0.816329ZM18.562 3.24013C18.6549 3.16507 18.7706 3.12413 18.89 3.12413C19.0094 3.12413 19.1251 3.16507 19.218 3.24013L33.6952 15.0124H4.07549L18.562 3.237V3.24013ZM31.3807 30.6297H28.2572V18.1359H31.3807V30.6297ZM25.1338 30.6297H20.4486V18.1359H25.1338V30.6297ZM17.3252 30.6297H12.64V18.1359H17.3252V30.6297ZM31.9023 33.7531C33.3391 33.7531 34.5041 34.9181 34.5041 36.3549V36.8765H3.26964V36.3549C3.26964 34.9181 4.43469 33.7531 5.87147 33.7531H31.9023ZM9.51654 30.6297H6.39309V18.1359H9.51654V30.6297Z"
					fill="#A5FFBE"
				/>
			</svg>
		),
		content:
			"AGLD holders vote on governance item within the AGLD ecosystem. Including protocol parameters (issuance & utility of AGLD, etc), external collaboration (projects within & outside the Lootverse), and more!",
	},
	{
		title: "In-game Currency",
		icon: (
			<svg
				width="40"
				height="40"
				viewBox="0 0 40 40"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M28.75 13.125H21.25V8.125H35C35.4971 8.12444 35.9737 7.92672 36.3252 7.57521C36.6767 7.2237 36.8744 6.74711 36.875 6.25V1.25H34.375V5.625H20.625C20.1279 5.62556 19.6513 5.82328 19.2998 6.17479C18.9483 6.5263 18.7506 7.00289 18.75 7.5V13.125H11.25C8.59876 13.128 6.05696 14.1825 4.18224 16.0572C2.30753 17.932 1.253 20.4738 1.25 23.125V31.012C1.25213 32.8978 2.00222 34.7058 3.33572 36.0393C4.66921 37.3728 6.4772 38.1229 8.36305 38.125H8.50367C9.54675 38.1264 10.5773 37.8978 11.5219 37.4554C12.4665 37.013 13.302 36.3678 13.9688 35.5656L18.0859 30.625H21.885L25.9995 35.9738C26.9053 37.1511 28.1569 38.0153 29.5787 38.4451C31.0005 38.8749 32.5213 38.8488 33.9275 38.3705C35.3338 37.8922 36.555 36.9856 37.4199 35.778C38.2848 34.5704 38.7499 33.1223 38.75 31.637V23.125C38.747 20.4738 37.6925 17.932 35.8178 16.0572C33.943 14.1825 31.4012 13.128 28.75 13.125ZM36.25 31.637C36.25 32.6003 35.9483 33.5395 35.3874 34.3228C34.8265 35.106 34.0344 35.694 33.1223 36.0042C32.2103 36.3144 31.2239 36.3313 30.3018 36.0524C29.3796 35.7736 28.5679 35.2131 27.9805 34.4495L23.1155 28.125H16.9145L12.0478 33.9652C11.6154 34.4853 11.0737 34.9037 10.4611 35.1906C9.84858 35.4775 9.18031 35.6258 8.50391 35.625H8.36328C7.1402 35.6237 5.96759 35.1373 5.10272 34.2724C4.23785 33.4076 3.75136 32.235 3.75 31.012V23.125C3.75223 21.1366 4.54313 19.2302 5.94917 17.8242C7.3552 16.4181 9.26156 15.6272 11.25 15.625H28.75C30.7384 15.6272 32.6448 16.4181 34.0508 17.8242C35.4569 19.2302 36.2478 21.1366 36.25 23.125V31.637Z"
					fill="#A5FFBE"
				/>
				<path
					d="M28.125 19.375H30.625V21.875H28.125V19.375ZM28.125 25.625H30.625V28.125H28.125V25.625ZM25 22.5H27.5V25H25V22.5ZM31.25 22.5H33.75V25H31.25V22.5ZM11.875 19.375H9.375V22.5H6.25V25H9.375V28.125H11.875V25H15V22.5H11.875V19.375Z"
					fill="#A5FFBE"
				/>
			</svg>
		),
		content:
			"AGLD can be used in games which utilise Lootverse NFTs that receive AGLD staking reward to foster quicker user adoption.  ",
	},
	{
		title: "Attention Monetization",
		icon: (
			<svg
				width="41"
				height="40"
				viewBox="0 0 41 40"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M5.0004 0C3.67421 0 2.40234 0.526827 1.46458 1.46458C0.526827 2.40234 0 3.67421 0 5.0004V8.97739C0 10.7109 0.900072 12.3177 2.37019 13.2277L15.2579 21.195C13.2976 22.2512 11.7459 23.9314 10.8487 25.9693C9.95142 28.0072 9.75994 30.2863 10.3046 32.4454C10.8492 34.6044 12.0988 36.52 13.8554 37.8884C15.6119 39.2569 17.7749 40 20.0016 40C22.2283 40 24.3913 39.2569 26.1478 37.8884C27.9044 36.52 29.154 34.6044 29.6986 32.4454C30.2433 30.2863 30.0518 28.0072 29.1545 25.9693C28.2573 23.9314 26.7056 22.2512 24.7453 21.195L37.633 13.2277C38.3574 12.7797 38.9553 12.1542 39.3701 11.4104C39.7849 10.6665 40.0028 9.82906 40.0032 8.97739V5.0004C40.0032 3.67421 39.4764 2.40234 38.5386 1.46458C37.6009 0.526827 36.329 0 35.0028 0H5.0004ZM3.3336 5.0004C3.3336 4.55834 3.50921 4.13438 3.8218 3.8218C4.13438 3.50921 4.55834 3.3336 5.0004 3.3336H10.0008V14.0278L4.12366 10.3942C3.88222 10.2448 3.68292 10.0363 3.54465 9.78838C3.40638 9.54043 3.33374 9.26128 3.3336 8.97739V5.0004ZM13.3344 16.088V3.3336H26.6688V16.088L20.8783 19.6682C20.6149 19.8312 20.3113 19.9175 20.0016 19.9175C19.6919 19.9175 19.3883 19.8312 19.1249 19.6682L13.3344 16.088ZM30.0024 14.0278V3.3336H35.0028C35.4449 3.3336 35.8688 3.50921 36.1814 3.8218C36.494 4.13438 36.6696 4.55834 36.6696 5.0004V8.97739C36.6695 9.26128 36.5968 9.54043 36.4586 9.78838C36.3203 10.0363 36.121 10.2448 35.8795 10.3942L30.0024 14.0278ZM13.3344 30.0024C13.3344 28.2342 14.0368 26.5383 15.2872 25.288C16.5375 24.0376 18.2334 23.3352 20.0016 23.3352C21.7699 23.3352 23.4657 24.0376 24.716 25.288C25.9664 26.5383 26.6688 28.2342 26.6688 30.0024C26.6688 31.7707 25.9664 33.4665 24.716 34.7168C23.4657 35.9672 21.7699 36.6696 20.0016 36.6696C18.2334 36.6696 16.5375 35.9672 15.2872 34.7168C14.0368 33.4665 13.3344 31.7707 13.3344 30.0024Z"
					fill="#A5FFBE"
				/>
			</svg>
		),
		content:
			"Being the community portal for “Free Money”, AGLD is the perfect place to initiate campaigns and tasks that get projects & DAOs started within the Lootverse. The Lootverse community is the most creative, constructive and collaborative out there. AGLD provides a way to effectively monetize and feed value back to the community.",
	},
];

const list1 = [
	{
		title: "Uniswap",
		icon: market1,
		url: "",
	},
	{
		title: "Binance",
		icon: market2,
		url: "",
	},
	{
		title: "LBANK",
		icon: market3,
		url: "",
	},
	{
		title: "OKX",
		icon: market4,
		url: "",
	},
	{
		title: "Coinbase",
		icon: market5,
		url: "",
	},
	{
		title: "Gate.io",
		icon: market6,
		url: "",
	},
	{
		title: "BKEX",
		icon: market7,
		url: "",
	},
	{
		title: "BiBox",
		icon: market8,
		url: "",
	},
	{
		title: "Phemex",
		icon: market9,
		url: "",
	},
	{
		title: "Crytpo.com ",
		icon: market10,
		url: "",
	},
	{
		title: "Huobi",
		icon: market11,
		url: "",
	},
	{
		title: "FTX",
		icon: market12,
		url: "",
	},
	{
		title: "AEX",
		icon: market13,
		url: "",
	},
	{
		title: "Hoo",
		icon: market14,
		url: "",
	},
];

const list2 = [
	{
		title: "Sep 2021",
		content: "AGLD Launched",
		active: true,
	},
	{
		title: "Nov 2021",
		content: "AGIP-1 economics proposal passed",
		active: true,
	},
	{
		title: "Apr 2022",
		content: "Staking enabled",
		active: true,
	},
	{
		title: "Apr 2022",
		content: "",
		active: false,
	},
	{
		title: "Expand Lootverse Collaboration",
		content: "",
		active: false,
	},
];

export const Home: FC<HomeType> = () => {
	const winHeight = useWindowSize()[0];
	return (
		<>
			<section className={styles.component}>
				<div className={styles.body}>
					<section className={styles.top}>
						<div className={styles.texts}>
							<h1>Adventure Gold</h1>
							<p>
								The Incentivization token for the
								<br /> Lootverse
							</p>
							<button onClick={()=>{window.open('https://staking.adventruegold.org', "_blank")}}>Staking</button>
						</div>
						<img src={img} />
					</section>
					<section className={styles.about}>
						<img src={img1} />
						<div className={styles.texts}>
							<h2>About</h2>
							<h3>What is Adventure Gold</h3>
							<p>
								Adventure Gold (AGLD) is the Incentivization token for the Lootverse. Launched
								through a fair airdrop, 10,000 AGLD is free to claim per OG Loot. Previously
								regarded by many as the governance token for Loot, the community has come up with a
								brand new token economics design that aims to incentivise adoption of Loot instead
								of governing it. Mild inflation instead of a fixed supply is implemented and the
								rewards will be distributed to Lootverse NFTs that are non-custodially staked. The
								core value of AGLD is supported by Lootverse’s community attention. By incentivising
								user & assets engagements in the Lootverse, AGLD grows the Lootverse in a healthy
								and sustainable way.
							</p>
						</div>
					</section>
					<section className={styles.project}>
						<div className={styles.texts}>
							<h3>What is Loot Project</h3>
							<p>
								Loot is a collaborative media project that aims to create a decentralized,
								infinitely-expansive sci-fantasy universe, rich with stories, games and
								multi-media.Loot is a collection of NFT projects, games, art, stories and multimedia
								backed by an active community of players, builders, artists, writers and creators.
							</p>
							<button>Loot.foundation</button>
						</div>
						<img src={img2} />
					</section>
					<section className={styles.card}>
						<div className={styles.left}>
							<img src={img3} />
							<h2>Applications of AGLD </h2>
						</div>
						<div className={styles.list}>
							{list.map(({ title, icon, content }, index) => {
								return (
									<div className={styles.item}>
										{icon}
										<div className={styles.texts}>
											<h3>{title}</h3>
											<p>{content}</p>
										</div>
										{index !== list.length - 1 && <div className={styles.line} />}
									</div>
								);
							})}
						</div>
					</section>
					<section className={styles.analyse}>
						<h2>AGLD Inflation Schedule</h2>
						<div className={styles.imgs}>
							<img src={img5} className={styles.airdrop} />
							<img src={img6} />
						</div>
						<div className={styles.list1}>
							{list1.map(({ title, icon }) => {
								return (
									<div className={styles.item1}>
										<img src={icon} />
										<p>{title}</p>
									</div>
								);
							})}
						</div>
					</section>
					<section className={styles.roadmap}>
						<h2>Roadmap</h2>
						<div className={styles.list2}>
							{list2.map(({ title, content, active }, index) => {
								return (
									<div className={styles.item2}>
										<div className={styles.texts}>
											<h3 style={{ background: active ? "#1E252B" : "rgba(102, 102, 102, 0.44)" }}>
												{index + 1}
											</h3>
											<strong>{title}</strong>
											<p>{content}</p>
										</div>
										{index !== list2.length - 1 && (
											<img
												className={index % 2 !== 0 ? styles.up : styles.down}
												src={index % 2 !== 0 ? img9 : img8}
											/>
										)}
									</div>
								);
							})}
						</div>
						<section>
							<Socials className={styles.socials} />
						</section>
					</section>
				</div>
			</section>
			{/*{popUp.defined && <LaunchPopUp control={popUp} close={close}/>}*/}
		</>
	);
};
