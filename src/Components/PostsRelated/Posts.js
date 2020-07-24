import React, { Component } from 'react'

export class Posts extends Component {
    render() {
        return (
            <article className="Posts" onClick={this.props.clicked}>
                <h4> {this.props.title} </h4>
            </article>
        )
    }
}

export default Posts
