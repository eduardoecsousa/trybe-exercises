import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleChange } from '../redux/actions/actionStatePesonagem'

class Input extends Component {
  render() {
    const { dispatch, valueInput } = this.props; 
    return (
      <div>
        <label>
          <input
            type='text'
            name='character'
            onChange={({target: {name, value}}) => dispatch(handleChange(name, value))}
            placeholder='Insira o nome do personagem'
            value={ valueInput }
          />
        </label>
      </div>
    )
  }
}

const mapStateToProps = (globalState) => ({
  valueInput: globalState.reducerHandleChange.character,
})

export default connect(mapStateToProps)(Input)
