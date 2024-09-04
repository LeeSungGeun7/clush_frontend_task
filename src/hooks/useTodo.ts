import { useState } from "react";
import axios  from 'axios'
import { Todo } from "../types/TodoType";

export const useTodo = () => {
    const [todolist , setTodoList] = useState<Todo[]>([])


    // 공통적으로 서버에 요청을 보내고 응답이 유효하면 즉시 화면 업데이트
    // 그외 사항은 예외 처리 

    async function createTodo(todo:Todo) {

        const res = await axios.post('/todo', todo)
        try {
            if ( res.status === 200 ) {
                setTodoList([...todolist , res.data])
            } else {
                throw new Error ('투두 생성이 실패했습니다.')    
            }
        } catch (error) {
            console.log( ('투두 생성중에 문제가 발생했습니다.'),error)
        }
        
    }

    // 선택된 투두아이템 삭제 
    async function deleteSelectedTodo({id}:Todo) {
        
        try {
            const res = await axios.delete(`/todo/${id}`)
            if ( res.status === 200 ) {
                setTodoList(todolist.filter((e)=> e.id !== id))
            } else {
                throw new Error ('투두 삭제에 실패했습니다.')
            }
        } catch (error) {
            console.log( ('투두 삭제중에 문제가 발생했습니다.'),error)
        }
    } 

    // 
    async function deleteAllTodo() {
        const res = await axios.delete('/todo')
        try {
            if ( res.status === 200 ) {
                setTodoList([])
            } 
        } catch (error) {
            console.log( ('투두 삭제중에 문제가 발생했습니다.'),error)
        }
    }


    // 서버에 todo 객체를 전달해서 서버가 수정 
    async function changeSelectedTodo(id:number ,newTodo:Todo) {
        try {
            const res = await axios.put(`/todo/${id}`,  newTodo )
            if ( res.status === 200 ) {
                setTodoList(todolist.map((item)=> item.id === id ? newTodo : item))
            } else {
                throw new Error ('투두 수정에 실패했습니다.')
            }
        } catch (error) {
            console.log( ('투두 수정중에 문제가 발생했습니다.'),error)
        }
    }

    

    return {
        todolist,
        setTodoList,
        createTodo , 
        deleteSelectedTodo ,
        deleteAllTodo , 
        changeSelectedTodo
    }
};

