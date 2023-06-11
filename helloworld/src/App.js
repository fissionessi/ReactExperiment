import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. The code edited, saved and reloaded.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React and enjoy
        </a>
      </header>
    </div>
  );
}
*/

function Square({value, onSquareClick}) {

  
  return (
    <button className='square' onClick={onSquareClick}>{value}</button>
  );
}

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [state, setState] = useState(null);

  function handleClick(value) {
    console.log(value, state);
    if(state === null){
      setState('X');
    } else {
      if(state === 'O'){
        setState('X');
      } else {
        setState('O');
      }
    }
    const nextSquares = squares.slice();
    nextSquares[value] = state;
    setSquares(nextSquares);
  }

  return (
    <div className="board">
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)}></Square>
        <Square value={squares[1]} onSquareClick={() => handleClick(1)}></Square>
        <Square value={squares[2]} onSquareClick={() => handleClick(2)}></Square>
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)}></Square>
        <Square value={squares[4]} onSquareClick={() => handleClick(4)}></Square>
        <Square value={squares[5]} onSquareClick={() => handleClick(5)}></Square>
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)}></Square>
        <Square value={squares[7]} onSquareClick={() => handleClick(7)}></Square>
        <Square value={squares[8]} onSquareClick={() => handleClick(8)}></Square>
      </div>
    </div>
  )
}

//export default App;
export default Board;
