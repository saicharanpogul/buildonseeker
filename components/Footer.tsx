import { FOOTER_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-border-card py-12">
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-3">
            <p className="font-heading text-sm font-semibold text-text-primary">
              buildonseeker.com
            </p>
            <p className="text-sm text-text-secondary">
              Built by{" "}
              <a
                href={FOOTER_LINKS.author.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-primary hover:underline"
              >
                {FOOTER_LINKS.author.name}
              </a>
              {" · "}
              <a
                href={FOOTER_LINKS.author.superteam}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-purple hover:underline"
              >
                SuperteamIN
              </a>
              {" Member"}
            </p>
            <p className="text-sm text-text-secondary">
              Powered by{" "}
              <a
                href={FOOTER_LINKS.sdk.npm}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-green hover:underline"
              >
                {FOOTER_LINKS.sdk.name}
              </a>
            </p>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-2">
            <a
              href={FOOTER_LINKS.solanaMobile.site}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-muted transition-colors hover:text-text-secondary"
            >
              Solana Mobile
            </a>
            <a
              href={FOOTER_LINKS.solanaMobile.docs}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-muted transition-colors hover:text-text-secondary"
            >
              Docs
            </a>
            <a
              href={FOOTER_LINKS.solanaMobile.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-muted transition-colors hover:text-text-secondary"
            >
              Discord
            </a>
            <a
              href={FOOTER_LINKS.author.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-muted transition-colors hover:text-text-secondary"
            >
              Twitter
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6">
          <p className="text-xs text-text-muted">
            Not affiliated with Solana Mobile, Inc. This is an unofficial community project.
          </p>
        </div>
      </div>
    </footer>
  );
}
