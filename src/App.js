import React, {Component} from 'react';
import Checkbox from './components/forms/checkbox';
import InputGroup from './components/forms/input-group';
import ProgressBar from './components/progress-bar';
import './App.css';
import globalState from './state';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = globalState.get();

        this.setState = this.setState.bind(this);
        this.filterShowDone = this.filterShowDone.bind(this);
        this.filterSearch = this.filterSearch.bind(this);
        this.onFilterSearchReset = this.onFilterSearchReset.bind(this);
    }

    componentDidMount(){
        globalState.onChange(this.setState);
    }

    componentWillUnmount(){
        globalState.offChange(this.setState);
    }

    filterShowDone(e){
        globalState.set('state.filterShowDone', e.target.checked);
    }

    filterSearch(e){
        globalState.set('state.filterSearch', e.target.value);
    }

    onFilterSearchReset (){
        globalState.set('state.filterSearch', '');
    }

    render() {
        return (
            <div className="App">
                <div className="header cf">
                    <h1 className="left">To-Do List</h1>

                    <div className="search-bar right">
                        <Checkbox
                            checked={this.state.state.filterShowDone}
                            onChange={this.filterShowDone}
                        >Show done</Checkbox>
                        <InputGroup
                            type="text"
                            icon="clear-left"
                            placeholder="Search"
                            value={this.state.state.filterSearch}
                            onChange={this.filterSearch}
                            onReset={this.onFilterSearchReset}
                        />
                    </div>
                </div>

                <ProgressBar value="0.7"/>

                <div className="cf">
                    <div className="left category-bar">
                        {this.props.CategoryContainer}
                    </div>
                    <div className="todo-list right">
                        {this.props.TasksContainer}
                        {this.props.EditTask}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
