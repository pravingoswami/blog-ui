import React from 'react'
import {Media, Container } from 'reactstrap';
import axios from 'axios'

class Comment extends React.Component{
    constructor(){
        super()
        this.state = {
            image : {}
        }
    }

    componentDidMount = () => {
        if(this.props.id){
            console.log(this.props.id)
            axios.get(`http://www.splashbase.co/api/v1/images/${this.props.id + 110}`)
            .then(response => {
                const image = response.data
                this.setState({image})
                console.log(image + "lefuiewfhueh.uh")
            })
            
            .catch(err => alert(err))
        }
    }

    render(){
        return(
            <div>
                <Container>
                        <img src = {this.state.image.url} style = {{height : "50px", width : "50px", borderRadius : "50%", float : "left", display : "bloack", marginRight : "50px", border : '1px solid black'}}  ></img>
                        <div style = {{float : "left", display : "block", width : "900px", margin : '0px'}} >
                        <h1>{this.props.name}</h1>
                            <p>{this.props.body}</p>
                        </div>
                        </Container> 
                        <div style = {{clear : ""}} >
                    </div>
            </div>

        )
    }

}

export default Comment