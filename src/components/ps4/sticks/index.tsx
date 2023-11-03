import classNames from "classnames";
import { Sticks as ISticks } from "../../../tools/inputs";
import "./index.css";

export type SticksProps = ISticks;

export function Sticks({ left, right }: SticksProps) {
  if (!left) {
    left = { value: { x: 0, y: 0 } };
  }
  if (!right) {
    right = { value: { x: 0, y: 0 } };
  }

  return (
    <div className="sticks">
      <div
        style={{
          transform: `translate(
                ${left.value.x * 24}px,
                ${left.value.y * -24}px
              )
              rotateX(${left.value.y * -30}deg)
              rotateY(${left.value.x * -30}deg)`,
        }}
        className={classNames("stick left", { pressed: left.pressed })}
      />

      <div
        style={{
          transform: `translate(
                ${right.value.x * 24}px,
                ${right.value.y * -24}px
              )
              rotateX(${right.value.y * -30}deg)
              rotateY(${right.value.x * -30}deg)`,
        }}
        className={classNames("stick right", { pressed: right.pressed })}
      />
    </div>
  );
}
