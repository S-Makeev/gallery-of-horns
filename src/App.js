import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import data from './data/data.json';
import SelectedBeast from './SelectedBeast';
import Form from 'react-bootstrap/Form';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedBeast: '',
      selectedBeastDsc: '',
      sortedData: data,
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

  handleSelect = (event) => {
    let selected = event.target.value;

    if (selected === '1') {
      let newData = data.filter(beast => beast.horns === 1)
      this.setState({
        sortedData: newData,
      })
    }
    else if (selected === '2') {
      let newData = data.filter(beast => beast.horns === 2)
      this.setState({
        sortedData: newData,
      })
    }
    else if (selected === '3') {
      let newData = data.filter(beast => beast.horns === 3)
      this.setState({
        sortedData: newData,
      })
    }
    else if (selected === '4') {
      let newData = data.filter(beast => beast.horns === 100)
      this.setState({
        sortedData: newData,
      })
    }
    else{
      this.setState({
        sortedData: data,
      })


    }
  }
    render() {
      return (
        <>
          <Header />
          <Main
            data={data}
            handleOpenModal={this.handleOpenModal}
            sortedData={this.state.sortedData}
          />
          <SelectedBeast showModal={this.state.showModal} handleCloseModal={this.handleCloseModal} selectedBeast={this.state.selectedBeast} selectedBeastDsc={this.state.selectedBeastDsc} />
          <Form>
            {/* {this.state.sortedData.map((num, idx) =>{
            return 
          })} 
          */}
            <Form.Select name="selected" onChange={this.handleSelect}>
              <option value="All">All</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
              <option value="4">Hundred</option>
            </Form.Select>
          </Form>
          <Footer />
        </>
      )
    }
  }

export default App;
