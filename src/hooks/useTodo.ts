import { useCallback, useState } from "react";
import axios  from 'axios'
import { Todo } from "../types/TodoType";
import { useRecoilState} from 'recoil'
import { TodoListState } from "../atom/atom";




export const useTodo = () => {
    const [todolist, setTodoList] = useRecoilState(TodoListState);
    const local = 'http://localhost:3737'

    // 공통적으로 서버에 요청을 보내고 응답이 유효하면 즉시 화면 업데이트
    // 그외 사항은 예외 처리 

    async function createTodo(todo:Todo) {

        const res = await axios.post(`${local}/todos`, todo)
        try {
            if ( res.status === 200 || res.status === 201 ) {
                setTodoList([...todolist , res.data])
            } else {
                throw new Error (`${res.status},투두 생성이 실패했습니다.`)    
            }
        } catch (error) {
            console.log( ('투두 생성중에 문제가 발생했습니다.'),error)
        }
        
    }

    // 선택된 투두아이템 삭제 
    async function deleteSelectedTodo(id:number | string) {
        
        try {
            const res = await axios.delete(`${local}/todos/${id}`)
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
        const res = await axios.delete(local+'/todos')
        try {
            if ( res.status === 200 ) {
                setTodoList([])
            } 
        } catch (error) {
            console.log( ('투두 삭제중에 문제가 발생했습니다.'),error)
        }
    }


    // 서버에 todo 객체를 전달해서 서버가 수정 
    // id / isDone / 
    async function changeSelectedTodo(id:number | string ,newTodo:Todo) {
        try {
            const res = await axios.put(`${local}/todos/${id}`,  newTodo )
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
        changeSelectedTodo , 

    } 
};

