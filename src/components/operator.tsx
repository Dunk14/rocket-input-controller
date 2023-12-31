import { CSSProperties, useEffect, useState } from 'react'
import { type ControllerTypeAndColor as ControllerType } from '../services/controller'
import { ControllerMapping } from '../services/inputs'
import {
  Bumpers,
  ControllerInput,
  Dpad,
  Face,
  findNextInput,
  parseRawInputs,
  rawToController,
  renderNextInput,
  StartAndSelect,
  Sticks,
  Triggers,
} from '../tools/inputs'
import { Controller } from './controller'

export type OperatorProps = {
  csv: { [k: string]: unknown }[]
  currentTime: number
  controller: ControllerType
  mapping: ControllerMapping
  style?: CSSProperties
  playing?: boolean

  /**
   * @default 1
   **/
  speed?: number

  /**
   * In milliseconds. Put explicitly 0 to disable interval system
   *
   * @default 100
   */
  intervalTiming?: number
}

export function ControllerOperator({
  csv,
  currentTime,
  controller,
  mapping,
  style,
  playing,
  speed = 1,
  intervalTiming = 100,
}: OperatorProps) {
  const [inputs, setInputs] = useState<ControllerInput[]>([])
  const [index, setIndex] = useState<number>(0)

  // Current played input
  const [bumpers, setBumpers] = useState<Bumpers>()
  const [dpad, setDpad] = useState<Dpad>()
  const [face, setFace] = useState<Face>()
  const [startAndSelect, setStartAndSelect] = useState<StartAndSelect>()
  const [sticks, setSticks] = useState<Sticks>()
  const [triggers, setTriggers] = useState<Triggers>()

  // Clock utils
  const [time, setTime] = useState(0)
  const [interval, setIntervall] = useState<number>()

  // Process CSV data
  useEffect(() => {
    setInputs(rawToController(parseRawInputs(csv), mapping))
  }, [mapping])

  // Manage the start and stop of clock
  useEffect(() => {
    if (playing && !interval) {
      // Get the right index to restart of
      // -> The one before it's too late
      const index = inputs.findIndex((input) => input.time > currentTime) - 1
      const finalIndex = index < 0 ? 0 : index
      setIndex(finalIndex)

      if (intervalTiming !== 0) {
        setIntervall(
          setInterval(
            () => setTime((time) => time + intervalTiming * speed * 0.001),
            intervalTiming,
          ),
        )
      }

      setTime(currentTime)
    } else if (!playing && interval) {
      clearInterval(interval)
      setIntervall(undefined)
    }

    return () => clearInterval(interval)
  }, [playing, interval, currentTime])

  // Display each input
  useEffect(() => {
    if (!playing || !inputs.length) return
    if (index >= inputs.length - 1) {
      setTime(0)
      setIndex(0)
      return
    }

    const current = inputs[index]
    const next = findNextInput(inputs, index, time)

    renderNextInput(current, next.input, 'bumpers', setBumpers)
    renderNextInput(current, next.input, 'dpad', setDpad)
    renderNextInput(current, next.input, 'face', setFace)
    renderNextInput(current, next.input, 'startAndSelect', setStartAndSelect)
    renderNextInput(current, next.input, 'sticks', setSticks)
    renderNextInput(current, next.input, 'triggers', setTriggers)

    setIndex(next.index)
  }, [time])

  return (
    <div className="operator" style={style}>
      <Controller
        type={controller.type}
        color={controller.color}
        bumpers={bumpers}
        dpad={dpad}
        face={face}
        startAndSelect={startAndSelect}
        sticks={sticks}
        triggers={triggers}
      />
    </div>
  )
}
