import { StartAndSelect as IStartAndSelect } from "../../../tools/inputs";
import "./index.css";

export type ShareAndOptionsProps = IStartAndSelect;

export function ShareAndOptions({
  start: share,
  select: options,
}: ShareAndOptionsProps) {
  return (
    <div className="shareAndOptions">
      <div className="share" style={{ opacity: share ? 1 : 0 }} />

      <div className="options" style={{ opacity: options ? 1 : 0 }} />
    </div>
  );
}
