import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const View = () => {
  const { id } = useParams();

  const [emp, setEmp] = useState({
    empName: "",
    department: "",
    leaveDate: "",
    reason: "",
  });

  useEffect(() => {
    loadEmployee();
  }, []);

  const loadEmployee = async () => {
    const result = await axios.get(`http://localhost:8081/leave/${id}`);
    setEmp(result.data);
  };

  return (
    <div className=" container">
      <div className=" row">
        <div className=" col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className=" text-center m-4">Employee leave Details</h2>
          <div className=" card">
            <div className=" card-header ">
              <b>Employee ID: {emp.id}</b>
              <ul className=" list-group list-group-flush">
                <li className=" list-group-item">
                  <b> Employee Name : {emp.empName}</b>
                </li>
                <li className=" list-group-item">
                  <b> Employee Department : {emp.department} </b>
                </li>
                <li className=" list-group-item">
                  <b> Leave Date : {emp.leaveDate} </b>
                </li>
                <li className=" list-group-item">
                  <b> Reason : {emp.reason} </b>
                </li>
              </ul>
            </div>
          </div>

          <Link to={"/"}>
            <button className=" btn btn-primary mx-2">Back To Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default View;
