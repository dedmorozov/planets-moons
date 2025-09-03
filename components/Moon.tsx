import { Moon as MoonT } from "@/data/moons";

type Props = {
  moon: MoonT;
  active: boolean;
  toggleMoon: (id: number) => void;
};

const Moon = ({ moon, active, toggleMoon }: Props) => (
  <div
    className={`moon ${active ? "moon--active" : ""}`}
    onClick={() => toggleMoon(moon.id)}
    role="button"
    aria-pressed={active}
    title={moon.title}
  >
    {moon.title}
  </div>
);

export default Moon;
