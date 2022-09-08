import { useEffect, useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {

  const navigate = useNavigate();
  const [ personList, setPersonList ] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/people")
      .then((res) => {
        console.log(res.data);
        setPersonList(res.data);
      })
      .catch((err) => {
        console.log(err.res);
      });
  },[]);

  return (
    <div>
      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Area</th>
            <th>Level</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {personList.map((onePerson, index) => {
            return (
              <tr key={ index }>
                <td>{ onePerson.name }</td>
                <td>{ onePerson.area }</td>
                <td>{ onePerson.level }</td>
                <td>
                  <div className="btn-group" role="group">
                    <button className="btn btn-link" onClick={ () => navigate(`/person/view/${ onePerson._id }`) }>
                      Details
                    </button>
                    <button className="btn btn-link" onClick={ () => navigate(`/person/edit/${ onePerson._id }`) }>
                      Edit
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );

};

export default Home;