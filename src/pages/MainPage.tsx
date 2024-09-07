import Header from '../components/Header';
import TodoForm from '../components/TodoForm';
import styled from 'styled-components'


const FlexibleContainer =  styled.main`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width: 100vw;
  height: 100vh;
`

function MainPage() {
  return (
    <FlexibleContainer>
        <Header/>        
        <TodoForm/>

    </FlexibleContainer>
  )
}

export default MainPage