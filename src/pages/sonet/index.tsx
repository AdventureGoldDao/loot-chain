import { useWindowSize } from "../../hooks/use-window-size";
import styles from "./Sonet.module.scss";
import { Body1 } from "../../ui/typography";
import bodyImg1 from "../home/assets/body1_img1.png";
import bodyImg1Mobile from "../home/assets/body1_img1_mobile.png";
import bodyImg2 from "../home/assets/body1_img2.png";
import bodyImg2Mobile from "../home/assets/body1_img2_mobile.png";
import line_mobile from "../home/assets/line_mobile.png";
import idea from "../home/assets/idea.png";
import idea_mobile from "../home/assets/idea_mobile.png";
import bridge from "../home/assets/bridge.png";
import dance from "../home/assets/dance.png";
import openWindow from "../home/assets/openWindow.png";
import dance_mobile from "../home/assets/dance_mobile.png";
import { NavLink } from "../../ui/button";
import { Twitter } from "../../ui/icons/Icons";
import topBg from "./assets/top_background.png";
import mIcon1 from "./assets/mission_icon_1.png";
import mIcon2 from "./assets/mission_icon_2.png";
import mIcon3 from "./assets/mission_icon_3.png";
import mIcon4 from "./assets/mission_icon_4.png";
import mIcon5 from "./assets/mission_icon_5.png";
import mIcon6 from "./assets/mission_icon_6.png";
import mIcon7 from "./assets/mission_icon_7.png";
import mIcon8 from "./assets/mission_icon_8.png";

import fImg1 from "./assets/frame_img_1.png";
import fImg2 from "./assets/frame_img_2.png";
import fImg3 from "./assets/frame_img_3.png";
import hnet from "./assets/Hnet-image.gif";
import coin from "./assets/coin.png";
import app from "./assets/app.png";
import line from "./assets/line.png";

import { Slider } from "../../ui/silder";
import { useEffect, useRef } from "react";
import { Socials } from "../../modules/header/ui/navigation/Navigation";

const slideData = [
	{
		index: 0,
		headline: "New Fashion Apparel",
		button: "Shop now",
		src: fImg1,
	},
	{
		index: 1,
		headline: "In The Wilderness",
		button: "Book travel",
		src: fImg2,
	},
	{
		index: 2,
		headline: "For Your Current Mood",
		button: "Listen",
		src: fImg3,
	},
	{
		index: 3,
		headline: "Focus On The Writing",
		button: "Get Focused",
		src: fImg1,
	},
];

const roadmapData = [
	{
		title: "Q1",
		contents: [
			<p>
				Middleware aggregator
				<br /> and reconciliation
			</p>,
			<p>
				NFT social platform
				<br /> sharing and marketplace
			</p>,
		],
	},
	{
		title: "Q2",
		contents: [
			<p>Sonet utility token</p>,
			<p>
				Development of mobile
				<br /> application
			</p>,
			<p>
				More web app integrations
				<br /> & app publishing
			</p>,
			<p>Social investing & trading</p>,
			<p>
				Integrate more service
				<br /> partners
			</p>,
		],
	},
	{
		title: "Q3",
		contents: [
			<p>Usage middleware</p>,
			<p>
				SDK for application
				<br />
				developers
			</p>,
			<p>
				Enhanced framework for
				<br />
				service partners
			</p>,
			<p>Multi-chain wallet</p>,
			<p>“Digital Twins” Identity 2.0</p>,
		],
	},
	{
		title: "Q4",
		contents: [
			<p>
				Rich media support
				<br /> including video, audio
			</p>,
			<p>
				Open framework for
				<br />
				metaverse apps
			</p>,
			<p>
				Upgrade cache layer and <br />
				distributed network
			</p>,
		],
	},
];

const faqData = [
	{
		question: "What is Soda?",
		answer: (
			<p>
				Soda is a social NFT extension on Web2 social networks. Currently Soda has fully integrated
				with Facebook,
				<br />
				Twitter and more to come. Ultimately, we will launch our own network to onboard all users to
				fully enjoy the
				<br />
				Web3 version of Soda. Soda serves as a gateway for users to autonomously manage identity and
				data privacy
				<br />
				at their entry points across various metaverses. Soda will educate and enable Web2 users to
				experience NFTs
				<br />
				seamlessly in the following ways:
				<br />
				<br />
				Library: Discover, share, and interact with friends in the universal library of social
				assets
				<br />
				Tokenization: All-in-one extension to create, tokenize and share social creations
				<br />
				Interaction: React, bond and collaborate through tracked activities
				<br />
				<br />
				<br />
				Additionally, the Soda Market is a marketplace that supports NFT mints with decentralized
				technology, while
				<br />
				transferring through original traditional social networks as communication channels.
			</p>
		),
	},
	{
		question: "How much does it cost?",
		answer:
			"Soda is a social NFT extension on Web2 social networks. Currently Soda has fully integrated with Facebook, Twitter and more to come. Ultimately,",
	},
];

