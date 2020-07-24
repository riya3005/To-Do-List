import React, { Component } from 'react'
import "./Layouts/TodoList.css";
import CompletedList from './CompletedList';
import IncompleteList from './IncompleteList';
import { connect } from 'react-redux'



class ListDisplay extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
        this.titleInputRef = React.createRef()

        //Using redux
        /* this.state = {
            taskList: []
        } */
    }



    clickHandler = (event) => {
        event.preventDefault();
        const taskName = this.inputRef.current.value

        if (taskName) {
            this.props.updateList(taskName)
            this.inputRef.current.value = ''
        }

    }

    /* componentDidUpdate() {
        //console.log(this.state.taskList)
        const ts = this.state.taskList
        //console.log(ts)
        const abc = () => this.props.updateState(ts)
        abc();
    }
    */

    //Implemented these 2 functions using redux
    /*
    checkHandle = (event, taskName) => {
        
        //const updatedTaskList = this.state.taskList.map(task => {

        //using redux
        const updatedTaskList = this.state.taskList.map(task => {
            if (task.taskName === taskName) {
                task.isDone = !task.isDone
            }
            return task
        })

        //console.log(updatedTaskList)
        this.setState({
            taskList: updatedTaskList
        })

    }

    
    
    deleteTasks = (completedTask) => {
        //const newtaskList = this.state.taskList.filter(task => task.taskName !== completedTask)

        //using redux
        const newtaskList = this.state.taskList.filter(task => task.taskName !== completedTask)
        this.setState({
            taskList: newtaskList
        })
        }
        */
    render() {
        //const taskList = this.state.taskList

        //using redux
        const taskList = this.props.tasks
        const incompleteTaskList = taskList.filter(task => task.isDone === false);
        const completeTaskList = taskList.filter(task => task.isDone === true);
        //const tasks = list.length ? list.map((task, index) => <h3 key={index}> {task}</h3>) : null

        return (

            <div className="todoListMain">
                <div className="theList">
                    <IncompleteList list={incompleteTaskList} delFunc={(task) => this.props.delTask(task)} markImp={(task) => this.props.markImp(task)} checkHandle={(e, tsk) => this.props.chkHandle(tsk)} />
                </div>
                <div className="completedList">
                    <CompletedList list={completeTaskList} delFunc={(task) => this.props.delTask(task)} checkHandle={(e, tsk) => this.props.chkHandle(tsk)} />
                </div>
                <form className="header" onSubmit={this.clickHandler}>
                    <button> + </button>
                    <input placeholder="Add a Task" type='text' ref={this.inputRef} />
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: state.taskList
    };
}


const mapDispatchToProps = (dispatch) => {
    return {
        delTask: (comTask) => dispatch({ type: 'DELETE_TASK', completedTask: comTask }),
        chkHandle: (checkedTask) => dispatch({ type: 'CHECK_HANDLE', chkdtsk: checkedTask }),
        updateList: (taskName) => dispatch({ type: 'UPDATE_LIST', taskName }),
        markImp: (impTask) => dispatch({ type: 'IMP_TASK', impTask: impTask })
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListDisplay);
