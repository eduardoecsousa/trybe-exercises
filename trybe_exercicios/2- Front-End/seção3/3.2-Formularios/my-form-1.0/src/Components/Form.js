import React from 'react';
import CompSkills from './ComponentesForm/Skills';
import CompExperience from './ComponentesForm/Experience';
import './Form.css'

class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      skills: '',
      experiencia: '',
      termos: false,
      formularioComErros: false 
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeErros = this.handleChangeErros.bind(this);
  }

  handleChangeErros(value) {
    this.setState({
      formularioComErros: value
    })
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value
    })
  }


  render() {
    return (
      <div>
        <h1>Cadastro para palestrar!</h1>
        <form className='form'>
          <label>
            Nome completo:
            <input name='name' type='text' value={this.state.name} onChange={this.handleChange}></input>
          </label>
          <label>
            E-mail:
            <input name='email' type='email' value={this.state.email} onChange={this.handleChange}></input>
          </label>
          <CompSkills 
            valueSkill={this.state.skills} 
            callback={this.handleChange} 
          />
          <CompExperience
            valueExperience={this.state.experiencia} 
            callback={this.handleChange}
          />
          <label>
            <input type='checkbox' name='termos' checked={this.state.termos} onChange={this.handleChange}></input>
            Li e concordo com os termos
          </label>
        </form>
      </div>
    )
  }
}

export default Form;