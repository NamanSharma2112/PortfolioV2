import Image from "next/image";
import { Floating } from "./components/floating";
import { Scroll } from "./components/scroll";
import { Bento } from "./components/bento";
import { Grid } from "./components/grid";

import { ModeToggle } from "./components/mode-toggle";
import SvgCompoent from "./components/svg-compoent";
import FileSvg from "./components/file_Svg";
import Hover from "./components/hover"
import Card from "./components/cards"
export default function Home() {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-neutral-100">

     <Card/>
    </div>
  );
}
