import clsx from 'clsx'
import { isColor } from '~/tools/colors'
import { type Triggers } from '~/tools/inputs'
import { Trigger, Triggers as TriggersDiv } from './style'
import { type ControllerProps } from '../..'

export type TriggersProps = Pick<ControllerProps, 'color'> & Triggers

export function Triggers({ color, left, right }: TriggersProps) {
  return (
    <TriggersDiv>
      <Trigger
        className={clsx('left', isColor(color))}
        style={{ opacity: left ?? 0 }}
      />

      <Trigger
        className={clsx('right', isColor(color))}
        style={{ opacity: right ?? 0 }}
      />
    </TriggersDiv>
  )
}
