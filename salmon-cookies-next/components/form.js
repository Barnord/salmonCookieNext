import React, {useState} from 'react';

function Form(props) {

  const [formInput, setFormInput] = useState({});

  const handleChange = (e) => {
    setFormInput({...formInput,[e.target.name]: e.target.value});
  }

  const handleSubmit= (e) => {
    e.preventDefault();
    props.handleSubmit(formInput);
  }

  return(
    <form onSubmit={handleSubmit}>
      <h3>Create Cookie Stand</h3>
      <label>Location
        <input name="location" onChange={handleChange} />
      </label>
      <br />
      <label>Minimum Customers per Hour
        <input name="MinCust" onChange={handleChange} />
      </label>
      <label>Maximum Customers per Hour
        <input name="MaxCust" onChange={handleChange} />
      </label>
      <label>Average Cookies per Sale
        <input name="AvgSale" onChange={handleChange} />
      </label>
      <button type="submit">Create</button>
    </form>
  )
}

export default Form;