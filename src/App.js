import React from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import {
    Navbar,
    Nav,
    NavItem,
    NavLink} from 'reactstrap'

import Home from './Home'
import Users from './Users'
import Posts from './Posts'

import Example from './component/Carousel'

import UserPost from './component/UserPost'
import Post from './component/Post'
import CustomPagination from './component/Pagination'

function App(props){
    return(
        <BrowserRouter>
            <div>
                <Navbar color = "dark" >
                    <Nav>
                        <NavItem>
                        <NavLink><Link to = "/" style = {{color : "white"}} >Home</Link></NavLink>
                        </NavItem>

                        <NavItem>
                        <NavLink><Link to = "/users" style = {{color : "white"}}  >Users</Link></NavLink>
                        </NavItem>

                        <NavItem>
                        <NavLink><Link to = "/posts" style = {{color : "white"}}  >Posts</Link></NavLink>
                        </NavItem> 

                        <NavItem>
                        <NavLink><Link to = "/card" style = {{color : "white"}}  >Temp</Link></NavLink>
                        </NavItem> 
                    </Nav>
                </Navbar>
            </div>

            <Route path = "/" component = {Home} exact = {true} />
            <Route path = "/users" component = {Users} exact = {true} />
            <Route path = "/posts" component = {Posts} exact = {true} />
            <Route path = "/users/:id" component = {UserPost} exact = {true} />
            <Route path = "/posts/:postid" component = {Post} exact = {true} />
            <Route path = "/card" component = {CustomPagination} exact = {true} />

        </BrowserRouter>

    )
}

export default App