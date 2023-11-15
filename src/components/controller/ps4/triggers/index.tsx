import clsx from 'clsx'
import { ControllerProps } from '../..'
import { isColor } from '../../../../tools/colors'
import { type Triggers } from '../../../../tools/inputs'
import { Trigger, Triggers as TriggersDiv } from './style'

export type TriggersProps = Pick<ControllerProps, 'color'> & Triggers

export function Triggers({ color, left, right }: TriggersProps) {
  return (
    <TriggersDiv className={clsx(isColor(color))}>
      <Trigger className="left" style={{ opacity: left ?? 0 }} />

      <Trigger className="right" style={{ opacity: right ?? 0 }} />
    </TriggersDiv>
  )
}
