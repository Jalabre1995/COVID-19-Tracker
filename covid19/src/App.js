import React,{useEffect, useState} from 'react';///Whenever the site reloads, thats when the useEffect is going to do something to the page
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios'
import Columns from 'react-columns';
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

const countries = results.map((data, i) => {
  return (
    <Card
    key={i}
    bg= 'light'
    text= 'dark'
    className = 'text-center'
    style ={{ margin: '10px'}}
    >
      <Card.Img variant = 'top' src={data.countryInfo.flag}></Card.Img>
      <Card.Body>
        <Card.Title>{data.country}</Card.Title>
        <Card.Text>Cases {data.cases}</Card.Text>
        <Card.Text> Deaths{data.deaths}</Card.Text>
        <Card.Text>Recovered{data.recovered}</Card.Text>
        <Card.Text>Today's Cases{data.todayCases}</Card.Text>
        <Card.Text>Today's Deaths{data.todayDeaths}</Card.Text>
        <Card.Text>Active{data.active}</Card.Text>
        <Card.Text>Critical{data.critical}</Card.Text>
      </Card.Body>
    </Card>
  );
 });
 var queries = [{
   columns: 2,
   query: 'min-width: 500px'
 }, {
   columns: 3,
   query: 'min-width: 1000px'
 }]

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
<Columns queries={queries}>
  {countries}
</Columns>
{countries}
    </div>
  );
}

export default App;
