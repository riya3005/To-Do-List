import React, { Component } from 'react'
import axios from 'axios'
import Posts from './Posts'
import FullPost from './FullPost'

export class StoredData extends Component {
    state = {
        posts : [],
        selectedId : null
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            const posts = response.data.slice(0,4);
            //console.log(posts);
            this.setState({posts: posts});
        })
    }

    postSelected = (id) => {
        //console.log(id);
        this.setState({
            selectedId : id
        })
    }
    render() {
        const posts = this.state.posts.map(post =>{
            return <li style={{color:'blue'}} key={post.id}><Posts title={post.title} clicked={() => this.postSelected(post.id)} /> </li>
        })
        return (
            <div>
                <h3> ** List of Posts ** </h3>
                <ul>
                    {posts}
                </ul>
                <h3> ** Content **</h3>
                <FullPost id={this.state.selectedId} />
            </div>
        )
    }
}

export default StoredData
