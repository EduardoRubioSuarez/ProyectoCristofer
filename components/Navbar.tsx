"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { NAV_LINKS } from "@/lib/site-config";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-base/90 backdrop-blur">
      <div className="container-x flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo1.png" alt="ISA'S Agencia Digital" width={44} height={44} className="rounded-full" />
          <span className="text-lg font-bold tracking-wide text-ink">ISA&apos;S AGENCIA DIGITAL</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) =>
            link.children ? (
              <div key={link.label} className="group relative">
                <button className="flex items-center gap-1 text-sm font-semibold tracking-wide text-ink transition hover:text-accent">
                  {link.label}
                </button>
                <div className="invisible absolute left-0 top-full flex w-64 flex-col gap-1 rounded-lg border border-white/10 bg-card p-2 opacity-0 shadow-xl transition group-hover:visible group-hover:opacity-100">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="rounded-md px-3 py-2 text-sm text-ink transition hover:bg-white/5 hover:text-accent"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold tracking-wide text-ink transition hover:text-accent"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <Link
          href="/contacto"
          className="hidden rounded-full bg-accent px-5 py-2 text-sm font-bold text-base transition hover:opacity-90 lg:block"
        >
          CONTÁCTANOS
        </Link>

        <button
          aria-label="Abrir menú"
          className="flex flex-col gap-1.5 lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="h-0.5 w-7 bg-ink" />
          <span className="h-0.5 w-7 bg-ink" />
          <span className="h-0.5 w-7 bg-ink" />
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-base lg:hidden">
          <nav className="container-x flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <div key={link.label}>
                <Link
                  href={link.href}
                  className="block py-2 text-sm font-semibold text-ink"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="ml-4 flex flex-col gap-1 border-l border-white/10 pl-3">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="py-1 text-sm text-ink/80"
                        onClick={() => setOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/contacto"
              className="mt-3 rounded-full bg-accent px-5 py-2 text-center text-sm font-bold text-base"
              onClick={() => setOpen(false)}
            >
              CONTÁCTANOS
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
