import React from 'react';
import Header from '../../containers/header';
import ProgressBar from '../../components/progress-bar';
import './App.css';

const App = ({completionProgress, CategoryBarContainer, TasksListContainer, EditTask}) => (
    <div className="App">

        <Header/>
        <ProgressBar value={completionProgress}/>

        <div className="cf">
            <div className="left category-bar">
                {CategoryBarContainer}
            </div>
            <div className="todo-list right">
                {TasksListContainer}
                {/*{EditTask}*/}
            </div>
        </div>
    </div>
);

export default App;
