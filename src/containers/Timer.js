import React, { Component } from 'react'
import '../stylesheets/timer.css'

export default class Timer extends Component {
  constructor() {
    super()

    this.state = {
      hours: 0,
      minutes: 0,
      seconds: 0,
      time: 0,
      start: 0,
      isOn: false
    }

    this.startTimer = this.startTimer.bind(this)
    this.stopTimer = this.stopTimer.bind(this)
    this.resetTimer = this.resetTimer.bind(this)
  }

  startTimer() {
    console.log("Start")
    this.setState({
      time: this.state.time,
      start: Date.now()
    })

    this.timer = setInterval(() => this.setState({ time: Date.now() - this.state.start }), 1)
  }

  stopTimer() {
    console.log("Stop")
    console.log(this.timer)
    clearInterval(this.timer)
  }

  resetTimer() {
    console.log("Reset")
    clearInterval(this.timer)
    this.setState({ time: 0 })
  }

  render() {
    const { hours, minutes, seconds } = this.state
    const { time } = this.state

    function formatWithLeadingZero(int) {
      return (int < 10 ? `0${ int }` : int)
    }

    // <h1>
    //   { formatWithLeadingZero(hours) }:{ formatWithLeadingZero(minutes) }:{ formatWithLeadingZero(seconds) }
    // </h1>

    return (
      <div id="main-timer">
        <h1>
          { time }
        </h1>
        <button onClick={ this.startTimer }>Start</button>
        <button onClick={ this.stopTimer }>Stop</button>
        <button onClick={ this.resetTimer }>Reset</button>
      </div>
    )
  }
}
