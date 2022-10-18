import React from 'react';
import './Form.css'

class Form extends React.Component {
  constructor(){
    super()
    this.state = {
      name: '',
      email: '',
      assunto: '',
      experiencia: ''
    }
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeSkills = this.handleChangeSkills.bind(this);
    this.handleChangeExperience = this.handleChangeExperience.bind(this);
  }

  handleChangeName(event){
    this.setState({name: event.target.value})
  }

  handleChangeEmail(event){
    this.setState({email: event.target.value})
  }

  handleChangeSkills(event){
    this.setState({assunto: event.target.value})
  }

  handleChangeExperience(event){
    this.setState({experiencia: event.target.value})
  }


  render() {
    return (
    <div>
      <h1>Cadastro para palestrar!</h1>
      <form className='form'>
        <label>
          Nome completo:
          <input type='text' value={this.state.name} onChange={this.handleChangeName}></input>
        </label>
        <label>
          E-mail:
          <input type='email' value={this.state.email} onChange={this.handleChangeEmail}></input>
        </label>
        <label htmlFor='skills'>
          Do que você gostaria de falar:
          <select name='skills' id='skills' value={this.state.assunto} onChange={this.handleChangeSkills}>
            <option value=''>Selecione</option>
            <option value='JavaScript'>JavaScript</option>
            <option value='React'>React</option>
            <option value='SQL'>SQL</option>
            <option value='Git e GitHub'>Git e GitHub</option>
          </select>
        </label>
        <label>
          Nos fale um pouco sobre sua experiencia:
          <textarea value={this.state.experiencia} onChange={this.handleChangeExperience}/>
        </label>
      </form>
    </div>
    )
  }
}

export default Form;