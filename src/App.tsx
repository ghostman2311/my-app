import React from 'react';
import './App.css';

interface ButtonProps<T>{
  onClickHandler: (value: T) => void,
  label: string,
  data:T,
}


const Button = <T extends unknown>(props:ButtonProps<T>) => {

  const {onClickHandler,data,  label} = props

  const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    onClickHandler(data)
  }
  return <button onClick={buttonHandler}>{label}</button>
}


function App() {
  return (
    <div className="App">
      <h1>Intermediaate Typescript</h1>
      <Button label='submit' data={['123']} onClickHandler={(data) => {
        console.log('here')
        console.log(data)
      }}></Button>
    </div>
  );
}

export default App;
