import { FC, useEffect, useState } from "react";
// import { useHistory } from "react-router-dom";
import styles from "./Home.module.scss";
import { useWindowSize } from "../../hooks/use-window-size";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import "swiper/swiper.min.css";

import img from "./assets/card.png";
import img1 from "./assets/img_1.png";
import img2 from "./assets/img_2.png";
import img5 from "./assets/img_5.png";
import sm from "./assets/sm.png";
import avatar from "./assets/avatar.png";
import dashboard from "./assets/dashboard.png";
import bridge from "./assets/bridge.png";
import store from "./assets/store.png";
import game from "./assets/game.png";
import nft from "./assets/nftImg.png";
import featureIocn1 from "./assets/featureIcon1.svg";
import featureIocn2 from "./assets/featureIcon2.svg";
import featureIocn3 from "./assets/featureIcon3.svg";
import featureIocn4 from "./assets/featureIcon4.svg";
import diamond from "./assets/diamond.svg";
// import top_left_icon from "./assets/top_left_icon.png";
// import top_right_icon from "./assets/top_right_icon.png";
import multiverse_top_icon from "./assets/multiverse_top_icon.png";
import multiverse_bottom_icon from "./assets/multiverse_bottom_icon.png";

import bybit from "./assets/bybit.svg";
import market2 from "./assets/market2.svg";
import upbit from "./assets/upbit.svg";
import market4 from "./assets/market4.svg";
import market5 from "./assets/market5.svg";
import market11 from "./assets/market11.svg";

import banner1 from "./assets/banner1.jpg";
import banner2 from "./assets/banner2.jpg";
import banner3 from "./assets/banner3.png";
import banner4 from "./assets/banner4.png";
import banner5 from "./assets/banner5.jpg";
import banner6 from "./assets/banner6.jpg";
import banner7 from "./assets/banner7.png";
import banner8 from "./assets/banner8.jpg";

import redLine from "./assets/red_line.svg";
import greenLine from "./assets/green_line.svg";
import info from "./assets/info.svg";
import roadmapLine from "./assets/line.svg";
import roadmapLineBg from "./assets/lineBg.svg";
import roadmapLineHover from "./assets/lineHover.svg";
import part1 from "./assets/part1.png";
import part2 from "./assets/part2.png";
import part3 from "./assets/part3.png";
import part4 from "./assets/part4.png";
import part4H5 from "./assets/part4H5.png";
import part1Bg from "./assets/part1Bg.png";
import { Socials } from "../../modules/header/ui/navigation/Navigation";
import AOS from "aos";
import "aos/dist/aos.css";
import { ecosystemList } from "../../../pages/ecosystem";
type HomeType = {};
const list1 = [
	{
		title: "Binance",
		icon: market2,
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
		title: "Bybit",
		icon: bybit,
		url: "",
	},
	{
		title: "Upbit",
		icon: upbit,
		url: "",
	},
	{
		title: "Huobi",
		icon: market11,
		url: "",
	},
];

const list2 = [
	{
		title: "2023 Q1",
		content: "Partnerships and test net of loot chain launch",
		active: true,
	},
	{
		title: "2023 Q2",
		content: "Development of loot chain partnerships and infra for autonomous worlds",
		active: true,
	},
	{
		title: "2023 Q3",
		content: "Launch on-chain game infrastructure aggregator and developer kit",
		active: true,
	},
	{
		title: "2023 Q4",
		content: "Main net launch and early adopter rewards",
		active: false,
	},
];

