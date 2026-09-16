import Link from "next/link";

export type PricingPlan = {
  name: string;
  price: string;
  feeNote: string;
  features: string[];
  badge?: string;
  highlight?: boolean;
};

export default function PricingCard({ plan }: { plan: PricingPlan }) {
  return (
    <div
      className={`relative flex flex-col rounded-2xl border p-6 ${
        plan.highlight ? "border-accent bg-card" : "border-white/10 bg-base"
      }`}
    >
      {plan.badge && (
        <span className="absolute -top-3 left-6 rounded-full bg-accent px-3 py-1 text-xs font-bold text-base">
          {plan.badge}
        </span>
      )}
      <p className="mb-1 text-lg font-bold text-ink">{plan.name}</p>
      <p className="mb-1 text-3xl font-extrabold text-accent">{plan.price}</p>
      <p className="mb-6 text-xs text-ink/50">{plan.feeNote}</p>
      <ul className="mb-8 flex-1 space-y-2">
        {plan.features.map((f) => (
          <li key={f} className="flex gap-2 text-sm text-ink/70">
            <span className="text-accent">✓</span>
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <Link
        href="/contacto"
        className="rounded-full bg-accent px-6 py-3 text-center text-sm font-bold text-base transition hover:opacity-90"
      >
        SOLICITAR INFORMACIÓN
      </Link>
    </div>
  );
}
