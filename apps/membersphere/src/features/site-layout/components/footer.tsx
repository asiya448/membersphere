import { Footer as SharedFooter, type FooterLinkGroup } from "@membersphere/ui";

const groups: FooterLinkGroup[] = [
  {
    title: "Explore",
    links: [
      { label: "Home", href: "#welcome-title" },
      { label: "Our community", href: "#community" },
      { label: "How it works", href: "#features" },
    ],
  },
  {
    title: "Get to know us",
    links: [
      { label: "Our approach", href: "#community" },
      { label: "Common questions", href: "#questions" },
      { label: "The member experience", href: "#features" },
    ],
  },
];

export default function Footer() {
  return <SharedFooter homeHref="#welcome-title" groups={groups} />;
}
