import { Triggers as ITriggers } from "../../../tools/inputs";
import "./index.css";

export type TriggersProps = ITriggers;

export function Triggers({ left, right }: TriggersProps) {
  return (
    <div className="triggers">
      <div className="trigger left" style={{ opacity: left ?? 0 }} />

      <div className="trigger right" style={{ opacity: right ?? 0 }} />
    </div>
  );
}
