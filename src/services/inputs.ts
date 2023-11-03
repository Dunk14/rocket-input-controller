import localforage from "localforage";

export enum ControllerInputs {
  BumperLeft = "bumperLeft",
  BumperRight = "bumperRight",
  DpadUp = "dpadUp",
  DpadDown = "dpadDown",
  DpadLeft = "dpadLeft",
  DpadRight = "dpadRight",
  FaceUp = "faceUp",
  FaceDown = "faceDown",
  FaceLeft = "faceLeft",
  FaceRight = "faceRight",
  Start = "start",
  Select = "select",
  StickLeftPressed = "stickLeftPressed",
  StickRightPressed = "stickRightPressed",
  TriggerLeft = "triggerLeft",
  TriggerRight = "triggerRight",
}

export type ControllerMapping = {
  throttle: ControllerInputs;
  brake: ControllerInputs;
  jump: ControllerInputs;
  boost: ControllerInputs;
  handBrake: ControllerInputs;
  directionalAirRoll: ControllerInputs;
  airRollLeft?: ControllerInputs;
  airRollRight?: ControllerInputs;
};

export const STORAGE_KEY = "RocketInputController_Mapping";

const defaultMapping: ControllerMapping = {
  throttle: ControllerInputs.TriggerRight,
  brake: ControllerInputs.TriggerLeft,
  jump: ControllerInputs.FaceDown,
  boost: ControllerInputs.FaceRight,
  handBrake: ControllerInputs.FaceLeft,
  directionalAirRoll: ControllerInputs.FaceLeft,
};

export async function setControllerMapping(
  controllerMapping: ControllerMapping,
) {
  return localforage.setItem(STORAGE_KEY, controllerMapping);
}

export async function getControllerMapping(): Promise<ControllerMapping> {
  const controllerMapping =
    await localforage.getItem<ControllerMapping>(STORAGE_KEY);

  if (controllerMapping) {
    return controllerMapping;
  }

  // When no mapping save in storage, set the default one
  await setControllerMapping(defaultMapping);
  return defaultMapping;
}
