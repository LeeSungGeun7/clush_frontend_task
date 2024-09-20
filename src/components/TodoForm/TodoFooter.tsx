import React from 'react'
import { TodoFooterST } from '../../styles/todoForm'
import { Todo } from '../../types/TodoType'
import { PlusCircleOutlined } from '@ant-design/icons'

function TodoFooter({
    todolist ,
    setIsModalOpen , 
    isModalOpen
}:any 
) {
  return (
        <TodoFooterST >
            <div className='task'>
                <p>{`${todolist.length} Task`}</p>
                <p className='success'>{`sucess ${todolist.filter((e:any)=>e.isDone === true).length} Task`}</p>
            </div>

            <div>
                <span>Add New</span>
                <PlusCircleOutlined onClick={()=>{setIsModalOpen(!isModalOpen)}}/>
            </div>
        </TodoFooterST>
  )
}

export default TodoFooter