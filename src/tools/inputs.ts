import { ControllerInputs, ControllerMapping } from "../services/inputs";

export type RawInput = {
  time: number;
  throttle: number;
  jump: boolean;
  boost: boolean;
  dodgeForward: number;
  dodgeStrafe: number;
  handBrake: boolean;
  roll: number;
  directionalAirRoll: boolean;
};

export function parseRawInputs(csv: { [key: string]: unknown }[]) {
  return csv.map(
    ({ time, jump, boost, handBrake, directionalAirRoll, ...rest }) => ({
      time: Number(time) * 0.0000001,
      jump: jump === "1",
      boost: boost === "1",
      handBrake: handBrake === "1",
      directionalAirRoll: directionalAirRoll === "1",
      ...Object.entries(rest).reduce<{ [key: string]: number }>(
        (acc, [key, value]) => {
          acc[key] = Number(value);
          return acc;
        },
        {},
      ),
    }),
  ) as RawInput[];
}

export type Bumpers = {
  left?: boolean;
  right?: boolean;
};

export type Dpad = {
  up?: boolean;
  down?: boolean;
  left?: boolean;
  right?: boolean;
};

export type Face = {
  up?: boolean;
  down?: boolean;
  left?: boolean;
  right?: boolean;
};

export type StartAndSelect = {
  start?: boolean;
  select?: boolean;
};

export type Axis2D = {
  x: number;
  y: number;
};

export type Stick = {
  value: Axis2D;
  pressed?: boolean;
};

export type Sticks = {
  left?: Stick;
  right?: Stick;
};

export type Triggers = {
  left?: number;
  right?: number;
};

export type ControllerInput = {
  time: number;
  bumpers?: Bumpers;
  dpad?: Dpad;
  face?: Face;
  startAndSelect?: StartAndSelect;
  sticks?: Sticks;
  triggers?: Triggers;
};

function getValue(
  input: RawInput,
  controllerMappingKey: keyof ControllerMapping,
): boolean | number {
  if (controllerMappingKey === "throttle") {
    return input.throttle > 0 ? input.throttle : 0;
  } else if (controllerMappingKey === "brake") {
    return input.throttle < 0 ? input.throttle : 0;
  } else if (controllerMappingKey === "airRollLeft") {
    return !input.directionalAirRoll && input.roll < 0 ? input.roll : 0;
  } else if (controllerMappingKey === "airRollRight") {
    return !input.directionalAirRoll && input.roll > 0 ? input.roll : 0;
  }

  return input[controllerMappingKey];
}

function getBoolean(
  input: RawInput,
  controllerMappingKey?: keyof ControllerMapping,
): boolean {
  if (!controllerMappingKey) return false;

  const value = getValue(input, controllerMappingKey);
  return typeof value === "number" ? value >= 0.5 : value;
}

function getNumber(
  input: RawInput,
  controllerMappingKey?: keyof ControllerMapping,
): number {
  if (!controllerMappingKey) return 0;

  const value = getValue(input, controllerMappingKey);
  return typeof value === "boolean" ? (value ? 1 : 0) : value;
}

export function rawToController(
  rawInputs: RawInput[],
  controllerMapping: ControllerMapping,
): ControllerInput[] {
  const mappingKeys = Object.keys(
    controllerMapping,
  ) as (keyof ControllerMapping)[];
  const mappingValues = Object.values(controllerMapping);

  // Get each input mapped by user
  const inputMapping = Object.values(ControllerInputs).reduce<{
    [key in ControllerInputs]?: keyof ControllerMapping;
  }>((inputs, input) => {
    const mappingKeyIndex = mappingValues.findIndex((value) => value === input);

    if (mappingKeyIndex !== -1) {
      inputs[input] = mappingKeys[mappingKeyIndex];
    }

    return inputs;
  }, {});

  return rawInputs.map((input) => ({
    time: input.time,
    bumpers: {
      left: getBoolean(input, inputMapping[ControllerInputs.BumperLeft]),
      right: getBoolean(input, inputMapping[ControllerInputs.BumperRight]),
    },
    dpad: {
      up: getBoolean(input, inputMapping[ControllerInputs.DpadUp]),
      down: getBoolean(input, inputMapping[ControllerInputs.DpadDown]),
      left: getBoolean(input, inputMapping[ControllerInputs.DpadLeft]),
      right: getBoolean(input, inputMapping[ControllerInputs.DpadRight]),
    },
    face: {
      up: getBoolean(input, inputMapping[ControllerInputs.FaceUp]),
      down: getBoolean(input, inputMapping[ControllerInputs.FaceDown]),
      left: getBoolean(input, inputMapping[ControllerInputs.FaceLeft]),
      right: getBoolean(input, inputMapping[ControllerInputs.FaceRight]),
    },
    startAndSelect: {
      start: getBoolean(input, inputMapping[ControllerInputs.Start]),
      select: getBoolean(input, inputMapping[ControllerInputs.Select]),
    },
    sticks: {
      left: {
        value: {
          x: input.dodgeStrafe,
          y: input.dodgeForward,
        },
        pressed: getBoolean(
          input,
          inputMapping[ControllerInputs.StickLeftPressed],
        ),
      },
      right: {
        value: {
          x: 0,
          y: 0,
        },
        pressed: getBoolean(
          input,
          inputMapping[ControllerInputs.StickRightPressed],
        ),
      },
    },
    triggers: {
      left: getNumber(input, inputMapping[ControllerInputs.TriggerLeft]),
      right: getNumber(input, inputMapping[ControllerInputs.TriggerRight]),
    },
  }));
}
