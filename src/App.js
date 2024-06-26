import React, { useEffect } from 'react';

import 'styles/main.sass';
import Header from 'components/Header';
import MainBanner from 'components/MainBanner';
import About from 'components/About';
import Skills from 'components/Skills';
import Contacts from 'components/Contacts';

function App() {

  useEffect(() => {
    const createObserver = () => {
      const callbackFunction = (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          } else {
            entry.target.classList.remove('show');
          }
        });
      };
  
      const options = {
        threshold: 0.2
      };
  
      const observer = new IntersectionObserver(callbackFunction, options);
  
      document.querySelectorAll('.hidden').forEach(el => {
        observer.observe(el);
      });
    };
  
    createObserver();
  }, []);   

  return(
    <div className="App">
      <Header />
      <MainBanner />
      <About>
        Olá! Sou Eduardo Thiaki Yoshida, um amante da tecnologia apaixonado por desenvolver linhas de código e experiências digitais. Admiro o desenvolvimento front-end pela possibilidade de criar experiências.
        <br /> <br />
        Minha jornada no mundo do desenvolvimento começou durante meus estudos em Análise e Desenvolvimento de Sistemas na FIAP, onde mergulhei de cabeça em linguagens como HTML, CSS e JavaScript. Desde então, venho explorando novas tecnologias e frameworks, como React, e aprimorando minhas habilidades em projetos desafiadores.
        <br /> <br />
        Com experiência prática em projetos de e-commerce na plataforma VTEX IO, descobri o poder de criar soluções que não apenas atendem às necessidades do cliente, mas também encantam e inspiram os usuários. Sou um defensor ávido da usabilidade e da acessibilidade, sempre buscando maneiras de tornar a experiência digital mais intuitiva e inclusiva para todos.
      </About>
      <Skills />
      <Contacts />
    </div>
  )
}

export default App;
