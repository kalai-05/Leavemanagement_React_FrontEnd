import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const Home = () => {
  const [emp, setEmp] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadEmployee();
  }, []);

  const loadEmployee = async () => {
    const result = await axios.get("http://localhost:8081/allDetails");
    setEmp(result.data);
  };

  const deleteEmp = async (id) => {
    await axios.delete(`http://localhost:8081/leave/${id}`);
    loadEmployee();
  };

  return (
    <div>
      <table className="table container ">
        <thead>
          <tr>
            <th scope="col">Emp ID</th>
            <th scope="col">Emp Name</th>
            <th scope="col">Emp Department</th>
            <th scope="col">Leave Date</th>
            <th scope="col">Reason</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {emp.map((emps, i) => (
            <tr>
              <th scope="row" key={i}>
                {i + 1}
              </th>
              <td>{emps.empName}</td>
              <td>{emps.department}</td>
              <td>{emps.leaveDate}</td>
              <td>{emps.reason}</td>
              <td>
                <Link to={`/edit/${emps.id}`}>
                  <button
                    type=" Submit"
                    className=" btn btn-outline-info m-lg-2"
                  >
                    Edit
                  </button>
                </Link>
                <Link to={`/view/${emps.id}`}>
                  <button
                    type=" Submit"
                    className=" btn btn-outline-primary m-lg-2"
                  >
                    View
                  </button>
                </Link>
                <button
                  onClick={() => deleteEmp(emps.id)}
                  type=" Submit"
                  className=" btn btn-outline-danger m-lg-2"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
