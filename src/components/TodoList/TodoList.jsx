import Todo from "../Todo/Todo";

function TodoList({ list, updateList }) {
    return (
        <div>
            {list.length > 0 && list.map(todo => (
                <Todo 
                    key={todo.id} 
                    id={todo.id} 
                    isFinished={todo.finished} 
                    todoData={todo.todoData} 
                    changeFinished={(isFinished) => {
                        console.log("isFinished", isFinished)
                        const updatedList = list.map(t => {
                            if(t.id == todo.id) {
                                 todo.finished = isFinished; // Updating the finished property of the current todo
                            }
                            return t;
                        });
                        updateList(updatedList); // Calling the updateList function with the updated list
                    }}
                />
            ))}
        </div>
    );
}

export default TodoList;
