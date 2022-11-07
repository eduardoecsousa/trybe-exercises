import React, { Component } from 'react'

export class Skills extends Component {
  render() {
    const { valueSkill, callback} = this.props;

    return (
      <label htmlFor='skills'>
        Do que você gostaria de falar:
        <select name='skills' id='skills' value={ valueSkill } onChange={ callback }>
          <option value=''>Selecione</option>
          <option value='JavaScript'>JavaScript</option>
          <option value='React'>React</option>
          <option value='SQL'>SQL</option>
          <option value='Git e GitHub'>Git e GitHub</option>
        </select>
      </label>
    )
  }
}

export default Skills