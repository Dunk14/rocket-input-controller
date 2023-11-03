import { useState } from "react";
import { Operator } from "./components/operator";
import { Player } from "./components/player";
import "./index.css";

function RocketInputController() {
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const onChange = (playing: boolean, currentTime: number) => {
    setPlaying(playing);
    setCurrentTime(currentTime);
  };

  return (
    <div className="rocket-input-controller">
      <Player onChange={onChange} />

      <Operator
        style={{ scale: 0.5 }}
        playing={playing}
        currentTime={currentTime}
      />
    </div>
  );
}

export default RocketInputController;
