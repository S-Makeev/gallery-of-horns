import React from "react";
import HornedBeasts from "./HornedBeast";
import "./Main.css";




class Main extends React.Component{
  render(){
    return (
      <main>
        {this.props.data.map(hornedBeast => (
       <HornedBeasts 
       title = {hornedBeast.title} 
       imageUrl = {hornedBeast.image_url} 
       description = {hornedBeast.description} 
       handleOpenModal = {this.props.handleOpenModal}
       />                 
        ))}
      </main>
    )
  }
}

export default Main;
