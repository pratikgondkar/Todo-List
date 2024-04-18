import Todo from "../Todo/Todo";
import TodoContext from "../../context/TodoContext";
import { useContext } from "react";

function TodoList() {

    const { list, setList } = useContext(TodoContext);

    function onFinished(todo, isFinished) {
        const updatedList = list.map(t => {
            if(t.id === todo.id) {
                return { ...t, finished: isFinished }; // Correctly update the finished property of the current todo
            }
            return t;
        });
        setList(updatedList);
    }

    function onDelete( todo,  ) {
        const updatedList = list.filter(t => t.id !== todo.id); 
        setList(updatedList);
    }

    function onEdit(todo, todoText) {
        const updatedList = list.map(t => {
            if(t.id == todo.id) {
               return {...t,  todoData: todoText};
            }
            return t;
        });
        setList(updatedList);
    }
    

    return (
        <div>
            {list.length > 0 && 
            list.map(todo => <Todo 
                                    key={todo.id} 
                                    id={todo.id} 
                                    isFinished={todo.finished} 
                                    todoData={todo.todoData} 
                                    changeFinished={(isFinished) => onFinished(todo, isFinished)}
                                    onDelete={() => onDelete(todo) }
                                    onEdit={(todoText) =>onEdit(todo, todoText)}
                />
            )}
        </div>
    );
}

export default TodoList;
