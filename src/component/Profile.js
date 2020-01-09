import React from 'react'
import {Media, Container } from 'reactstrap';
import axios from 'axios'

class Profile extends React.Component{
    constructor(){
        super()
        this.state = {
            image : {}
        }
    }

    componentDidMount = () => {
        if(this.props.id){
            console.log(this.props.id)
            axios.get(`http://www.splashbase.co/api/v1/images/${this.props.id + 100}`)
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
                    <div>
                        <img src = {this.state.image.url} style = {{height : "100px", width : "100px", borderRadius : "50%", float : "left", display : "bloack", marginRight : "50px"}}  ></img>
                        </div>
                        <div style = {{float : "left", display : "block"}} >
                        <h1>{this.props.name}</h1>
                            <p>{this.props.email}</p>
                        </div>
                        </Container> 
                        <div style = {{clear : "both"}} >

                    </div>
            </div>

        )
    }

}

export default Profile