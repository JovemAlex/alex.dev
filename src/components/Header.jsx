import React, { useState } from 'react';
import './Header.css'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav id='home'>
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`menu ${showMenu ? "show" : ""}`}>
        <li><a onClick={ toggleMenu } href="#about">Home</a></li>
        <li><a onClick={ toggleMenu } href="#interests">Sobre mim</a></li>
        <li><a onClick={ toggleMenu } href="#stacks">Habilidades</a></li>
        <li><a onClick={ toggleMenu } href="#projects">Projetos</a></li>
        <li><a onClick={ toggleMenu } href="#contact">Entre em contato comigo!</a></li>

      </ul>
    </nav>
  );
};

export default Header;
