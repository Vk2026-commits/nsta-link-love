import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kairos Security — Links" },
      {
        name: "description",
        content:
          "Official link hub for Kairos Security. View products, grab our free security guide, contact us, or follow along.",
      },
      { property: "og:title", content: "Kairos Security — Links" },
      {
        property: "og:description",
        content:
          "Official link hub for Kairos Security. View products, grab our free security guide, contact us, or follow along.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LinksPage,
});

type LinkItem = {
  label: string;
  sub: string;
  href: string;
  icon: keyof typeof ICONS;
  primary?: boolean;
};

const ICONS = {
  calendar: (
    <path d="M3 4.5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-8zM3 6.5h10M5.5 2.5v3M9.5 2.5v3" />
  ),
  cart: <path d="M2 3h2l1.6 9.5a1 1 0 0 0 1 .8h7.8a1 1 0 0 0 1-.8L18 6H5" />,
  download: (
    <path d="M8 2v8m0 0l-3-3m3 3l3-3M3 14v4a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-4" />
  ),
  mail: <path d="M2 5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5zM2 5l6 4 6-4" />,
  instagram: (
    <path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM8 5.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5z" />
  ),
  linkedin: (
    <path d="M3 4a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM2.5 7h1.5v7H2.5zM6 7h1.4v1.1h.02c.27-.5.94-1.1 2.05-1.1 1.5 0 2.73 1 2.73 3.05V14h-1.5v-3.4c0-.8-.3-1.35-1.02-1.35-.55 0-.88.37-1.03.74-.05.13-.07.3-.07.47V14H6.2z" />
  ),
} satisfies Record<string, ReactNode>;

const LINKS: LinkItem[] = [
  {
    label: "Kairos Security Academy",
    sub: "Courses & training",
    href: "https://www.kairossecurityacademy.com",
    icon: "cart",
    primary: true,
  },
  {
    label: "Download Free Security Guide",
    sub: "PDF · Free download",
    href: "https://www.kairossecurity.com/guide.pdf",
    icon: "download",
  },
  {
    label: "Book a Consultation",
    sub: "1-hour call · via Calendly",
    href: "https://calendly.com/staylor-kairossecurity/60min",
    icon: "calendar",
  },
  {
    label: "Get Information / Contact",
    sub: "hello@kairossecurity.com",
    href: "mailto:hello@kairossecurity.com",
    icon: "mail",
  },
  {
    label: "Instagram",
    sub: "@kairossecurity",
    href: "https://instagram.com/kairossecurity",
    icon: "instagram",
  },
  {
    label: "LinkedIn",
    sub: "Kairos Security",
    href: "https://linkedin.com/company/kairossecurity",
    icon: "linkedin",
  },
];

function LinksPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto flex min-h-screen max-w-md flex-col items-center px-6 py-16">
        {/* Identity */}
        <header className="flex flex-col items-center text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full border border-border bg-muted text-2xl font-semibold tracking-tight text-foreground">
            K
          </div>
          <h1 className="mt-5 text-2xl font-semibold tracking-tight">
            Kairos Security
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Protection, intelligence, and trust.
          </p>
        </header>

        {/* Links */}
        <nav className="mt-10 flex w-full flex-col gap-3" aria-label="Links">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={[
                "group flex w-full items-center justify-between rounded-xl border px-5 py-4 transition-all",
                link.primary
                  ? "border-foreground bg-foreground text-background hover:opacity-90"
                  : "border-border bg-card text-foreground hover:bg-accent",
              ].join(" ")}
            >
              <span className="flex items-center gap-3">
                <svg
                  className="h-5 w-5 shrink-0"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {ICONS[link.icon]}
                </svg>
                <span className="flex flex-col">
                  <span className="text-base font-medium">{link.label}</span>
                  {link.sub && (
                    <span
                      className={[
                        "text-xs",
                        link.primary
                          ? "text-background/70"
                          : "text-muted-foreground",
                      ].join(" ")}
                    >
                      {link.sub}
                    </span>
                  )}
                </span>
              </span>
              <svg
                className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </a>
          ))}
        </nav>

        {/* Footer */}
        <footer className="mt-auto pt-12 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Kairos Security
          </p>
        </footer>
      </div>
    </main>
  );
}
