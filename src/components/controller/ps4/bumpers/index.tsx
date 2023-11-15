import clsx from 'clsx'
import { ControllerProps } from '../..'
import { isColor } from '../../../../tools/colors'
import { type Bumpers } from '../../../../tools/inputs'
import { Bumper, Bumpers as BumpersDiv } from './style'

export type BumpersProps = Pick<ControllerProps, 'color'> & Bumpers

export function Bumpers({ color, left, right }: BumpersProps) {
  return (
    <BumpersDiv>
      <Bumper
        className={clsx('left', isColor(color))}
        style={{ opacity: left ? 1 : 0 }}
      />

      <Bumper
        className={clsx('right', isColor(color))}
        style={{ opacity: right ? 1 : 0 }}
      />
    </BumpersDiv>
  )
}
