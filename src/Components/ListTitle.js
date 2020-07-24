import React, { Component } from 'react'
import "./Layouts/TodoList.css";
import "./Layouts/Layout.css";
import { connect } from 'react-redux';
import ListDisplay from './ListDisplay';

class ListTitle extends Component {
    constructor(props) {
        super(props)
        this.titleRef = React.createRef()

        //Using Redux
        /* this.state = {
            title: '',
            hasTitle: false
            
        } */
    }

    titleChangeHandler = (event) => {
        const title = event.target.value;
        this.props.updateTitle(title)
    }
    // titleClickHandler = (event) => {
    //     event.preventDefault();
    //     const title = this.titleRef.current.value
    //     console.log(`Title: ${title}`)
    //     if(title){
    //         this.props.updateTitle(title)
    //     }

    // }
    clickHandler = () => {
        const impTaskList = this.props.taskList.filter(task => task.isImp === true);
        this.props.updateListOfLists()
        this.props.updateImpTasks(impTaskList)

        this.props.history.push('/')
    }

    render() {
        // const title = this.props.title
        // if(title)
        //     this.titleRef.current.value = title
        return (

            // this.props.hasTitle ?
            <div className="Layout">
                 <button className="backButton" onClick={this.clickHandler}> {"< Lists"} </button>
                <form onSubmit={(event) => event.preventDefault()}>
                    <input className="title" type='text' placeholder="UNTITLED LIST" value={this.props.title} onChange={this.titleChangeHandler} />
                    {/* <button className="titleButton" onClick={this.titleClickHandler}> Update </button> */}
                </form>
                <div style={{width:"100%"}}>
                    <ListDisplay />
                </div>
               
            </div>
            // :
            // <form >  
            //         <input className="title" placeholder='NEW LIST'  type='text' value={this.props.title} onChange={this.titleChangeHandler}/>
            //         <button className="titleButton" onClick={this.titleClickHandler}> Done </button>
            // </form>
        )


    }
}


const mapStateToProps = (state) => {
    return {
        title: state.title,
        hasTitle: state.hasTitle,
        taskList: state.taskList
    };
}


const mapDispatchToProps = (dispatch) => {
    return {
        updateTitle: (title) => dispatch({ type: 'UPDATE_TITLE', title }),
        updateListOfLists: () => dispatch({ type: 'UPDATE LIST OF LISTS' }),
        updateImpTasks : (imptsklist) => dispatch({type: 'UPDATE IMP TASK LIST', imptsklist})

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListTitle)
