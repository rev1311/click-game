import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Nav from './Containers/Navbar';
// import Instructions from './components/Instructions';
import Card from './components/Card';

import cards from './cards.json';

import './App.css'


class App extends Component {
  state = {
    score: 0,
    highScore: 0,
    picks: [],
    feedback: 'Click An Image To Play',
    cards
  }
  
  pointCheck = id => {
    
    if (this.state.picks.includes(id)) {
      if (this.state.highScore < this.state.score) {
        this.setState({ 
          highScore: this.state.score
        })
      }
      this.setState({
        score: 0,
        feedback: 'Hmm... No.',
        picks: []
      })
    } else {
      this.setState({
        score: this.state.score + 1,
        feedback: 'Toss a coin to your Witcher...',
        picks: [...this.state.picks, id]
      })
    }
  }

  renderBoard() {
    const cardDeck = [...this.state.cards];

    cardDeck.sort(() => Math.random() - 0.5);

    return (
        cardDeck.map(card => {
          return (
            <Col xs={3} key={card.id}>
              <Card
                id={card.id}
                name={card.name}
                image={card.image}
                handleClick={this.pointCheck}
              />
            </Col>
          )
        })
    )
  }

  render() {
    return (
      <div>
        <Nav
          score={this.state.score}
          highScore={this.state.highScore}
          feedback={this.state.feedback} />
        {/* <Instructions /> */}
        <Container className="cont">
          <Row className="justify-content-sm-center">
            <Col xs={10}>
              <Row noGutters={true}>
                {this.renderBoard()}
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;