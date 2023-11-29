import React, { lazy } from 'react';
import logo from './logo.svg';
import './App.css';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

// const RemoteComponent = lazy(() => import('remoteApp/RemoteComponent'));

const RemoteButton = lazy(() => import('remoteApp/App'));

function App() {
  const { register, getValues, control } = useForm();
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>This is the host app</h1>
        {/* <DevTool control={control} /> */}
        <input type='text' {...register('text')} />
        <button onClick={() => console.log('VALUES: ', getValues())}>
          Submit
        </button>
        <RemoteButton />
      </header>
    </div>
  );
}

export default App;
