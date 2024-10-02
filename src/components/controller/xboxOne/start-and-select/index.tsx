import clsx from 'clsx'
import { isColor } from '~/tools/colors'
import { type StartAndSelect } from '~/tools/inputs'
import { Select, Start, StartAndSelect as StartAndSelectDiv } from './style'
import { type ControllerProps } from '../..'

export type StartAndSelectProps = Pick<ControllerProps, 'color'> &
  StartAndSelect

export function StartAndSelect({ color, start, select }: StartAndSelectProps) {
  return (
    <StartAndSelectDiv>
      <Start
        className={clsx(isColor(color))}
        style={{ opacity: start ? 1 : 0 }}
      />

      <Select
        className={clsx(isColor(color))}
        style={{ opacity: select ? 1 : 0 }}
      />
    </StartAndSelectDiv>
  )
}
