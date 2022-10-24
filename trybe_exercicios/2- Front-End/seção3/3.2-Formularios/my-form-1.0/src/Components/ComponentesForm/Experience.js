import React, { Component } from 'react';

export class Experience extends Component {
  render() {
    const { valueExperience, callback } = this.props;

    let erro = undefined;

    if(valueExperience.length > 120) erro = 'Texto muito grande!'
  
      

    return (
      <fieldset>
        <label>
          Nos fale um pouco sobre sua experiencia:
          <textarea
            name='experiencia'
            value={ valueExperience }
            onChange={ callback }
          />
        </label>
        <span >{ erro ? erro : ''}</span>
      </fieldset>
    );
  }
}

export default Experience;
