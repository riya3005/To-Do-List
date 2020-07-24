import React from 'react'
import './Layouts/Layout.css'
import { useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {useDispatch } from 'react-redux'



const Layout = (props) => {

    const dispatch = useDispatch()
    const reset = () => dispatch({ type: 'RESET' })
    const [impTaskList, listsOfLists] = useSelector(state => { return [state.impTaskList, state.listsOfLists] })
    const greetings = "Hello !"

    const newListClickHandler = () => {
        props.history.push('/list')
        reset()

    }

        //updateImpTasks();
        
    return (
        <div className="Layout">
            <h2 style={{ color: "purple" }}> <b> {greetings} </b></h2>
            <div>
                <h4>Important Tasks</h4>

                {
                    impTaskList.map((tasks, index) => {
                        return <div key={index}  className="ImpList">
                            <div className="starButtonImp"></div>
                            <div className="ImportantTask"> {tasks.taskName}</div>
                        </div>
                    })}
            </div>
            <div>
                <h4>Lists</h4>
                {
                    listsOfLists.map((list, index) => {
                        return <div key={index}  className="ImpList">
                        <div className="arrowButton"></div>
                        <div key={index} className="ListsTitle"> {list.listTitle}</div>
                        </div>
                    })
                }
            </div>
            <button className="NewListButton" onClick={newListClickHandler}> + New List </button>

        </div>
    )
            }
export default withRouter(Layout);
