import React from 'react'
import axios from 'axios'
import {Jumbotron} from 'reactstrap'
import { ListGroup, ListGroupItem, Container, Form, Label, Input, Button } from 'reactstrap';
import {Link} from 'react-router-dom'
import MainCard from './MainCard'
import Profile from './Profile'
import Comment from './Comment'





class Post extends React.Component {
    constructor(){
        super()
        this.state = {
            user : {},
            post : {},
            comments : [],
            name : '',
            comment : ''
        }
    }


    handleForm = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })


    }

    handleSubmit = (e) => {
        e.preventDefault()
        const id = this.state.comments.length + 1
        const name = this.state.name
        const comment = this.state.comment
        const temp = {
            id : id,
            name : name,
            body : comment
        }
        this.setState(prevState => ({
            comments : [...prevState.comments, temp]
        }))
    }

    componentDidMount = () => {
        const postId = this.props.match.params.postid


    
        axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(response => {
                const post = response.data
                this.setState({post})
                // console.log(post)
                const id = post.userId
                // console.log(id)

                axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
                .then(response => {
                    const user = response.data
                    this.setState({user})
                })
    
                .catch(err => alert(err))
            })

            .catch(err => alert(err))

        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
            .then(response => {
                const comments = response.data
                this.setState({comments})
            })

            .catch(err => alert(err))





        
    }
    
    render(){
        return(
            <div>
                <br></br>
                {/* <h1><b>Name - </b>{this.state.user.name}</h1> */}
                {console.log(`id value  : ${this.state.user.id}`)}

                

                {
                        this.state.user.id ? 
                         <Link to = {`/users/${this.state.user.id}`} > <Profile id = {this.state.user.id} name = {this.state.user.name} email = {this.state.user.email} /> </Link> 
                        
                         : <span></span>
                    }    



                <br></br>
                {/* <Jumbotron>

                    <h1 className="display-5">{this.state.post.title}</h1>
                                <hr className="my-2" />
                    <p>{this.state.post.body}</p>
                                <p className="lead">
                                </p>

                </Jumbotron> */}
                {console.log(`ksefflheoi;ousefouefo;oefife ${this.state.post.id}`)}
                <div>

                    <br></br>

                    {
                        this.state.post.id ?                 <MainCard imageId = {this.state.post.id} body = {this.state.post.body} title = {this.state.post.title} /> : <span></span>
                    }    
                    <br></br>


                </div>

                <br></br>

                {/* <ListGroup flush>
                    {
                        this.state.comments.map(comment => {
                            return(
                                <ListGroupItem> <b> Name - </b> {comment.name}
                                    <br></br>
                                    <b> Comment - </b> {comment.body}
                                </ListGroupItem>
                                
                            )
                        })
                    }
                </ListGroup> */}

                <h1 className="display-4" style = {{textAlign : "center", fontWeight : "600"}} > Comments</h1>  

                <br></br>
                <br></br>
                
                <ListGroup flush>
                    {
                        this.state.comments.map(comment => {
                            return(
                                <div>
                                    <Comment id = {comment.id} body = {comment.body} name = {comment.name} />
                                    <br></br>
                                    <br></br>
                                </div>
                                
                            )
                        })
                    }
                </ListGroup>
                <br></br>
                <br></br>

                <h1 className="display-4" style = {{textAlign : "center", fontWeight : "600"}} > Add Your Comments</h1>  


                <br></br>
                <br></br>
                <Container>
                <Form onSubmit = {this.handleSubmit} >
                    <Label>Name</Label>
                    <Input type="text" name="name" value = {this.state.name} onChange = {this.handleForm} />

                    <Label>Comment</Label>
                    <Input type="textarea" name="comment" value = {this.state.comment} onChange = {this.handleForm} />
                    <br></br>

                    <Button color="primary" type = "submit" >primary</Button>{' '}
                </Form>  
                </Container>
                
                <br></br>
                <br></br>

                <Link to = {`/users/${this.state.user.id}`} ><h3>Written By - {this.state.user.name}</h3></Link> 




            </div>
        )
    }
}

export default Post