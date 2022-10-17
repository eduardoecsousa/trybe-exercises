import React from 'react';

const nome = 'Eduardo Sousa';
const element = <h1 className='hello-class'>Hello, {nome}, tudo bem com vc??</h1>;

class ReactClass extends React.Component {
  render() {
    return (
      element
    )
  }
}

export default ReactClass; 