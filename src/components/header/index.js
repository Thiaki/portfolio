import React from 'react';
import './style.css';

function Header() {

    return(
        <header className="header">
            <h1>Eduardo Thiaki Yoshida</h1>
            <ul>
                <Items href="#about" name="Sobre" />
                <Items href="#skills" name="Tecnologias" />
                <Items href="#portfolio" name="Portifólio" />
                <Items href="#trainings" name="Formações" />
                <Items href="#courses" name="Cursos" />
                <Items href="#experience" name="Experiência" />
            </ul>
        </header>
    )
}

const Items = (props) => {
    return(
        <li><a href={props.href}>{props.name}</a></li>
    )
}

export default Header;
