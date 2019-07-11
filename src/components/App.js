import React from 'react';
import '../App.css'
import GuessedWords from './GuessedWords';
import Congrulation from './Congrulation'

function App() {
  return (
    <div className="container"
    data-test='app-component'>
      <h1 className='text-center'>Jotto</h1>
      <Congrulation success={true}/>
      <GuessedWords guessedWords={[{guessedWord:'player',letterMatchCount:4}]}/>
    </div>
  );
}

export default App;
