import React from 'react';
import { render } from 'react-dom';
import { Jumbotron, Container } from 'reactstrap';
import SearchPage from 'components/SearchPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'icons.css';
import 'index.html';

const App = () => (
  <>
    <Jumbotron fluid>
      <Container>
        <h1>Search for flights</h1>
      </Container>
    </Jumbotron>   
    <SearchPage />
  </>
)

render(<App />, document.querySelector('#app'));
