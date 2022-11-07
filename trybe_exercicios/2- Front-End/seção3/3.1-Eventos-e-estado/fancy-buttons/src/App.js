import React from 'react';
import './App.css';

/* Embora isso funcione, essa DEFINITIVAMENTE
não é a maneira correta de se criar eventos
em React! A função se refere ao componente,
então deve ser parte de sua classe! */

class App extends React.Component {
  /* Repare que, diferentemente do HTML, no
  JSX você associa uma função a um evento
  passando a própria função entre chaves `{}` */
  constructor(){
    super()
    this.state = {
      numeroDeCliques1: 0,
      numeroDeCliques2: 0,
      numeroDeCliques3: 0,
    };
    this.handleClick = this.handleClick.bind(this)
    this.handleClick2 = this.handleClick2.bind(this)
    this.handleClick3 = this.handleClick3.bind(this)
  }

  handleClick() {
    this.setState((numAnterior, _props) => ({
      numeroDeCliques1: numAnterior.numeroDeCliques1 + 1
    }))
    if (this.state.numeroDeCliques1%2 !== 0) {
      document.querySelector('.button1').style.backgroundColor = 'green';
  } else {
    document.querySelector('.button1').style.backgroundColor = 'red';
  }
  }
  
  handleClick2() {
    this.setState((numAnterior, _props) => ({
      numeroDeCliques2: numAnterior.numeroDeCliques2 + 1
    }))
    if (this.state.numeroDeCliques2%2 !== 0) {
      document.querySelector('.button2').style.backgroundColor = 'green';
  } else {
    document.querySelector('.button2').style.backgroundColor = 'red';
  }
  }
  
  handleClick3() {
    this.setState((numAnterior, _props) => ({
      numeroDeCliques3: numAnterior.numeroDeCliques3 + 1
    }))
    if (this.state.numeroDeCliques3%2 !== 0) {
      document.querySelector('.button3').style.backgroundColor = 'green';
  } else {
    document.querySelector('.button3').style.backgroundColor = 'red';
  }
  }
  render() {
    return (
      <div>
        <button className='button1' onClick={this.handleClick}>{this.state.numeroDeCliques1}</button>
        <button className='button2' onClick={this.handleClick2}>{this.state.numeroDeCliques2}</button>
        <button className='button3' onClick={this.handleClick3}>{this.state.numeroDeCliques3}</button>
      </div>
      )
  }
}

export default App;