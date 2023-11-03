import equal from "fast-deep-equal";
import { CSSProperties, useCallback, useEffect, useState } from "react";
import csv from "../../assets/test.csv";
import { getControllerMapping } from "../../services/inputs";
import {
  Bumpers,
  ControllerInput,
  Dpad,
  Face,
  parseRawInputs,
  rawToController,
  StartAndSelect,
  Sticks,
  Triggers,
} from "../../tools/inputs";
import { PS4Controller } from "../ps4";
import "./index.css";

// TODO : Get the rest of mappings with bakkesmod, and maybe try to ease to system with a queue system after

export type OperatorProps = {
  style?: CSSProperties;
  playing: boolean;
  currentTime: number;
};

export function Operator({ style, playing, currentTime }: OperatorProps) {
  const [inputs, setInputs] = useState<ControllerInput[]>([]);
  const [index, setIndex] = useState<number>(0);

  // Current played input
  const [bumpers, setBumpers] = useState<Bumpers>();
  const [dpad, setDpad] = useState<Dpad>();
  const [face, setFace] = useState<Face>();
  const [startAndSelect, setStartAndSelect] = useState<StartAndSelect>();
  const [sticks, setSticks] = useState<Sticks>();
  const [triggers, setTriggers] = useState<Triggers>();

  // Clock utils
  const [tick, setTick] = useState(0);
  const [timeout, setTimeoutt] = useState<number>();
  const [nextTimeout, setNextTimeout] = useState<number>();

  // Get CSV
  useEffect(() => {
    (async () => {
      // Load user mappings
      const mapping = await getControllerMapping();
      const inputs = rawToController(parseRawInputs(csv), mapping);
      setInputs(inputs);
    })();
  }, []);

  // Manage the start and stop of clock
  useEffect(() => {
    if (playing && !timeout) {
      // Get the right index to restart of
      // -> The one before it's too late
      const index = inputs.findIndex((input) => input.time > currentTime) - 1;
      const finalIndex = index < 0 ? 0 : index;
      setIndex(finalIndex);

      console.log(currentTime, index, inputs[finalIndex].time);

      // And use it to call the next input
      setNextTimeout(inputs[index + 1].time - currentTime);

      setTick((tick) => tick + 1);
    } else if (!playing && timeout) {
      clearTimeout(timeout);
      setTimeoutt(undefined);
    }

    return () => clearInterval(timeout);
  }, [playing, timeout]);

  const renderNextInput = useCallback(
    (
      current: ControllerInput,
      next: ControllerInput,
      key: keyof ControllerInput,
      set: (v: any) => void,
    ) => {
      // Render the next input only if it has changed
      if (!equal(current[key], next[key])) {
        set(next[key]);
      }
    },
    [],
  );

  // Manage each input
  useEffect(() => {
    if (!playing || !inputs.length) return;
    if (index >= inputs.length - 1) {
      setTick(0);
      setIndex(0);
      return;
    }

    const current = inputs[index];
    const next = inputs[index + 1];

    console.log(index, current)

    // Directly setup the next interval
    setTimeoutt(
      window.setTimeout(
        () => setTick((tick) => tick + 1),
        nextTimeout ?? next.time,
      ),
    );

    if (nextTimeout) {
      setNextTimeout(undefined);
    }

    renderNextInput(current, next, "bumpers", setBumpers);
    renderNextInput(current, next, "dpad", setDpad);
    renderNextInput(current, next, "face", setFace);
    renderNextInput(current, next, "startAndSelect", setStartAndSelect);
    renderNextInput(current, next, "sticks", setSticks);
    renderNextInput(current, next, "triggers", setTriggers);

    setIndex(index + 1);
  }, [tick]);

  return (
    <div className="operator">
      <PS4Controller
        style={style}
        bumpers={bumpers}
        dpad={dpad}
        face={face}
        shareAndOptions={startAndSelect}
        sticks={sticks}
        triggers={triggers}
      />
    </div>
  );
}
