import  { useEffect, useRef,  useState } from 'react'
import axios from 'axios'
import { Todo } from '../types/TodoType'
import { useTodo } from '../hooks/useTodo'
import { Modal , Input, InputRef } from 'antd';
import { TodoLayout  } from '../styles/todoForm'
import { useTime } from '../hooks/useTime'
import TodoHeaders from './TodoForm/TodoHeader'
import TodoBody from './TodoForm/TodoBody'
import TodoFooter from './TodoForm/TodoFooter'

// 리팩토링 가독성 있게 파일 분리 ?? 
function TodoForm() {
    const inputRef = useRef<InputRef>(null)
    const {todolist , setTodoList , createTodo } = useTodo();
    const  { DayMinus , DayPlus , todayTime , now } = useTime();
    let { todayYear, dayOfWeek , todayMonth , todayDate  } = todayTime();
    const [isModalOpen , setIsModalOpen] = useState(false)
    const [todoItem , setTodoItem] = useState<Todo>({
            id : '' , 
            title : "",
            isDone : false , 
            created_at : `${todayYear}-${todayMonth}-${todayDate}`
    })
    

    // 데이터 페칭 
    async function getData() {
        const res = await axios.get(`http://localhost:3737/todos?created_at=${todayYear}-${todayMonth}-${todayDate}`)
        if (res.status === 200) {
            setTodoList(res.data)
        }
    }

    // state 클리어 함수 
    const clearTodoItem = () => {
        setTodoItem({
            id : '' , 
            title : "",
            isDone : false , 
            created_at : ""
        })
    }

    const onChangeHandler = (title:string) => {
        setTodoItem({...todoItem ,id : Math.random()+"" , title : title , tag : '',  created_at:`${todayYear}-${todayMonth}-${todayDate}` })
    }


    // 간단한 유효 검사 및 투두 생성 
    const addNewItem = () => {
        if ( todoItem.title.length < 1 ) {
            inputRef.current?.focus()
            alert('1 자이상 적어주세요')
            return
        } 
        createTodo(todoItem)
        clearTodoItem();
    }


    // 날짜가 변경되면 데이터 페칭
    useEffect(()=>{
        getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[now])


    

  return (
    <TodoLayout>
        <TodoHeaders
         todayYear={todayYear}
         dayOfWeek={dayOfWeek}
         todayMonth={todayMonth}
         todayDate={todayDate}
         DayMinus={DayMinus}
         DayPlus={DayPlus}
        />

        <TodoBody
            todolist={todolist}
        />

        <TodoFooter
            todolist={todolist}
            setIsModalOpen={setIsModalOpen}
            isModalOpen={isModalOpen}
        />

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
                <span>TO_DO</span>
                <Input 
                placeholder='투두리스트를 적어주세요'
                ref={inputRef}
                value={todoItem.title}
                onChange={(e)=>{onChangeHandler(e.target.value)}} 
                style={{width:'80%',margin:"0.7rem"}}
                />
            </div>
        </Modal>
        

    </TodoLayout>
  )
}

export default TodoForm