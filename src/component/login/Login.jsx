import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LoginRequest, fetchUser } from "../../redux/action.jsx/action";
import { useDispatch, useSelector } from "react-redux";

const logsuccess = (state) => state.user.loginSucces;
const loguser = (state) => state.user.islogin;

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [errmsg, setErr] = useState("");
  const [msg, setMsg] = useState("");
  const user = useSelector(loguser);
  const success = useSelector(logsuccess);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, []);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [name]: value });
  };

  const handleValid = () => {
    const { email, password} = form;
    let err = {};
    if (email === "") {
      err.email = "Enter Email";
    } else {
      err.email = "";
    }
    if (password === "") {
      err.pwd = "enter  password";
    } else {
      err.pwd = "";
    }
    setErr(err);
    let valid = true;
    Object.values(err).forEach((val) => {
      val.length > 0 && (valid = false);
    });
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (handleValid()) {
      dispatch(LoginRequest(form));
    }
    if (user) {
      setMsg("Try Again");
    }
  };
  return (
    <div className="container" style={{ marginLeft: "100px" }}>
      <h3>Login Form</h3>
      <Form className="form" onSubmit={handleSubmit}>
        {success && <p style={{ color: "green" }}>Logged In successfully</p>}
        <p style={{ color: "red" }}>{msg}</p>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
          <Form.Text className="errForm" style={{ color: "red" }}>
            {errmsg.email}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            autoComplete="on"
          />
          <Form.Text className="errForm" style={{ color: "red" }}>
            {errmsg.pwd}
          </Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
        <div className="mt-3 register-btn">
          Don't have an account? <Link to="/register">register here</Link>
        </div>
      </Form>
    </div>
  );
}

export default Login;
