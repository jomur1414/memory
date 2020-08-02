import React, { Component } from 'react'
import './App.css'
import GuessCount from './GuessCount'
import Card from './Card'

class App extends Component {
  render() {
    return (

        <div className="memory">
        <GuessCount guesses={0}/>
        <Card card="A" feedback="hidden" />
        <Card card="B" feedback="justeMatched" />
        <Card card="C" feedback="justMismatched" />
        <Card card="D" feedback="visible" />
        <Card card="E" feedback="hidden" />
        <Card card="F" feedback="justeMatched" />
        </div>

    )
  }
}

export default App