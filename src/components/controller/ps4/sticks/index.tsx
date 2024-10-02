import clsx from 'clsx'
import { isColor } from '~/tools/colors'
import { type Sticks } from '~/tools/inputs'
import { Stick, Sticks as SticksDiv } from './style'
import { type ControllerProps } from '../..'

export type SticksProps = Pick<ControllerProps, 'color'> & Sticks

export function Sticks({ color, left, right }: SticksProps) {
  if (!left) {
    left = { value: { x: 0, y: 0 } }
  }
  if (!right) {
    right = { value: { x: 0, y: 0 } }
  }

  return (
    <SticksDiv>
      <Stick
        style={{
          transform: `translate(
                ${left.value.x * 24}px,
                ${left.value.y * -24}px
              )
              rotateX(${left.value.y * -30}deg)
              rotateY(${left.value.x * -30}deg)`,
        }}
        className={clsx('left', isColor(color), {
          pressed: left.pressed,
        })}
      />

      <Stick
        style={{
          transform: `translate(
                ${right.value.x * 24}px,
                ${right.value.y * -24}px
              )
              rotateX(${right.value.y * -30}deg)
              rotateY(${right.value.x * -30}deg)`,
        }}
        className={clsx('right', isColor(color), {
          pressed: right.pressed,
        })}
      />
    </SticksDiv>
  )
}
