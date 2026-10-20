import type { ReactNode } from "react";
import type { NavigationLink } from "../types";
import styles from "./footer.module.css";

export type FooterLinkGroup = {
  title: string;
  links: NavigationLink[];
};

export type FooterProps = {
  homeHref: string;
  groups: FooterLinkGroup[];
  description?: ReactNode;
  noteTitle?: ReactNode;
  noteDescription?: ReactNode;
  copyright?: string;
  bottomText?: string;
};

export default function Footer({
  homeHref,
  groups,
  description = <>A little connection.<br />A world of possibility.</>,
  noteTitle = <>Good company.<br />Great possibilities.</>,
  noteDescription = <>Built for the connections<br />that make a difference.</>,
  copyright = "© Membersphere. All rights reserved.",
  bottomText = "Made for people, brought together.",
}: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.intro}>
          <a className={styles.brand} href={homeHref}><span className={styles.mark} aria-hidden="true">m.</span>member<span>sphere</span></a>
          <p>{description}</p>
          <span className={styles.tagline}>YOUR PEOPLE. YOUR PLACE.</span>
        </div>
        {groups.map((group) => (
          <nav key={group.title} aria-label={group.title}>
            <h2>{group.title}</h2>
            {group.links.map((link) => <a key={link.href + link.label} href={link.href}>{link.label}</a>)}
          </nav>
        ))}
        <div className={styles.note}><span aria-hidden="true">✳</span><h2>{noteTitle}</h2><p>{noteDescription}</p></div>
      </div>
      <div className={styles.bottom}><span>{copyright}</span><span>{bottomText}</span><a href={homeHref}>Back to top ↑</a></div>
    </footer>
  );
}
