import React, { Component } from 'react'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Interests from './components/Interests'
import ContactMe from './components/ContactMe'
import Projects from './components/Projects'
import './App.css'


export class App extends Component {
  render() {
    return (
      <>
        <Header />
        <AboutMe />
        <Interests />
        <Projects />
        <ContactMe />
      </>
    )
  }
}

export default App
