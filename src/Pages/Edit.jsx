import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  let navigate = useNavigate();
  const { id } = useParams();

  const [emp, setEmp] = useState({
    empName: "",
    department: "",
    leaveDate: "",
    reason: "",
  });

  const { empName, department, leaveDate, reason } = emp;

  const onInput = (e) => {
    setEmp({ ...emp, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadEmployee();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8081/leave/${id}`, emp);
    navigate("/");
  };

  const loadEmployee = async () => {
    const result = await axios.get(`http://localhost:8081/leave/${id}`);
    setEmp(result.data);
  };
  return (
    <div className=" container mt-5">
      <div className=" row">
        <div className=" col-md-6 offset-md-3 border rounded p-4 shadow">
          <center>
            <h2 className="">Edit Employee Leave Details</h2>
          </center>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className=" mb-3">
              <label for="Name">Employee Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Name"
                name="empName"
                value={empName}
                onChange={(e) => onInput(e)}
              />
            </div>
            <div className=" mb-3">
              <label for="Department">Department</label>
              <select
                className="form-control"
                id=""
                name="department"
                value={department}
                onChange={(e) => onInput(e)}
              >
                <option>Select Employee Department</option>
                <option value="IT">IT</option>
                <option value="BM">BM</option>
                <option value="HR">HR</option>
              </select>
            </div>
            <div className=" mb-3">
              <label for="LeaveDate">Leave Date</label>
              <input
                type="date"
                className="form-control"
                placeholder="Enter Date"
                name="leaveDate"
                value={leaveDate}
                onChange={(e) => onInput(e)}
              />
            </div>
            <div className=" mb-3">
              <label for="Name">Reason</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Valid Reason"
                name="reason"
                value={reason}
                onChange={(e) => onInput(e)}
              />
            </div>
            <button
              type=" submit"
              className="btn btn-outline-success p-2 m-lg-3"
            >
              Submit
            </button>
            <Link to={"/"}>
              <button className=" btn btn-outline-warning p-2">
                Back To Home
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Edit;
