import clsx from 'clsx'
import { ControllerProps } from '..'
import { isColor } from '../../../tools/colors'
import { Bumpers } from './bumpers'
import { Dpad } from './dpad'
import { Face } from './face'
import { ShareAndOptions } from './share-and-options'
import { Sticks } from './sticks'
import { Base, Container } from './style'
import { Triggers } from './triggers'

export type PS4ControllerProps = Omit<
  ControllerProps,
  'type' | 'startAndSelect'
> & {
  shareAndOptions?: {
    share?: boolean
    options?: boolean
  }
}

export function PS4Controller({
  style,
  color,
  bumpers,
  dpad,
  face,
  shareAndOptions,
  sticks,
  triggers,
}: PS4ControllerProps) {
  return (
    <Container style={style}>
      <Base className={clsx(isColor(color))} />

      <Triggers color={color} {...triggers} />
      <Bumpers color={color} {...bumpers} />
      <ShareAndOptions color={color} {...shareAndOptions} />
      <Dpad color={color} {...dpad} />
      <Face color={color} {...face} />
      <Sticks color={color} {...sticks} />
    </Container>
  )
}
