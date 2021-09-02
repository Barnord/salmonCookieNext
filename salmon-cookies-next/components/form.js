import React, {useState} from 'react';

function Form() {
  const handleChange = (e) => {
    e.preventDefault();
    setWords(e.target.value);
  }
  const [words, setWords] = useState('StarterState');
  const [allThings, setAllThings] = useState({});
  return(
    <form>
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