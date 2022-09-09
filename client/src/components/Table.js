import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

const Table = (props) => {

  const navigate = useNavigate();
  const [ tablePersonList, setTablePersonList ] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/people")
      .then((res) => {
        console.log(res.data);
        setTablePersonList(res.data);
      })
      .catch((err) => {
        console.log(err.res);
      });
  },[]);

  return (
    <div>
      <div className="table-responsive">
        <table className="table table-bordered table-sm">
          <thead>
            <tr className="text-center fw-bold">
              <th scope="col"></th>
              <th scope="col">Specialized</th>
              <th scope="col">Versatile</th>
              <th scope="col">Broad</th>
            </tr>
            <tr>
              <th scope="row" className="text-center"><span className="fw-bold vertical-text">Exceptional</span></th>
              <td className="table-primary align-top">
                4 - High Professional
                <OverlayTrigger
                  delay={{ hide: 450, show: 300 }}
                  overlay={(props) => (
                    <Tooltip {...props}>
                      Consistently produces exceptional results and high performance in a defined area. Knows current job extremely well. Easily adapts to new situations within their functional area. High professionals are very valuable to the organization. May be promotable within functional/technical area.  
                    </Tooltip>
                  )}
                  placement="bottom"
                >
                  <i className="bi bi-question-circle"></i>
                </OverlayTrigger>
                <ul className="list-group-flush">
                  {tablePersonList.filter(name => name.potential === "Specialized" && name.performance === "Exceptional").map((oneTablePerson, index) => {
                    return (
                      <li key={ index } className="list-group-item m-1"><button className="btn btn-outline-dark" onClick={ () => navigate(`/person/view/${ oneTablePerson._id }`) }><i className="bi bi-person-circle"></i> { oneTablePerson.name }</button></li>
                    );
                  })}
                </ul>
              </td>
              <td className="table-warning align-top">
                7 - Versatile Performer
                <OverlayTrigger
                  delay={{ hide: 450, show: 300 }}
                  overlay={(props) => (
                    <Tooltip {...props}>
                      Consistently produces exceptional results and performs at a high level. Is particularly good in one or more areas, businesses, geographies, functions, or specialized skills. Can adapt to new situations and learn new areas. May be promotable in multiple functional areas or general management.
                    </Tooltip>
                  )}
                  placement="bottom"
                >
                  <i className="bi bi-question-circle"></i>
                </OverlayTrigger>
                <ul className="list-group-flush">
                  {tablePersonList.filter(name => name.potential === "Versatile" && name.performance === "Exceptional").map((oneTablePerson, index) => {
                    return (
                      <li key={ index } className="list-group-item m-1"><button className="btn btn-outline-dark" onClick={ () => navigate(`/person/view/${ oneTablePerson._id }`) }><i className="bi bi-person-circle"></i> { oneTablePerson.name }</button></li>
                    );
                  })}
                </ul>
              </td>
              <td className="table-success align-top">
                9 - Star Performer
                <OverlayTrigger
                  delay={{ hide: 450, show: 300 }}
                  overlay={(props) => (
                    <Tooltip {...props}>
                      Performs well in almost every role they take on. Learns quickly. Transfers learning from one area to another. Resourceful. Gets things done within tight deadlines and with limited resources. Able to take on major stretch assignments and just about any situation.  Promotable into new functional areas or general management.
                    </Tooltip>
                  )}
                  placement="bottom"
                >
                  <i className="bi bi-question-circle"></i>
                </OverlayTrigger>
                <ul className="list-group-flush">
                  {tablePersonList.filter(name => name.potential === "Broad" && name.performance === "Exceptional").map((oneTablePerson, index) => {
                    return (
                      <li key={ index } className="list-group-item m-1"><button className="btn btn-outline-dark" onClick={ () => navigate(`/person/view/${ oneTablePerson._id }`) }><i className="bi bi-person-circle"></i> { oneTablePerson.name }</button></li>
                    );
                  })}
                </ul>
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-center"><span className="fw-bold vertical-text">Consistent</span></th>
              <td className="table-primary align-top">
                2 - Solid Professional
                <OverlayTrigger
                  delay={{ hide: 450, show: 300 }}
                  overlay={(props) => (
                    <Tooltip {...props}>
                      Consistently meets and may occasionally exceed expectations. Knows current job well. Adapts to new situations within their functional area. Has narrow career and professional interests.
                    </Tooltip>
                  )}
                  placement="bottom"
                >
                  <i className="bi bi-question-circle"></i>
                </OverlayTrigger>
                <ul className="list-group-flush">
                  {tablePersonList.filter(name => name.potential === "Specialized" && name.performance === "Consistent").map((oneTablePerson, index) => {
                    return (
                      <li key={ index } className="list-group-item m-1"><button className="btn btn-outline-dark" onClick={ () => navigate(`/person/view/${ oneTablePerson._id }`) }><i className="bi bi-person-circle"></i> { oneTablePerson.name }</button></li>
                    );
                  })}
                </ul>
              </td>
              <td className="table-warning align-top">
                5 - Key Performer
                <OverlayTrigger
                  delay={{ hide: 450, show: 300 }}
                  overlay={(props) => (
                    <Tooltip {...props}>
                      Consistently meets and may occasionally exceed expectations. Knows current job well and enhances skills to adjust to near-term changes. Can adapt to new situations and challenges as necessary. Comfortably assumes new roles and performs well in them in time. Promotable vertically or able to move laterally within the organization.
                    </Tooltip>
                  )}
                  placement="bottom"
                >
                  <i className="bi bi-question-circle"></i>
                </OverlayTrigger>
                <ul className="list-group-flush">
                  {tablePersonList.filter(name => name.potential === "Versatile" && name.performance === "Consistent").map((oneTablePerson, index) => {
                    return (
                      <li key={ index } className="list-group-item m-1"><button className="btn btn-outline-dark" onClick={ () => navigate(`/person/view/${ oneTablePerson._id }`) }><i className="bi bi-person-circle"></i> { oneTablePerson.name }</button></li>
                    );
                  })}
                </ul>
              </td>
              <td className="table-warning align-top">
                8 - Future Star
                <OverlayTrigger
                  delay={{ hide: 450, show: 300 }}
                  overlay={(props) => (
                    <Tooltip {...props}>
                      Consistently meets and sometimes exceeds expectations and has the capacity to take on new and different challenges on a consistent basis. Addresses new challenges and issues with ease. Learns quickly when taking on a new assignment. Has the potential to make career changes into different areas.
                    </Tooltip>
                  )}
                  placement="bottom"
                >
                  <i className="bi bi-question-circle"></i>
                </OverlayTrigger>
                <ul className="list-group-flush">
                  {tablePersonList.filter(name => name.potential === "Broad" && name.performance === "Consistent").map((oneTablePerson, index) => {
                    return (
                      <li key={ index } className="list-group-item m-1"><button className="btn btn-outline-dark" onClick={ () => navigate(`/person/view/${ oneTablePerson._id }`) }><i className="bi bi-person-circle"></i> { oneTablePerson.name }</button></li>
                    );
                  })}
                </ul>
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-center"><span className="fw-bold vertical-text">Inconsistent</span></th>
              <td className="table-danger align-top">
                1 - Mismatched Performer
                <OverlayTrigger
                  delay={{ hide: 450, show: 300 }}
                  overlay={(props) => (
                    <Tooltip {...props}>
                      Has not delivered results as expected and does not effectively adapt to new and different situations. Additional action may be needed to address performance.
                    </Tooltip>
                  )}
                  placement="bottom"
                >
                  <i className="bi bi-question-circle"></i>
                </OverlayTrigger>
                <ul className="list-group-flush">
                  {tablePersonList.filter(name => name.potential === "Specialized" && name.performance === "Inconsistent").map((oneTablePerson, index) => {
                    return (
                      <li key={ index } className="list-group-item m-1"><button className="btn btn-outline-dark" onClick={ () => navigate(`/person/view/${ oneTablePerson._id }`) }><i className="bi bi-person-circle"></i> { oneTablePerson.name }</button></li>
                    );
                  })}
                </ul>
              </td>
              <td className="table-danger align-top">
                3 - Inconsistent Performer
                <OverlayTrigger
                  delay={{ hide: 450, show: 300 }}
                  overlay={(props) => (
                    <Tooltip {...props}>
                      Has some potential to perform at a higher level but has not yet fully demonstrated it. Is not yet meeting performance standards applied to others in the organization. May be new to the job or to the company. May be in the wrong job or function.
                    </Tooltip>
                  )}
                  placement="bottom"
                >
                  <i className="bi bi-question-circle"></i>
                </OverlayTrigger>
                <ul className="list-group-flush">
                  {tablePersonList.filter(name => name.potential === "Versatile" && name.performance === "Inconsistent").map((oneTablePerson, index) => {
                    return (
                      <li key={ index } className="list-group-item m-1"><button className="btn btn-outline-dark" onClick={ () => navigate(`/person/view/${ oneTablePerson._id }`) }><i className="bi bi-person-circle"></i> { oneTablePerson.name }</button></li>
                    );
                  })}
                </ul>
              </td>
              <td className="table-warning align-top">
                6 - Emerging Performer
                <OverlayTrigger
                  delay={{ hide: 450, show: 300 }}
                  overlay={(props) => (
                    <Tooltip {...props}>
                      Has the potential to perform well in the future.  Has either not had sufficient time or opportunities to demonstrate what they can do. May not have met standards for performance in one or more significant situations recently, but has the potential to make a strong contribution. May be in the wrong job or a poor fit for the current situation.
                    </Tooltip>
                  )}
                  placement="bottom"
                >
                  <i className="bi bi-question-circle"></i>
                </OverlayTrigger>
                <ul className="list-group-flush">
                  {tablePersonList.filter(name => name.potential === "Broad" && name.performance === "Inconsistent").map((oneTablePerson, index) => {
                    return (
                      <li key={ index } className="list-group-item m-1"><button className="btn btn-outline-dark" onClick={ () => navigate(`/person/view/${ oneTablePerson._id }`) }><i className="bi bi-person-circle"></i> { oneTablePerson.name }</button></li>
                    );
                  })}
                </ul>
              </td>
            </tr>
          </thead>
        </table>
      </div>
      <div className="row">
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button className="btn btn-primary" onClick={ () => navigate("/person/create") }><i className="bi bi-person-plus-fill"></i> Add Team Member</button>
        </div>
      </div>
    </div>
  );

};

export default Table;