import React, { ChangeEvent, useState } from 'react' 
import type { SetMessageFunc } from './types' 

type Props = { 
    message: string, 
    setMessage: SetMessageFunc 
}

function Message({ message, setMessage}: Props) { 
    const [msg, setMsg] = useState(message); 
    const onChange = (e: ChangeEvent<HTMLInputElement>) => setMsg(e.target.value); 
    const onClick = () => setMessage(msg);
    
    return ( 
        <div className="Message"> 
            <input type="text" onChange={onChange} value={msg} /> 
            <button onClick={onClick}>ok</button> 
        </div>
    )
}

export default Message
    