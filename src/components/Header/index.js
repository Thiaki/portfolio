import React from 'react';
import 'styles/components/header.sass';

const Header = () => {
    return(
        <header className="header">
            <h1>Eduardo Thiaki</h1>
            <nav>
                <ul>
                    <Items href="#about" name="Sobre" />
                    <Items href="#skills" name="Tecnologias" />
                    <Items href="#trainings" name="Formações" />
                    <Items href="#courses" name="Cursos" />
                    <Items href="#experience" name="Experiência" />
                </ul>
            </nav>
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
