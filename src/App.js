import './App.css';
import React,{useState} from 'react';
import Board from './components/Board'
import History from './components/History';
import StatusMessage from './components/StatusMessage';
import './styles/root.scss'
import { calculateWinner } from './helper/Calculate winner function';

const App=()=>{
  const newBoard=[{board:Array(9).fill(null),isX:true}]
  const [history,setHistory]=useState(newBoard)
  // const [isX,setX]=useState(true);
  const [currentMove,setMove]=useState(0);
  const current=history[currentMove];
  // console.log(history)
  const handleSquareClick=(pos)=>{
    if(current.board[pos]||winner)return;
    setHistory((prev)=>{
      const last=prev[prev.length-1];
      const newBoard= last.board.map((val,ind)=>{
        if(pos===ind){
          return last.isX?'X':'O';
        }
        return val;
      })
      return prev.concat({board:newBoard,isX:!last.isX})
    });
    setMove((prev)=>prev+1)
  }
  const moveTo=(move)=>{
    setMove(move);
  }
  const {winner,winningSquare}=calculateWinner(current.board);
  const newGame=()=>{
    setHistory(newBoard)
    setMove(0)
  }
  return (
    <div className='app'>
      <h1>Tic <span className='text-green'>Tac</span> Toe</h1>
      <StatusMessage winner={winner} current={current}/>
      <Board  board={current.board} handleSquareClick={handleSquareClick} winningSquare={winningSquare}/>
      <button className={`btn-reset ${winner?'active':''}`} type='button' onClick={newGame}>Start New Game</button>
      <h2 style={{fontWeight:'normal'}}>Current game history</h2>
      <History history={history} moveTo={moveTo} currentMove={currentMove}/>
      <div className='bg-balls'></div>
    </div>
  );
}

export default App;
