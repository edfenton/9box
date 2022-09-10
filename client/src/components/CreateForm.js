import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateForm = () => {

  const navigate = useNavigate();
  const [ name, setName ] = useState("");
  const [ area, setArea ] = useState("");
  const [ level, setLevel ] = useState("");
  const [ potential, setPotential ] = useState("");
  const [ performance, setPerformance ] = useState("");
  const [ errors, setErrors ] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/people", { name, area, level, potential, performance }, { withCredentials: true })
      .then((res) => {
        console.log(res.data);
        navigate("/dashboard");
      })
      .catch((err) => {
        if(err.response.status === 401) {
          navigate("/login");
        }
        console.log(err.response.data.errors);
        setErrors(err.response.data.errors);
      });
  };

  return (
    <div>
      <form className="border p-3" onSubmit={ submitHandler }>
        <div className="row">
          <p className="h2">Add Team Member</p>
        </div>
        <div className="row mb-3 pb-3 border-bottom">
          <div className="col">
            <label className="form-label">Name</label>
            <input 
              className="form-control"
              onChange={ (e) => setName(e.target.value) }
              value={ name }
              name="name"
              type="text"
              placeholder="Enter team member name"
            />
            { errors.name ? <p className="text-danger">{ errors.name.message }</p> : null }
          </div>
          <div className="col">
            <label className="form-label">Area</label>
            <select
              className="form-select"
              aria-label="Default select example"
              onChange={ (e) => setArea(e.target.value) }
              name="area"
              defaultValue="none"
            >
              <option value="none" disabled hidden>Select an Area</option>
              <option value="Architecture">Architecture</option>
              <option value="Business Analysis">Business Analysis</option>
              <option value="Change Management">Change Management</option>
              <option value="Data & Integration">Data & Integration</option>
              <option value="Development">Development</option>
              <option value="DevOps">DevOps</option>
              <option value="Leadership">Leadership</option>
              <option value="Project Management">Project Management</option>
              <option value="Quality Assurance">Quality Assurance</option>
              <option value="Support">Support</option>
              <option value="User Experience">User Experience</option>
            </select>
            { errors.area ? <p className="text-danger">{ errors.area.message }</p> : null }
          </div>
          <div className="col">
          <label className="form-label">Level</label>
            <select
              className="form-select"
              aria-label="Default select example"
              onChange={ (e) => setLevel(e.target.value) }
              name="level"
              defaultValue="none"
            >
              <option value="none" disabled hidden>Select a Level</option>
              <option value="Individual Contributor">Individual Contributor</option>
              <option value="Lead / Supervisor">Lead / Supervisor</option>
              <option value="Manager">Manager</option>
              <option value="Director">Director</option>
              <option value="Executive">Executive</option>
            </select>
            { errors.level ? <p className="text-danger">{ errors.level.message }</p> : null }
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p className="h3">Potential</p>
          </div>
          <div className="col">
            <p className="h3">Performance Over Time</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>How much agility and aspiration this person has to be an e!ective leader in more challenging roles.</p>
            <p>Focus on breadth of roles based on learning agility.</p>
          </div>
          <div className="col">
            <p>How effectively this person has performed over time (not just in the previous year).</p>
            <p>Focus on their ability to consistently delivery results and how they did it over the last several years (2 - 4 years).</p>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <select
              className="form-select"
              aria-label="Default select example"
              onChange={ (e) => setPotential(e.target.value) }
              name="potential"
              defaultValue="none"
            >
              <option value="none" disabled hidden>Select a Potential rating</option>
              <option value="Broad">Broad</option>
              <option value="Versatile">Versatile</option>
              <option value="Specialized">Specialized</option>
            </select>
            { errors.potential ? <p className="text-danger">{ errors.potential.message }</p> : null }
          </div>
          <div className="col">
            <select
              className="form-select"
              aria-label="Default select example"
              onChange={ (e) => setPerformance(e.target.value) }
              name="performance"
              defaultValue="none"
            >
              <option value="none" disabled hidden>Select a Performance Over Time rating</option>
              <option value="Exceptional">Exceptional</option>
              <option value="Consistent">Consistent</option>
              <option value="Inconsistent">Inconsistent</option>
            </select>
            { errors.performance ? <p className="text-danger">{ errors.performance.message }</p> : null }
          </div>
        </div>
        <div className="row mb-3 pb-3 border-bottom">
          <div className="col">
            <p><u>Rating Options</u></p>
            <p><strong>Broad: </strong>Highly learning agile and aspires to be effective in a wide range of leadership roles and significantly more complex situations.</p>
            <p><strong>Versatile: </strong>Agility and aspiration to be effective in some new leadership roles and / or slightly more complex situations.</p>
            <p><strong>Specialized: </strong>Agility and aspiration to be effective in areas and / or leadership roles where they have had prior experience and / or specific expertise.</p>
          </div>
          <div className="col">
            <p><u>Rating Options</u></p>
            <p><strong>Exceptional: </strong>Top performer, delivers outstanding results and role models leadership competencies.</p>
            <p><strong>Consistent: </strong>Delivers what is expected and demonstrates leadership competencies.</p>
            <p><strong>Inconsistent: </strong>Performance is not always up to standard or is not sustained.</p>
          </div>
        </div>
        <div className="row">
          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <button className="btn btn-primary" type="submit"><i className="bi bi-person-plus-fill"></i> Add { name }</button>
          </div>
        </div>
      </form>
      <div className="row p-3">
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button className="btn btn-link" onClick={ () => navigate("/dashboard") }>Back to Dashboard</button>
        </div>
      </div>
    </div>
  );

};

export default CreateForm;