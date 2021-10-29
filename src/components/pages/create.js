import React, { Component } from 'react';
import NavBar from '../navbar';
import axios from 'axios';

export default class Create extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: "",
            content: "",
            isloading: false,
            error: false

        }
        this.handleOnChange = this.handleOnChange.bind(this)
        this.handleSubmit= this.handleSubmit.bind(this)
        this.handleOnChangeContent = this.handleOnChangeContent.bind(this)
        
    }

    handleOnChange = event => {
       console.log(event.target.value)
        this.setState({ 
           title : event.target.value,   
        });
    
    }
    handleOnChangeContent = event => {
        console.log(event.target.value)
         this.setState({ 
            content : event.target.value,   
         });
     
     }


    handleSubmit(event) {
        event.preventDefault()
        axios({
            method: 'post',
            url: 'https://api-meryp.herokuapp.com/posts',
            data: {
                title: this.state.title,
                content: this.state.content
            }
        })
        .then(response => { 
          console.log('res', response)
          this.setState({ 
            content :"",
            title:""   
         });

        })
        .catch(error => {
            console.log('oops error happened while submiting your quote', error);

            this.setState({
                isloading: false,
                error: true
            })
        })
     }

    render() {
        return (
            <div className="create-quotes-wrapper">
                <NavBar />
                <h1> Create Your own Quotes</h1>
                <form onSubmit={this.handleSubmit}>
                    <input className="input-title"
                        type="text"
                        placeholder="Title"
                        name="title"
                        required
                        value={this.state.title}
                        onChange={this.handleOnChange}

                    />

                    <textarea className="input-content"
                        type="text"
                        placeholder="Type your quote here"
                        name="content"
                        required
                        value={this.state.content}
                        onChange={this.handleOnChangeContent}    
                    />

                    <button className="submit-button" type="submit" >Submit Quote</button>


                </form>
                
            </div>
        );
    }
}