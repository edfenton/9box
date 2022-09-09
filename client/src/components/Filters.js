import { useState } from "react";

const Filters = (props) => {

  const { peopleParms, setPeopleParms } = props;

  const [ area, setArea ] = useState("");
  const [ level, setLevel] = useState("");
  const [ ready, setReady ] = useState("");
  const [ risk, setRisk ] = useState("");


  const filterHandler = (event) => {
    event.preventDefault();
    setPeopleParms( [
      ...peopleParms,
      {
        area: area,
        level: level,
        ready: ready,
        risk: risk,
      }
      ] );
      setArea("");
      setLevel("");
      setReady("");
      setRisk("");
  }

  return (
    <div>
      <form onSubmit={ filterHandler }>
        <div className="row">
          <div className="col">
            <label className="form-label">Area:</label>
            <input
              className="form-control"
              type="text"
              name="area"
              value={ area }
              onChange={ (e) => setArea(e.target.value) }
            />
          </div>
          <div className="col">
          <label className="form-label">Level:</label>
            <input
              className="form-control"
              type="text"
              name="level"
              value={ level }
              onChange={ (e) => setLevel(e.target.value) }
            />
          </div>
          <div className="col">
          <label className="form-label">Flight Risk:</label>
            <input
              className="form-control"
              type="text"
              name="risk"
              value={ risk }
              onChange={ (e) => setRisk(e.target.value) }
            />
          </div>
          <div className="col">
          <label className="form-label">Ready:</label>
            <input
              className="form-control"
              type="text"
              name="ready"
              value={ ready }
              onChange={ (e) => setReady(e.target.value) }
            />
          </div>
        </div>
        <button>Filter</button>
      </form>
    </div>
  );

};

export default Filters;