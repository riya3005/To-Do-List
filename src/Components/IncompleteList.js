import React from 'react'
import "./Layouts/TodoList.css";

function IncompleteList(props) {

    return (
        <div className="DisplayList">
            <p> To Do Tasks </p>
            <ul>
                {
                    props.list.length ?
                        props.list.map((task, index) => {
                            let classNameTemp = "starButton"
                            if (task.isImp) {
                                classNameTemp = "starButtonImp"
                            }
                            return <div className="EachTask" key={index}>
                                <div className="entry">
                                    <input className="checkbox" type='checkbox' checked={task.isDone} onChange={(e) => props.checkHandle(e, task.taskName)} id={task.taskName} />
                                    <label htmlFor={task.taskName}>{task.taskName}</label>
                                </div>

                                <div className="marks">
                                    <button className={classNameTemp} onClick={(eve) => props.markImp(task.taskName)}> </button>
                                    <button className="deleteButton" onClick={(eve) => props.delFunc(task.taskName)}> X </button>

                                </div>
                            </div>
                        }) :
                        <h5> <i> List is Empty</i></h5>
                }
            </ul>
        </div>
    )
}

export default IncompleteList
