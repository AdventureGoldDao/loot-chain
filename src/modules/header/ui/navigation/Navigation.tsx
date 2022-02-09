import type { FC } from "react";
import styles from "./Navigation.module.scss";
import { MaybeWithClassName } from "../../../../helper/react/types";
import { Envelop, Medium, Telegram, Twitter } from "../../../../ui/icons/Icons";

export type LinkType = {
	link: string;
	links: Record<string, string>;
};

type NavigationType = {
	links?: Record<string, string | LinkType>;
};

type ComponentType = NavigationType & MaybeWithClassName;

const ICONS = {
	Twitter: <Twitter />,
	Telegram: <Telegram />,
	Medium: <Medium />,
	"contact@bubble.co": <Envelop />,
};

export const Navigation: FC<ComponentType> = ({ className }) => {
	return (
		<div className={className}>
			<ul className={styles.list}>
				{/*{Object.keys(SOCIAL).map((key) => {*/}
				{/*	const subItem = SOCIAL[key];*/}
				{/*	return (*/}
				{/*		<li key={key} className={styles.item}>*/}
				{/*			<NavLink className={styles.link} href={subItem} icon={ICONS[key]} size="large">*/}
				{/*				{key}*/}
				{/*			</NavLink>*/}
				{/*		</li>*/}
				{/*	);*/}
				{/*})}*/}
				<a
					target={"_blank"}
					href={
						"https://docs.google.com/forms/d/e/1FAIpQLSecgM-klm3nFPed0fyc6FEimlD8ulW7pHN3zr_n6Is6CifIzg/viewform?usp=sf_link"
					}
					className={styles.button}
				>
					Join Waitlist
				</a>
			</ul>
		</div>
	);
};
