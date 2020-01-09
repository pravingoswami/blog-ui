import React from 'react'
import { ListGroup, ListGroupItem, Container } from 'reactstrap';
import axios from 'axios'
import {Link} from 'react-router-dom'
import Profile from './component/Profile'



class Users extends React.Component{

    constructor(){
        super()
        this.state = {
            users : []
        }

    }

    componentDidMount = () => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                const users = response.data
                console.log(users)
                this.setState({users})
            })

            .catch(err => alert(err))
    }

    render(){
        return(
            <div>
                <Container>
                <h1 className="display-3" style = {{textAlign : "center", fontWeight : "600"}} > Users List</h1>                  
                <br></br>                 
                <br></br>                 
                <ListGroup flush>
                    {
                        this.state.users.map(user => {
                            return(
                                <ListGroupItem><Link to = {`/users/${user.id}`} > <Profile id = {user.id} name = {user.name} email = {user.email} /> </Link> </ListGroupItem>
                            )
                        })
                    }
                </ListGroup>
                </Container>
            </div>
        )
    }
}

export default Users