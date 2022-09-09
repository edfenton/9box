import Filters from "../components/Filters";
import Table from "../components/Table";
import { useState } from "react";

const Dashboard = () => {

  const [ peopleParms, setPeopleParms ] = useState([])

  return (
    <div>
      <Table peopleParms={ peopleParms } setPeopleParms={ setPeopleParms }/>
      <Filters peopleParms={ peopleParms } />
    </div>
  );

};

export default Dashboard;