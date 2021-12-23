import {useState, useEffect} from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navb from "./navbar";

const ListData = () => {

const [data, setData] = useState([]);

const preload = () => {
  fetch("http://localhost:6039/all")
      .then(res => res.json())
      .then(response => {
        // console.log(response)
        setData(response);
      })
      .catch(error => console.log(error));
}

useEffect(() => {
    preload();  
  }, [data]);
  // console.log("Hello" +data);

  const deleteDoc = (docId) => {
    return fetch(`http://localhost:6039/${docId}`, {
      method: "DELETE",
      headers: {
          Accept: "application/json",
      },
    })
      .then((response) => {
          // return response.json();
      })
      .catch((err) => console.log(err));
  }


  const deleteThisDoc = (docId) => {
      deleteDoc(docId).then((data)=>{
        if(data.err)
        {
          console.log(data.err)
          preload();
        }
        else
          preload();
      })
  }

  return (
    <>
      <Navb />
      <div className="container-fluid table-container">
          <h3 className="totalRecords">Total Records: {data.length}</h3>
          <Table bordered hover className="tableContents">
            {/* <caption>{data.length()}</caption> */}
            <thead>
                <tr>
                  {/* <th>Id</th> */}
                  <th>Age</th>
                  <th>Sex</th>
                  <th>maxHR</th>
                  <th>RestingBP</th>
                  <th>Cholesterol</th>
                  <th>fastingBS</th>
                  <th>restingECG</th>
                  <th>exerciseAngina</th>
                  <th>st_Slope</th>
                  <th>oldpeak</th>
                  <th>heartDisease</th>
                  <th>chestPainType</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
            </thead>
            <tbody>
              {data.map((dataItem, index) => {
                    return(
                <tr key={index} className="text-center">
                    {/* <td>{dataItem.id}</td> */}
                    <td>{dataItem.age}</td>
                    <td>{dataItem.sex}</td>
                    <td>{dataItem.maxHR}</td>
                    <td>{dataItem.restingBP}</td>
                    <td>{dataItem.cholesterol}</td>
                    <td>{dataItem.fastingBS}</td>
                    <td>{dataItem.restingECG}</td>
                    <td>{dataItem.exerciseAngina}</td>
                    <td>{dataItem.st_Slope}</td>
                    <td>{dataItem.oldpeak}</td>
                    <td>{dataItem.heartDisease}</td>
                    <td>{dataItem.chestPainType}</td>
                    <td><Link to={`/updateDoc/${dataItem.id}`}><span className="btn btn-success"><i class="fas fa-edit"></i></span></Link></td>
                    <td><button className="btn btn-danger text-center" onClick={()=>{deleteThisDoc(dataItem.id);}}>Delete</button></td>
                </tr>
              );
              })}
            </tbody>
          </Table>
      </div>
    </>
  );

}

export default ListData;






