import clsx from 'clsx'
import { ControllerProps } from '../..'
import { isColor } from '../../../../tools/colors'
import { type Dpad } from '../../../../tools/inputs'
import { Container, Dpad as DpadDiv } from './style'

export type DpadProps = Pick<ControllerProps, 'color'> & Dpad

export function Dpad({ color, up, down, left, right }: DpadProps) {
  return (
    <Container>
      <DpadDiv
        className={clsx('up', isColor(color))}
        style={{ opacity: up ? 1 : 0 }}
      />

      <DpadDiv
        className={clsx('down', isColor(color))}
        style={{ opacity: down ? 1 : 0 }}
      />

      <DpadDiv
        className={clsx('left', isColor(color))}
        style={{ opacity: left ? 1 : 0 }}
      />

      <DpadDiv
        className={clsx('right', isColor(color))}
        style={{ opacity: right ? 1 : 0 }}
      />
    </Container>
  )
}
