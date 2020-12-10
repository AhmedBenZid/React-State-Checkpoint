import React, { Component } from 'react';
import { Button, Card, ListGroup, Spinner } from 'react-bootstrap';

class App extends Component {
  state = {
    Person: {
      fullName: "Ahmed Ben Zid",
      bio: "A Full-Stack JS student",
      imgSrc: "",
      profession: "Student"
    },
    show: false,
    time: 0
  }

  hideComp = () => {
    this.setState({ show: !this.state.show })
    this.setState({ time: 0 })
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({ time: this.state.time + 1 })
    }, 1000);
  }


  render() {
    return (
      <div >{
        (!this.state.show) ? <Button variant="primary" size="lg" block onClick={this.hideComp}>
          Show Profile
      </Button> :
          <div>
            <Button variant="primary" size="lg" block onClick={this.hideComp}>
              Hide Profile
  </Button>
            <Card style={{ margin: 20 }}>
              <ListGroup variant="flush">
                <ListGroup.Item>{this.state.Person.fullName}</ListGroup.Item>
                <ListGroup.Item>{this.state.Person.profession}</ListGroup.Item>
                <ListGroup.Item>{this.state.Person.bio}</ListGroup.Item>
              </ListGroup>
              <Spinner animation="grow" />
              <h4 >{this.state.time}</h4>
            </Card>

          </div>}
      </div>)
  }
}
export default App;