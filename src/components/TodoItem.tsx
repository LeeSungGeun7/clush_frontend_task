import { useEffect,  useState } from 'react'
import { Todo } from '../types/TodoType'
import { Checkbox, Modal , Input } from "antd";
import { CloseCircleOutlined , EditOutlined} from '@ant-design/icons'
import { useTodo } from '../hooks/useTodo';
import { TodoContainer } from '../styles/todoItem';

// 투두아이템으로 생성된 컴포넌트 
// 완료/수정/삭제 기능을 포함

function TodoItem({title,created_at,tag,id,isDone}:Todo) {
    const { deleteSelectedTodo , todolist , changeSelectedTodo  } = useTodo();
    const [isEdit , setIsEdit] = useState(false)
    const [todoItem , setTodoItem] = useState<Todo>({
        id : id , 
        title : title , 
        created_at ,
        tag , 
        isDone 
    })

    const onChangeCheckBox = () => {
        const updatedTodo = { id, title, isDone: !isDone, created_at };
        changeSelectedTodo(id, updatedTodo); // 변경된 객체 전달
    }; 


    const OnChange = (title:string) => {
        setTodoItem({...todoItem ,id : id , title: title})
    }

  return (
    <TodoContainer key={id} isdone={isDone+""}>
        <Checkbox checked={isDone} onChange={()=>{onChangeCheckBox();}} >
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
                <span>Modify Todo</span>
                <Input 
                value={todoItem.title}
                onChange={(e)=>{OnChange(e.target.value)}} 
                style={{width:'70%',margin:"0.7rem"}}/>
            </div>
            
        </Modal>
        
    </TodoContainer>
  )
}

export default TodoItem