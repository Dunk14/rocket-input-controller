import { CSSProperties } from "react";
import { Bumpers, BumpersProps } from "./bumpers";
import { Dpad, DpadProps } from "./dpad";
import { Face, FaceProps } from "./face";
import "./index.css";
import { ShareAndOptions, ShareAndOptionsProps } from "./share-and-options";
import { Sticks, SticksProps } from "./sticks";
import { Triggers, TriggersProps } from "./triggers";

export type PS4ControllerProps = {
  type?: "black" | "white";
  style?: CSSProperties;
  bumpers?: BumpersProps;
  dpad?: DpadProps;
  face?: FaceProps;
  shareAndOptions?: ShareAndOptionsProps;
  sticks?: SticksProps;
  triggers?: TriggersProps;
};

export function PS4Controller({
  style,
  bumpers,
  dpad,
  face,
  shareAndOptions,
  sticks,
  triggers,
}: PS4ControllerProps) {
  return (
    <div className="container" style={{ ...style }}>
      <div className="base" />
      <Triggers {...triggers} />
      <Bumpers {...bumpers} />
      <ShareAndOptions {...shareAndOptions} />
      <Dpad {...dpad} />
      <Face {...face} />
      <Sticks {...sticks} />
    </div>
  );
}