export const Sonet = () => {
	const winHeight = useWindowSize()[0];

	useEffect(() => {
		const items = document.querySelectorAll(".accordion button");
		console.log("items", items);

		function toggleAccordion() {
			const itemToggle = this.getAttribute("aria-expanded");

			for (let i = 0; i < items.length; i++) {
				items[i].setAttribute("aria-expanded", "false");
			}

			if (itemToggle == "false") {
				this.setAttribute("aria-expanded", "true");
			}
		}

		items.forEach((item) => item.addEventListener("click", toggleAccordion));
	}, []);
	const missionList = [
		{
			icon: mIcon1,
			text: (
				<p>
					Build a middleware
					<br />
					aggregator to connect
					<br />
					across protocols and
					<br />
					metaverses
				</p>
			),
		},
		{
			icon: mIcon2,
			text: (
				<p>
					Uniform payment system
					<br />
					to seamlessly reconcile
					<br />
					transactions and fees for
					<br />
					applications
				</p>
			),
		},
		{
			icon: mIcon3,
			text: (
				<p>
					Single development
					<br />
					framework to fully
					<br />
					leverage all services in
					<br />
					the platform
				</p>
			),
		},
		{
			icon: mIcon4,
			text: (
				<p>
					Create entry point
					<br />
					extensions and apps into
					<br />
					different metaverses
				</p>
			),
		},
		{
			icon: mIcon5,
			text: (
				<p>
					Middleware
					<br />
					(Sonet)
				</p>
			),
		},
		{
			icon: mIcon6,
			text: (
				<p>
					Payment Token
					<br />
					($Sonet)
				</p>
			),
		},
		{
			icon: mIcon7,
			text: (
				<p>
					Extensions
					<br />
					(Soda)
				</p>
			),
		},
		{
			icon: mIcon8,
			text: (
				<p>
					Development
					<br />
					Framework
				</p>
			),
		},
	];

	const appImage = useRef();

	const detectaCoordsElem = (e) => {
		const coords = e.getBoundingClientRect();
		return { x: coords.left + coords.width / 2, y: coords.top + coords.height / 2 };
	};

	const handleMouseMove = (e) => {
		const el = appImage.current;

		if (el) {
			const x = e.clientX - detectaCoordsElem(el).x;
			const y = e.clientY - detectaCoordsElem(el).y;
			el.style.setProperty("transform", `rotateY(${x / 20}deg) rotateX(${-y / 20}deg)`);
		}
	};

	const handleMouseLeave = () => {
		const el = appImage.current;
		el.style.transform = "";
	};

	return (
		<>
			<section className={styles.page}>
				<section className={styles.top}>
					<span className={styles.text}>
						<h3>The AWS of Web3</h3>
						<p>
							Sonet is an open-source platform providing
							<br />
							AWS-like services across Web2 and Web3
							<br />
							applications
						</p>
						<button>Join Us</button>
					</span>
					<span className={styles.background}>
						<img src={topBg} />
					</span>
				</section>

				<section className={styles.mission}>
					<h3>Our Mission</h3>
					<div className={styles.cards}>
						{missionList.map(({ icon, text }) => {
							return (
								<div className={styles.card}>
									<img src={icon} />
									{text}
								</div>
							);
						})}
					</div>
				</section>
				<section className={styles.application}>
					<Slider heading={""} slides={slideData} />
				</section>
				<section className={styles.frame}>
					<span className={styles.text}>
						<h3>
							Overview of
							<br />
							Sonet
						</h3>
						<p>
							Illustratively, Sonet is an all-in-one Web2/3 middleware
							<br />
							service platform providing a direct entry point to applications.
							<br />
							We’re an integrator of blockchain services including the
							<br />
							following categories: Data Storage, Data Indexing, GPU
							<br />
							Rendering, Oracles, Node Services, etc.
						</p>
					</span>
					<span>
						<img className={styles.gif} src={hnet} />
					</span>
				</section>
				<section className={styles.token}>
					<div className={styles.icon}>
						<h5>Sonet ($SON)</h5>
						<img src={coin} />
						<p>
							Protocol governance
							<br /> token that can be staked
							<br /> for incentives{" "}
						</p>
					</div>
					<div className={styles.info}>
						<h3>Sonet Token System</h3>
						<ul>
							<li>
								Partnership and end user incentive payments will be denominated in $Sonet and can be
								staked in Sonet’s Liquidity Pool
							</li>
							<li>
								A separate Infrastructure Mining Pool will be available for miners that support
								Sonet’s backend, and rewards will be airdropped in $Sonet
							</li>
						</ul>
					</div>
				</section>

				<section
					className={styles.app}
					onMouseMove={handleMouseMove}
					onMouseLeave={handleMouseLeave}
				>
					{/*<img src={line} className={styles.line}/>*/}
					<h3>First App Launch (2022)</h3>
					<p>Soda – a Social NFT App and Extension on Twitter, Facebook, and more to come!</p>
					<div className={styles.container}>
						<img
							src={app}
							ref={appImage}
							// onMouseLeave={handleMouseLeave}
						/>
					</div>
					<button>Install Extension</button>
				</section>

				<section className={styles.roadmap}>
					<h3>Roadmap</h3>
					<p>Full Year 2022</p>
					<div className={styles.cards}>
						{roadmapData.map(({ title, contents }) => {
							return (
								<div className={styles.card}>
									<h4>{title}</h4>
									<ul>
										{contents.map((item) => {
											return <li>{item}</li>;
										})}
									</ul>
								</div>
							);
						})}
					</div>
				</section>

				<section>
					<div className={styles.faq}>
						<h3>FAQ</h3>
						<div className="accordion">
							{faqData.map(({ question, answer }, index) => {
								return (
									<div className="item">
										<button id={`accordion-button-${index}`} aria-expanded="false">
											<span className="title">{question}</span>
											<span className="icon" aria-hidden="true"></span>
										</button>
										<div className="content">{answer}</div>
									</div>
								);
							})}
						</div>
						<p>© Sonet. All Rights Reserved.</p>
						<Socials className={styles.socials} />
					</div>
				</section>
			</section>
		</>
	);
};
