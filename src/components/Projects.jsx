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
            <p>O TFC é um site informativo sobre partidas e classificações de futebol! Neste projeto foi desenvolvido um <strong>back-end com Docker</strong> utilizando modelagem de dados através do <strong>Sequelize</strong> para consumir o banco de dados <strong>MySQL</strong>. O objetivo era criar uma <strong>API RESTful</strong> para ser consumida pelo front-end, sob <strong>arquitetura de software MSC e P.O.O.</strong></p>
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
            <p>O BeerFast é um aplicativo de delivery de bebidas! Neste projeto foi desenvolvido um <strong>app de delivery</strong> para uma distribuidora de bebidas. O projeto foi desenvolvido em <strong>colaboração com 5 pessoas</strong>. O intuíto do projeto era criar uma aplicação <strong>full-stack, integrando o front-end e o back-end</strong>.</p>
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
          <p className='project-link'>
              <a
                href="https://github.com/JovemAlex?tab=repositories"
                target='_blank'
                rel='noreferrer'
                className='ver-projeto'
              >
                Mais Projetos
              </a>
            </p>
        </section>
      </main>
    )
  }
}

export default Projects