import { useState } from "react";
import Preview from '../../Preview/preview';

function AnsForm() {
  const [formFields, setFormFields] = useState([{ question: "", age: "" }]);

  const handleFormChange = (event, index) => {
    let data = [...formFields];
    data[index][event.target.name] = event.target.value;
    setFormFields(data);
  };

  const submit = e => {
    e.preventDefault();
    console.log(formFields);
  };

  const addFields = () => {
    let object = {
      name: "",
      age: ""
    };

    setFormFields([...formFields, object]);
  };

  const tableRows = formFields.map((form) => {
    return (
      <th>
        {form.name}
      </th>
    );
  });

  return (
    <div className="formdata">
    <Preview data={tableRows}/>
      <form onSubmit={submit}>
        {formFields.map((form, index) => {
          return (
            <div key={index} className="form-data">
              <p>icon</p>
              <input
                name="name"
                onChange={event => handleFormChange(event, index)}
                value={form.name}
              />
              <input
                name="age"
                onChange={event => handleFormChange(event, index)}
                value={form.name}
              />
              <input type="text" />
              <p>icon</p>

            </div>
          );
        })}
      </form>
      <hr />
      <button onClick={addFields}>Add Another</button>
      <button onClick={submit}>Submit</button>
    </div>
  );
}

export default AnsForm;
