import React from 'react'
const Square = ({value,onClick,isWinningSquare}) => {
  
  return (
    <button 
    className={`square ${isWinningSquare?'winning':''} ${value==='X'?'text-green':'text-orange'}`} 
    style={{fontWeight:isWinningSquare?'bold':''}} 
    onClick={()=>(onClick())}>{value}
    </button>
  )
}

export default Square