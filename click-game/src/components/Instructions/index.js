import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

function Instructions() {
  return (
    <Jumbotron fluid>
      <Container className='text-center'>
        <h1>Instructions</h1>
        <p>
          Click on an image to begin. Attempt to click as many images as possible without clicking the same image twice.
        </p>
      </Container>
    </Jumbotron>
  )
}

export default Instructions;