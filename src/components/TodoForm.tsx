import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {LeftOutlined , RightOutlined,PlusCircleOutlined} from '@ant-design/icons'
import axios from 'axios'
import { Todo } from '../types/TodoType'
import TodoItem from './TodoItem'
import { useTodo } from '../hooks/useTodo'


const TodoLayout = styled.div`
    display:flex;
    width: 100vw;
    height: 100vh;
    flex-direction:column;
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

const TodoBody = styled.div`
    display:flex;
    width: 100%;
    padding: 32px; /* 원하는 padding 값 */
    box-sizing: border-box; /* padding을 width에 포함시킴 */
    flex : 1;
    flex-direction:column;
    background-color:white;
    align-items:center;
    overflow-y: scroll;
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
`

function TodoForm() {
    // const [todoData, setTodoData] = useState<Todo[]>([])
    const {todolist , setTodoList} = useTodo();

    async function getData() {
        const res = await axios.get('http://localhost:3737/todos')
        if (res.status === 200) {
            setTodoList(res.data)
        }
    }

    useEffect(()=>{
        getData()
    },[])
  return (
    <TodoLayout>
        <TodoHeader>
            <LeftOutlined/>
            <div>{Date.now().toString()}</div>
            <RightOutlined/>
        </TodoHeader>


        <TodoBody>
            {
                todolist.map((item,idx)=>{
                    return(
                        <TodoItem 
                        title={item.title} 
                        tag={item.tag} 
                        created_at={item.created_at}
                        isDone={item.isDone}
                        id={item.id}
                        />
                    )
                })
            }                


        </TodoBody>

        <TodoFooter>
            <div className='ss'>{`${todolist.length} Task`}</div>

            <div>
            <span>Add New</span>
            <PlusCircleOutlined/>
            </div>
            
        </TodoFooter>
    </TodoLayout>
  )
}

export default TodoForm