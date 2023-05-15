import { memo } from "react";
import Li from "./ListItems";

function LgNav() {
  return (
    <nav className="hidden md:block text-white py-2">
      <ul className="flex gap-12">
        <Li />
      </ul>
    </nav>
  );
}

export default memo(LgNav);
