import React from 'react'
import { Todo } from '../types/TodoType'


// 재사용이 많이 되는 주력 컴포넌트 
// 카드 형식의 UI 
// 투두리스트에서 생성/수정/삭제 기능을 포함



function TodoItem({title,created_at,tag,updated_at}:Todo) {
  return (
    <div>
        {title}
    </div>
  )
}

export default TodoItem