import React, {Component} from 'react';
import Header from '../header';
import ProgressBar from '../../components/progress-bar';
import './App.css';
import globalState from '../../state';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = globalState.get();

        this.setState = this.setState.bind(this);
    }

    componentDidMount(){
        globalState.onChange(this.setState);
    }

    componentWillUnmount(){
        globalState.offChange(this.setState);
    }

    getProgress(){
        const taskNumber = this.state.data.taskList.length;
        const completeTaskNumber = this.state.data.taskList.filter((task) => task.done).length;
        return completeTaskNumber/taskNumber;
    }

    render() {
        return (
            <div className="App">

                <Header/>
                <ProgressBar value={this.getProgress()}/>

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
