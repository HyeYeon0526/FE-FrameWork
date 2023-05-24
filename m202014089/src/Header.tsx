import React from 'react' 
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Div = styled.div` 
    & a { margin-right: 20px; }
`;

function Header() { 
    return (
        <Div>
             <Link to='/'>List</Link> 
             <Link to='/edit:`${id}`'>Edit</Link> 
             <Link to='/add'>Add</Link>
        </Div>
    )
}

export default Header