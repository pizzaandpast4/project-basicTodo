
import { useState } from 'react';

const ToDoList = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    function handelInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask.trim() !== '') {
            setTasks((t) => [...t, newTask]);
        }
    }

    function deleteTask(index) {
        const updatedTask = tasks.filter((_, indx) => indx !== index);
        setTasks(updatedTask);
    }

    function moveTaskUp(index) {
        const updatedTasks = [...tasks];
        if (index > 0) {
            [updatedTasks[index], updatedTasks[index - 1]] = [
                updatedTasks[index - 1],
                updatedTasks[index],
            ];
        }
        setTasks(updatedTasks);
    }

    function moveTaskDown(index) {
        const updatedTasks = [...tasks];
        if (index < tasks.length - 1) {
            [updatedTasks[index], updatedTasks[index + 1]] = [
                updatedTasks[index + 1],
                updatedTasks[index],
            ];
        }
        setTasks(updatedTasks);
    }

    return (
        <>
            <h1>To-Do-List</h1>
            <div>
                <input
                    type="text"
                    placeholder="Enter a task"
                    value={newTask}
                    onChange={handelInputChange}
                />
                <button className="addButton" onClick={addTask}>
                    Add
                </button>
            </div>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button
                            className="deleteButton"
                            onClick={() => deleteTask(index)}
                        >
                            Delete
                        </button>
                        <button
                            className="moveButton"
                            onClick={() => moveTaskUp(index)}
                        >
                            Move up
                        </button>
                        <button
                            className="moveButton"
                            onClick={() => moveTaskDown(index)}
                        >
                            Move down
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default ToDoList;