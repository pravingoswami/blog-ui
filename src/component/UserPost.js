import React from 'react'
import axios from 'axios'
import { ListGroup, Container} from 'reactstrap';
import {Link} from 'react-router-dom'
import CardDesign from './Card'
import Profile from './Profile'



class UserPost extends React.Component{
    constructor(){
        super()
        this.state = {
            user : {},
            posts : [],
        }
    }

    componentDidMount = () => {
        const id = this.props.match.params.id

        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
            .then(response => {
                const posts = response.data
                this.setState({posts})

                const userid = posts[0].userId
                // console.log(userid)

                axios.get(`https://jsonplaceholder.typicode.com/users/${userid}`)
                .then(response => {
                    const user = response.data
                    this.setState({user})
                })
    
                .catch(err => alert(err))
                
            })

            .catch(err => alert(err))


    // const array = this.state.images


    }

    render(){
        return(
            <div>
                <br></br>
                <Container>
               <div className = "display-5">
                {
                    this.state.user.id ?  <div > <Profile id = {this.state.user.id} name = {this.state.user.name} email = {this.state.user.email} />             </div> : <span></span>
                }
                </div>
                <br></br>
                <br></br>
                <ListGroup flush>
                    {
                        this.state.posts.map(post => {
                            return(
                                // <ListGroupItem> <h3> <Link to = {`/posts/${post.id}`} > {post.title} </Link> </h 3> </
                                        
                                        <Link to = {`/posts/${post.id}`} style = {{textDecoration : 'none', color : 'black'}} > <CardDesign id = {post.id} title = {post.title} body = {post.body}  /> </Link>
                                    )
                                })
                        })
                    }
                </ListGroup>
                </Container>
            </div>
        )
    }
}

export default UserPost











// import React from 'react'
// import axios from 'axios'
// import { ListGroup, ListGroupItem} from 'reactstrap';
// import {Link} from 'react-router-dom'



// class UserPost extends React.Component{
//     constructor(){
//         super()
//         this.state = {
//             user : {},
//             posts : []
//         }
//     }

//     componentDidMount = () => {
//         const id = this.props.match.params.id

//         axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
//             .then(response => {
//                 const posts = response.data
//                 this.setState({posts})

//                 const userid = posts[0].userId
//                 console.log(userid)

//                 axios.get(`https://jsonplaceholder.typicode.com/users/${userid}`)
//                 .then(response => {
//                     const user = response.data
//                     this.setState({user})
//                 })
    
//                 .catch(err => alert(err))
                
//             })

//             .catch(err => alert(err))


//     }

//     render(){
//         return(
//             <div>{console.log(this.state.posts)}
//                 <h1>{this.state.user.name}'s Post</h1>
//                 <br></br>
//                 <ListGroup flush>
//                     {
//                         this.state.posts.map(post => {
//                             return(
//                                 <ListGroupItem> <h3> <Link to = {`/posts/${post.id}`} > {post.title} </Link> </h3> </ListGroupItem>
//                             )
//                         })
//                     }
//                 </ListGroup>

//             </div>
//         )
//     }
// }

// export default UserPost


