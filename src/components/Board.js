import React from 'react'
import Square from './Square';
const Board = ({board,handleSquareClick,winningSquare}) => {
  const renderSquare=(pos)=>{
    const isWinningSquare=winningSquare.includes(pos)
    return (<Square value={board[pos]} onClick={()=>handleSquareClick(pos)} isWinningSquare={isWinningSquare}></Square>)
  }
  return (
    <div className='board'>
        <div className='board-row'>
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
        </div>
        <div className='board-row'>
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
        </div>
        <div className='board-row'>
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}

        </div>
        
    </div>
  )
}

export default Board