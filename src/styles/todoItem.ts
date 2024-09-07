import styled from 'styled-components'
export const TodoContainer = styled.div<any>`
    display:flex;
    background-color: white;
    margin:5px;
    justify-content: space-between;
    align-items:center;
    width: 100%;
    height: 100px;   
    border-bottom : 0.1px solid black;

    .right {
        display : flex;

        * {
            margin:3px;

            *:hover {
                transition: 1s 'easy-in';
                font-size:1.5rem;    
            }

        }
    }

    span {
        text-decoration : ${(props)=>props.isdone.toString() === "true" ? 'line-through' : 'none' }
    }
    
`