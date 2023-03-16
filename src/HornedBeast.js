import React from "react";
import Card from 'react-bootstrap/Card';

class HornedBeasts extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      Favourites: 0
    }
  }

handleFav = () => {
  this.setState({
    Favourites: this.state.Favourites +1
  })
}

handleImageClick = () =>
{
  this.props.handleOpenModal(this.props.imageUrl, this.props.description) 
}



  render() {
    return (
      <Card style={{ width: '18rem' , margin: '5px' }}>
      <Card.Img onClick={this.handleImageClick} variant="top" src= {this.props.imageUrl} />
      <Card.Body>
        <Card.Title>{this.props.title}</Card.Title>
        <Card.Text>
        {this.props.description}
        <p onClick={this.handleFav} id = "likes">❤️{this.state.Favourites}</p>
        </Card.Text>
      </Card.Body>
    </Card>
    )
  }
}


export default HornedBeasts;