const app_item_arr = [
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
					fill="#FDFFAC"
				/>
			</svg>
		),
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
					fill="#FDFFAC"
				/>
				<path
					d="M28.125 19.375H30.625V21.875H28.125V19.375ZM28.125 25.625H30.625V28.125H28.125V25.625ZM25 22.5H27.5V25H25V22.5ZM31.25 22.5H33.75V25H31.25V22.5ZM11.875 19.375H9.375V22.5H6.25V25H9.375V28.125H11.875V25H15V22.5H11.875V19.375Z"
					fill="#FDFFAC"
				/>
			</svg>
		),
	},
	{
		title: "Chain Token",
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
					fill="#FDFFAC"
				/>
			</svg>
		),
	},
	{
		title: "Community Rewards",
		icon: (
			<svg
				width="41"
				height="43"
				viewBox="0 0 41 43"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M5.16663 1.33334H25.1666V35.3333H5.16663V1.33334Z"
					stroke="#FDFFAC"
					strokeWidth="3"
					strokeLinejoin="round"
				/>
				<path
					d="M3.16663 35.3333H27.1666L29.1666 41.3333H1.16663L3.16663 35.3333Z"
					stroke="#FDFFAC"
					strokeWidth="3"
					strokeLinejoin="round"
				/>
				<path
					d="M10.1666 6.33337H20.1666V14.3334H10.1666V6.33337Z"
					stroke="#FDFFAC"
					strokeWidth="3"
					strokeLinejoin="round"
				/>
				<path
					d="M34.1666 9.33337L39.1666 11.3334V15.3334H34.1666V9.33337Z"
					stroke="#FDFFAC"
					strokeWidth="3"
					strokeLinejoin="round"
				/>
				<path
					d="M31.1666 7.33334L39.1666 11.3333V28.3333C39.1666 29.4379 38.2712 30.3333 37.1666 30.3333H25.1666"
					stroke="#FDFFAC"
					strokeWidth="3"
					strokeLinejoin="round"
				/>
			</svg>
		),
	},
	{
		title: "Staking Incentives",
		icon: (
			<svg
				width="36"
				height="35"
				viewBox="0 0 36 35"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M25.6666 0.333344C21.0666 0.333344 17.3333 4.06668 17.3333 8.66668C17.3333 13.2667 21.0666 17 25.6666 17C30.2666 17 34 13.2667 34 8.66668C34 4.06668 30.2666 0.333344 25.6666 0.333344ZM25.6666 13.6667C22.9 13.6667 20.6666 11.4333 20.6666 8.66668C20.6666 5.90001 22.9 3.66668 25.6666 3.66668C28.4333 3.66668 30.6666 5.90001 30.6666 8.66668C30.6666 11.4333 28.4333 13.6667 25.6666 13.6667ZM30.6666 23.6667H27.3333C27.3333 21.6667 26.0833 19.8667 24.2166 19.1667L13.95 15.3333H0.666626V33.6667H10.6666V31.2667L22.3333 34.5L35.6666 30.3333V28.6667C35.6666 25.9 33.4333 23.6667 30.6666 23.6667ZM7.33329 30.3333H3.99996V18.6667H7.33329V30.3333ZM22.2833 31.0167L10.6666 27.8333V18.6667H13.35L23.05 22.2833C23.6166 22.5 24 23.05 24 23.6667C24 23.6667 20.6666 23.5833 20.1666 23.4167L16.2 22.1L15.15 25.2667L19.1166 26.5833C19.9666 26.8667 20.85 27 21.75 27H30.6666C31.3166 27 31.9 27.4 32.1666 27.95L22.2833 31.0167Z"
					fill="#FDFFAC"
				/>
			</svg>
		),
	},
];

const opensource_arr = [
	{
		title: "Visualization Dashboard",
		icon: dashboard,
	},
	{
		title: "Marketplace",
		icon: store,
	},
	{
		title: "On-chain Game Engine",
		icon: game,
	},
	{
		title: "Decentralized Identity (DID)",
		icon: avatar,
	},
	{
		title: "Cross-chain Bridge",
		icon: bridge,
	},
];

const OS_reverse_arr = [
	{
		title: "Visualization Dashboard",
		icon: dashboard,
	},
	{
		title: "On-chain Game Engine",
		icon: game,
	},
	{
		title: "Decentralized Identity (DID)",
		icon: avatar,
	},
	{
		title: "Cross-chain Bridge",
		icon: bridge,
	},
	{
		title: "Marketplace",
		icon: store,
	},
];

