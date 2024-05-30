import React from 'react';
import 'styles/components/header.sass';

function Header() {
    return(
        <header className="header">
            <h1><span>Eduardo</span> <span>Thiaki</span></h1>
            <ul>
                <Items href="#about" name="Sobre" />
                <Items href="#skills" name="Tecnologias" />
                <Items href="#trainings" name="Formações" />
                <Items href="#courses" name="Cursos" />
                <Items href="#experience" name="Experiência" />
            </ul>
            <button>Fale comigo &gt; </button>
        </header>
    )
}

const Items = ( {href, name} ) => {
    return(
        <li><a href={href}>{name}</a></li>
    )
}

export default Header;
