import React, { useContext, useState } from "react";
import "./Login.css";
import { callApi } from "../../../components/index";
import { AuthContext } from "../../../context/AuthContext";

const Login = () => {
  const [credentials, setCredentials] = useState();

  const { login } = useContext(AuthContext);

  const handleDetails = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    console.log(credentials);

    const res = await callApi("POST", "/user/login", credentials);
    console.log(res.user);
    login(res.user);
  };

  return (
    <>
      <div className="loginMain">
        <div className="container formContainer justify-content-center">
          <div className="row">
            <div className="col-md-12">
              <h4 className="text-center py-3">POS</h4>
              <div className="login-form">
                <h2 className="text-center mb-4">Login</h2>
                <div className="innerContainer">
                  <form
                    className="px-3 py-3 loginForm"
                    onSubmit={(e) => {
                      e.preventDefault();

                      handleLogin();
                    }}
                  >
                    <div className="form-group mb-3">
                      <label htmlFor="email">Email</label>
                      <input
                        name="email_address"
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter email"
                        onChange={handleDetails}
                      />
                    </div>

                    <div className="form-group mb-3">
                      <label htmlFor="password">Password</label>
                      <input
                        name="password"
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Enter password"
                        onChange={handleDetails}
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
              <div className="my-2">
                <p
                  className="text-center text forgot"
                  style={{ fontSize: "18px" }}
                >
                  Forgot Password? Reset Password
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
