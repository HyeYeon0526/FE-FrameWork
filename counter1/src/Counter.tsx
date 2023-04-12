import React from 'react' 
import type { IncreaseFunc } from './types'

type Props = { 
    count: number, 
    increase: IncreaseFunc
} 

function Counter({ count, increase }: Props) { 
    return (
        <div className="Counter"> 
            <p>count: {count}</p>
            <button onClick={increase}>increase</button> 
        </div>
    )
} 

export default Counter