import  { useEffect, useRef,  useState } from 'react'
import {LeftOutlined , RightOutlined,PlusCircleOutlined , SmileOutlined } from '@ant-design/icons'
import axios from 'axios'
import { Todo } from '../types/TodoType'
import TodoItem from './TodoItem'
import { useTodo } from '../hooks/useTodo'
import { Modal , Input, InputRef } from 'antd';
import { TodoBody , TodoFooter , TodoLayout , TodoHeader } from '../styles/todoForm'
import { useTime } from '../hooks/useTime'


// 날짜별 조회 기능추가 
// 1 . 날짜별로 조회하도록 서버에 yyyy-mm-dd 요청
// 2 . date state 선언 
// 3 . 아이템 추가 할때 created_at 을 date state 로 추가 
// 4 . 왼쪽 , 오른쪽 버튼을 통해서 하루 간격 증가 또는 감소 기능 
// 5 . 달력도 고려할수 있음 


function TodoForm() {
    const inputRef = useRef<InputRef>(null)
    const {todolist , setTodoList , createTodo } = useTodo();
    const { DayMinus , DayPlus , todayTime , now } = useTime();
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
        <TodoHeader>
            <LeftOutlined onClick={DayMinus}/>
            <div>{`${dayOfWeek} , ${todayYear}-${todayMonth}-${todayDate}`}</div>
            <RightOutlined onClick={DayPlus}/>
        </TodoHeader>

        <TodoBody todolist_len={todolist.length}>

            { todolist.length === 0 ?
            <div>
                <p>투두리스트가 없어요.</p>
                <p>오른쪽 하단에서 추가버튼을 눌러주세요 <SmileOutlined /></p>
            </div>
            :
            todolist.map((item,idx)=>{
                return(
                    <TodoItem 
                    key={idx}
                    title={item.title} 
                    created_at={item.created_at}
                    isDone={item.isDone}
                    id={item.id}
                    />
                )
            })
            }
        </TodoBody>

        <TodoFooter >
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