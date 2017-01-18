import React from 'react';
import InputGroup from '../forms/input-group';
import Button from '../forms/button';
import Task from '../task-item';

// class TasksContainer extends Component {
//     onChangeStatus(id) {
//         var taskList = globalState.get().data.taskList;
//         taskList.forEach((task) => {
//             if(task.id === id) {
//                 task.done = !task.done;
//             }
//         })
//         globalState.set('data.taskList', taskList);
//     }
//
//     addTask (){
//         var newState = globalState.get();
//
//         if(!newState.state.newTaskTitle){
//             return;
//         }
//
//         newState.data.taskList.push({
//             category: this.props.params.activeCategoryId,
//             id: uuid(),
//             title: newState.state.newTaskTitle,
//             description: '',
//             done: false
//         });
//
//         newState.state.newTaskTitle = '';
//
//         globalState.set(newState);
//     }
//
//     taskFilter(task){
//         return task.category === this.props.params.activeCategoryId &&
//             (task.done ? this.state.state.showDone : true) &&
//             (this.state.state.taskFilterTitle ? task.title.indexOf(this.state.state.taskFilterTitle) !== -1 : true);
//     }
//
//     render() {
//         return (
//             <div>
//                 <div className="heading">
//                     <InputGroup type="text" placeholder="Add item" onChange={setNewTaskTitle} value={newTaskTitle}/>
//                     <Button onClick={addTask}>Add</Button>
//                 </div>
//                 <div>
//                     {collection.filter(this.taskFilter).map((props) => <Task
//                         key={props.id}
//                         {...props}
//                         onChangeStatus={onChangeStatus}
//                     />)}
//                 </div>
//             </div>
//         );
//     }
// }
const TasksContainer = ({params, collection, newTaskTitle, changeInputNewTaskTitle, addTask, toggleTaskStatus}) => (
    <div>
        <div className="heading">
            <InputGroup type="text" placeholder="Add item" onChange={changeInputNewTaskTitle} value={newTaskTitle}/>
            <Button onClick={addTask}>Add</Button>
        </div>
        <div>
            {collection.map((props) => <Task
                key={props.id}
                {...props}
                onChangeStatus={toggleTaskStatus}
            />)}
        </div>
    </div>
);

export default TasksContainer;