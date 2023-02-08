// Imports
import { Component } from "react";
import './App.css';

// Header
class Tasks extends Component {

    render() {

        // There aren't Tasks to show
        if (this.props.todos.length === 0) {
            
            return (
                
                <div className="todo-container__none">
                    <h3>🥳 It seems you don't have any tasks!</h3>
                    <p>Write a new activity in the input below, and press 'Add new' to insert a new task.</p>
                </div>
                
            );

        }

        // There are Tasks to show
        const ACTIVITIES = this.props.todos.map((todo) => {

            const ID = `activity-${todo.id}`;
            
            return (
                
                <li
                    key={ todo.id }
                    className={ (todo.completed) ? 'completed' : '' }
                >
                    
                    <label htmlFor={ ID }> { todo.activity } </label>
                    
                    <div className="todo-container__tasks-completed">

                        <input
                            type="checkbox"
                            id={ ID }
                            defaultChecked={ todo.completed }
                            onChange={() => this.props.handleCheckboxChange(todo.id)}
                        />
                            
                    </div>

                    <div
                        className="todo-container__tasks-delete"
                        onClick={ () => this.props.handleDelete(todo.id) }
                    >

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/>
                        </svg>

                    </div>
                
                </li>
            
            );
        
        });

        return (

            <ul className="todo-container__tasks"> { ACTIVITIES } </ul>

        );

    }

}

// Export the Header
export default Tasks;