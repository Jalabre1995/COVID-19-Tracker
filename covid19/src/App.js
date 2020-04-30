import React,{useEffects} from 'react';///Whenever the site reloads, thats when the useEffect is going to do something to the page
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
function App() {
  return (
    <div>
      <CardDeck>
  <Card bg ='secondary' text={'white'}className = 'text-center'style= {{margin: '10px'}}>
    <Card.Body>
      <Card.Title>Cases</Card.Title>
      <Card.Text>
       100
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small >Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card bg ='danger' text= {'white'} className = 'text-center' style = {{margin: '10px'}}>
   
    <Card.Body>
      <Card.Title>Deaths</Card.Title>
      <Card.Text>
        0
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small>Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card bg='success' text={'white'}className = 'text-cneter' style= {{margin: '10px'}}>
    <Card.Body>
      <Card.Title>Success</Card.Title>
      <Card.Text>
        99
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small >Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardDeck>
    </div>
  );
}

export default App;
