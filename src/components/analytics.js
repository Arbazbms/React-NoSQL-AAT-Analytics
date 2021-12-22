import {useState, useEffect} from "react"
import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from 'recharts';
import {Badge} from "react-bootstrap"
function Analytics() {

const [male, setMale] = useState(0);
const [female, setFemale] = useState(0);
const [d, setD] = useState(0);
const [da, setDa] = useState(0);



useEffect(() => {
  fetch("http://localhost:6039/analytic3/male")
    .then(res => res.json())
    .then(response => {
      console.log(response)
      setMale(response);
    })
    .catch(error => console.log(error));


    fetch("http://localhost:6039/analytic4/female")
    .then(res => res.json())
    .then(response => {
      console.log(response)
      setFemale(response);
    })
    .catch(error => console.log(error));

    fetch("http://localhost:6039/analytic1")
    .then(res => res.json())
    .then(response => {
      console.log(response)
      setD(response);
    })
    .catch(error => console.log(error));


    fetch("http://localhost:6039/analytic2")
    .then(res => res.json())
    .then(response => {
      console.log(response)
      setDa(response);
    })
    .catch(error => console.log(error));

}, []);


// Sample data
const data = [
  {name: 'Males', patients: male},
  {name: 'Female', patients: female},

];
  
  
return (
<div>
  <h1>Analytics for heart Disease Dataset: </h1>
 <br/>
 <h3>Number of People wit heart Diseases: <Badge bg="primary">{d}</Badge> </h3>
 <br/>
 <h3>Number of People wit heart Diseases with Age between 20 to 50:  <Badge bg="primary">{da}</Badge></h3>
 <br/>
 <h3>Females with heart Disease: <Badge bg="primary">{female}</Badge> </h3>
 <br/>
 <h3>Males with heart Disease:<Badge bg="primary">{male}</Badge></h3>
<BarChart width={400} height={400} data={data}>
    <Bar dataKey="patients" fill="green" />
    <CartesianGrid stroke="#ccc" />
    <XAxis dataKey="name" />
    <YAxis />
  </BarChart>
  </div>
);
}

export default Analytics;
