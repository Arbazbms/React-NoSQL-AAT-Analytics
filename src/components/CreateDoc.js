import React, { useState } from "react";
import Navb from "./navbar";

const CreateDoc = () => {

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

    const createaRecord = (valueItems) => {
        return fetch("http://localhost:6039/create", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: valueItems,
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
        // console.log("Values: " +{values});
        setValues({...values});
        // console.log("Values: " +typeof(values.age));
        // console.log("Values: " +typeof(values.maxHR));
        // console.log("Values: " +typeof(values.restingBP));
        createaRecord(values).then((data) => {
            if (data.error) {
                // setValues({ ...values, error: data.error, createdProduct: "" });
                console.log("Error Occured, Unable to Create a Record.!"+JSON.stringify(data));
            } else if(data.id) {
                setValues({
                    ...values,
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
            }
        });
    };

    const createDocForm = () => (
        <form>
             {/* <div className="form-group">
                  <input
                       onChange={handleChange("id")}
                       name="id"
                       type="number"
                       className="form-control"
                       placeholder="Id "
                       value={id}
                  />
             </div> */}
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
                  Add Record
             </button>
        </form>
   );

    return (
        <>
            <Navb/>
            <div className="container createDoc">
                <div className="col-md-8 offset-md-2">
                    <h3 className="totalRecords1">Add a Record to Dataset</h3>
                    {createDocForm()}
                    <p>
                        Age: {age}, sex: {sex}, maxHR: {maxHR},  restingBP :{restingBP}, cholesterol: {cholesterol},fastingBS: {fastingBS}, restingECG: {restingECG}, exerciseAngina: {exerciseAngina}, st_Slope
                        :{st_Slope}, oldPeak: {oldpeak}, heartDisease: {heartDisease}, chestPainType: {chestPainType} 
                        <br />
                        {/* {JSON.stringify(values)} */}
                        {typeof(values.age)}
                    </p>
                </div>
            </div>
        </>
    )
}

export default CreateDoc;