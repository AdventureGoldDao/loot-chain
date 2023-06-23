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
type HeaderType = {};

export const Header: FC<HeaderType & MaybeWithClassName> = ({ className }) => {
	const [isHover, setIshover] = useState(false);
	const [isHovered, setIshovered] = useState(false);
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
				<NavLink className={styles.navlink} href="/explore" aria-hidden="true">
					Explore
				</NavLink>
				{/* <NavLink
					className={styles.navlink}
					href="https://www.certik.com/projects/adventure-gold"
					variant="text"
				>
					Audit
				</NavLink> */}
				<div
					className={styles.selectBox}
					onClick={() => {
						setIshovered(false);
						setIshover(!isHover);
					}}
					ref={rootRef}
					onMouseEnter={() => {
						setIshovered(false);
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
							<NavLink href="https://explorer.lootchain.com">Loot scan</NavLink>
							<NavLink href="https://mainnet.lootchain.com/bridge">Bridge</NavLink>
						</ul>
					)}
				</div>
				<NavLink className={styles.navlink} href="https://staking.adventuregold.org" variant="text">
					Staking
				</NavLink>
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
				<NavLink className={styles.navlink} href="https://loot-talk.com/" variant="text">
					Governance
				</NavLink>
				{/* <NavLink
					style={{ marginRight: "auto" }}
					className={styles.navlink}
					href="/about"
					variant="text"
				>
					About
				</NavLink> */}
				<div
					style={{ marginRight: "auto" }}
					className={styles.selectBox}
					onClick={() => {
						setIshover(false);
						setIshovered(!isHovered);
					}}
					onMouseEnter={() => {
						setIshover(false);
						setIshovered(true);
					}}
					ref={roootRef}
					aria-hidden="true"
				>
					<div className={styles.selectTitle}>
						<p>About</p>
						<img src={greenIcon} alt="icon" />
					</div>
					{isHovered && (
						<ul className={styles.selector}>
							<NavLink href="/whitepaper/agld_whitepaper.pdf">Whitepaper</NavLink>
							<NavLink href="https://www.certik.com/projects/adventure-gold">Audit</NavLink>
							<NavLink href="https://www.lootproject.com/">Loot</NavLink>
						</ul>
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
