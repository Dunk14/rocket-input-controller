import { type ControllerMapping } from '~/services/inputs'
import { type RawInput } from './inputs'

function getValue(
  input: RawInput,
  controllerMappingKey: keyof ControllerMapping,
): boolean | number {
  if (controllerMappingKey === 'throttle') {
    return input.throttle > 0 ? input.throttle : 0
  }

  if (controllerMappingKey === 'brake') {
    return input.throttle < 0 ? input.throttle * -1 : 0
  }

  if (controllerMappingKey === 'airRollLeft') {
    return !input.directionalAirRoll && input.roll < 0 ? input.roll * -1 : 0
  }

  if (controllerMappingKey === 'airRollRight') {
    return !input.directionalAirRoll && input.roll > 0 ? input.roll : 0
  }

  return input[controllerMappingKey]
}

export function getBoolean(
  input: RawInput,
  controllerMappingKey?: keyof ControllerMapping,
): boolean {
  if (!controllerMappingKey) return false

  const value = getValue(input, controllerMappingKey)
  return typeof value === 'number' ? value >= 0.5 : value
}

export function getNumber(
  input: RawInput,
  controllerMappingKey?: keyof ControllerMapping,
): number {
  if (!controllerMappingKey) return 0

  const value = getValue(input, controllerMappingKey)
  return typeof value === 'boolean' ? (value ? 1 : 0) : value
}
