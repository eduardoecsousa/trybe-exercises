import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from '../components/Button'
import Input from '../components/Input'
import Load from './Load'
import ScreenCharacter from './ScreenCharacter'

class Intro extends Component {
  render() {
    const { load, defaultFetch } = this.props;
    console.log(defaultFetch)
    return (
      <div>
        <h1>Game of Thunks</h1>
        <Input />
        {load && <Load />}
        {defaultFetch && <ScreenCharacter />}
        <Button />
      </div>
    )
  }
}

const mapStateToProps = (globalState) => ({
  load: globalState.reducerGameofThorene.isLoading,
  defaultFetch: globalState.reducerGameofThorene.defaultFetch,
})

export default connect(mapStateToProps)(Intro) 
