import React, { Component } from 'react'
import axios from 'axios'

export class FullPost extends Component {
    state = {
        loadedPost: null
    }


    // componentDidMount() {
    //     console.log("Mount" + this.props.id);
    //     if (this.props.id) {
    //         axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.id)
    //             .then(response => {
    //                 //console.log(response.data);
    //                 if((this.state.loadedPost === null) || (this.state.loadedPost ==! null && this.state.loadedPost.id ==! this.props.id))
    //                     this.setState({ loadedPost: response.data })
    //             })
    //             .catch(error => {
    //                 console.log(error);
    //             })
    //     }
    // }
    componentDidUpdate() {
        //console.log("Update" +this.props.id);
        if (this.props.id) {
            axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.id)
                .then(response => {
                    //console.log(response.data);
                    if((this.state.loadedPost === null) || (this.state.loadedPost !== null && this.state.loadedPost.id !== this.props.id))
                        this.setState({ loadedPost: response.data })
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }
    render() {
        let post = <div style={{color:'red'}}> <h4> No post is selected! </h4> </div>;
        if (this.props.id) {
            post = (
                <div style={{color:'red'}}> <h3> Loading....</h3> </div>
                );
        }
        if (this.state.loadedPost) {
            //console.log(this.state.loadedPost);
            post = (
                <div>
                    <h1> {this.state.loadedPost.tilte}</h1>
                    <h1> {this.state.loadedPost.body}</h1>
                </div>
            );
        }
        return post;
    }
}

export default FullPost
