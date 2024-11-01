import React, { useEffect } from 'react';
import { BrowserRouter, Route,  Routes } from 'react-router-dom';

import 'styles/main.sass';

import Home from 'pages/Home';
import Contact from 'pages/Contact';

import Header from 'components/Header';

function AppRoutes() {

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

      document.querySelectorAll('.hidden').forEach(e => {
        observer.observe(e);
      });
    };

    createObserver();

    const mutationCallback = (mutationsList) => {
      mutationsList.forEach(mutation => {
        if (mutation.type === 'childList') {
          createObserver();
        }
      });  
    };

    const observerConfig = { childList: true, subtree: true };
    const mutationObserver = new MutationObserver(mutationCallback);

    mutationObserver.observe(document.body, observerConfig);

    return () => {
      mutationObserver.disconnect();
    };
  }, []);

  return(
    <BrowserRouter>
        <Header />
        <Routes path='/'>
          <Route index element={<Home />} />
          <Route path='contatos' element={<Contact />} />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;
