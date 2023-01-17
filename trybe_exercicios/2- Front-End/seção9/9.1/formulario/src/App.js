import React, { useState } from 'react'

function App() {
  const [form, setForm] = useState({
    name: '',
    age: 0,
    city: '',
    module: '',
  });

  const handleChange = ({target}) => {
    setForm({
      ...form,
      [target.name]: target.value,
    })
  }

  return (
    <div>
      <h1>Pessoa Trybe</h1>
      <h4>Prencha os campos corretamente:</h4>
      <form>
        <label htmlFor='name'>
          Nome Completo: 
          <input type='text' name='name' value={form.name} onChange={handleChange} />
        </label>
        <label htmlFor='age'>
          Idade: 
          <input type='number' name='age' value={form.age} onChange={handleChange} />
        </label>
        <label htmlFor='city'>
          Cidade: 
          <input type='text' name='city' value={form.city} onChange={handleChange} />
        </label>
        <label htmlFor='module'>
          Qual mudulo você está:  
          <input type='radio' name='module' value='Fundamentos' onChange={handleChange} />Fundamentos
          <input type='radio' name='module' value='Front-end' onChange={handleChange} />Front-end
          <input type='radio' name='module' value='Back-end' onChange={handleChange} />Back-end
          <input type='radio' name='module' value='Ciência da Computação' onChange={handleChange} />Ciência da Computação
        </label>
        <button type='submit'>Enviar</button>
      </form>
    </div>
  )
}

export default App;