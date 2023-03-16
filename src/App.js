import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import data from './data/data.json';
import SelectedBeast from './SelectedBeast';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedBeast: '',
      selectedBeastDsc: ''
    }
  }

  //NEED A METHOD TO CLOSE MODAL

  handleCloseModal = () => {
    this.setState({
      showModal: false
    })
  }

  handleOpenModal = (imageUrl, description) => {
    this.setState({
      showModal: true,
      selectedBeast: imageUrl,
      selectedBeastDsc: description
    })
  }

  render() {
    return (
      <>
        <Header />
        <Main data={data} handleOpenModal={this.handleOpenModal} />
       <SelectedBeast showModal = {this.state.showModal} handleCloseModal={this.handleCloseModal} selectedBeast ={this.state.selectedBeast} selectedBeastDsc ={this.state.selectedBeastDsc}/>
        <Footer />
      </>
    )
  }
}

export default App;
