import styled from 'styled-components'

const TodoLayout = styled.div`
    display:flex;
    width: 100vw;
    height: 100vh;
    flex-direction:column;

    .modal {
        width: 200px;
        height: 500px;
    }
    label {
        gap : 1rem;
    }

    .label_input {
        width: 100%;
        display:flex;
        gap : 10px;
        margin : 10px;
    }
`

const TodoHeader = styled.div`
    display:flex;
    width: 100%;
    height: 5rem;
    border : 0.5px solid silver;
    background-color: white;
    justify-content: space-evenly;
    align-items:center;
`

const TodoBody = styled.div<any>`
    display:flex;
    width: 100%;
    padding: 32px; /* 원하는 padding 값 */
    box-sizing: border-box; /* padding을 width에 포함시킴 */
    flex : 1;
    flex-direction:column;
    background-color:white;
    align-items:center;
    overflow-y: scroll;
    justify-content: ${(props):any=>props.todolist_len === 0  ? 'center':'start'};
    
`

const TodoFooter = styled.div`
    display:flex;
    width: 100%;
    height: 4rem;
    border : 0.5px solid silver;
    justify-content: space-between;
    align-items:center;

    * {
        margin: 1rem;
    }
    span {
        margin: 0px;
    }
    .task {
        display:flex;

        .success {
            color : skyblue;
        }
    }
`


export { 
    TodoLayout,
    TodoBody,
    TodoHeader,
    TodoFooter
 }