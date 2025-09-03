/* eslint-disable @typescript-eslint/no-explicit-any */
import { Planet as PlanetT } from "@/data/planets";

type Props = {
  planet: PlanetT;
  activeCount: number;
};

const Planet = ({ planet, activeCount }: Props) => (
  <div className="planet">
    <span className="planet__label">
      {planet.title} {activeCount > 0 && <b>{activeCount}</b>}
    </span>

    {Array.from({ length: activeCount }).map((_, i) => (
      <span
        key={i}
        className="planet__ring"
        style={{ ["--i" as any]: i + 1 }}
      />
    ))}
  </div>
);

export default Planet;
