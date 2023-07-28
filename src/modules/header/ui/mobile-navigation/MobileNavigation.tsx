import type { CSSProperties, FC, ReactNode } from "react";
import classNames from "classnames";
import styles from "./MobileNavigation.module.scss";
import { MaybeWithClassName } from "../../../../helper/react/types";
import { NavLink } from "../../../../ui/button";
import { SOCIAL } from "../../../../const/const";
import {
	Discord,
	Envelop,
	Medium,
	Mirror,
	Telegram,
	Twitter,
	Youtube,
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

type ComponentType = NavigationType & MaybeWithClassName;

const ICONS = {
	Twitter: <Twitter />,
	Telegram: <Telegram />,
	Medium: <Medium />,
	Youtube: <Youtube />,
	Discord: <Discord />,
	Mirror: <Mirror scale={0.6} />,
	"contact@bubble.co": <Envelop />,
};

export const MobileNavigation: FC<ComponentType> = ({ className, sideEffect }) => {
	const windowHeight = useWindowSize()[1];

	const keys = Object.keys(SOCIAL);

	return (
		<div
			className={classNames(className, styles.component)}
			style={{ "--window-height": `${windowHeight}px` } as CSSProperties}
		>
			<ul className={styles.item}>
				<li className={styles.item}>
					<NavLink
						style={{ fontSize: 18, marginBottom: 10 }}
						className={classNames(styles.link)}
						href={"/"}
					>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink
						style={{ fontSize: 18, marginBottom: 10 }}
						className={classNames(styles.link)}
						href={"#"}
					>
						Explore
					</NavLink>
				</li>
				<ul className={styles.childUl}>
					<li>
						<NavLink href="/explore">Explore</NavLink>
					</li>
					<li>
						<NavLink href="https://games.lootchain.com/games">Loot Console</NavLink>
					</li>
					<li>
						<NavLink href="/ecosystem">Ecosystem</NavLink>
					</li>
				</ul>
				<li>
					<NavLink
						style={{ fontSize: 18, marginBottom: 10 }}
						className={classNames(styles.link)}
						href={"https://freemint.lootchain.com"}
					>
						Loot Pad
					</NavLink>
				</li>
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
						<NavLink href="https://mainnet.lootchain.com/">Loot Chain</NavLink>
					</li>
					<li>
						<NavLink href="https://explorer.lootchain.com">Lootscan</NavLink>
					</li>
					<li>
						<NavLink href="https://mainnet.lootchain.com/bridge">Bridge</NavLink>
					</li>
				</ul>
				<li>
					<NavLink
						style={{ fontSize: 18, marginBottom: 10 }}
						className={classNames(styles.link)}
						href={"#"}
					>
						More
					</NavLink>
				</li>
				<ul className={styles.childUl}>
					<li>
						<NavLink
							style={{ fontSize: 18, marginBottom: 10 }}
							className={classNames(styles.link)}
							href={"https://staking.adventuregold.org"}
						>
							Staking
						</NavLink>
					</li>
					<li>
						<NavLink
							style={{ fontSize: 18, marginBottom: 10 }}
							className={classNames(styles.link)}
							href={"https://loot-talk.com/"}
						>
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
				</ul>
			</ul>
			<ul className={styles.list}>
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
			</ul>
			{sideEffect}
		</div>
	);
};
