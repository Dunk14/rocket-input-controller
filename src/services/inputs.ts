import localforage from 'localforage'

export enum ControllerInputs {
  BumperLeft = 'bumperLeft',
  BumperRight = 'bumperRight',
  DpadUp = 'dpadUp',
  DpadDown = 'dpadDown',
  DpadLeft = 'dpadLeft',
  DpadRight = 'dpadRight',
  FaceUp = 'faceUp',
  FaceDown = 'faceDown',
  FaceLeft = 'faceLeft',
  FaceRight = 'faceRight',
  Start = 'start',
  Select = 'select',
  StickLeftPressed = 'stickLeftPressed',
  StickRightPressed = 'stickRightPressed',
  TriggerLeft = 'triggerLeft',
  TriggerRight = 'triggerRight',
}

export enum OptionalControllerInputs {
  None = 'none',
}

type OptionalControllerInputsType = ControllerInputs | OptionalControllerInputs

export enum ControllerMappings {
  Throttle = 'throttle',
  Brake = 'brake',
  Jump = 'jump',
  Boost = 'boost',
  HandBrake = 'handBrake',
  DirectionalAirRoll = 'directionalAirRoll',
  AirRollLeft = 'airRollLeft',
  AirRollRight = 'airRollRight',
}

export type ControllerMapping = {
  throttle: ControllerInputs
  brake: ControllerInputs
  jump: ControllerInputs
  boost: ControllerInputs
  handBrake: ControllerInputs
  directionalAirRoll: ControllerInputs
  airRollLeft: OptionalControllerInputsType
  airRollRight: OptionalControllerInputsType
}

const STORAGE_KEY = 'RocketInputController_Mapping'

export const defaultMapping: ControllerMapping = {
  throttle: ControllerInputs.TriggerRight,
  brake: ControllerInputs.TriggerLeft,
  jump: ControllerInputs.FaceDown,
  boost: ControllerInputs.FaceRight,
  handBrake: ControllerInputs.FaceLeft,
  directionalAirRoll: ControllerInputs.FaceLeft,
  airRollLeft: OptionalControllerInputs.None,
  airRollRight: OptionalControllerInputs.None,
}

export async function saveControllerMapping(
  controllerMapping: ControllerMapping,
) {
  return localforage.setItem(STORAGE_KEY, controllerMapping)
}

export async function getControllerMapping(): Promise<ControllerMapping> {
  const controllerMapping =
    await localforage.getItem<ControllerMapping>(STORAGE_KEY)

  if (controllerMapping) {
    return controllerMapping
  }

  // When no mapping saved in storage, set the default one
  await saveControllerMapping(defaultMapping)
  return defaultMapping
}
