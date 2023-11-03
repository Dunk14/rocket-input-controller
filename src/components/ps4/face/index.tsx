import { Face as IFace } from "../../../tools/inputs";
import "./index.css";

export type FaceProps = IFace;

export function Face({ up, down, left, right }: FaceProps) {
  return (
    <div className="faces">
      <div className="face up" style={{ opacity: up ? 1 : 0 }} />

      <div className="face down" style={{ opacity: down ? 1 : 0 }} />

      <div className="face left" style={{ opacity: left ? 1 : 0 }} />

      <div className="face right" style={{ opacity: right ? 1 : 0 }} />
    </div>
  );
}
