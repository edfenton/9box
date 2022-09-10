import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {

  const navigate = useNavigate();
  const [ firstName, setFirstName ] = useState("");
  const [ lastName, setLastName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ confirmPassword, setConfirmPassword ] = useState("");
  const [ errors, setErrors ] = useState([]);

  const submitHandler = async (e) => {

    e.preventDefault();
    const postData = {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    };
    try {
      await axios.post("http://localhost:8000/api/users/register", postData);
      navigate("/login");
    } catch (err) {
      console.log(err.response);
      setErrors(err.response.data.errors);
    }

  };

  return (

    <div className="row">
      <div className="col-6 mx-auto">
        <form className="border p-3 rounded shadow" onSubmit={ submitHandler }>
          <p className="h1 text-primary">Register</p>
          <div>
            <label className="form-label">First Name</label>
            <input
              type="text"
              className="form-control"
              onChange={ (e) => setFirstName(e.target.value) }
              value={ firstName }
              name="firstName"
              placeholder="Enter your first name"
            />
            { errors.firstName ? <p className="text-danger">{ errors.firstName.message }</p> : null }
          </div>
          <div>
            <label className="form-label">Last Name</label>
            <input
              type="text"
              className="form-control"
              onChange={ (e) => setLastName(e.target.value) }
              value={ lastName }
              name="lastName"
              placeholder="Enter your last name"
            />
            { errors.lastName ? <p className="text-danger">{ errors.lastName.message }</p> : null }
          </div>
          <div>
            <label className="form-label">Email</label>
            <input
              type="email"
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
          <div>
            <label className="form-label">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              onChange={ (e) => setConfirmPassword(e.target.value) }
              value={ confirmPassword }
              name="confirmPassword"
              placeholder="Confirm your password"
            />
            { errors.confirmPassword ? <p className="text-danger">{ errors.confirmPassword.message }</p> : null }
          </div>
          <div className="d-grid gap-2 col-12 mx-auto mt-3">
            <button className="btn btn-primary" type="submit"><i className="bi bi-person-badge-fill"></i> Register</button>
          </div>
        </form>
        <div className="d-grid gap-2 col-12 mx-auto mt-3">
            <button className="btn btn-link" onClick={ (e) => navigate("/login") }>Already Registered?</button>
        </div>
      </div>
    </div>

  );

};

export default Register;