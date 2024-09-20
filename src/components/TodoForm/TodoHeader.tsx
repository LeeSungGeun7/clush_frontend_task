import React from 'react'
import { TodoHeaderST } from '../../styles/todoForm'
import { LeftOutlined , RightOutlined } from '@ant-design/icons'
function TodoHeader({
    DayMinus,
    dayOfWeek, 
    todayYear,
    todayMonth,
    todayDate, 
    DayPlus
}:any) {
  return (
        <TodoHeaderST>
            <LeftOutlined onClick={DayMinus}/>
            <div>{`${dayOfWeek} , ${todayYear}-${todayMonth}-${todayDate}`}</div>
            <RightOutlined onClick={DayPlus}/>
        </TodoHeaderST>
  )
}

export default TodoHeader