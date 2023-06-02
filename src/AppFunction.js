// Imports
import React, { useReducer } from "react";
import './App.css';
import Footer from "./Footer";
import Header from "./Header";
import Tasks from "./Tasks";

function todoReducerFunction(state, action) {

    console.log(action);

    switch (action.type) {

        default: {
            throw new Error('Unexpected action: ' + action.type);
        }

    }

}

// App
function AppFunction() {

    // Reducer
    const [state, dispatch] = useReducer(todoReducerFunction, initialState);
    
    // State
    const initialState = {
        id: 0,
        inputKeyword: '',
        todos: []
    };

    // Trigger the Focus on the Input
    triggerInputFocus = () => {
        const INPUT = document.querySelector('.todo-container__footer input');
        INPUT.focus();
    }

    // Handle Checkbox change
    handleCheckboxChange = (taskID) => {
        
        let todosCopy = [...this.state.todos];
        let matchingElement = todosCopy.find((element) => element.id === taskID);
        matchingElement.completed = !matchingElement.completed;
        
        dispatch({
            todos: todosCopy
        });

    }

    // Handle Input change
    handleInputChange = (event) => {

        let { value } = event.target;
        
        this.setState({
            inputKeyword: value
        });

    }

    // Handle 'Add new' button
    handleAddNew = () => {

        // Return if the Input Keyword is invalid
        let keyword = this.state.inputKeyword;
        keyword = keyword.trim();

        if (!keyword || keyword === '') return;

        const NEW_TODO = { id: this.state.id, activity: keyword, completed: false };

        this.setState({
            todos: [...this.state.todos, NEW_TODO],
            inputKeyword: ''
        });
        
        this.setState((state) => {

            return ({
                id: state.id + 1
            })

        });

        this.triggerInputFocus();

    }

    // Handle Delete
    handleDelete = (taskID) => {

        let todosCopy = [...this.state.todos];
        let matchingElement = todosCopy.find((element) => element.id === taskID);
        let matchingElementIndex = todosCopy.findIndex((element) => element.id === matchingElement.id);
        
        todosCopy.splice(matchingElementIndex, 1);

        this.setState({
            todos: todosCopy
        });

    }

    // Render
    return (
        
        <div className="todo-container">
            
            <Header />

            <Tasks
                todos={ this.state.todos }
                handleCheckboxChange={ this.handleCheckboxChange }
                handleDelete={ this.handleDelete }
            />

            <Footer
                triggerInputFocus={ this.triggerInputFocus }
                inputKeyword={ this.state.inputKeyword }
                handleInputChange={ this.handleInputChange }
                handleAddNew={ this.handleAddNew }
            />

        </div>
        
    );

}

// Export the App
export default AppFunction;