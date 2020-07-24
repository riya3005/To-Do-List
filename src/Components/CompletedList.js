import React from 'react'
import "./Layouts/TodoList.css";

function CompletedList(props) {
    return (
        <div>
            <p> Completed Tasks</p>
            <ul>
                {
                    props.list.length ?
                        props.list.map((completedTask, index) => {
                            return <div className="strikeText" key={index}>
                                <div className="entry">
                                    <input type='checkbox' checked={completedTask.isDone} onChange={(e) => props.checkHandle(e, completedTask.taskName)} id={completedTask.taskName} />
                                    <label htmlFor={completedTask.taskName}>{completedTask.taskName}</label>
                                </div>
                                <div className="marks">

                                    <button className="deleteButton" onClick={(eve) => props.delFunc(completedTask.taskName)}> X </button>
                                </div>
                            </div>
                        }) :
                        <h5 > <i> List is Empty</i></h5>
                }
            </ul>
        </div >
    )
}

export default CompletedList
