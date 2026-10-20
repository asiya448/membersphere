# Shared UI

Reusable React components and their scoped CSS Modules for apps in this workspace.
The apps compile this source library directly; it needs no separate build or package installation.

```tsx
import { Header, Footer } from "@membersphere/ui";

const links = [{ label: "Home", href: "/" }];

<Header
  links={links}
  homeHref="/"
  loginHref="/login"
  activePath="/"
  userName="Asiya"
/>;

<Footer homeHref="/" groups={[{ title: "Explore", links }]} />;
```

`Header` owns menu/search interaction. Its search filters the supplied navigation links.
It uses ordinary anchors by default; a client-side app adapter can supply `LinkComponent`
for framework navigation. The library does not read routes or authentication sessions.
Omit `userName` to show the login link.

`Footer` accepts link groups, a home/back-to-top destination, and optional text content.
No homepage section IDs are built into the shared components.

The Membersphere app keeps its routing and footer link configuration in
`apps/membersphere/src/features/site-layout/components`.
The homepage feature and global styles stay in the app.

Each component imports its own CSS Module, so consumers do not import CSS separately.
Both use the app's `--font-geist-sans` font variable with Arial as a fallback.

Type-check with `npx nx typecheck ui`.
