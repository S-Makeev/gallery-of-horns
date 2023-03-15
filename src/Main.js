import React from "react";
import HornedBeasts from "./HornedBeast";
import data from "./data/data.json";
import "./Main.css";




class Main extends React.Component{
  render(){
    return (
      <main>
        {data.map(hornedBeast => {
          return <HornedBeasts title = {hornedBeast.title} imageUrl = {hornedBeast.image_url} description = {hornedBeast.description} />                 
        })}
      </main>
    )
  }
}

export default Main;
