import React from 'react';
import './App.css';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

function App() {
  const { register, getValues, control } = useForm();

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>This is the remote app</h1>
        <div>
          Start it with <pre>npm run deploy</pre>
        </div>
        {/* <DevTool control={control} /> */}
        {/* With DevTool in remote, it does not work */}
        <input type='text' {...register('text')} />
        <button onClick={() => console.log('VALUES: ', getValues())}>
          Submit
        </button>
      </header>
    </div>
  );
}

export default App;
