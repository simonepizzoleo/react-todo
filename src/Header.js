// Imports
import { Component } from "react";
import './App.css';

// Header
class Header extends Component {

    heading = '📚 Write your todos and better manage your day';

    render() {

        return <h2 className="todo-container__header"> { this.heading } </h2>;

    }

}

// Export the Header
export default Header;