const bannerList = [
	{
		url: "https://games.lootchain.com/games/magic",
		image: banner1,
		title: "Mighty Magic HEROES",
	},
	{
		url: "https://games.lootchain.com/games/land",
		image: banner2,
		title: "Land, Labor and Capitol (LLC)",
	},
	// {
	// 	url: "https://games.lootchain.com/games/archloot",
	// 	image: banner3,
	// 	title: "Archloot",
	// },
	{
		url: "https://games.lootchain.com/games/craft",
		image: banner4,
		title: "LootCraft",
	},
	// {
	// 	url: "https://games.lootchain.com/games/xLand",
	// 	image: banner5,
	// 	title: "X Land",
	// },
	{
		url: "https://games.lootchain.com/games/GabbyWorld",
		image: banner6,
		title: "Gabby World",
	},
	// {
	// 	url: "https://www.chaquer.xyz/",
	// 	image: banner7,
	// 	title: "Chaquer",
	// },
	{
		url: "https://www.leagueofthrones.com/",
		image: banner8,
		title: "League of Thrones",
	},
];
const part1List = [
	{
		image: part1,
		title: "The Forge of Imagination : Loot",
		content: `“In the magical realm of Crypto, Dom Hofmann, co-founder of Vine and Byte, envisioned and birthed the Loot Project: a unique collection of 8,000 text-based bags brimming with adventurer gear. This initiative united artists, gamers, developers, and writers, becoming a community-driven platform where everyone collaborated to weave rich content and stories."`,
	},
	{
		image: part2,
		title: "The Rise of the Lootverse",
		content: `“Anchored in its unique text-based NFTs, the Lootverse blossomed as a hub for boundless creativity. As its valuation climbed, a myriad of decentralized tales and ventures emerged, all underpinned by the AGLD token. It stood as a testament to collective imagination and expansive digital horizons.”`,
	},
	{
		image: part3,
		title: "Autonomous World & Beyond",
		content: `“Powered by AGLD, the Loot Chain became the heart for Lootverse creators. With the help of AGLD DAO, the end goal is to create community-driven Autonomous Worlds. The future looks bright, with the Lootverse planning to expand into its own large digital lands.”`,
	},
];
const part2List = [
	{
		title: "Layer 2 Rollup",
		content: `Loot Chain is an optimistic rollup chain powered by Caldera`,
	},
	{
		title: "DA Layer on Polygon",
		content: `Loot Chain utilizes Polygon chain as the DA layer which further reduces transaction costs`,
	},
	{
		title: "Tailored for Lootverse",
		content: `Loot Chain provides specialized support for builders on Lootverse and Autonomous Worlds`,
	},
];
const part5List = [
	{
		icon: featureIocn1,
		content: `In Game Currency`,
	},
	{
		icon: featureIocn2,
		content: `Adventure Currency for Lootverse`,
	},
	{
		icon: featureIocn3,
		content: `Chain Token`,
	},
	{
		icon: featureIocn4,
		content: `Community Rewards`,
	},
];

