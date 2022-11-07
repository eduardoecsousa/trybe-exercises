import React from 'react';


class Biografia extends React.Component {
  render() {
    return (
      <div className='container'>
        <h1>Eduardo Sousa</h1>
        <p>Tenho 22 anos e estou estudando Desenvolvimento web na Trybe</p>
        <h2>Minhas Habilidades</h2>
        <ul>
          <li>Git e GitHub</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ul>
      </div>
    );
  }
}

export default Biografia;