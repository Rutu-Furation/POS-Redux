import React, { useEffect, useState } from "react";
import "./Signup.css";
import Select from "react-select";
import axios from "axios";
import { callApi } from "../../../components/index";

const Signup = () => {
  const [companies, setCompanies] = useState();
  const [details, setDetails] = useState({});
  const [companyName, setCompanyName] = useState("");
  const [roleName, setRoleName] = useState("");

  const roles = [
    { value: "Super_Admin", label: "Super Admin" },
    { value: "Admin", label: "Admin" },
    { value: "Employee", label: "Employee" },
    { value: "Customer", label: "Customer" },
  ];

  const userCredentials = {
    ...details,
    company_id: companyName,
    role: roleName,
  };

  useEffect(() => {
    const getComapniesList = async () => {
      const res = await callApi("GET", "/company/list");
      const formatted = res.Company.map((opt) => ({
        value: opt._id,
        label: opt.name,
      }));
      setCompanies(formatted);
    };
    getComapniesList();
  }, []);

  //handling inputs
  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  //handling company name change
  const handleCompanyNameChange = (option) => {
    setCompanyName(option.value);
  };

  const handleRoleChange = (option) => {
    setRoleName(option.value);
    console.log(option.value);
  };

  //Submitting Form
  const handleLogin = () => {
    console.log(userCredentials);

    axios
      .post(
        "https://famous-bear-kimono.cyclic.app/setting/user/new",
        userCredentials
      )
      .then((res) => console.log(res.data))
      .catch((err) => alert(err.response.data.message));
  };

  return (
    <>
      <div className="signUpMain">
        <div className="container formContainer justify-content-center">
          <div className="row">
            <div className="col-md-12">
              {/* <h4 className="text-center py-2">POS</h4> */}
              <div className="superAdmin_signup_form">
                <h2 className="text-center mb-3">Signup</h2>
                <div className="innerContainer">
                  <form
                    className="px-3 py-3 superAdmin_Signup_Form"
                    onSubmit={(e) => {
                      e.preventDefault();

                      //on sumbitting form
                      handleLogin();
                    }}
                  >
                    <div className="form-group mb-2">
                      <label htmlFor="fullName">Full Name</label>
                      <input
                        name="full_name"
                        type="text"
                        className="form-control"
                        id="fullName"
                        placeholder="Enter Full Name"
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group mb-2">
                      <label htmlFor="phone">Phone</label>
                      <input
                        name="phone"
                        type="text"
                        className="form-control"
                        id="phone"
                        placeholder="Enter Phone Number"
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group mb-2">
                      <label htmlFor="email">Email</label>
                      <input
                        name="email_address"
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter email"
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group mb-2">
                      <label htmlFor="password">Password</label>
                      <input
                        name="password"
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Enter password"
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group mb-2">
                      <label htmlFor="selectCompany">Select Company</label>
                      <Select
                        // value={}
                        id="selectCompany"
                        onChange={handleCompanyNameChange}
                        isSearchable
                        options={companies}
                      />
                    </div>

                    <div className="form-group mb-2">
                      <label htmlFor="selectRole">Select Role</label>
                      <Select
                        // value={}
                        id="selectRole"
                        onChange={handleRoleChange}
                        isSearchable
                        options={roles}
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary btn-block w-100 mt-3"
                    >
                      Login
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
