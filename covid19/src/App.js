import React,{useEffect, useState} from 'react';///Whenever the site reloads, thats when the useEffect is going to do something to the page
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios'
function App() {
  ///Create a variabel to have the data stored////
  const[ latest, setLatest] = useState('');
  const [results, setResults] = useState([]);
  
  useEffect(() => {
    axios
    .all([
     axios.get('https://disease.sh/v2/all'), ////caslling all the cases in the US.
     axios.get('https://disease.sh/v2/countries')////Getting all the countries
    ])
    .then(responseArr =>{
      setLatest(responseArr[0].data);////Put serLatest as the return resposne and   
      setResults(responseArr[1].data)
  })
  .catch(err => {
    console.log(err)
  });
},[]);
const date = new Date(parseInt(latest.updated)); ///Getring the miliseconds from the api///
const lastUpdated = date.toString(); 

//crete a for loop to get an array of the reuslts for all the countries ////

const countries = results.map(data => {
  return (
    <Card
    bg= 'light'
    text= 'dark'
    className = 'text-center'
    style ={{ margin: '10px'}}
    >
      <Card.Body>
        <Card.Title>{date.country}</Card.Title>
        <Card.Text>Cases {data.cases}</Card.Text>
      </Card.Body>
    </Card>
  )
})

  return (
    <div>
      <CardDeck>
  <Card bg ='secondary' text={'white'}className = 'text-center'style= {{margin: '10px'}}>
    <Card.Body>
      <Card.Title>Cases</Card.Title>
      <Card.Text>
       {latest.cases}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small >Last updated {lastUpdated}</small>
    </Card.Footer>
  </Card>
  <Card bg ='danger' text= {'white'} className = 'text-center' style = {{margin: '10px'}}>
   
    <Card.Body>
      <Card.Title>Deaths</Card.Title>
      <Card.Text>
        {latest.deaths}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small>Last updated {lastUpdated} </small>
    </Card.Footer>
  </Card>
  <Card bg='success' text={'white'}className = 'text-cneter' style= {{margin: '10px'}}>
    <Card.Body>
      <Card.Title>Recovered</Card.Title>
      <Card.Text>
        {latest.recovered}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small >Last updated {lastUpdated}</small>
    </Card.Footer>
  </Card>
</CardDeck>
{countries}
    </div>
  );
}

export default App;
