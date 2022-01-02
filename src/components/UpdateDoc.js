import React, { useEffect, useState } from "react";
import Navb from "./navbar";

const UpdateDoc = ({match}) => {

     const [values, setValues] = useState({
          age: 0,
          sex: "",
          maxHR: 0,
          restingBP: 0,
          cholesterol: 0,
          fastingBS: 0,
          restingECG: "",
          exerciseAngina: "",
          st_Slope: "",
          oldpeak: 0,
          heartDisease: 0,
          chestPainType: "",
     });
     const [createdDoc, setCreatedDoc] = useState(false);
      
      const {
          age,
          sex,
          maxHR,
          restingBP,
          cholesterol,
          fastingBS,
          restingECG,
          exerciseAngina,
          st_Slope,
          oldpeak,
          heartDisease,
          chestPainType,
      } = values;

      const getDocument = (docId) => {
          return fetch(`http://localhost:6039/${docId}`,{
               method: 'GET',
          }).then((response) => {
               return response.json();
               // console.log(response.json());
          }).catch((err)=>console.log("Error Occured"+err));
;      }

     const preload = (docId) => {
          getDocument(docId).then((data)=>{
               if(data == null)
               {
                    setValues({...values});
                    console.log("Error in fetching the record to update.!")
               } else {
                    setValues({
                         ...values, 
                         age: data.age,
                         sex: data.sex,
                         maxHR: data.maxHR,
                         restingBP: data.restingBP,
                         cholesterol: data.cholesterol,
                         fastingBS: data.fastingBS,
                         restingECG: data.restingECG,
                         exerciseAngina: data.exerciseAngina,
                         st_Slope: data.st_Slope,
                         oldpeak: data.oldpeak,
                         heartDisease: data.heartDisease,
                         chestPainType: data.chestPainType,
                    });
               }
          })
     } 

     useEffect(()=>{
          preload(match.params.docId);
     },[]);    

    const updateaRecord = (docId, values) => {
        return fetch(`http://localhost:6039/${docId}`, {
            method: "PUT",
            headers: {
               'Content-Type': 'application/json',
               'Accept': 'application/json',
            },
            body: JSON.stringify(values),
       })
            .then((response) => {
                //  console.log(response.json());
                 return response.json();
            })
            .catch((err) => console.log("Error in Adding new Record : " + err));
    }

    const handleChange = (name) => (event) => {
        const value = event.target.value;
        // setValues({ ...values, [name]: event.target.value });
        setValues({...values, [name]: value});
        // formData.set(name, value);
   };

    const onSubmit = (event) => {
        event.preventDefault();
        setValues({...values});
        updateaRecord(match.params.docId, values).then((data) => {
            if (data.error) {
                // setValues({ ...values, error: data.error, createdProduct: "" });
                console.log("Error Occured, Unable to Create a Record.!");
            } else if(data.id) {
                setValues({
                    ...values,
                    id: "",
                    age: "",
                    sex: "",
                    maxHR: "",
                    restingBP: "",
                    cholesterol: "",
                    fastingBS: "",
                    restingECG: "",
                    exerciseAngina: "",
                    st_Slope: "",
                    oldpeak: "",
                    heartDisease: "",
                    chestPainType: "",
                });
                setCreatedDoc(true);
            }
        });
    };

    const successMessage = () => {
     return (
          <div
               className="alert alert-success mt-3"
               style={{ display: createdDoc ? "" : "none" }}
          >
               <h5>Document Updated Successfully.!</h5>
          </div>
     );
};

    const createDocForm = () => (
        <form>
             <div className="form-group">
                  <input
                       onChange={handleChange("age")}
                       type="number"
                       name="age"
                       className="form-control"
                       placeholder="Age"
                       value={age}
                  />
             </div>

             <div className="form-group">
                  <input
                       onChange={handleChange("sex")}
                       name="sex"
                       className="form-control"
                       placeholder="sex"
                       value={sex}
                  />
             </div>


             {/* <div className="form-group">
                  <select
                       onChange={handleChange("sex")}
                       className="form-control"
                       placeholder="sex"
                  >
                       <option>Select</option>
                        <option key="M" value="M"> Male</option>
                        <option key="F" value="F"> Female</option>
                  </select>
             </div> */}

             <div className="form-group">
                  <input
                       onChange={handleChange("maxHR")}
                       name="maxHR"
                       type="number"
                       className="form-control"
                       placeholder="maxHR"
                       value={maxHR}
                  />
             </div>
             
             <div className="form-group">
                  <input
                       onChange={handleChange("restingBP")}
                       name="restingBP"
                       type="number"
                       className="form-control"
                       placeholder="restingBP"
                       value={restingBP}
                  />
             </div>

             <div className="form-group">
                  <input
                       onChange={handleChange("cholesterol")}
                       name="cholesterol"
                       type="number"
                       className="form-control"
                       placeholder="cholesterol"
                       value={cholesterol}
                  />
             </div>

             <div className="form-group">
                  <input
                       onChange={handleChange("fastingBS")}
                       name="fastingBS"
                       type="number"
                       className="form-control"
                       placeholder="fastingBS"
                       value={fastingBS}
                  />
             </div>

             <div className="form-group">
                  <input
                       onChange={handleChange("restingECG")}
                       name="restingECG"
                       className="form-control"
                       placeholder="restingECG"
                       value={restingECG}
                  />
             </div>

             <div className="form-group">
                  <input
                       onChange={handleChange("exerciseAngina")}
                       name="exerciseAngina"
                       className="form-control"
                       placeholder="exerciseAngina"
                       value={exerciseAngina}
                  />
             </div>

             <div className="form-group">
                  <input
                       onChange={handleChange("st_Slope")}
                       name="st_Slope"
                       className="form-control"
                       placeholder="st_Slope"
                       value={st_Slope}
                  />
             </div>

             
             <div className="form-group">
                  <input
                       onChange={handleChange("oldpeak")}
                       name="oldpeak"
                       className="form-control"
                       placeholder="oldpeak"
                       value={oldpeak}
                  />
             </div>

             <div className="form-group">
                  <input
                       onChange={handleChange("heartDisease")}
                       name="heartDisease"
                       type="number"
                       className="form-control"
                       placeholder="heartDisease"
                       value={heartDisease}
                  />
             </div>

             <div className="form-group">
                  <input
                       onChange={handleChange("chestPainType")}
                       name="chestPainType"
                       className="form-control"
                       placeholder="chestPainType"
                       value={chestPainType}
                  />
             </div>

             <button
                  type="submit"
                  onClick={onSubmit}
                  className="btn btn-outline-success mb-4"
             >
                  Update Record
             </button>
        </form>
   );

    return (
        <>
            <Navb/>
            <div className="container createDoc">
                <div className="col-md-8 offset-md-2">
                    <h3 className="totalRecords1">Update the Record</h3>
                    {successMessage()}
                    {createDocForm()}
                    <p>
                        Age: {age}, sex: {sex}, maxHR: {maxHR},  restingBP :{restingBP}, cholesterol: {cholesterol},fastingBS: {fastingBS}, restingECG: {restingECG}, exerciseAngina: {exerciseAngina}, st_Slope
                        :{st_Slope}, oldPeak: {oldpeak}, heartDisease: {heartDisease}, chestPainType: {chestPainType} 
                    </p>
                </div>
            </div>
        </>
    )
}

export default UpdateDoc;