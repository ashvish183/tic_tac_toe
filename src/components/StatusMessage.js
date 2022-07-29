import React from 'react'

const StatusMessage = ({winner,current}) => {
    // const message=winner?:(current.isX?"Next is X":"Next is O")
    const noMovesLeft=current.board.every((ele)=>(ele!=null))
  return (
    <div className='status-message'>
        {winner&&<>
        winner is {' '}
        <span className={winner==='X'?'text-green':'text-orange'}>{winner}</span>
        </>}
        {!winner&&!noMovesLeft&&<>
          Next player is {' '}
          <span className={current.isX==='X'?'text-green':'text-orange'}>{current.isX?"X":"O"}{' '}</span>
          </>}
        {!winner&&noMovesLeft&&<>
        <span className='text-green'>X</span> and {' '}<span className='text-orange'>O</span> tied
        </>}
    </div>
  )
}

export default StatusMessage