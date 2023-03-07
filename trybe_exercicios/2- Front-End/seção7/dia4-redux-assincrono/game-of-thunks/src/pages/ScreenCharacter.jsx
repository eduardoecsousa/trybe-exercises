import React, { Component } from 'react'
import { connect } from 'react-redux';

class ScreenCharacter extends Component {
  render() {
    const { dateCharacter } = this.props;
    console.log(dateCharacter)
    const {name, gender, culture, born, titles } = dateCharacter[0];
    return (
      <div>
        <p><strong>Nome:</strong> {name}</p>
        <p><strong>Genero:</strong> {gender}</p>
        <p><strong>Cultura:</strong> {culture}</p>
        <p><strong>Nacimento:</strong> {born}</p>
        <p><strong>Titulo:</strong> {titles[0]}</p>
      </div>
    )
  }
}

const mapStateToProps = (globalState) => ({
  dateCharacter: globalState.reducerGameofThorene.dateCharacter
})

export default connect(mapStateToProps)(ScreenCharacter);
