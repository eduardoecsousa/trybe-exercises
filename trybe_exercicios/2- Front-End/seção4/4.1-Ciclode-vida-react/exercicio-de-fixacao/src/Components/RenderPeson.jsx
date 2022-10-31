import React, { Component } from 'react';

class RenderPeson extends Component {
  render() {
    const { img, name, email, age } = this.props
    return (
      <div>
        <img src={img} alt={name} />
        <p>{name}</p>
        <p>{email}</p>
        <p>{age}</p>
      </div>
    );
  }
}

export default RenderPeson;
