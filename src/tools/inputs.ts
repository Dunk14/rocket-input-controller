import equal from 'fast-deep-equal'
import { ControllerInputs, type ControllerMapping } from '~/services/inputs'
import { getBoolean, getNumber } from './values'

export type RawInput = {
  time: number
  throttle: number
  jump: boolean
  boost: boolean
  dodgeForward: number
  dodgeStrafe: number
  handBrake: boolean
  roll: number
  directionalAirRoll: boolean
}

export function parseRawInputs(csv: { [key: string]: unknown }[]) {
  return csv.map(
    ({ time, jump, boost, handBrake, directionalAirRoll, ...rest }) => ({
      time: Number(time) * 0.0000001,
      jump: jump === '1',
      boost: boost === '1',
      handBrake: handBrake === '1',
      directionalAirRoll: directionalAirRoll === '1',
      ...Object.entries(rest).reduce<{ [key: string]: number }>(
        (acc, [key, value]) => {
          acc[key] = Number(value)
          return acc
        },
        {},
      ),
    }),
  ) as RawInput[]
}

export type Bumpers = {
  left?: boolean
  right?: boolean
}

export type Dpad = {
  up?: boolean
  down?: boolean
  left?: boolean
  right?: boolean
}

export type Face = {
  up?: boolean
  down?: boolean
  left?: boolean
  right?: boolean
}

export type StartAndSelect = {
  start?: boolean
  select?: boolean
}

export type Axis2D = {
  x: number
  y: number
}

export type Stick = {
  value: Axis2D
  pressed?: boolean
}

export type Sticks = {
  left?: Stick
  right?: Stick
}

export type Triggers = {
  left?: number
  right?: number
}

export type ControllerInput = {
  time: number
  bumpers?: Bumpers
  dpad?: Dpad
  face?: Face
  startAndSelect?: StartAndSelect
  sticks?: Sticks
  triggers?: Triggers
}

export function rawToController(
  rawInputs: RawInput[],
  controllerMapping: ControllerMapping,
): ControllerInput[] {
  const mappingKeys = Object.keys(
    controllerMapping,
  ) as (keyof ControllerMapping)[]
  const mappingValues = Object.values(controllerMapping)

  // Get each input mapped by user
  const inputMapping = Object.values(ControllerInputs).reduce<{
    [key in ControllerInputs]?: keyof ControllerMapping
  }>((inputs, input) => {
    const mappingKeyIndex = mappingValues.findIndex((value) => value === input)

    if (mappingKeyIndex !== -1) {
      inputs[input] = mappingKeys[mappingKeyIndex]
    }

    return inputs
  }, {})

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
  }))
}

export const findNextInput = (
  inputs: ControllerInput[],
  currentIndex: number,
  newTime: number,
) => {
  for (let i = currentIndex; i < inputs.length; i++) {
    const input = inputs[i]

    if (input.time >= newTime) {
      return { input, index: i }
    }
  }

  return { input: inputs[inputs.length - 1], index: inputs.length - 1 }
}

export const renderNextInput = <T extends keyof ControllerInput>(
  current: ControllerInput,
  next: ControllerInput,
  key: T,
  set: React.Dispatch<
    React.SetStateAction<ControllerInput[T]>
  >,
) => {
  // Render the next input only if it has changed
  if (!equal(current[key], next[key])) {
    set(next[key])
  }
}
