import type { FC } from "react";
import styles from "./Navigation.module.scss";
import { MaybeWithClassName } from "../../../../helper/react/types";
import {
	Discord,
	Envelop,
	Facebook,
	Medium,
	Mirror,
	Telegram,
	Twitter,
	Youtube,
	Github,
} from "../../../../ui/icons/Icons";
import { SOCIAL, NAVS } from "../../../../const/const";
import { NavLink } from "../../../../ui/button";

export type LinkType = {
	link: string;
	links: Record<string, string>;
};

type NavigationType = {
	links?: Record<string, string | LinkType>;
	withButton?: boolean;
};

type ComponentType = NavigationType & MaybeWithClassName;

const ICONS = {
	Discord: <Discord />,
	Telegram: <Telegram />,
	Facebook: <Facebook />,
	Twitter: <Twitter />,
	Medium: <Medium />,
	Youtube: <Youtube />,
	Mirror: <Mirror />,
	Github: <Github />,
};

export const Socials: FC<ComponentType> = ({ className, withButton }) => {
	return (
		<div className={className}>
			<ul className={styles.list}>
				{Object.keys(SOCIAL).map((key) => {
					const subItem = SOCIAL[key];
					return (
						<li key={key} className={styles.item}>
							<NavLink className={styles.link} href={subItem} icon={ICONS[key]} size="small">
								{key}
							</NavLink>
						</li>
					);
				})}
				{withButton && (
					<button
						onClick={() => {
							window.open("https://staking.adventuregold.org", "_blank");
						}}
						className={styles.videoButton}
					>
						Staking
					</button>
				)}
			</ul>
		</div>
	);
};

export const Navigations: FC<ComponentType> = ({ className }) => {
	return (
		<div className={className}>
			<ul className={styles.list}>
				{Object.keys(NAVS).map((key) => {
					const subItem = NAVS[key];
					return (
						<li key={key} className={styles.item}>
							<NavLink className={styles.link} href={subItem} icon={ICONS[key]} size="small">
								{key}
							</NavLink>
						</li>
					);
				})}
			</ul>
		</div>
	);
};
