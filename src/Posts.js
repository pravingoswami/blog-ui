import React from 'react'
import axios from 'axios'
import { ListGroup, ListGroupItem } from 'reactstrap';
import {Link} from 'react-router-dom'
import CardDesign from './component/Card'



class Posts extends React.Component{
    constructor(){
        super()
        this.state = {
            posts : []
        }
    }

    componentDidMount = () => {

        axios.get(`https://jsonplaceholder.typicode.com/posts`)
            .then(response => {
                const posts = response.data
                this.setState({posts})
            })

            .catch(err => alert(err))
    }

    render(){
        return(
            <div>
                                <h1 className="display-3" style = {{textAlign : "center", fontWeight : "600"}} > Listing Posts</h1>    
                <br></br>
                <br></br>
                <ListGroup flush>
                    {
                        this.state.posts.map(post => {
                            return(
                                <Link to = {`/posts/${post.id}`} style = {{textDecoration : 'none', color : 'black'}} > <CardDesign id = {post.id} title = {post.title} body = {post.body}  /> </Link>
                            )
                        })
                    }
                </ListGroup>

            </div>
        )
    }
}


export default Posts