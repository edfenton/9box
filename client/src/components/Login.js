import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ errors, setErrors ] = useState([]);
  const [ headError, setHeadError ] = useState("");

  const login = event => {
    console.log(email);
    console.log(password);
    event.preventDefault();
    axios.post("http://localhost:8000/api/users/login", {
      email: email,
      password: password,
    },
    {
      withCredentials: true
    })
    .then((res) => {
      console.log(res.cookie);
      console.log(res);
      console.log(res.data, "is res data");
      navigate("/dashboard");
    })
    .catch(err => {
      console.log(err.response);
      console.log(err.response.data.errors);
      setErrors(err.response.data.errors);
      console.log(err.response.data.message);
      setHeadError(err.response.data.message);
    });
  };

  return (

    <div className="row">
      <div className="col-6 mx-auto">
        <form className="border p-3" onSubmit={ login }>
          <p className="h1 text-primary">Login</p>
          <p className="text-danger">{ headError ? headError : "" }</p>
          <div>
            <label className="form-label">Email</label>
            <input
              type="text"
              className="form-control"
              onChange={ (e) => setEmail(e.target.value) }
              value={ email }
              name="email"
              placeholder="Enter your email"
            />
            { errors.email ? <p className="text-danger">{ errors.email.message }</p> : null }
          </div>
          <div>
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              onChange={ (e) => setPassword(e.target.value) }
              value={ password }
              name="password"
              placeholder="Enter your password"
            />
            <div className="form-text">Passwords must be between 8 and 32 characters</div>
            { errors.password ? <p className="text-danger">{ errors.password.message }</p> : null }
          </div>
          <div className="d-grid gap-2 col-12 mx-auto mt-3">
            <button className="btn btn-primary" type="submit"><i className="bi bi-person-badge-fill"></i> Login</button>
          </div>
        </form>
        <div className="d-grid gap-2 col-12 mx-auto mt-3">
            <button className="btn btn-link" onClick={ (e) => navigate("/register") }>Need to Register?</button>
        </div>
      </div>
    </div>

  );

};

export default Login;