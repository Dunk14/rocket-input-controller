import { useRef } from 'react'
import ReactPlayer from 'react-player'
import video from '~/assets/test.mp4'
import './index.css'

export type PlayerProps = {
  speed?: number
  onSpeedChange?: (speed: number) => void
  onStateChange: (playing: boolean, currentTime: number) => void
}

export function Player({ speed, onSpeedChange, onStateChange }: PlayerProps) {
  const playerRef = useRef<ReactPlayer | null>()

  return (
    <div className="wrapper-player">
      <ReactPlayer
        controls
        width="100%"
        height="100%"
        playbackRate={speed}
        onPlaybackRateChange={onSpeedChange}
        ref={(ref) => (playerRef.current = ref)}
        url={video}
        onPlay={() => onStateChange(true, playerRef?.current?.getCurrentTime() ?? 0)}
        onPause={() =>
          onStateChange(false, playerRef?.current?.getCurrentTime() ?? 0)
        }
        onEnded={() =>
          onStateChange(false, playerRef?.current?.getCurrentTime() ?? 0)
        }
      />
    </div>
  )
}
