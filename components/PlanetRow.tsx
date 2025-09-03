import type { Planet as PlanetT } from "@/data/planets";
import type { Moon as MoonT } from "@/data/moons";

import Planet from "./Planet";
import Moon from "./Moon";

type Props = {
  planet: PlanetT;
  moons: MoonT[];
  activeMoons: MoonT[];
  toggleMoon: (id: number) => void;
};

const PlanetRow = ({ planet, moons, activeMoons, toggleMoon }: Props) => {
  return (
    <div className="row">
      <Planet planet={planet} activeCount={activeMoons.length} />

      {moons.map((moon) => (
        <Moon
          key={moon.id}
          moon={moon}
          active={activeMoons.some((activeMoon) => activeMoon.id === moon.id)}
          toggleMoon={toggleMoon}
        />
      ))}
    </div>
  );
};

export default PlanetRow;
