"use client";

import { useState } from "react";

import { planets } from "@/data/planets";
import { moons } from "@/data/moons";

import PlanetRow from "./PlanetRow";

const PlanetList = () => {
  const [selected, setSelected] = useState<number[]>([]);

  const toggleMoon = (id: number) => {
    setSelected((prev) =>
      prev.includes(id)
        ? prev.filter((selectedMoon) => selectedMoon !== id)
        : [...prev, id]
    );
  };

  return (
    <div>
      {planets.map((planet) => {
        const filteredMoons = moons.filter(({ planetId }) => planetId === planet.id);
        const activeMoons = filteredMoons.filter(({ id }) => selected.includes(id));

        return (
          <PlanetRow
            key={planet.id}
            planet={planet}
            moons={filteredMoons}
            activeMoons={activeMoons}
            toggleMoon={toggleMoon}
          />
        );
      })}
    </div>
  );
};

export default PlanetList;
