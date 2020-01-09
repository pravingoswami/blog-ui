import React from 'react'
import {Container, Button, Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';
import axios from 'axios'

class CardDesign extends React.Component{

    constructor(){
        super()
        this.state = {
            image : {}
        }
    }

    componentDidMount = () => {
        // const id = this.props.id + 1
        axios.get(`http://www.splashbase.co/api/v1/images/${this.props.id}`)
            .then(response => {
                const image = response.data
                this.setState({image})
            })
    }  

    render(){
            return(
                <div>
                    {
                        <Container>
                        <div>
                            {console.log(this.props.image)}
                            <div>
                                <Card style = {{border : '1px solid black'}} >
                                    <CardImg top width="100%" src = {this.state.image.url} alt="Card image cap" />
                                    <CardBody>
                                    <CardTitle><b><h3>{this.props.title}</h3></b></CardTitle>
                                    <CardText>{this.props.body}</CardText>
                                    <Button>Read More</Button>
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

export default CardDesign