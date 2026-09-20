import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SITE } from "@/lib/site";

export type LegalSection = {
  id: string;
  title: string;
  body: React.ReactNode;
};

type Props = {
  title: string;
  summary: string;
  lastUpdated: string;
  sections: LegalSection[];
};

/** Kerangka bersama untuk halaman hukum: navigasi, daftar isi, dan isi teks. */
export default function LegalShell({ title, summary, lastUpdated, sections }: Props) {
  return (
    <div className="min-h-screen bg-paper">
      <nav className="sticky top-0 z-40 border-b border-line bg-paper/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-5 sm:px-8">
          <Link href="/" className="font-wordmark text-2xl leading-none text-ink">
            hifloo
            <span className="sr-only"> — beranda</span>
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-ink-2 transition-colors hover:text-ink"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Kembali ke beranda
          </Link>
        </div>
      </nav>

      <header className="border-b border-line bg-paper-2">
        <div className="mx-auto max-w-4xl px-5 py-14 sm:px-8 sm:py-20">
          <p className="eyebrow">Ketentuan</p>
          <h1 className="mt-5 text-title font-semibold">{title}</h1>
          <p className="mt-4 max-w-prose text-lg leading-relaxed text-ink-2">{summary}</p>
          <p className="mt-6 text-sm text-ink-3">Terakhir diperbarui: {lastUpdated}</p>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-5 py-14 sm:px-8 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[13rem_1fr] lg:gap-16">
          <aside className="hidden lg:block">
            <nav aria-label="Daftar isi" className="sticky top-24">
              <h2 className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-ink-3">
                Daftar isi
              </h2>
              <ul className="mt-4 space-y-2.5">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="block text-sm leading-snug text-ink-3 transition-colors hover:text-accent"
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          <div
            className="
              space-y-12
              [&_a]:text-accent [&_a]:underline [&_a]:underline-offset-2
              [&_h3]:mb-2 [&_h3]:mt-6 [&_h3]:font-semibold [&_h3]:text-ink
              [&_li]:leading-relaxed [&_li]:text-ink-2
              [&_p]:mb-4 [&_p]:leading-relaxed [&_p]:text-ink-2
              [&_strong]:font-medium [&_strong]:text-ink
              [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5
            "
          >
            {sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-24">
                <h2 className="mb-4 text-xl font-semibold tracking-tight sm:text-2xl">{section.title}</h2>
                {section.body}
              </section>
            ))}
          </div>
        </div>
      </main>

      <footer className="border-t border-line bg-paper-2">
        <div className="mx-auto flex max-w-4xl flex-col gap-3 px-5 py-8 text-sm text-ink-3 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            &copy; {new Date().getFullYear()} {SITE.name}
          </p>
          <div className="flex items-center gap-6">
            <Link href="/" className="transition-colors hover:text-ink">
              Beranda
            </Link>
            <Link href="/privacy" className="transition-colors hover:text-ink">
              Kebijakan Privasi
            </Link>
            <Link href="/syarat" className="transition-colors hover:text-ink">
              Syarat &amp; Ketentuan
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
