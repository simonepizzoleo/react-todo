// Imports
import { Component } from "react";
import './App.css';

// Header
class Footer extends Component {

    componentDidMount() {
        this.props.triggerInputFocus();
    }

    render() {

        return (

            <div className="todo-container__footer">

                <input
                    type="text"
                    placeholder="Write a new activity"
                    value={ this.props.inputKeyword }
                    onInput={ (event) => this.props.handleInputChange(event) }
                    onKeyDown={ (event) => event.key === 'Enter' ? this.props.handleAddNew() : '' }
                />
                
                <button
                    type="button"
                    onClick={ this.props.handleAddNew }
                >Add new</button>

            </div>

        );

    }

}

// Export the Header
export default Footer;