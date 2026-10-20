"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Suspense, type ComponentProps } from "react";
import { Header as SharedHeader } from "@membersphere/ui";

// Keep Next.js navigation in the app; shared UI receives ordinary link props.
function AppLink({ href = "/", ...props }: ComponentProps<"a">) {
  return <Link href={href} {...props} />;
}

export default function Header({ userName }: { userName?: string }) {
  return (
    <Suspense fallback={<div style={{ minHeight: 92, background: "#f2f9ed" }} role="status" aria-label="Loading navigation" />}>
      <HeaderContent userName={userName} />
    </Suspense>
  );
}

function HeaderContent({ userName }: { userName?: string }) {
  const pathname = usePathname();
  const home = pathname === "/" ? "/" : `/${pathname.split("/")[1] || "en"}`;
  const routeBase = home === "/" ? "/en" : home;
  const links = [
    { label: "Home", href: home },
    { label: "Community", href: `${routeBase}/community` },
    { label: "Members", href: `${routeBase}/members` },
    { label: "Events", href: `${routeBase}/events` },
  ];

  return <SharedHeader links={links} homeHref={home} loginHref={`${routeBase}/login`} activePath={pathname} userName={userName} LinkComponent={AppLink} />;
}
