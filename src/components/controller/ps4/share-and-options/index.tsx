import clsx from 'clsx'
import { ControllerProps } from '../..'
import { isColor } from '../../../../tools/colors'
import { Options, Share, ShareAndOptions as ShareAndOptionsDiv } from './style'

export type ShareAndOptionsProps = Pick<ControllerProps, 'color'> & {
  share?: boolean
  options?: boolean
}

export function ShareAndOptions({
  color,
  share,
  options,
}: ShareAndOptionsProps) {
  return (
    <ShareAndOptionsDiv>
      <Share
        className={clsx(isColor(color))}
        style={{ opacity: share ? 1 : 0 }}
      />

      <Options
        className={clsx(isColor(color))}
        style={{ opacity: options ? 1 : 0 }}
      />
    </ShareAndOptionsDiv>
  )
}
