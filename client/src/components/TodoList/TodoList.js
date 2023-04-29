import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggle,deleteItem } from "../../redux/todos/todosSlice";
const TodoList = () => {
    let filtered = [];
    const items = useSelector((state) => state.todos.items);
    const activeFilter = useSelector((state) => state.todos.activeFilter);
    const dispatch = useDispatch();
    const handleDestroy = (i) =>{
        if(window.confirm("Are you sure?")){
            dispatch(deleteItem(i)) 
        }
       
    }
    filtered = items;
    if (activeFilter !== 'all'){
        filtered= items.filter((item)=> activeFilter==="active" ? item.completed ===false && item : item.completed===true &&item)
    }
    return (
        <ul className="todo-list">
            {filtered.map((item) => (
                <li key={item.id} className={item.completed ? "completed" : ""}>
                    <div className="view">
                        <input checked={item.completed} className="toggle" type="checkbox" onChange={() => dispatch(toggle({id: item.id}))} />
                        <label>{item.title}</label>
                        <button className="destroy" onClick={() => handleDestroy(item.id)}></button>
                    </div>
                </li>
            ))}

            
        </ul>
    );
};

export default TodoList;
