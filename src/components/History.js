import React from 'react'

const History = ({history,moveTo,currentMove}) => {
  return (
    <div className='history-wrapper'>
        <h3>History</h3>
        <ul className='history'>
            {history.map((_,move)=>{
                return (<li key={move}>
                {move===0?"Game starts from 0":`This is move`}
                <button 
                    className={`btn-move:${move===currentMove?'active':''}`}
                style={{
                    fontWeight:move===currentMove?'bold':'normal'
                }} onClick={()=>{
                    moveTo(move);
                }}>{`${move===0?'':'# '+move}`}</button></li>)
            })}
        </ul>
    </div>
  )
}

export default History