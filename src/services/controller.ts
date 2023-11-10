import localforage from "localforage";
import { Color } from "../tools/colors";

export enum ControllerType {
  PS4 = "ps4",
  XboxOne = "xboxOne",
}

export type Controller = {
  type: ControllerType;
  color: Color;
};

export const defaultController: Controller = {
  type: ControllerType.XboxOne,
  color: Color.Black,
};

const STORAGE_KEY = "RocketInputController_Controller";

export async function saveController(
  controller: Controller,
) {
  return localforage.setItem(STORAGE_KEY, controller);
}

export async function getController(): Promise<Controller> {
  const controller = await localforage.getItem<Controller>(STORAGE_KEY);
  if (controller) {
    return controller;
  }

  // When no controller saved in storage, set the default one
  await saveController(defaultController);
  return defaultController;
}
