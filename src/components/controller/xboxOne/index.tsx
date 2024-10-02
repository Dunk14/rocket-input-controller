import clsx from 'clsx'
import { isColor } from '~/tools/colors'
import type { ControllerProps } from '..'
import { Bumpers } from './bumpers'
import { Dpad } from './dpad'
import { Face } from './face'
import { StartAndSelect } from './start-and-select'
import { Sticks } from './sticks'
import { Base, Container } from './style'
import { Triggers } from './triggers'

export function XboxOneController({
  style,
  color,
  bumpers,
  dpad,
  face,
  startAndSelect,
  sticks,
  triggers,
}: Omit<ControllerProps, 'type'>) {
  return (
    <Container style={style}>
      <Base className={clsx(isColor(color))} />

      <Triggers color={color} {...triggers} />
      <Bumpers color={color} {...bumpers} />
      <StartAndSelect color={color} {...startAndSelect} />
      <Dpad color={color} {...dpad} />
      <Face color={color} {...face} />
      <Sticks color={color} {...sticks} />
    </Container>
  )
}
