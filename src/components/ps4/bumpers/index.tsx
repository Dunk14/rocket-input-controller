import { Bumpers as IBumpers } from "../../../tools/inputs";
import "./index.css";

export type BumpersProps = IBumpers;

export function Bumpers({ left, right }: BumpersProps) {
  return (
    <div className="bumpers">
      <div className="bumper left" style={{ opacity: left ? 1 : 0 }} />

      <div className="bumper right" style={{ opacity: right ? 1 : 0 }} />
    </div>
  );
}
