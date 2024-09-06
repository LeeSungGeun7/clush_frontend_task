import React, { useCallback, useState } from 'react'
import { Todo } from '../types/TodoType'
import styled from 'styled-components'
import { Checkbox, Modal , Input } from "antd";
import { CloseCircleOutlined , EditOutlined} from '@ant-design/icons'
import { useTodo } from '../hooks/useTodo';

// 재사용이 많이 되는 아이템 컴포넌트 
// 카드 형식의 UI 
// 투두리스트에서 생성/수정/삭제 기능을 포함

const TodoContainer = styled.div<any>`
    display:flex;
    background-color: white;
    margin:5px;
    justify-content: space-between;
    align-items:center;
    width: 100%;
    height: 100px;   

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



function TodoItem({title,created_at,tag,id,isDone}:Todo) {
    const { deleteSelectedTodo , setTodoList , todolist , changeSelectedTodo  } = useTodo();
    const [isEdit , setIsEdit] = useState(false)
    const [todoItem , setTodoItem] = useState<Todo>({
        id : id , 
        title : title , 
        created_at ,
        tag , 
        isDone 
    })

    const onChangeHandler = () => {
        const updatedTodo = { id, title, isDone: !isDone, created_at };
        changeSelectedTodo(id, updatedTodo); // 변경된 값을 직접 전달
    }; 

     const onChangeHandle = (title:string) => {
        setTodoItem({...todoItem ,id : id , title: title})
    };

  return (
    <TodoContainer key={id} isdone={isDone+""}>
        <Checkbox checked={isDone} onChange={()=>{onChangeHandler();}} >
            <span>{title}</span>
        </Checkbox>
        
        <div className='right'>
        <EditOutlined onClick={()=>{setIsEdit(true);
        setTodoItem({
            id : id , 
            title : title , 
            created_at ,
            tag , 
            isDone 
        })}} />
        <CloseCircleOutlined onClick={()=>{
            deleteSelectedTodo(id);
            console.log(id,todolist)
        }}/>
        </div>

        <Modal 
        onCancel={()=>{setIsEdit(false)}} 
        onClose={()=>{setIsEdit(false)}} 
        onOk={()=>{changeSelectedTodo(id, todoItem);setTodoItem(todoItem);setIsEdit(false)}} 
        okText="변경하기" 
        cancelText="취소" 
        centered={true} 
        width={300} 
        style={{height:'auto' }} 
        open={isEdit}>
            <div>
            <span>title</span>
            <Input value={todoItem.title} onChange={(e)=>{onChangeHandle(e.target.value)}} style={{width:'70%',margin:"0.7rem"}}/>
            </div>
            
        </Modal>
        
    </TodoContainer>
  )
}

export default TodoItem