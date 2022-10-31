import React, { Component } from 'react';
import RenderPeson from './Components/RenderPeson';

class App extends Component {
  constructor(){
    super()
    this.state = {
      loading: true,
      datePerson: undefined,
    }
    this.persons = this.persons.bind(this);
  }

  

  persons() {
    this.setState({
      loading: true,
    }, async () => {
      const requestReturn = await fetch('https://api.randomuser.me/');
      const requestObj = await requestReturn.json();
      const returnPromisse = requestObj.results;
      console.log('returnPromisse')
      this.setState({
        loading: false,
        datePerson: returnPromisse,
      })
    })
  }

  componentDidMount() {    
    this.persons();
  }

  render() {
    const { loading, datePerson } = this.state;
    const loadingElement = <span>Carregando...</span>
    
    if(loading) return loadingElement;
    return (
      <div className="container">
        { datePerson.map((person) => (
            (<RenderPeson 
            key={person.id.value}
            img={person.picture.medium}
            name={`${person.name.first}`}
            email={person.email}
            age={person.dob.age}
          />)
          ))}
      </div>
    );
  }
}

export default App;
