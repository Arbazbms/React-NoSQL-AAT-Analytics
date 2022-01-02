import {useState, useEffect} from "react"
import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from 'recharts';
import {Badge, Container, Row, Col} from "react-bootstrap"
import Navb from "./navbar";
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';

function Analytics() {

const [male, setMale] = useState(0);
const [female, setFemale] = useState(0);
const [d, setD] = useState({
  "one" :0,
  "two" : 0
});
const [da, setDa] = useState(0);
const [old, setOld] = useState(0);



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

    fetch("http://localhost:6039/analytic/old")
    .then(res => res.json())
    .then(response => {
      console.log(response)
      setOld(response);
    })
    .catch(error => console.log(error));

}, []);


// Sample data
const data = [
  {name: 'Males', patients: male},
  {name: 'Female', patients: female},

];

const ageData = [
  {name: '20-40', age: da},
  {name: '40-6  0', age: old},

];

const totalData = [
  {name: 'with', with: d.one},
  {name: 'without', with: d.two},

];
const data01 = [
  { name: 'Wit', value: d.one },
  { name: 'Witout', value: d.two },

];
  
return (
  <>
    <Navb></Navb>
    <div className="container analyticsContainer">
      <h3><u>Analytics for heart Disease Dataset: </u></h3>
    <br/>
    <h5>1. Number of People with heart Diseases: <Badge bg="primary">{d.one}</Badge> </h5>
    <br/>
    <h5>2. Number of People with heart Diseases with Age between 20 to 50:  <Badge bg="primary">{da}</Badge></h5>
    <br/>
    <h5>3. Females with heart Disease: <Badge bg="primary">{female}</Badge> </h5>
    <br/>
    <h5>4. Males with heart Disease:<Badge bg="primary">{male}</Badge></h5><br />

    <Container>

  <Row>

    <Col>
    <BarChart width={400} height={400} data={data} className="text-center container">
        <Bar dataKey="patients" fill="green" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
      </BarChart>
    </Col>
    <Col>
    
    <BarChart width={400} height={400} data={ageData} className="text-center container">
        <Bar dataKey="age" fill="blue" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
      </BarChart>
    </Col>

    <Col>
    <h3> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   Total Patient Dataset</h3>

    <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={true}
            data={data01}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          {/* <Pie dataKey="value" data={data01} cx={5000} cy={200} innerRadius={40} outerRadius={80} fill="#54trtd" /> */}
          <Tooltip />
        </PieChart>
    </Col>
  </Row>
    </Container>
   

  


     
      </div>
  </>
);
}

export default Analytics;
