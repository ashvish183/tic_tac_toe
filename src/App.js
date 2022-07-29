import './App.css';
import React,{useState} from 'react';
import Board from './components/Board'
import './styles/root.scss'
import { calculateWinner } from './helper/Calculate winner function';

const App=()=>{
  const [board,setBoard]=useState(Array(9).fill(null))
  const [isX,setX]=useState(true);
  const handleSquareClick=(pos)=>{
    if(board[pos]||winner)return;
    setBoard((prev)=>{
      return prev.map((val,ind)=>{
        if(pos===ind){
          return isX?'X':'O';
        }
        return val;
      })
    });
    setX((prev)=>!prev)
  }
  const winner=calculateWinner(board);
  const message=winner?`Winner is ${winner}`:(isX?"Next is X":"Next is O")
  return (
    <div className='app'>
      <h1>Tic Tac Toe</h1>
      <h3>{message}</h3>
      <Board board={board} handleSquareClick={handleSquareClick}/>
    </div>
  );
}

export default App;
