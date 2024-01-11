import { useContext } from "react";
import { createContext } from "react";

export const todoContext = createContext({
	todos:[
		{
			id:1,
			todo:'message',
			completed:false
		}
	],
	addTodo:(todo)=>{},
	editTodo:(id,todo)=>{},
	deleteTodo:(id)=>{},
	toggleComplete:(id)=>{},
})
export const TodoProvider = todoContext.Provider

export const useTodo = ()=>{
	return useContext(todoContext)
}
