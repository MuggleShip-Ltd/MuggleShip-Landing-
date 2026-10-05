import { GOOGLE_MAPS } from "@/lib/site";

// Compact "who and where" band: the facts people look for, nothing else.
export default function AboutUs() {
  return (
    <section id="about" className="scroll-mt-20 border-y border-[var(--border-faint)] py-20 md:py-24" style={{ background: "var(--bg-band)" }}>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 md:grid-cols-12 lg:px-8">
        <div className="md:col-span-6">
          <h2 className="text-4xl font-medium leading-[1.05] tracking-[-0.035em] text-[var(--ink-100)] md:text-5xl">
            Bedford, since 2021.
          </h2>
          <p className="mt-5 max-w-md text-[17px] leading-relaxed text-[var(--ink-300)]">
            Sales and onboarding from London. Every unit received, prepped and shipped by one team in Bedford.
          </p>
        </div>
        <dl className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:col-span-6 md:pt-2">
          <div>
            <dt className="text-sm text-[var(--ember)]">Warehouse</dt>
            <dd className="mt-2 text-[15px] leading-relaxed text-[var(--ink-200)]">
              Unit 2, Caxton Road
              <br />
              Elms Farm Industrial Estate
              <br />
              Bedford MK41 0LF
              <br />
              <a
                href={GOOGLE_MAPS.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-[var(--ink-100)] underline decoration-[var(--border-strong)] underline-offset-4 hover:text-[var(--ember)]"
              >
                Get directions
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-sm text-[var(--ember)]">London office</dt>
            <dd className="mt-2 text-[15px] leading-relaxed text-[var(--ink-200)]">
              86-90 Paul Street
              <br />
              London EC2A 4NE
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
