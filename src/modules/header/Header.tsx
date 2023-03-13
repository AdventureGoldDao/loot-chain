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

type HeaderType = {};

export const Header: FC<HeaderType & MaybeWithClassName> = ({ className }) => {
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
				<NavLink
					className={styles.navlink}
					href="https://www.certik.com/projects/adventure-gold"
					variant="text"
				>
					Audit
				</NavLink>
				<NavLink className={styles.navlink} href="https://staking.adventuregold.org" variant="text">
					Staking
				</NavLink>
				<NavLink
					style={{ marginRight: "auto" }}
					className={styles.navlink}
					href="https://www.lootproject.com/"
					variant="text"
				>
					Loot
				</NavLink>
				<a
					style={{ textDecoration: 0 }}
					className={styles.navlink}
					href="/whitepaper/agld_whitepaper.pdf"
					target="_blank"
				>
					Whitepaper
				</a>
				<NavLink className={styles.navlink} href="https://loot-talk.com/" variant="text">
					Governance
				</NavLink>
				{/*<Navigations className={styles.navigation} />*/}
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
