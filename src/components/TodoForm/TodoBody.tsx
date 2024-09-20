import { TodoBodyST } from '../../styles/todoForm'
import {  SmileOutlined } from '@ant-design/icons'
import TodoItem from '../TodoItem'
import { Todo } from '../../types/TodoType'
function TodoBody(
    {
        todolist 
    }:any
    ) {
  return (
    <TodoBodyST todolist_len={todolist.length}>
            { todolist.length === 0 ?
            <div>
                <p>투두리스트가 없어요.</p>
                <p>오른쪽 하단에서 추가버튼을 눌러주세요 <SmileOutlined /></p>
            </div>
            :
            todolist.map((item:any,idx:any)=>{
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
        </TodoBodyST>
  )
}

export default TodoBody