import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import data from './data/data.json';
import Modal from 'react-bootstrap/Modal';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      SelectedBeast: '',
      SelectedBeastDsc: ''
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
      SelectedBeast: imageUrl,
      SelectedBeastDsc: description
    })
  }

  render() {
    return (
      <>
        <Header />
        <Main data={data} handleOpenModal={this.handleOpenModal} />
        <Modal show={this.state.showModal} onHide={this.handleCloseModal}>
          <Modal.Header closeButton> <Modal.Title> {this.state.SelectedBeastDsc}</Modal.Title>
          </Modal.Header>
          <img src={this.state.SelectedBeast} alt='' ></img>
        </Modal>
        <Footer />
      </>
    )
  }
}

export default App;
