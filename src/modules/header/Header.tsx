import classNames from "classnames";
import { FC, useCallback, useState, useEffect, useRef, CSSProperties } from "react";
import styles from "./Header.module.scss";
import { MaybeWithClassName } from "../../helper/react/types";
import { NavLink } from "../../ui/button";
import { Close, Logo, Toggle } from "../../ui/icons/Icons";
import { useScatteredContinuousState } from "../../hooks/use-continuous-state";
import { Socials } from "./ui/navigation/Navigation";
import { FocusOn } from "react-focus-on";
import { MobileNavigation } from "./ui/mobile-navigation";
import greenIcon from "../../pages/home/assets/greenIcon.png";
import blackIcon from "../../pages/home/assets/black-icon.svg";
import cexIcon0 from "../../pages/home/assets/cex-icon0.png";
import cexIcon1 from "../../pages/home/assets/cex-icon1.png";
import cexIcon2 from "../../pages/home/assets/cex-icon2.png";
import cexIcon3 from "../../pages/home/assets/cex-icon3.png";
import dexIcon0 from "../../pages/home/assets/dex-icon0.png";
type HeaderType = {};

const dexList = [
	{
		icon: dexIcon0,
		text: "UniSwap",
		link: "https://app.uniswap.org/#/tokens/ethereum/0x32353a6c91143bfd6c7d363b546e62a9a2489a20",
	},
];
const cexList = [
	{
		icon: cexIcon0,
		text: "Binance",
		link: "https://www.binance.com/en/trade/AGLD_USDT?theme=dark&type=spot",
	},
	{
		icon: cexIcon1,
		text: "Coinbase",
		link: "https://exchange.coinbase.com/trade/AGLD-USD",
	},
	{
		icon: cexIcon2,
		text: "OKX",
		link: "https://www.okx.com/cn/trade-spot/agld-usdt",
	},
	{
		icon: cexIcon3,
		text: "Upbit",
		link: "https://upbit.com/exchange?code=CRIX.UPBIT.BTC-AGLD",
	},
];

