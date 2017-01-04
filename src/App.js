import React, {Component} from 'react';
import Checkbox from './components/forms/checkbox';
import InputGroup from './components/forms/input-group';
import Button from './components/forms/button';
import ProgressBar from './components/progress-bar';
import CategoryContainer from './components/category-container';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="header cf">
                    <h1 className="left">To-Do List</h1>

                    <div className="search-bar right">
                        <Checkbox>Show done</Checkbox>
                        <InputGroup type="text" icon="clear-left"/>
                    </div>
                </div>

                <ProgressBar value="0.7"/>

                <div className="cf">
                    <div className="left category-bar">
                        <CategoryContainer/>
                    </div>
                    <div className="todo-list right">
                        <InputGroup type="text" placeholder="Add item"/>
                        <Button>Add</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
