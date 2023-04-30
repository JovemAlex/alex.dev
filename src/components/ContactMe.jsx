import React, { Component } from 'react'
import './Contacts.css'

export class ContactMe extends Component {
  render() {
    return (
      <footer className='contact' id='contact'>
        <h1>Contatos</h1>
        <div className='links'>
          <p>
            <a
              href="mailto:alexsandroandrade.jr@gmail.com"
              rel='noreferrer'
              target='_blank'
            >
              <img src="https://img.shields.io/badge/-GMAIL-1d2226?style=for-the-badge&logo=gmail&logoColor=e34f26" alt="gmail" />
            </a>
          </p>
          <p>
            <a
              href="https://www.linkedin.com/in/alexhnt/"
              rel='noreferrer'
              target='_blank'
            >
              <img src="https://img.shields.io/badge/-LINKEDIN-1d2226?style=for-the-badge&logo=linkedin&logoColor=blue" alt="linkedin" />
            </a>
          </p>
        </div>
        <hr />
        <span>Copyright Alexsandro Andrade 2023</span>
        <div className='footer_links'>
          <a href="#home">Home</a>
          <a href="#interests">Sobre mim</a>
          <a href="#stacks">Habilidades</a>
          <a href="#projects">Projetos</a>
          <a href="#contacts">Contatos</a>
        </div>
        <span>MIT License</span>
      </footer>
    )
  }
}

export default ContactMe