export const Home: FC<HomeType> = () => {
	const winHeight = useWindowSize()[0];
	winHeight > 768 ? opensource_arr : OS_reverse_arr;
	const [isH5, setIsH5] = useState(false);
	// const history = useHistory()
	const show = () => {
		// history.push('/ecosystem')
		window.open("/ecosystem");
	};
	useEffect(() => {
		[1, 2, 3, 4, 5].map((item) => {
			console.log(`lineBox${item}`);
			console.log(`lineH${item}`);

			const airdropDiv = document.getElementById(`lineBox${item}`);
			const lineH = document.getElementById(`lineH${item}`);
			console.log(lineH);
			// const airdropText = document.getElementById("airdrop_text");
			const observer = new IntersectionObserver(
				(entries) => {
					if (entries[0].isIntersecting) {
						airdropDiv.classList.add(styles.animation_line);
						lineH.classList.add(styles.animation_lineH);
					} else {
						// lineH.classList.remove(styles.animation_lineH);
					}
				},
				{ threshold: 0.5 }
			);
			observer.observe(airdropDiv);
		});

		AOS.init();
		// @ts-ignore
		const swiper = new Swiper(".swiper1", {
			slidesPerView: "auto",
			spaceBetween: 20,
			loop: true,
			autoplay: {
				delay: 3000,
			},
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
				dynamicBullets: true,
			},
		});
		// @ts-ignore

		const swiper2 = new Swiper(".swiper2", {
			slidesPerView: "auto",
			spaceBetween: 20,
			loop: true,
			autoplay: {
				delay: 3000,
			},
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
				dynamicBullets: true,
			},
		});
		if (window.innerWidth < 800) {
			setIsH5(true);
		}
	}, []);

	return (
		<>
			<section className={styles.component}>
				<div className={styles.body}>
					<div className={styles.big_box} data-aos="fade-down" data-aos-duration="1000">
						<section className={styles.top}>
							<div className={styles.texts}>
								{/* <h1>Adventure Gold</h1> */}
								{/* <p>Building the Lootverse Infrastruture</p> */}
								{/* <div className={styles.btnGroup}>
									<button className={styles.lButton} onClick={show}>
										<div className={styles.btn_text1}>BUILD</div>
										<div className={styles.btn_text2}>on Loot Chain</div>
									</button>
									<button
										className={styles.rButton}
										onClick={() => window.open("https://games.lootchain.com/games", "_blank")}
									>
										<div className={styles.btn_text1}>PLAY</div>
										<div className={styles.btn_text2}>on Loot Console</div>
									</button>
								</div> */}
							</div>
							<img className={styles.light} src={part1Bg}></img>
						</section>
						<section className={`${styles.part} ${styles.part1}`}>
							<div className={styles.partLeft}>
								<img className={styles.partIcon} src={diamond}></img>
								<div
									className={styles.partLine}
									id="lineBox1"
									data-aos="fade-down"
									data-aos-duration="1500"
								>
									<div className={styles.line} id="lineH1"></div>
								</div>
							</div>
							<div className={styles.partRight} data-aos="fade-right" data-aos-duration="1500">
								<div className={styles.partTitle}>
									Journey to the Lootverse:{" "}
									<span className={styles.greenTxt}>Adventure like never before</span>{" "}
								</div>
								{part1List.map((item) => (
									<div className={styles.part1Box} data-aos="fade-up" data-aos-duration="1000">
										<img className={styles.boxImg} src={item.image}></img>
										<div className={styles.boxContent}>
											<div className={styles.title}>{item.title}</div>
											<div className={styles.txt}>{item.content}</div>
										</div>
									</div>
								))}
							</div>
						</section>
						<section className={styles.part}>
							<div className={styles.partLeft}>
								<img className={styles.partIcon} src={diamond}></img>
								<div
									className={styles.partLine}
									id="lineBox2"
									data-aos="fade-down"
									data-aos-duration="1500"
								>
									<div className={styles.line} id="lineH2"></div>
								</div>
							</div>
							<div className={styles.partRight} data-aos="fade-right" data-aos-duration="1500">
								<div className={styles.partTitle}>
									Loot Chain - <span className={styles.greenTxt}>The Engine of Lootverse</span>
								</div>
								<div className={styles.partSubTitle}>
									Designed exclusively for the Lootverse, the Loot Chain operates as a layer-2
									chain, facilitating cost-efficient platform for the Loot enthusiasts.
								</div>
								{part2List.map((item) => (
									<div className={styles.part2Box} data-aos="fade-up" data-aos-duration="1000">
										<div className={styles.box2Content_left}>{item.title}</div>
										<div className={styles.box2Content_right}>{item.content}</div>
									</div>
								))}
							</div>
						</section>
						<section className={styles.part}>
							<div className={styles.partLeft}>
								<img className={styles.partIcon} src={diamond}></img>
								<div
									className={styles.partLine}
									id="lineBox3"
									data-aos="fade-down"
									data-aos-duration="1500"
								>
									<div className={styles.line} id="lineH3"></div>
								</div>
							</div>
							<div className={styles.partRight} data-aos="fade-right" data-aos-duration="1500">
								<div className={styles.partTitle}>
									Start your adventure at <br />{" "}
									<span className={styles.greenTxt}>the Loot NFT Pad</span>
								</div>
								<div className={styles.partSubTitle}>
									Craft and unveil your NFT collections on the Loot NFT Pad, connecting with the
									passionate Loot community. 
								</div>
								<div className={styles.part3Box}>
									<button onClick={() => window.open("https://freemint.lootchain.com", "_blank")}>
										<div className={styles.btn_text}>→Check out the Loot NFT Pad</div>
									</button>
									<img
										data-aos="fade-up"
										data-aos-duration="1000"
										className={styles.part3Box_img}
										src={isH5 ? part4H5 : part4}
									></img>
								</div>
							</div>
						</section>
						<section className={styles.part}>
							<div className={styles.partLeft}>
								<img className={styles.partIcon} src={diamond}></img>
								<div
									className={styles.partLine}
									id="lineBox4"
									data-aos="fade-down"
									data-aos-duration="1500"
								>
									<div className={styles.line} id="lineH4"></div>
								</div>
							</div>
							<div className={styles.partRight} data-aos="fade-right" data-aos-duration="1500">
								<div className={styles.partTitle}>
									{" "}
									<span className={styles.greenTxt}>Loot Gaming</span> Console
								</div>
								<div className={styles.partSubTitle}>
									Dive into a selection of the newest game offerings emerging from the Loot Chain
									realm.
								</div>
								<div className={styles.part4Box}>
									<button
										onClick={() => window.open("https://games.lootchain.com/games", "_blank")}
									>
										<div className={styles.btn_text}>→Play on the Loot Console</div>
									</button>

									<div className="swiper swiper1 swiper_part4Box">
										<div className="swiper-wrapper">
											{bannerList.map((item) => (
												<div
													className={`swiper-slide ${styles.swiperBox}`}
													onClick={() => window.open(item.url, "_blank")}
												>
													<div className={styles.swiperBox}>
														<div className={styles.swiperBox_image}>
															<img src={item.image}></img>
														</div>
														<div className={`${styles.swiperBox_title}`}>{item.title}</div>
													</div>
												</div>
											))}
										</div>
										<div className="swiper-pagination"></div>
									</div>
								</div>
							</div>
						</section>
						<section className={styles.part}>
							<div className={styles.partLeft}>
								<img className={styles.partIcon} src={diamond}></img>
								<div
									className={styles.partLine}
									id="lineBox5"
									data-aos="fade-down"
									data-aos-duration="1500"
								>
									<div className={styles.line} id="lineH5"></div>
								</div>
							</div>
							<div
								className={`${styles.partRight} ${styles.part5Right}`}
								data-aos="fade-right"
								data-aos-duration="1500"
							>
								<div className={styles.partTitle}>
									AGLD <span className={styles.greenTxt}>Token</span>
								</div>
								<div className={styles.partSubTitle}>
									AGLD token was introduced through a fair distribution, 100% airdropped to the
									community members. The token serves as the cornerstone of the Lootverse, shaping
									mechanisms that align community interests and accelerate ecosystem growth.
								</div>
								<div className={styles.part5Box}>
									{part5List.map((item, index) => (
										<div
											className={styles.part5Box_item}
											data-aos="fade-up"
											data-aos-duration={500 + index * 300}
										>
											<div className={styles.part5Box_item_content}>
												<object className={styles.part5Box_item_icon} data={item.icon}></object>
												{index === 2 ? (
													<div className={styles.part5Box_txt}>
														Chain <br /> Token
													</div>
												) : (
													<div className={styles.part5Box_txt}>{item.content}</div>
												)}
											</div>
										</div>
									))}
								</div>
							</div>
						</section>
					</div>
					<section className={styles.ecosystem_module}>
						<div className={styles.part6}>
							<div className={styles.partLeft}>
								<img className={styles.partIcon} src={diamond}></img>
								{/* <div className={styles.partLine} id="line2" data-aos="fade-down" data-aos-duration="1500">
                  <div className={styles.line} id="line"></div>
                </div> */}
							</div>
							<div className={styles.part6Right} data-aos="fade-right" data-aos-duration="1500">
								<div className={styles.part6Title}>
									The <span className={styles.greenTxt}>Lootchain ecosystem</span>
								</div>
								<div className={styles.part6SubTitle}>Join the Loot ecosystem today!</div>
								<div className={styles.btns}>
									<button
										onClick={() => window.open("https://bridge.lootchain.com/bridge", "_blank")}
									>
										<div className={styles.btn_text}>Bridge your assets to Lootchain</div>
									</button>
									<button onClick={show}>
										<div className={styles.btn_text}>Build on the Lootchain ecosystem</div>
									</button>
								</div>
								<div className="swiper swiper2 swiper_part6Box">
									<div className="swiper-wrapper">
										{ecosystemList.map((item) => (
											<div
												className={`swiper-slide ${styles.swiperBox}`}
												onClick={() => window.open(item.link, "_blank")}
											>
												<div className={styles.swiperBox}>
													<div className={styles.swiperBox_image}>
														<img src={item.image}></img>
													</div>
													<div className={styles.swiperBox_title}>{item.name}</div>
												</div>
											</div>
										))}
									</div>
									<div className="swiper-pagination"></div>
								</div>
							</div>
						</div>
						<div className={styles.socialsBox}>
							<Socials className={styles.socials} />
						</div>
					</section>
					{/* <section className={styles.multiverse}>
            <h3>
              Loot <span>Autonomous</span> Worlds
            </h3>
            <button className={styles.buildBtn} onClick={show}>
              Build on Loot Chain
            </button>
            <div className={styles.multiverse_content}>
              <p className={`${styles.content1} ${styles.mask_bg}`}>
                <span data-aos="fade-up" data-aos-duration="1000">
                  The Loot community has created some of the most exciting Fully On-Chain Games
                  (FOCG) and Autonomous Worlds (AW) out there, including Realms and Loot Survivor.
                </span>
                <span data-aos="fade-up" data-aos-duration="1000">
                  By being fully on-chain, game developers are given a wider design space and
                  players can enjoy a new era of games since all game states are stored on-chain and
                  game logics are executed on-chain. We expect the FOCG & AW landscape to grow into
                  a galaxy of games each with their own state & access point stored on-chain.
                </span>
                <span data-aos="fade-up" data-aos-duration="1000">
                  With the original vision to incentivize the Lootverse, the AGLD DAO decided to
                  create a showcase of the best fully on-chain games out there, starting from what
                  we have in the Lootverse. This can help the community access the cutting-edge of
                  on-chain gaming, access in-depth statistics & information, and even socialize in
                  the game in this one-stop-shop. Stay tuned for future product release details.
                </span>
              </p>
            </div>

            <div className={styles.roadmap}>
              <div className={styles.title}>Roadmap</div>
              <div className={styles.roadmapLine}>
                <img src={roadmapLine}></img>
                <img className={styles.lineBg} src={roadmapLineBg}></img>
                <div className={styles.roadmap_list}>
                  {list2.map((item, index) => {
                    return (
                      <div className={styles.roadmapItem} key={item.title}>
                        <img className={styles.lineHover} src={roadmapLineHover}></img>
                        <div className={`${styles.dot} ${styles["dot" + index]}`}></div>
                        <p className={styles.greenTitle}>{item.title}</p>
                        <p className={styles.roadmap_txt}>{item.content}</p>
                        <div className={styles.glowworm_box}>
                          <div></div>
                          <div></div>
                          <div></div>
                          <div></div>
                          <div></div>
                          <div></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className={styles.socialsBox}>
              <Socials className={styles.socials} />
            </div>
          </section> */}
				</div>
			</section>
		</>
	);
};
