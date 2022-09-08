import { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const ViewPerson = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  const [ singlePerson, setSinglePerson ] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/people/${ id }`)
      .then((res) => {
        console.log(res.data);
        setSinglePerson(res.data);
      })
      .catch((err) => console.log(err));
  },[id]);

  return (
    <div>
      <div className="border p-3">
        <div className="row">
        <p className="h2">{ singlePerson.name }</p>
        </div>
        <div className="row mb-3 pb-3 border-bottom">
          <div className="col">
            <p><strong>Name:</strong></p>
            <p>{ singlePerson.name }</p>
          </div>
          <div className="col">
            <p><strong>Area:</strong></p>
            <p>{ singlePerson.area }</p>
          </div>
          <div className="col">
            <p><strong>Level:</strong></p>
            <p>{ singlePerson.level }</p>
          </div>
        </div>
        <div className="row mb-3 pb-3 border-bottom">
          <div className="col">
            <p className="h3">Potential:</p>
            <p>{ singlePerson.potential }</p>
          </div>
          <div className="col">
            <p className="h3">Performance Over Time:</p>
            <p>{ singlePerson.performance }</p>
          </div>
        </div>
        <div className="row mb-3 pb-3 border-bottom">
          <div className="col">
            <p className="h3">Strengths:</p>
            { singlePerson.strengths ? <p>{ singlePerson.strengths }</p> : <p>Unrated</p>}
          </div>
          <div className="col">
            <p className="h3">Development Opportunities:</p>
            { singlePerson.opportunities ? <p>{ singlePerson.opportunities }</p> : <p>Unrated</p>}
          </div>
        </div>
        <div className="row">
          <p className="h3">Other Team Member Data</p>
        </div>
        <div className="row">
          <div className="col">
            <p><strong>Flight Risk:</strong></p>
            <p>{ singlePerson.risk }</p>
          </div>
          <div className="col">
            <p><strong>Ready For Next Role:</strong></p>
            <p>{ singlePerson.ready }</p>
          </div>
        </div>
      </div>
      <div className="row p-3">
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button className="btn btn-link" onClick={ () => navigate("/") }>Cancel</button>
          <button className="btn btn-primary" onClick={ () => navigate(`/person/edit/${ singlePerson._id }`) }><i className="bi bi-person-lines-fill"></i> Update { singlePerson.name }</button>
        </div>
      </div>
    </div>
  );

};

export default ViewPerson