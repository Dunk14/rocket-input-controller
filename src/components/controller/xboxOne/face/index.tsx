import clsx from "clsx";
import { ControllerProps } from "../..";
import { isColor } from "../../../../tools/colors";
import { type Face } from "../../../../tools/inputs";
import { Face as FaceDiv, Faces } from "./style";

export type FaceProps = Pick<ControllerProps, "color"> & Face;

export function Face({ color, up, down, left, right }: FaceProps) {
  return (
    <Faces>
      <FaceDiv
        className={clsx("up", isColor(color))}
        style={{ opacity: up ? 1 : 0 }}
      />

      <FaceDiv
        className={clsx("down", isColor(color))}
        style={{ opacity: down ? 1 : 0 }}
      />

      <FaceDiv
        className={clsx("left", isColor(color))}
        style={{ opacity: left ? 1 : 0 }}
      />

      <FaceDiv
        className={clsx("right", isColor(color))}
        style={{ opacity: right ? 1 : 0 }}
      />
    </Faces>
  );
}
