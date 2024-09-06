import {atom} from 'recoil'
import { Todo } from '../types/TodoType'
export const TodoListState = atom<Todo[]>({
    key : 'todoListState',
    default : [] ,
})