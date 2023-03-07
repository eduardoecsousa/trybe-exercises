import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchAPI } from '../redux/actions/actionStatePesonagem'

class Button extends Component {
  render() {
    const {valueInput: { character }, dispatch} = this.props;
    return (
      <div>
        <button type='button' onClick={() => dispatch(fetchAPI(character))}>Pesquisar</button>
      </div>
    )
  }
}

const mapStateToProps = (globalState) => ({
  valueInput: globalState.reducerHandleChange,
}); 

export default connect(mapStateToProps)(Button);