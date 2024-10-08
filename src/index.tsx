import { useEffect, useState } from 'react'
import csv from '~/assets/test.csv'
import { ControllerMapper } from '~/components/mapper'
import { ControllerOperator } from '~/components/operator'
import { Player } from '~/components/player'
import './index.css'
import {
  ControllerTypeAndColor,
  ControllerType,
  getController,
  saveController,
} from '~/services/controller'
import {
  ControllerMapping,
  defaultMapping,
  getControllerMapping,
  saveControllerMapping,
} from '~/services/inputs'
import { Color } from '~/tools/colors'

function RocketInputController() {
  const [controller, setController] = useState<ControllerTypeAndColor>()
  const [mapping, setMapping] = useState<ControllerMapping>()

  useEffect(() => {
    async function _() {
      setController(await getController())
      setMapping(await getControllerMapping())
    }
    _()
  }, [])

  const [showMapper, setShowMapper] = useState(false)
  const [playing, setPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [speed, setSpeed] = useState(1)

  const onChange = (playing: boolean, currentTime: number) => {
    setPlaying(playing)
    setCurrentTime(currentTime)
  }

  return (
    <div className="rocket-input-controller-demo">
      {mapping && (
        <ControllerMapper
          showMapper={showMapper}
          mapping={mapping}
          setMapping={setMapping}
        />
      )}

      <div className="buttons">
        {controller && (
          <>
            <select
              name="controllerType"
              value={controller.type}
              onChange={async ({ target: { value } }) => {
                setController(
                  await saveController({
                    ...controller,
                    type: value as ControllerType,
                  }),
                )
              }}
            >
              {Object.entries(ControllerType).map(([label, type]) => (
                <option key={type} value={type}>
                  {label}
                </option>
              ))}
            </select>

            <select
              name="controllerColor"
              value={controller.color}
              onChange={async ({ target: { value } }) => {
                setController(
                  await saveController({
                    ...controller,
                    color: value as Color,
                  }),
                )
              }}
            >
              {Object.entries(Color).map(([label, color]) => (
                <option key={color} value={color}>
                  {label}
                </option>
              ))}
            </select>
          </>
        )}

        <button
          onClick={() => {
            saveControllerMapping(defaultMapping)
            setMapping(defaultMapping)
          }}
        >
          Reset mapping
        </button>

        <button
          onClick={() => {
            setShowMapper(!showMapper)
          }}
        >
          {showMapper ? 'Close' : 'Modify'} mapping
        </button>
      </div>

      <Player speed={speed} onSpeedChange={setSpeed} onStateChange={onChange} />

      {controller && mapping && (
        <ControllerOperator
          intervalTiming={75}
          csv={csv}
          controller={controller}
          mapping={mapping}
          playing={playing}
          currentTime={currentTime}
          speed={speed}
        />
      )}
    </div>
  )
}

export default RocketInputController
