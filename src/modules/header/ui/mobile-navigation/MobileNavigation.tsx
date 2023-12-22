import type { CSSProperties, FC, ReactNode } from "react";
import { useCallback, useState } from "react";
import classNames from "classnames";
import styles from "./MobileNavigation.module.scss";
import { MaybeWithClassName } from "../../../../helper/react/types";
import { NavLink } from "../../../../ui/button";
import { SOCIAL } from "../../../../const/const";
import { Close } from "../../../../ui/icons/Icons";
import { useScatteredContinuousState } from "../../../../hooks/use-continuous-state";

import {
	Discord,
	Envelop,
	Medium,
	Mirror,
	Telegram,
	Twitter,
	Youtube,
	Github,
} from "../../../../ui/icons/Icons";
import React from "react";
import { useWindowSize } from "../../../../hooks/use-window-size";

// export type LinkType = {
//  link: string;
//  links: Record<string, string>;
// };

type NavigationType = {
	sideEffect?: ReactNode;
};
type NavigationEventType = {
	clickClose?: () => void;
};

type ComponentType = NavigationType & MaybeWithClassName & NavigationEventType;

const ICONS = {
	Twitter: <Twitter />,
	Telegram: <Telegram />,
	Medium: <Medium />,
	Youtube: <Youtube />,
	Discord: <Discord />,
	Github: <Github />,
	Mirror: <Mirror scale={0.6} />,
	"contact@bubble.co": <Envelop />,
};

export const MobileNavigation: FC<ComponentType> = ({ className, clickClose, sideEffect }) => {
	const windowHeight = useWindowSize()[1];

	const keys = Object.keys(SOCIAL);
	const [mobileNavigationShown, setMobileNavigationVisibility] = useState(false);
	const mobileNavigation = useScatteredContinuousState(mobileNavigationShown, {
		timeout: 350,
	});
	const closeModal = () => {
		clickClose();
	};
	return (
		<div
			className={classNames(className, styles.component)}
			style={{ "--window-height": `${windowHeight}px` } as CSSProperties}
		>
			<div className={styles.closeNav} onClick={closeModal}>
				<Close />
			</div>
			<ul className={styles.item}>
				<li className={styles.item}>
					<NavLink className={classNames(styles.link)} href={"/"}>
						Home
					</NavLink>
				</li>
				<li className={styles.item}>
					<NavLink className={classNames(styles.link)} href="https://games.lootchain.com/games">
						Loot Console
					</NavLink>
				</li>
				{/* <ul className={styles.childUl}>
					<li>
						<NavLink href="/ecosystem">Ecosystem</NavLink>
					</li>
					<li>
						<NavLink href="https://games.lootchain.com/games">Loot Console</NavLink>
					</li>
				</ul> */}
				{/* <li>
					<NavLink className={classNames(styles.link)} href={"https://freemint.lootchain.com"}>
						Loot NFT Pad
					</NavLink>
				</li> */}
				<li>
					<NavLink
						style={{ fontSize: 18, marginBottom: 10 }}
						className={classNames(styles.link)}
						href={"#"}
					>
						Loot Chain
					</NavLink>
				</li>
				<ul className={styles.childUl}>
					<li>
						<NavLink href="https://mainnetv1.lootchain.com">Loot Chain Info</NavLink>
					</li>
					<li>
						<NavLink href="https://explorer.lootchain.com">Loot Scan</NavLink>
					</li>
					<li>
						<NavLink href="https://bridge.lootchain.com/bridge">Bridge</NavLink>
					</li>
					<li>
						<NavLink href="https://soswap.rai.finance/#/swap">Soswap</NavLink>
					</li>
					<li>
						<NavLink href="https://loot-chain.gitbook.io/loot-chain-documentation/getting-started/overview">
							Documentation
						</NavLink>
					</li>
				</ul>
				<li>
					<NavLink className={classNames(styles.link)} href={"#"}>
						More
					</NavLink>
				</li>
				<ul className={styles.childUl}>
					<li>
						<NavLink className={classNames(styles.link)} href={"https://staking.adventuregold.org"}>
							Staking
						</NavLink>
					</li>
					<li>
						<NavLink className={classNames(styles.link)} href={"https://loot-talk.com/"}>
							Governance
						</NavLink>
					</li>
					<li>
						<NavLink href="/whitepaper/agld_whitepaper.pdf">Whitepaper</NavLink>
					</li>
					<li>
						<NavLink href="https://www.certik.com/projects/adventure-gold">Audit</NavLink>
					</li>
					<li>
						<NavLink href="https://www.lootproject.com/">Loot</NavLink>
					</li>
					<li>
						<NavLink href="/ecosystem">Ecosystem</NavLink>
					</li>
				</ul>
			</ul>
			{/* <ul className={styles.list}>
				{keys.map((key) => {
					// const lastItem = index === keys.length - 1;
					return (
						<li key={key} className={styles.item}>
							<NavLink
								className={classNames(styles.link)}
								href={SOCIAL[key]}
								iconBefore={ICONS[key]}
								variant="text"
								size="large"
								color="white"
							>
								{key}
							</NavLink>
						</li>
					);
				})}
			</ul> */}
			{sideEffect}
		</div>
	);
};
