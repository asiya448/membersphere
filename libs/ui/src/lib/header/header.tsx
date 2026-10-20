"use client";

import { useId, useState, type ComponentType, type ComponentProps } from "react";
import type { NavigationLink } from "../types";
import styles from "./header.module.css";

export type HeaderProps = {
  links: NavigationLink[];
  homeHref: string;
  loginHref: string;
  activePath?: string;
  userName?: string;
  LinkComponent?: ComponentType<ComponentProps<"a">> | "a";
};

export default function Header({ links, homeHref, loginHref, activePath, userName, LinkComponent = "a" }: HeaderProps) {
  const Link = LinkComponent;
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const navigationId = useId();
  const matches = links.filter(({ label }) => label.toLowerCase().includes(query.trim().toLowerCase()));
  const initials = userName?.trim().split(/\s+/).slice(0, 2).map((part) => part[0]).join("").toUpperCase();

  return (
    <div className={styles.header}>
      <div className={styles.bar}>
        <Link href={homeHref} className={styles.brand} aria-label="Membersphere home">
          <span className={styles.mark} aria-hidden="true">m<span /></span>
          <span>member<span className={styles.accent}>sphere</span><small>YOUR PEOPLE. YOUR PLACE.</small></span>
        </Link>
        <nav className={styles.desktop} aria-label="Main navigation">
          {links.map(({ label, href }) => <Link key={href} href={href} aria-current={activePath === href ? "page" : undefined}>{label}</Link>)}
        </nav>
        <div className={styles.search} onKeyDown={(event) => { if (event.key === "Escape") setQuery(""); }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 4.5 4.5" /></svg>
          <input type="search" aria-label="Search menu links" placeholder="Search Membersphere…" value={query} onChange={(event) => setQuery(event.target.value)} />
          {query.trim() && <div className={styles.results}><small>QUICK LINKS</small>
            {matches.length ? matches.map(({ label, href }) => <Link key={href} href={href} onClick={() => setQuery("")}>{label}<span aria-hidden="true">↗</span></Link>) : <p>No matching pages found.</p>}
          </div>}
        </div>
        {userName ? <div className={styles.user}>
          <span className={styles.avatar} aria-hidden="true">{initials || "M"}</span>
          <span className={styles.userText}><small>Welcome back</small><strong>{userName}</strong></span>
        </div> : <Link className={styles.login} href={loginHref}>Log in <span aria-hidden="true">↗</span></Link>}
        <button type="button" className={styles.toggle} aria-expanded={open} aria-controls={navigationId} aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">{open ? <path d="m6 6 12 12M6 18 18 6" /> : <path d="M4 6h16M4 12h16M4 18h16" />}</svg>
        </button>
      </div>
      {open && <nav id={navigationId} className={styles.mobile} aria-label="Mobile navigation">
        {links.map(({ label, href }) => <Link key={href} href={href} aria-current={activePath === href ? "page" : undefined} onClick={() => setOpen(false)}>{label}<span aria-hidden="true">↗</span></Link>)}
      </nav>}
    </div>
  );
}
