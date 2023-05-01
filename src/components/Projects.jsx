import React, { Component } from 'react'
import './Projects.css'

export class Projects extends Component {
  render() {
    return (
      <main className='projects' id='projects'>
        <section className='title'>
          <h1>Projetos</h1>
        </section>

        <section className='cards'>
          <div className='card'>
            <h3 className='hover-2'>Trybe Futebol Clube ⚽</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere maiores, quae incidunt, quam, ullam harum corrupti modi dolorum ut a laudantium vero consectetur cumque. Illo voluptatibus qui repellendus ut esse.</p>
            <p className='project-link'>
              <a
                href="https://github.com/JovemAlex/trybe-futebol-clube"
                target='_blank'
                rel='noreferrer'
                className='ver-projeto'
              >
                Ver Projeto!
              </a>
            </p>
          </div>
          <div className='card'>
            <h3 className='hover-2'>Beer Fast 🍺⚡</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere maiores, quae incidunt, quam, ullam harum corrupti modi dolorum ut a laudantium vero consectetur cumque. Illo voluptatibus qui repellendus ut esse.</p>
            <p className='project-link'>
              <a
                href="https://github.com/JovemAlex/BeerFast"
                target='_blank'
                rel='noreferrer'
                className='ver-projeto'
              >
                Ver Projeto!
              </a>
            </p>
          </div>
        </section>
      </main>
    )
  }
}

export default Projects