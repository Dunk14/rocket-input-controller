import { useRef } from "react";
import ReactPlayer from "react-player";
import video from "../../assets/test.mp4";
import "./index.css";

export type PlayerProps = {
  onChange: (playing: boolean, currentTime: number) => void;
};

export function Player({ onChange }: PlayerProps) {
  const playerRef = useRef<ReactPlayer | null>();

  return (
    <div className="wrapper-player">
      <ReactPlayer
        controls
        width="100%"
        height="100%"
        ref={(ref) => (playerRef.current = ref)}
        url={video}
        onPlay={() => onChange(true, playerRef?.current?.getCurrentTime() ?? 0)}
        onPause={() =>
          onChange(false, playerRef?.current?.getCurrentTime() ?? 0)
        }
        onEnded={() =>
          onChange(false, playerRef?.current?.getCurrentTime() ?? 0)
        }
      />
    </div>
  );
}
