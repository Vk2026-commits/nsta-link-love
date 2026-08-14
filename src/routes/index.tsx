import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kairos Security — Links" },
      {
        name: "description",
        content: "Official link hub for Kairos Security. Visit our website.",
      },
      { property: "og:title", content: "Kairos Security — Links" },
      {
        property: "og:description",
        content: "Official link hub for Kairos Security. Visit our website.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LinksPage,
});

const LINKS = [
  {
    label: "Kairos Security Website",
    sub: "kairossecurity.com",
    href: "https://www.kairossecurity.com",
    primary: true,
  },
] as const;

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
              <span className="flex flex-col">
                <span className="text-base font-medium">{link.label}</span>
                {link.sub && (
                  <span
                    className={[
                      "text-xs",
                      link.primary ? "text-background/70" : "text-muted-foreground",
                    ].join(" ")}
                  >
                    {link.sub}
                  </span>
                )}
              </span>
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
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
