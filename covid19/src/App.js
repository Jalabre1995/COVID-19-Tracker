import React,{useEffect, useState} from 'react';///Whenever the site reloads, thats when the useEffect is going to do something to the page
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
function App() {
  ///Create a variabel to have the data stored////
  const[ latest, setLatest] = useState('');
  useEffect(() => {
    axios
    .get('https://corona.lmao.ninja/all')
    .then(res =>{
      setLatest(res.data);////Put serLatest as the return resposne and   
  })
  .catch(err => {
    console.log(err)
  });
},[]);
  return (
    <div>
      <CardDeck>
  <Card bg ='secondary' text={'white'}className = 'text-center'style= {{margin: '10px'}}>
    <Card.Body>
      <Card.Title>Cases</Card.Title>
      <Card.Text>
       {latest}
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
        {latest}
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
        {latest}
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
