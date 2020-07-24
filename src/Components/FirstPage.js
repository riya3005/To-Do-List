
import "./Layouts/TodoList.css";
import ListTitle from './ListTitle';
import { Route, NavLink, Switch } from 'react-router-dom';

import StoredData from './PostsRelated/StoredData';
import React, { Component } from 'react'

export class FirstPage extends Component {
    state = {
        auth: true
    }
    render() {
        return (
            <div>
                <header className='NavigationBar'>
                    <nav>
                        <ul>
                            <li> <NavLink to="/" exact> Home </NavLink></li>
                            <li> <NavLink to="/list"> Create New List </NavLink></li>
                            <li><NavLink to={{ pathname: "/posts" }}>View Stored Data</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <div>
                    <Switch>
                        <Route path="/" exact render={() => <h1 style={{ textAlign: 'center' }}> WELCOME!</h1>} />
                        <Route path="/list" exact component={ListTitle} />
                        {this.state.auth ? <Route path="/posts" exact component={StoredData} /> : null}
                        <Route render={() => <h2> NOT FOUND</h2>} />
                    </Switch>
                </div>
            </div>
        )
    }
}

export default FirstPage

