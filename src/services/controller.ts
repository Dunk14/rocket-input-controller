import localforage from 'localforage'
import { Color } from '~/tools/colors'

export enum ControllerType {
  PS4 = 'ps4',
  XboxOne = 'xboxOne',
}

export type ControllerTypeAndColor = {
  type: ControllerType
  color: Color
}

export const defaultController: ControllerTypeAndColor = {
  type: ControllerType.XboxOne,
  color: Color.Black,
}

const STORAGE_KEY = 'RocketInputController_Controller'

export async function saveController(controller: ControllerTypeAndColor) {
  return localforage.setItem(STORAGE_KEY, controller)
}

export async function getController(): Promise<ControllerTypeAndColor> {
  const controller = await localforage.getItem<ControllerTypeAndColor>(STORAGE_KEY)
  if (controller) {
    return controller
  }

  // When no controller saved in storage, set the default one
  await saveController(defaultController)
  return defaultController
}
