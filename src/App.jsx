import { useState } from 'react'
import Values from 'values.js';
import './App.css'
import Form from './assets/Components/Form';
import Display from './assets/Components/Display';

function App() {
  const [list, setList] = useState(new Values('red').all(10))
  console.log(list);

  return(
    <div className="App">
      <Form  setList={setList}/>
      <Display list={list} />
    </div>
  )
  
}

export default App