export const Header: FC<HeaderType & MaybeWithClassName> = ({ className }) => {
	const [isHover, setIshover] = useState(false);
	const [isDexHover, setIsDexhover] = useState(false);
	const [isHovered, setIshovered] = useState(false);
	const [isExploreHover, setIsExploreHover] = useState(false);
	const [mobileNavigationShown, setMobileNavigationVisibility] = useState(false);
	const mobileNavigation = useScatteredContinuousState(mobileNavigationShown, {
		timeout: 350,
	});
	const closeMobileNavigationDisplay = useCallback(() => setMobileNavigationVisibility(false), []);
	// toggle is bound to a visible state of button
	const toggleMobileNavigationDisplay = useCallback(
		() => setMobileNavigationVisibility(!mobileNavigation.present),
		[mobileNavigation.present]
	);

	// close mobile navigation on route change
	useEffect(() => {
		closeMobileNavigationDisplay();
	}, [closeMobileNavigationDisplay]);

	const toggleRef = useRef<HTMLButtonElement>(null);
	const rootRef = useRef<HTMLDivElement>(null);
	const roootRef = useRef<HTMLDivElement>(null);
	const rotRef = useRef<HTMLDivElement>(null);
	const dexRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (dexRef.current && !dexRef.current.contains(event.target as Node)) {
				setIsDexhover(false);
			}
		};
		document.addEventListener("click", handleClickOutside);
		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, []);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
				setIshover(false);
			}
		};
		document.addEventListener("click", handleClickOutside);
		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, []);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (roootRef.current && !roootRef.current.contains(event.target as Node)) {
				setIshovered(false);
			}
		};
		document.addEventListener("click", handleClickOutside);
		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, []);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (rotRef.current && !rotRef.current.contains(event.target as Node)) {
				setIsExploreHover(false);
			}
		};
		document.addEventListener("click", handleClickOutside);
		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, []);

	return (
		<header
			className={classNames(styles.component, className)}
			style={{ "--underline": mobileNavigation.present ? "block" : "none" } as CSSProperties}
		>
			<div className={styles.wrapper}>
				<NavLink
					style={{ width: "" }}
					className={styles.logo}
					href="/"
					icon={<Logo />}
					variant="text"
				>
					Home
				</NavLink>
				<NavLink style={{ marginLeft: "auto" }} className={styles.navlink} href="/" variant="text">
					Home
				</NavLink>
				<div
					className={styles.selectBox}
					onClick={() => {
						setIshovered(false);
						setIsDexhover(false);
						setIshover(false);
						setIsExploreHover(!isExploreHover);
					}}
					ref={rotRef}
					onMouseEnter={() => {
						setIshovered(false);
						setIsDexhover(false);
						setIshover(false);
						setIsExploreHover(true);
					}}
					aria-hidden="true"
				>
					<div className={styles.selectTitle}>
						<p>Explore</p>
						<img src={greenIcon} alt="icon" />
					</div>
					{isExploreHover && (
						<ul className={styles.selector}>
							<NavLink href="/explore">Explore</NavLink>
							<NavLink href="https://games-nft-w.netlify.app/games">Loot console</NavLink>
						</ul>
					)}
				</div>
				<NavLink className={styles.navlink} href="https://games-nft-w.netlify.app/" variant="text">
					Free Mint
				</NavLink>
				<div
					className={styles.selectBox}
					onClick={() => {
						setIshovered(false);
						setIsDexhover(false);
						setIsExploreHover(false);
						setIshover(!isHover);
					}}
					ref={rootRef}
					onMouseEnter={() => {
						setIsDexhover(false);
						setIshovered(false);
						setIsExploreHover(false);
						setIshover(true);
					}}
					aria-hidden="true"
				>
					<div className={styles.selectTitle}>
						<p>Loot Chain</p>
						<img src={greenIcon} alt="icon" />
					</div>
					{isHover && (
						<ul className={styles.selector}>
							<NavLink href="https://mainnet.lootchain.com/">Loot Chain</NavLink>
							<NavLink href="https://explorer.lootchain.com">Loot scan</NavLink>
							<NavLink href="https://mainnet.lootchain.com/bridge">Bridge</NavLink>
						</ul>
					)}
				</div>
				{/* <NavLink
					// style={{ marginRight: "auto" }}
					className={styles.navlink}
					href="https://www.lootproject.com/"
					variant="text"
					>
					Loot
					</NavLink> */}
				{/* <a
					style={{ textDecoration: 0 }}
					className={styles.navlink}
					href="/whitepaper/agld_whitepaper.pdf"
					target="_blank"
					>
					Whitepaper
				</a> */}
				{/* <NavLink className={styles.navlink} href="https://loot-talk.com/" variant="text">
					Governance
				</NavLink> */}
				{/* <NavLink
					style={{ marginRight: "auto" }}
					className={styles.navlink}
					href="/about"
					variant="text"
					>
					About
				</NavLink> */}
				<div
					className={styles.selectBox}
					onClick={() => {
						setIshover(false);
						setIsDexhover(false);
						setIsExploreHover(false);
						setIshovered(!isHovered);
					}}
					onMouseEnter={() => {
						setIshover(false);
						setIsExploreHover(false);
						setIsDexhover(false);
						setIshovered(true);
					}}
					ref={roootRef}
					aria-hidden="true"
				>
					<div className={styles.selectTitle}>
						<p>More</p>
						<img src={greenIcon} alt="icon" />
					</div>
					{isHovered && (
						<ul className={styles.selector}>
							<NavLink href="https://staking.adventuregold.org">Staking</NavLink>
							<NavLink href="https://loot-talk.com/">Governance</NavLink>
							<NavLink href="/whitepaper/agld_whitepaper.pdf">Whitepaper</NavLink>
							<NavLink href="https://www.certik.com/projects/adventure-gold">Audit</NavLink>
							<NavLink href="https://www.lootproject.com/">Loot</NavLink>
						</ul>
					)}
				</div>
				<div
					style={{ marginLeft: "auto" }}
					className={styles.selectBox}
					onClick={() => {
						setIshover(false);
						setIsExploreHover(false);
						setIshovered(false);
						setIsDexhover(!isDexHover);
					}}
					onMouseEnter={() => {
						setIshover(false);
						setIsExploreHover(false);
						setIshovered(false);
						setIsDexhover(true);
					}}
					ref={dexRef}
					aria-hidden="true"
				>
					<div className={styles.goBuyAGLD}>
						<p>BUY AGLD</p>
						<img src={blackIcon} alt="icon" />
					</div>
					{isDexHover && (
						<div className={styles.exchanges}>
							<ul style={{ padding: "8px 0" }}>DEX</ul>
							<ul>
								{dexList.map((item) => (
									<NavLink key={item.text} href={item.link}>
										<img src={item.icon} width={20} alt="" />
										{item.text}
										<svg
											width="12"
											height="12"
											viewBox="0 0 12 12"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M4.5 1.5C4.64642 1.49986 4.78712 1.55682 4.89222 1.65877C4.99731 1.76072 5.0585 1.89964 5.0628 2.04599C5.0671 2.19235 5.01416 2.33461 4.91523 2.44256C4.8163 2.5505 4.67918 2.61561 4.533 2.62406L4.5 2.625H3C2.90539 2.62497 2.81427 2.6607 2.7449 2.72503C2.67553 2.78936 2.63303 2.87753 2.62594 2.97188L2.625 3V9C2.62497 9.09461 2.6607 9.18573 2.72503 9.2551C2.78936 9.32447 2.87753 9.36697 2.97188 9.37406L3 9.375H9C9.09461 9.37503 9.18573 9.3393 9.2551 9.27497C9.32447 9.21064 9.36697 9.12247 9.37406 9.02813L9.375 9V7.6875C9.37486 7.54108 9.43182 7.40038 9.53377 7.29528C9.63572 7.19019 9.77464 7.129 9.92099 7.1247C10.0674 7.1204 10.2096 7.17334 10.3176 7.27227C10.4255 7.3712 10.4906 7.50832 10.4991 7.6545L10.5 7.6875V9C10.5 9.38971 10.3483 9.76411 10.0771 10.0439C9.80587 10.3238 9.43639 10.4871 9.04688 10.4992L9 10.5H3C2.61029 10.5 2.23589 10.3483 1.95606 10.0771C1.67622 9.80587 1.51293 9.43639 1.50075 9.04688L1.5 9V3C1.5 2.6103 1.65168 2.23589 1.9229 1.95606C2.19413 1.67622 2.56361 1.51293 2.95312 1.50075L3 1.5H4.5ZM9 1.5C9.38971 1.5 9.76411 1.65168 10.0439 1.9229C10.3238 2.19413 10.4871 2.56361 10.4992 2.95313L10.5 3V4.875C10.5001 5.02142 10.4432 5.16212 10.3412 5.26722C10.2393 5.37231 10.1004 5.4335 9.95401 5.4378C9.80765 5.4421 9.66539 5.38916 9.55744 5.29023C9.4495 5.1913 9.38439 5.05418 9.37594 4.908L9.375 4.875V3.42038L4.89769 7.89788C4.79455 8.00162 4.65505 8.06109 4.50879 8.0637C4.36253 8.0663 4.221 8.01182 4.11424 7.91181C4.00748 7.8118 3.94387 7.67414 3.93692 7.52802C3.92997 7.3819 3.98021 7.23882 4.077 7.12913L4.10231 7.10231L8.57925 2.625H7.125C6.97858 2.62514 6.83788 2.56818 6.73278 2.46623C6.62769 2.36428 6.5665 2.22536 6.5622 2.07901C6.5579 1.93265 6.61084 1.79039 6.70977 1.68244C6.8087 1.5745 6.94582 1.50939 7.092 1.50094L7.125 1.5H9Z"
												fill="#7A9283"
											/>
										</svg>
									</NavLink>
								))}
							</ul>
							<ul style={{ padding: "8px 0" }}>CEX</ul>
							<ul>
								{cexList.map((item) => (
									<NavLink key={item.text} href={item.link}>
										<img src={item.icon} width={20} alt="" />
										{item.text}
										<svg
											width="12"
											height="12"
											viewBox="0 0 12 12"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M4.5 1.5C4.64642 1.49986 4.78712 1.55682 4.89222 1.65877C4.99731 1.76072 5.0585 1.89964 5.0628 2.04599C5.0671 2.19235 5.01416 2.33461 4.91523 2.44256C4.8163 2.5505 4.67918 2.61561 4.533 2.62406L4.5 2.625H3C2.90539 2.62497 2.81427 2.6607 2.7449 2.72503C2.67553 2.78936 2.63303 2.87753 2.62594 2.97188L2.625 3V9C2.62497 9.09461 2.6607 9.18573 2.72503 9.2551C2.78936 9.32447 2.87753 9.36697 2.97188 9.37406L3 9.375H9C9.09461 9.37503 9.18573 9.3393 9.2551 9.27497C9.32447 9.21064 9.36697 9.12247 9.37406 9.02813L9.375 9V7.6875C9.37486 7.54108 9.43182 7.40038 9.53377 7.29528C9.63572 7.19019 9.77464 7.129 9.92099 7.1247C10.0674 7.1204 10.2096 7.17334 10.3176 7.27227C10.4255 7.3712 10.4906 7.50832 10.4991 7.6545L10.5 7.6875V9C10.5 9.38971 10.3483 9.76411 10.0771 10.0439C9.80587 10.3238 9.43639 10.4871 9.04688 10.4992L9 10.5H3C2.61029 10.5 2.23589 10.3483 1.95606 10.0771C1.67622 9.80587 1.51293 9.43639 1.50075 9.04688L1.5 9V3C1.5 2.6103 1.65168 2.23589 1.9229 1.95606C2.19413 1.67622 2.56361 1.51293 2.95312 1.50075L3 1.5H4.5ZM9 1.5C9.38971 1.5 9.76411 1.65168 10.0439 1.9229C10.3238 2.19413 10.4871 2.56361 10.4992 2.95313L10.5 3V4.875C10.5001 5.02142 10.4432 5.16212 10.3412 5.26722C10.2393 5.37231 10.1004 5.4335 9.95401 5.4378C9.80765 5.4421 9.66539 5.38916 9.55744 5.29023C9.4495 5.1913 9.38439 5.05418 9.37594 4.908L9.375 4.875V3.42038L4.89769 7.89788C4.79455 8.00162 4.65505 8.06109 4.50879 8.0637C4.36253 8.0663 4.221 8.01182 4.11424 7.91181C4.00748 7.8118 3.94387 7.67414 3.93692 7.52802C3.92997 7.3819 3.98021 7.23882 4.077 7.12913L4.10231 7.10231L8.57925 2.625H7.125C6.97858 2.62514 6.83788 2.56818 6.73278 2.46623C6.62769 2.36428 6.5665 2.22536 6.5622 2.07901C6.5579 1.93265 6.61084 1.79039 6.70977 1.68244C6.8087 1.5745 6.94582 1.50939 7.092 1.50094L7.125 1.5H9Z"
												fill="#7A9283"
											/>
										</svg>
									</NavLink>
								))}
							</ul>
						</div>
					)}
				</div>
				<Socials className={styles.socials} />
				<button className={styles.toggle} onClick={toggleMobileNavigationDisplay} ref={toggleRef}>
					{mobileNavigation.present ? <Close /> : <Toggle />}
					<span>{mobileNavigation.present ? "Close" : "Open"}</span>
				</button>
			</div>
			{mobileNavigation.defined && (
				<FocusOn
					autoFocus
					enabled={mobileNavigation.present}
					onEscapeKey={closeMobileNavigationDisplay}
					onClickOutside={closeMobileNavigationDisplay}
					shards={[toggleRef]}
				>
					<MobileNavigation
						className={classNames(
							styles.dropdown,
							mobileNavigation.defined && styles.visible,
							mobileNavigation.present && styles.animation
						)}
						sideEffect={<mobileNavigation.DefinePresent timeout={16} />}
					/>
				</FocusOn>
			)}
		</header>
	);
};
