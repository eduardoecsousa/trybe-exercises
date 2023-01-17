import React from 'react'
import emailAberto from './image/Email-aberto.png'
import emailFechado from './image/Email-fechado.png'
import './App.scss'
import { useState } from 'react'

function App() {
  const [boxEmail, setBoxEmail] = useState([
    {
      id: 1,
      title: "Requisição de troca de numerario",
      status: 0
    },
    {
      id: 2,
      title: "Violação indevida",
      status: 0
    },
    {
      id: 3,
      title: "Atestado",
      status: 0
    }
  ]);

  const handleClick = ({ target }, index, id) => {
    const { name } = target;
    console.log(name);
    if (name === 'lido') {
      console.log('as')
      const obj = {...boxEmail[index], status: 1}
      const updateBox = boxEmail.map((email) => email.id === id ? obj : email)
      setBoxEmail(updateBox);
    } else {
      console.log('fs')
      const obj = {...boxEmail[index], status: 0}
      const updateBox = boxEmail.map((email) => email.id === id ? obj : email)
      setBoxEmail(updateBox);
    }
    
  };

  return (
    <div className='principal'>
      <header>
        <h1>TrybeMail</h1>
      </header>
      <div className='container'>
        {boxEmail.map((email, index) => (
          <div key={index + 1} className="email">
            <p
              className={email.status === 1 ? "read" : "no-read"}
            >
              {email.title}
            </p>
            <div>
              <button type='button' name="lido" onClick={(e) => handleClick(e, index, email.id)}>
                <img src={ emailAberto } alt="ico" name="lido"/>
              </button>
              <button type='button' onClick={(e) => handleClick(e, index, email.id)}>
                <img src={ emailFechado } alt="ico" />
              </button>
            </div>
          </div>
        ))}    
      </div>
    </div>
  )
}

export default App
