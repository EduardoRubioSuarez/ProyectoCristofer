import { areas } from "@/components/TeamAreas.jsx";

export default function TeamBand() {
  const line = areas.map((a) => `${a.name.toUpperCase()} ✦ `).join("");
  return (
    <div className="team-areas-band" aria-hidden="true">
      <div>
        {[0, 1].map((copy) => (
          <span key={copy}>
            {line}
            {line}
          </span>
        ))}
      </div>
    </div>
  );
}
