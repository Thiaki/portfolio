import React from 'react';
import { Link } from 'react-router-dom';
import 'styles/components/header.sass';

const Header = () => {
    return(
        <header className="header">
            <Link to={'/'}>
                <h1>Eduardo Thiaki</h1>
            </Link>
            <nav>
                <ul>
                    <Items href="/#about" name="Sobre" />
                    <Items href="/#skills" name="Tecnologias" />
                    <Items href="/#contacts" name="Contatos" />
                </ul>
            </nav>
            <button>
                <Link to='contatos'>Fale comigo &gt;</Link>
            </button>
        </header>
    )
}

const Items = ( {href, name} ) => {
    return(
        <li><a href={href}>{name}</a></li>
    )
}

export default Header;
