import { type CSSProperties } from 'react'
import { ControllerType } from '~/services/controller'
import { type Color } from '~/tools/colors'
import type {
  Bumpers,
  Dpad,
  Face,
  StartAndSelect,
  Sticks,
  Triggers,
} from '../../tools/inputs'
import { PS4Controller } from './ps4'
import { XboxOneController } from './xboxOne'

export type ControllerProps = {
  type: ControllerType
  color: Color
  bumpers?: Bumpers
  dpad?: Dpad
  face?: Face
  startAndSelect?: StartAndSelect
  sticks?: Sticks
  triggers?: Triggers
  style?: CSSProperties
}

export function Controller({
  type,
  startAndSelect,
  ...props
}: ControllerProps) {
  if (type === ControllerType.PS4) {
    return (
      <PS4Controller
        {...props}
        shareAndOptions={{
          share: startAndSelect?.start,
          options: startAndSelect?.select,
        }}
      />
    )
  }

  return <XboxOneController {...props} />
}
