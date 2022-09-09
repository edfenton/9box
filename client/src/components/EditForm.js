import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditForm = () => {

  const navigate = useNavigate();
  const { id } = useParams();
  const [ name, setName ] = useState("");
  const [ area, setArea ] = useState("");
  const [ level, setLevel ] = useState("");
  const [ potential, setPotential ] = useState("");
  const [ performance, setPerformance ] = useState("");
  const [ strengths, setStrengths ] = useState("");
  const [ opportunities, setOpportunities ] = useState("");
  const [ risk, setRisk ] = useState("");
  const [ ready, setReady ] = useState("");
  const [ errors, setErrors ] = useState([]);
  const [ loaded, setLoaded ] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/people/${ id }`)
      .then((res) => {
        console.log(res.data);
        setName(res.data.name);
        setArea(res.data.area);
        setLevel(res.data.level);
        setPotential(res.data.potential);
        setPerformance(res.data.performance);
        setStrengths(res.data.strengths);
        setOpportunities(res.data.opportunities);
        setRisk(res.data.risk);
        setReady(res.data.ready);
        setLoaded(true);
      })
      .catch((err) => console.log(err));
  },[id]);

  const editHandler = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/people/${ id }` , { name, area, level, potential, performance, strengths, opportunities, risk, ready })
      .then((res) => {
        console.log(res.data);
        navigate(`/person/view/${ id }`);
      })
      .catch((err) => {
        console.log(err.response.data.errors);
        setErrors(err.response.data.errors);
      });
  };

  const deleteHandler = (e) => {
    axios
      .delete(`http://localhost:8000/api/people/${ id }`)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        navigate("/dashboard");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {
        loaded && <>
          <form className="border p-3" onSubmit={ editHandler }>
            <div className="row">
              <p className="h2">Edit { name }</p>
            </div>
            <div className="row mb-3 pb-3 border-bottom">
              <div className="col">
                <label className="form-label">Name</label>
                <input 
                  className="form-control"
                  onChange={ (e) => setName(e.target.value) }
                  value={ name }
                  name={ name }
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
                  name={ area }
                  value={ area }
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
                  name={ level }
                  value={ level }
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
            <div className="row mb-3 pb-3 border-bottom">
              <div className="col">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  onChange={ (e) => setPotential(e.target.value) }
                  name={ potential }
                  value={ potential }
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
                  name={ performance }
                  value={ performance }
                >
                  <option value="none" disabled hidden>Select a Performance Over Time rating</option>
                  <option value="Exceptional">Exceptional</option>
                  <option value="Consistent">Consistent</option>
                  <option value="Inconsistent">Inconsistent</option>
                </select>
                { errors.performance ? <p className="text-danger">{ errors.performance.message }</p> : null }
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p className="h3">Strengths</p>
              </div>
              <div className="col">
                <p className="h3">Development Opportunities</p>
              </div>
            </div>
            <div className="row mb-3 pb-3 border-bottom">
              <div className="col">
                <textarea
                  onChange={ (e) => setStrengths(e.target.value) }
                  className="form-control"
                  name={ strengths }
                  value={ strengths }
                  placeholder="Enter team member strengths"
                ></textarea>
              </div>
              <div className="col">
                <textarea
                  onChange={ (e) => setOpportunities(e.target.value) }
                  className="form-control"
                  name={ opportunities }
                  value={ opportunities }
                  placeholder="Enter team member development opportunities"
                ></textarea>
              </div>
            </div>
            <div className="row">
              <p className="h3">Other Team Member Data</p>
            </div>
            <div className="row mb-3 pb-3 border-bottom">
              <div className="col">
                <label className="form-label">Flight Risk</label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  onChange={ (e) => setRisk(e.target.value) }
                  name={ risk }
                  value={ risk }
                >
                  <option value="Unrated" disabled hidden>Select a Flight Risk rating</option>
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
                { errors.risk ? <p className="text-danger">{ errors.risk.message }</p> : null }
              </div>
              <div className="col">
                <label className="form-label">Ready for Next Role</label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  onChange={ (e) => setReady(e.target.value) }
                  name={ ready }
                  value={ ready }
                >
                  <option value="Unrated" disabled hidden>Select a Readiness level</option>
                  <option value="Now">Now</option>
                  <option value="1 - 3 Years">1 - 3 Years</option>
                  <option value="3 - 5 Years">3 - 5 Years</option>
                  <option value="Well Placed">Well Placed</option>
                </select>
                { errors.ready ? <p className="text-danger">{ errors.ready.message }</p> : null }
              </div>
            </div>
            <div className="row">
              <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button className="btn btn-primary" type="submit"><i className="bi bi-person-lines-fill"></i> Update { name }</button>
              </div>
            </div>
          </form>
          <div className="row p-3">
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <button className="btn btn-link" onClick={ () => navigate("/dashboard") }>Back to Dashboard</button>
              <button className="btn btn-danger" onClick={ deleteHandler }><i className="bi bi-person-x-fill"></i> Delete { name }</button>
            </div>
          </div>
        </>
      }
    </div>
  );

};

export default EditForm;