import React, { Component } from 'react';
import NavBar from '../navbar';
import axios from 'axios'

export default class Quotes extends Component {
    constructor(props) {
        super(props)

       this.state = {
            posts: []
            
       }
}


// to get the data from the backend
getAllQuotes() {
   axios.get('https://api-meryp.herokuapp.com/posts')
    .then(response => {
        this.setState({
            posts: response.data 
         })  
    })
    .catch(error => {
        console.log('error', error)
    })

}

componentDidMount() {
    this.getAllQuotes()
}

render() {
        return (
           
           <div className="quotes-wrapper-container">
            <NavBar /> 
            <h1>Welcome to life Quotes</h1>
                <div  className="quotes-wrapper">
                    <div className="quotes-wrapper-posts">
                        {this.state.posts.map(post =>(
                        <div className="quotes-wrapper-contents"key={post.id}> 
                            <h2 className="quotes-wrapper__title">{post.title}</h2>
                            <div className="quotes-wrapper__content">{post.content}</div>
                        </div>
                         
                        ))}
                    </div>
                    
                </div>
            </div>
        )
    }
}