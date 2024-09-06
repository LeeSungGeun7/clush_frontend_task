import React, { InputHTMLAttributes, useEffect, useRef,  useState } from 'react'
import styled from 'styled-components'
import {LeftOutlined , RightOutlined,PlusCircleOutlined} from '@ant-design/icons'
import axios from 'axios'
import { Todo } from '../types/TodoType'
import TodoItem from './TodoItem'
import { useTodo } from '../hooks/useTodo'
import { Button, Modal , Input, InputRef } from 'antd';
import { todayTime } from '../util/time'


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
    .task {
        display:flex;

        .success {
            color : skyblue;
        }
    }
`

function TodoForm() {
    // const [todoData, setTodoData] = useState<Todo[]>([])
    const inputRef = useRef<InputRef>(null)
    const {todolist , setTodoList , createTodo} = useTodo();
    const [isEdit , setIsEdit] = useState(false)
    const [isModalOpen , setIsModalOpen] = useState(false)
    const [todoItem , setTodoItem] = useState<Todo>({
            id : '' , 
            title : "",
            isDone : false , 
            created_at : ""
    })

    async function getData() {
        const res = await axios.get('http://localhost:3737/todos')
        if (res.status === 200) {
            setTodoList(res.data)
        }
    }

    const clearTodoItem = () => {
        setTodoItem({
            id : '' , 
            title : "",
            isDone : false , 
            created_at : ""
        })
    }

    const onChangeHandler = (title:string) => {
        setTodoItem({...todoItem ,id : Math.random()+"" , title : title , tag : '' })
    }

    const addNewItem = () => {
        if ( todoItem.title.length < 1 ) {
            inputRef.current?.focus()
            alert('1 자이상 적어주세요')
            return
        } 
        createTodo(todoItem)
        clearTodoItem();
    }

    useEffect(()=>{
        getData()
        console.log(todolist)
    },[])

    let { todayYear, dayOfWeek , todayMonth , todayDate} = todayTime();

  return (
    <TodoLayout>
        <TodoHeader>
            <LeftOutlined/>
            <div>{`${dayOfWeek} , ${todayYear} . ${todayMonth} . ${todayDate}`}</div>
            <RightOutlined/>
        </TodoHeader>


        <TodoBody>
            {
                todolist.map((item,idx)=>{
                    return(
                        <TodoItem 
                        key={idx}
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
            <div className='task'>
                <p>{`${todolist.length} Task`}</p>
                <p className='success'>{`sucess ${todolist.filter((e)=>e.isDone === true).length} Task`}</p>
            </div>

            <div>
            <span>Add New</span>
            <PlusCircleOutlined onClick={()=>{setIsModalOpen(!isModalOpen)}}/>
            </div>
            
        </TodoFooter>



        <Modal 
        onCancel={()=>{setIsModalOpen(false); clearTodoItem();}} 
        onClose={()=>{setIsModalOpen(false); clearTodoItem();}} 
        onOk={addNewItem} 
        okText="연속 추가" 
        cancelText="취소"
        centered={true} 
        width={350} 
        height={'30%'} 
        open={isModalOpen}>
            <div className='label_input'>
            <span>title</span>

            <Input name='i' 
             ref={inputRef}
             value={todoItem.title}
             onChange={(e)=>{onChangeHandler(e.target.value)}} style={{width:'80%',margin:"0.7rem"}}/>
            </div>
            {/* <div className='label_input'>
            <span>태그</span>
            <Input style={{width:'50%'}}/>
            </div> */}
        </Modal>
        

    </TodoLayout>
  )
}

export default TodoForm