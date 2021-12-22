import {useState, useEffect} from "react"

function ListData() {

const [data, setData] = useState([]);


useEffect(() => {
    fetch("http://localhost:6039/all")
      .then(res => res.json())
      .then(response => {
        console.log(response)
        setData(response);
      })
      .catch(error => console.log(error));
  
  
  
  }, []);
  
  return (
    <div>

    </div>
  );

}

export default ListData;






