import { Dpad as IDpad } from "../../../tools/inputs";
import "./index.css";

export type DpadProps = IDpad;

export function Dpad({ up, down, left, right }: DpadProps) {
  return (
    <div className="dpad-container">
      <div className="dpad up" style={{ opacity: up ? 1 : 0 }} />

      <div className="dpad down" style={{ opacity: down ? 1 : 0 }} />

      <div className="dpad left" style={{ opacity: left ? 1 : 0 }} />

      <div className="dpad right" style={{ opacity: right ? 1 : 0 }} />
    </div>
  );
}
