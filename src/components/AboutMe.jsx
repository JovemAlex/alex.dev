import React, { Component } from 'react';
import SVG from '../assets/Binary code-pana.svg'
import './AboutMe.css'

export class AboutMe extends Component {
  render() {
    return (
      <main className='about_me' id='about'>
        <section className='childs-about-me'>
          <h1>Olá, seja bem-vindo ao meu portfólio!</h1>
          <p>Meu nome é <strong>Alexsandro</strong> e sou um <strong>desenvolvedor web Full-stack</strong> em início de carreira. Meu foco principal é evoluir como desenvolvedor a cada dia, e amo criar soluções criativas e inovadoras para meus projetos.</p>
        </section>
        <section className='childs-about-me'>
          <img src={SVG} alt="svg-img" />
        </section>
      </main>
    )
  }
}

export default AboutMe