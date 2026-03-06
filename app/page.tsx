import Image from "next/image";
import { Floating } from "./components/floating";
import { Scroll } from "./components/scroll";
import { Bento } from "./components/bento";
import { Grid } from "./components/grid";

import { ModeToggle } from "./components/mode-toggle";
import SvgCompoent from "./components/svg-compoent";

export default function Home() {
  return (
    <div className="h-screen max-w-4xl mx-auto flex flex-col items-center justify-center gap-10">
<SvgCompoent />

    </div>
  );
}
