import React from 'react'
import {Container, Card, CardImg, CardBody } from 'reactstrap';
import axios from 'axios'

class MainCard extends React.Component{

    constructor(){
        super()
        this.state = {
            image : {}
        }
    }

    componentDidMount = () => {
        console.log(this.props.imageId + "  value")

        if(this.props.imageId === 46){
            this.props.imageId = 101
            axios.get(`http://www.splashbase.co/api/v1/images/${this.props.imageId}`)
            .then(response => {
                const image = response.data
                this.setState({image})
            })
        }
        axios.get(`http://www.splashbase.co/api/v1/images/${this.props.imageId}`)
            .then(response => {
                const image = response.data
                this.setState({image})
            })
    }  

    render(){
            return(
                <div>
                    {
                        <Container fluid>
                                <div>
                                    {console.log(this.props.image)}
                                    <div>
                                        <br></br>
                                        
                                        <Card style = {{ background : '#E9ECEF', textAlign : "center"}} >
                                        <br></br>

                                        <h1 className="display-5" style = {{padding : "20px"}} >{this.props.title}</h1>
                                            {/* <hr className="my-2" /> */}
                                            <br></br>

                                            <CardImg top width="100%" src = {this.state.image.url} alt="Card image cap" />
                                            <CardBody>
                                                
                                                <p style = {{padding : '20px'}} >{this.props.body}</p>
                                                <p className="lead">
                                                </p>
                                            </CardBody>
                                            


                                        </Card>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                </div>
                                </div>
                    </Container>
                    }
                </div>
            )
        }
    }

export default MainCard