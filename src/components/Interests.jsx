import React, { Component } from 'react'
import './Interests.css'

export class Interests extends Component {
  render() {
    return (
      <main className='interests' id='interests'>

        <section className='text_interests'>
          <h1>Um pouco mais sobre mim!</h1>
          <p>Apaixonado por games e tecnologia, praticante de atividades físicas, amante de música com natureza. Experiência como designer gráfico e no setor administrativo, com formção em logística.</p>
        </section>

        <section className='image_interests'>
          <h1 id='stacks'>Stacks que eu possuo experiência:</h1>
          <span>
            <img src="https://img.shields.io/badge/-HTML5-1d2226?style=for-the-badge&logo=html5&logoColor=e34f26" alt="html5" />
            <img src="https://img.shields.io/badge/-CSS3-1d2226?style=for-the-badge&logo=css3&logoColor=1572b6" alt="css3" />
            <img src="https://img.shields.io/badge/-JAVASCRIPT-1d2226?style=for-the-badge&logo=javascript&logoColor=yellow" alt="javascript" />
            <img src="https://img.shields.io/badge/-TYPESCRIPT-1d2226?style=for-the-badge&logo=typescript&logoColor=007acc" alt="typescript" />
            <img src="https://img.shields.io/badge/-git-1d2226?style=for-the-badge&logo=git&logoColor=e44c30" alt="git" />
          </span>
          <span>
            <img src="https://img.shields.io/badge/-REACT-1d2226?style=for-the-badge&logo=react&logoColor=62d7f9" alt="react" />
            <img src="https://img.shields.io/badge/-REACT ROUTER-1d2226?style=for-the-badge&logo=react-router&logoColor=ca4245" alt="react-router" />
            <img src="https://img.shields.io/badge/-REDUX-1d2226?style=for-the-badge&logo=redux&logoColor=5a29e4" alt="redux" />
            <img src="https://img.shields.io/badge/-AXIOS-1d2226?style=for-the-badge&logo=axios&logoColor=5a29e4" alt="axios" />
          </span>
          <span>
            <img src="https://img.shields.io/badge/-docker-1d2226?style=for-the-badge&logo=docker&logoColor=3982CE" alt="docker" />
            <img src="https://img.shields.io/badge/-node.js-1d2226?style=for-the-badge&logo=node.js&logoColor=339933" alt="node.js" />
            <img src="https://img.shields.io/badge/-ts--node-1d2226?style=for-the-badge&logo=ts-node&logoColor=3178c6" alt="ts-node" />
            <img src="https://img.shields.io/badge/-express.js-1d2226?style=for-the-badge&logo=express&logoColor=white" alt="express.js" />
            <img src="https://img.shields.io/badge/-sequelize-1d2226?style=for-the-badge&logo=sequelize&logoColor=3982ce" alt="sequelize" />
            <img src="https://img.shields.io/badge/JWT-1d2226?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white" alt="JWT Shield" />
          </span>
          <span>
            <img src="https://img.shields.io/badge/-MYSQL-1d2226?style=for-the-badge&logo=mysql&logoColor=white" alt="mysql" />
            <img src="https://img.shields.io/badge/-mongodb-1d2226?style=for-the-badge&logo=mongodb&logoColor=4ea94b" alt="mongodb" />
          </span>
          <span>
            <img src="https://img.shields.io/badge/-jest-1d2226?style=for-the-badge&logo=jest&logoColor=c21325" alt="jest" />
            <img src="https://img.shields.io/badge/-mocha-1d2226?style=for-the-badge&logo=mocha&logoColor=8d6748" alt="mocha" />
            <img src="https://img.shields.io/badge/-chai-1d2226?style=for-the-badge&logo=chai&logoColor=a30701" alt="chai" />
            <img src="https://img.shields.io/badge/-REACT_TESTING_LIBRARY-1d2226?style=for-the-badge&logo=TestingLibrary&logoColor=e33332" alt="TestingLibrary" />
          </span>
        </section>
      </main>
    )
  }
}

export default Interests